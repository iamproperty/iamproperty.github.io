// Optimised Looker visualisation definition, derived from the served one_hub_prod.js.
// The loader installs only updateAsync when the original definition matches its signature.
// Keep rich-cell parsing compatible with the old per-cell innerHTML behaviour,
// but build ordinary text cells and row metadata directly into the encoded payload.
function buildInsightsBodyHTML(data, visibleFields, hiddenFields, locationField, htmlForCell) {
  const escapeAttribute = (value) =>
    String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const hidden = hiddenFields.map((field) => ({
    name: field.name,
    attribute: `data-${(field.label_short || field.name)
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase()}`,
  }));
  const columns = visibleFields.map((field) => ({
    name: field.name,
    opening:
      `<td data-field-type="${escapeAttribute(field.type || 'unknown')}"` +
      (field.value_format_name ? ` data-value-format-name="${escapeAttribute(field.value_format_name)}"` : '') +
      '>',
  }));
  // Looker wraps even ordinary text in drillable-item spans. These exact,
  // balanced structures are safe to parse once with the final table payload.
  // Keep all drill metadata; unexpected/custom HTML still uses the isolated td.
  const text = '[^<]*';
  const nullableText = `(?:${text}|<span class='null'>${text}</span>)`;
  const drillableText = `(?:${nullableText}|<a href='#drillmenu' target='_self'>${nullableText}</a>)`;
  const icon =
    "<span class='drillable-item-icon-wrapper'>&nbsp;<a class='drill-menu-bauble'><span>\\.\\.\\.</span></a></span>";
  const standardLookerCell = new RegExp(
    "^<span class='drillable-item' data-links='[^'<]*' data-context='[^'<]*' data-add-filter-json='[^'<]*'>" +
      "<span class='drillable-item-content'>" +
      drillableText +
      '</span>(?:' +
      icon +
      ')?</span>$'
  );
  const richCache = new Map();
  let scratchCell;
  const stats = { cells: 0, plainCells: 0, richCells: 0, wrapperCells: 0, htmlParses: 0 };
  const rows = data.map((row) => {
    // Preserve setAttribute semantics: duplicate normalised names replace values
    // without changing attribute order, including latitude/longitude overrides.
    const attributes = new Map();
    hidden.forEach((field) => {
      const value = row[field.name]?.value;
      if (value !== null && value !== undefined) {
        attributes.set(field.attribute, typeof value === 'object' ? JSON.stringify(value) : String(value));
      }
    });
    const location = locationField ? row[locationField.name]?.value : null;
    if (location !== null && location !== undefined) {
      const [latitude, longitude] = String(location)
        .split(',')
        .map((coordinate) => coordinate.trim());
      if (latitude) attributes.set('data-latitude', latitude);
      if (longitude) attributes.set('data-longitude', longitude);
    }
    const metadata = Array.from(attributes, ([name, value]) => ` ${name}="${escapeAttribute(value)}"`).join('');
    const cells = columns
      .map((column) => {
        const value = htmlForCell(row[column.name]);
        // innerHTML treats null as empty and stringifies other return values.
        let html = value === null ? '' : String(value);
        stats.cells++;
        if (!html.includes('<')) {
          stats.plainCells++;
        } else {
          stats.richCells++;
          // Rich fragments can contain malformed/table-context markup. Normalise
          // them in an isolated td, as before, to prevent leaking into other cells.
          if (standardLookerCell.test(html)) stats.wrapperCells++;
          else if (richCache.has(html)) html = richCache.get(html);
          else {
            const original = html;
            scratchCell ||= document.createElement('td');
            scratchCell.innerHTML = value;
            html = scratchCell.innerHTML;
            stats.htmlParses++;
            if (richCache.size < 1024) richCache.set(original, html);
          }
        }
        return column.opening + html + '</td>';
      })
      .join('');
    return `<tr${metadata}>${cells}</tr>`;
  });
  return { html: rows.join(''), stats };
}

export const insightsLookerVisualization = {
  id: 'one_hub_prod',
  label: 'TEST One Hub PROD',

  options: {
    sortable_columns_state: {
      type: 'string',
      label: 'Sortable columns state',
      default: '[]',
      section: 'Sortable columns state',
      hidden: true,
    },
  },

  create: function (element, config) {
    const propertiesInsight = document.createElement('iam-app-insights');

    propertiesInsight.id = 'hub-container';
    // Enable the adapter through the supported component API in deployed Insights.
    propertiesInsight.setAttribute('data-backed', '');
    element.appendChild(propertiesInsight);

    // #region Listen for messages from the parent window
    window.addEventListener('message', (event) => {
      if (event.data.type == 'top-window-details') {
        const dispatchedEvent = new CustomEvent('top-window-details', {
          detail: event.data.detail,
        });
        propertiesInsight.dispatchEvent(dispatchedEvent);
      }
    });

    window.addEventListener('message', (event) => {
      if (event.data.type == 'insight-action-completed') {
        const dispatchedEvent = new CustomEvent('insight-action-completed', {
          detail: event.data.detail,
        });
        propertiesInsight.dispatchEvent(dispatchedEvent);
      }
    });

    // #endregion

    propertiesInsight.addEventListener('component-loaded', (event) => {
      window.top.postMessage(
        {
          source: 'vis',
          type: 'component-loaded',
          detail: event.detail,
        },
        '*'
      );
    });

    propertiesInsight.addEventListener('update-height', (event) => {
      window.top.postMessage(
        {
          source: 'vis',
          type: 'update-height',
          detail: event.detail,
        },
        '*'
      );
    });

    propertiesInsight.addEventListener('insight-action', (event) => {
      window.top.postMessage(
        {
          type: 'insight-action',
          detail: event.detail,
        },
        '*'
      );
    });

    propertiesInsight.addEventListener('table-filtered', (event) => {
      window.top.postMessage(
        {
          type: 'table-filtered',
          detail: event.detail,
        },
        '*'
      );
    });
  },

  updateAsync: function (data, element, config, queryResponse, details, done) {
    let actualData = [];
    if (Array.isArray(data)) {
      actualData = data;
    }

    const tableContainer = element.querySelector('#hub-container');

    if (!tableContainer || !queryResponse?.fields) {
      done();
      return;
    }

    const isTrue = (value) => value === true || value === 'true' || value === 1 || value === '1';

    const fields = [...(queryResponse.fields.dimension_like || []), ...(queryResponse.fields.measure_like || [])];

    const visibleFields = fields;
    const allFields = [...(config.query_fields?.dimensions || [])];

    const visibleFieldNames = new Set(visibleFields.map((field) => field.name));

    const hiddenFields = allFields.filter((field) => !visibleFieldNames.has(field.name));

    const locationField = allFields.find((field) => field.type === 'location');

    const getSortOptionKey = (fieldName) => `sort_${fieldName.replace(/[^a-zA-Z0-9_]/g, '__')}`;

    let savedSortableFields = [];

    try {
      const parsedState = JSON.parse(config.sortable_columns_state || '[]');

      if (Array.isArray(parsedState)) {
        savedSortableFields = parsedState;
      }
    } catch (error) {
      savedSortableFields = [];
    }

    const savedSortableSet = new Set(savedSortableFields);

    /*
     * Static options must also be included here because
     * registerOptions replaces the currently registered options.
     */
    const dynamicOptions = {
      sortable_columns_state: {
        type: 'string',
        label: 'Sortable columns state',
        default: '[]',
        section: 'Internal',
        hidden: true,
      },
    };

    visibleFields.forEach((field, index) => {
      const optionKey = getSortOptionKey(field.name);

      dynamicOptions[optionKey] = {
        type: 'boolean',
        label: field.label_short || field.label || field.name,
        default: savedSortableSet.has(field.name),
        section: 'Sortable Columns',
        order: index + 1,
      };
    });

    const optionsSignature = visibleFields
      .map((field) => field.name)
      .sort()
      .join('|');

    if (this._optionsSignature !== optionsSignature) {
      this._optionsSignature = optionsSignature;

      this.trigger('registerOptions', dynamicOptions);

      done();
      return;
    }

    const selectedSortableFields = visibleFields
      .filter((field) => {
        const optionKey = getSortOptionKey(field.name);

        if (Object.prototype.hasOwnProperty.call(config, optionKey)) {
          return isTrue(config[optionKey]);
        }

        return savedSortableSet.has(field.name);
      })
      .map((field) => field.name);

    const selectedSortableSet = new Set(selectedSortableFields);

    const newSortableState = JSON.stringify(selectedSortableFields);

    const currentSortableState = JSON.stringify(
      savedSortableFields.filter((fieldName) => visibleFields.some((field) => field.name === fieldName))
    );

    if (newSortableState !== currentSortableState) {
      this.trigger('updateConfig', [
        {
          sortable_columns_state: newSortableState,
        },
      ]);

      done();
      return;
    }

    const appliedFilters = queryResponse.applied_filters || {};

    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const parseAppliedFilter = (appliedFilter, field) => {
      const expression = String(typeof appliedFilter === 'object' ? (appliedFilter.value ?? '') : appliedFilter).trim();

      let type = 'text';

      if (field.type === 'date_date') {
        type = 'date';
      } else if (field.value_format_name === 'gbp_0') {
        type = 'price';
      }

      const result = (operator, value) => ({
        operator,
        type,
        ...(value !== undefined ? { value } : {}),
      });

      const isNumeric =
        type === 'price' ||
        /^(number|int|integer|float|decimal|sum|average|count|count_distinct)$/.test(field.type || '');

      // Numeric comparisons: >=100, <50, !=10, etc.
      if (isNumeric) {
        const match = expression.match(/^(>=|<=|!=|<>|>|<|=)?\s*(-?\d+(?:\.\d+)?)$/);

        if (!match) return result('Equals', expression);

        const operators = {
          '>=': 'Greater than',
          '<=': 'Less than',
          '>': 'Greater than',
          '<': 'Less than',
          '!=': 'Does not equal',
          '<>': 'Does not equal',
          '=': 'Equals',
        };

        return result(operators[match[1] || '='], match[2]);
      }

      if (type === 'date') {
        // Preserve date semantics:
        // Looker's "after" includes the specified date.
        const match = expression.match(/^(before|after)\s+(\d{4}[-/]\d{2}[-/]\d{2})$/i);

        if (match) {
          return result(match[1].toLowerCase() === 'before' ? 'Less than' : 'greater_than_or_equal', match[2]);
        }

        if (/^\d{4}[-/]\d{2}[-/]\d{2}$/.test(expression)) {
          return result('equals', expression);
        }

        return result('Equals', expression);
      }

      // Handle simple text filters.
      // Leave compound, quoted and escaped expressions untouched.
      if (/[,\^\\"_]/.test(expression)) return result('equals', expression);

      // Leave special Looker expressions untouched.
      if (/^-?(NULL|EMPTY)$/i.test(expression)) return result('equals', expression);

      const negative = expression.startsWith('-');
      const value = negative ? expression.slice(1) : expression;

      const match = value.match(/^(%)?([^%]+?)(%)?$/);

      if (!match) return result('Equals', expression);

      const [, leadingWildcard, text, trailingWildcard] = match;

      if (leadingWildcard && trailingWildcard) {
        return result(negative ? 'Does not contain' : 'Contains', text);
      }

      if (trailingWildcard) {
        return result(negative ? 'not_starts_with' : 'Begins with', text);
      }

      if (leadingWildcard) {
        return result(negative ? 'not_ends_with' : 'Ends with', text);
      }

      return result(negative ? 'Does not equal' : 'Equals', text);
    };

    visibleFields.forEach((field) => {
      const th = document.createElement('th');

      th.setAttribute('data-field-type', field.type || 'unknown');

      if (field.value_format_name) {
        th.setAttribute('data-value-format-name', field.value_format_name);
      }

      th.textContent = field.label_short || field.label || field.name;

      th.setAttribute('data-field', field.name);

      if (selectedSortableSet.has(field.name)) {
        th.setAttribute('data-sort', 'true');
      }

      const appliedFilter = appliedFilters[field.name];

      if (appliedFilter !== undefined && appliedFilter !== null) {
        const expression = String(typeof appliedFilter === 'object' ? (appliedFilter.value ?? '') : appliedFilter);

        // Keep the original expression available, including complex filters.
        th.setAttribute('data-filter-expression', expression);

        const filter = parseAppliedFilter(appliedFilter, field);

        if (filter) {
          th.setAttribute('data-filters', JSON.stringify([filter]));
        }
      }

      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const payloadStarted = performance.now();
    const payload = buildInsightsBodyHTML(actualData, visibleFields, hiddenFields, locationField, (cell) =>
      LookerCharts.Utils.htmlForCell(cell)
    );
    tbody.setAttribute('data-html', payload.html);
    if (globalThis.__iamInsightsProfile) {
      console.info(
        '[iam Insights payload builder]',
        JSON.stringify({
          records: actualData.length,
          ...payload.stats,
          elapsedMs: Math.round(performance.now() - payloadStarted),
          atEpochMs: Math.round(performance.timeOrigin + performance.now()),
        })
      );
    }
    table.appendChild(tbody);
    tableContainer.appendChild(table);

    window.top.postMessage(
      {
        source: 'vis',
        type: 'loaded',
      },
      '*'
    );

    done();
  },
};
