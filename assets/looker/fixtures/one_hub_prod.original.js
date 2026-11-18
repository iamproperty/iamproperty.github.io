looker.plugins.visualizations.add({
  id: "one_hub_prod",
  label: "TEST One Hub PROD",

  options: {
    sortable_columns_state: {
      type: "string",
      label: "Sortable columns state",
      default: "[]",
      section: "Sortable columns state",
      hidden: true
    }
  },

  create: function(element, config) {
    const propertiesInsight = document.createElement("iam-app-insights");

    propertiesInsight.id = "hub-container";
    element.appendChild(propertiesInsight);

    // #region Listen for messages from the parent window
    window.addEventListener("message", event => {

      if (event.data.type == "top-window-details") {

        const dispatchedEvent = new CustomEvent('top-window-details', {
          detail: event.data.detail
        });
        propertiesInsight.dispatchEvent(dispatchedEvent);
      }
    });

    window.addEventListener("message", event => {

      if (event.data.type == "insight-action-completed") {

        const dispatchedEvent = new CustomEvent('insight-action-completed', {
          detail: event.data.detail
        });
        propertiesInsight.dispatchEvent(dispatchedEvent);
      }
    });

    // #endregion

    propertiesInsight.addEventListener("component-loaded", event => {

      window.top.postMessage(
        {
          source: "vis",
          type: "component-loaded",
          detail: event.detail
        },
        "*"
      );
    });

    propertiesInsight.addEventListener("update-height", event => {

      window.top.postMessage(
        {
          source: "vis",
          type: "update-height",
          detail: event.detail
        },
        "*"
      );
    });

    propertiesInsight.addEventListener('insight-action', (event) => {

      window.top.postMessage(
        {
          type: 'insight-action',
          detail: event.detail
        },
        '*'
      );
    });

    propertiesInsight.addEventListener('table-filtered', (event) => {

      window.top.postMessage(
        {
          type: 'table-filtered',
          detail: event.detail
        },
        '*'
      );
    });

  },

  updateAsync: function(
    data,
    element,
    config,
    queryResponse,
    details,
    done
  ) {

    let actualData = [];
    if (Array.isArray(data)) {
      actualData = data;
    }

    const tableContainer =
      element.querySelector("#hub-container");

    if (!tableContainer || !queryResponse?.fields) {
      done();
      return;
    }

    const isTrue = value =>
      value === true ||
      value === "true" ||
      value === 1 ||
      value === "1";

    const fields = [
      ...(queryResponse.fields.dimension_like || []),
      ...(queryResponse.fields.measure_like || [])
    ];

    const visibleFields = fields;
    const allFields = [
      ...(config.query_fields?.dimensions || [])
    ];

    const visibleFieldNames = new Set(
      visibleFields.map(field => field.name)
    );

    const hiddenFields = allFields.filter(
      field => !visibleFieldNames.has(field.name)
    );

    const getDataAttributeName = fieldName =>
      `data-${fieldName
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase()}`;

    const locationField = allFields.find(
      field => field.type === "location"
    );

    const getSortOptionKey = fieldName =>
      `sort_${fieldName.replace(
        /[^a-zA-Z0-9_]/g,
        "__"
      )}`;

    let savedSortableFields = [];

    try {
      const parsedState = JSON.parse(
        config.sortable_columns_state || "[]"
      );

      if (Array.isArray(parsedState)) {
        savedSortableFields = parsedState;
      }
    } catch (error) {
      savedSortableFields = [];
    }

    const savedSortableSet = new Set(
      savedSortableFields
    );

    /*
     * Static options must also be included here because
     * registerOptions replaces the currently registered options.
     */
    const dynamicOptions = {
      sortable_columns_state: {
        type: "string",
        label: "Sortable columns state",
        default: "[]",
        section: "Internal",
        hidden: true
      }
    };

    visibleFields.forEach((field, index) => {
      const optionKey = getSortOptionKey(field.name);

      dynamicOptions[optionKey] = {
        type: "boolean",
        label:
          field.label_short ||
          field.label ||
          field.name,
        default: savedSortableSet.has(field.name),
        section: "Sortable Columns",
        order: index + 1
      };
    });

    const optionsSignature = visibleFields
      .map(field => field.name)
      .sort()
      .join("|");

    if (this._optionsSignature !== optionsSignature) {
      this._optionsSignature = optionsSignature;

      this.trigger(
        "registerOptions",
        dynamicOptions
      );

      done();
      return;
    }

    const selectedSortableFields = visibleFields
      .filter(field => {
        const optionKey =
          getSortOptionKey(field.name);

        if (
          Object.prototype.hasOwnProperty.call(
            config,
            optionKey
          )
        ) {
          return isTrue(config[optionKey]);
        }

        return savedSortableSet.has(field.name);
      })
      .map(field => field.name);

    const selectedSortableSet = new Set(
      selectedSortableFields
    );

    const newSortableState = JSON.stringify(
      selectedSortableFields
    );

    const currentSortableState = JSON.stringify(
      savedSortableFields.filter(fieldName =>
        visibleFields.some(
          field => field.name === fieldName
        )
      )
    );

    if (newSortableState !== currentSortableState) {
      this.trigger(
        "updateConfig",
        [
          {
            sortable_columns_state:
              newSortableState
          }
        ]
      );

      done();
      return;
    }

    const appliedFilters =
      queryResponse.applied_filters || {};

    tableContainer.innerHTML = "";

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const parseAppliedFilter = (appliedFilter, field) => {
      const expression = String(
        typeof appliedFilter === "object"
          ? appliedFilter.value ?? ""
          : appliedFilter
      ).trim();

      let type = "text";

      if (field.type === "date_date") {
        type = "date";
      } else if (field.value_format_name === "gbp_0") {
        type = "price";
      }

      const result = (operator, value) => ({
        operator,
        type,
        ...(value !== undefined ? { value } : {})
      });

      const isNumeric =
        type === "price" ||
        /^(number|int|integer|float|decimal|sum|average|count|count_distinct)$/.test(
          field.type || ""
        );

      // Numeric comparisons: >=100, <50, !=10, etc.
      if (isNumeric) {
        const match = expression.match(
          /^(>=|<=|!=|<>|>|<|=)?\s*(-?\d+(?:\.\d+)?)$/
        );

        if (!match) return result("Equals", expression);

        const operators = {
          ">=": "Greater than",
          "<=": "Less than",
          ">": "Greater than",
          "<": "Less than",
          "!=": "Does not equal",
          "<>": "Does not equal",
          "=": "Equals"
        };

        return result(
          operators[match[1] || "="],
          match[2]
        );
      }

      if (type === "date") {
        // Preserve date semantics:
        // Looker's "after" includes the specified date.
        const match = expression.match(
          /^(before|after)\s+(\d{4}[-/]\d{2}[-/]\d{2})$/i
        );

        if (match) {
          return result(
            match[1].toLowerCase() === "before"
              ? "Less than"
              : "greater_than_or_equal",
            match[2]
          );
        }

        if (/^\d{4}[-/]\d{2}[-/]\d{2}$/.test(expression)) {
          return result("equals", expression);
        }

        return result("Equals", expression);
      }

      // Handle simple text filters.
      // Leave compound, quoted and escaped expressions untouched.
      if (/[,\^\\"_]/.test(expression)) return result("equals", expression);

      // Leave special Looker expressions untouched.
      if (/^-?(NULL|EMPTY)$/i.test(expression)) return result("equals", expression);

      const negative = expression.startsWith("-");
      const value = negative ? expression.slice(1) : expression;

      const match = value.match(/^(%)?([^%]+?)(%)?$/);

      if (!match) return result("Equals", expression);

      const [, leadingWildcard, text, trailingWildcard] = match;

      if (leadingWildcard && trailingWildcard) {
        return result(negative ? "Does not contain" : "Contains", text);
      }

      if (trailingWildcard) {
        return result(negative ? "not_starts_with" : "Begins with", text);
      }

      if (leadingWildcard) {
        return result(negative ? "not_ends_with" : "Ends with", text);
      }

      return result(negative ? "Does not equal" : "Equals", text);
    };

    visibleFields.forEach(field => {
      const th = document.createElement("th");

      th.setAttribute("data-field-type", field.type || "unknown");

      if (field.value_format_name) {
        th.setAttribute("data-value-format-name", field.value_format_name);
      }

      th.textContent =
        field.label_short ||
        field.label ||
        field.name;

      th.setAttribute(
        "data-field",
        field.name
      );

      if (selectedSortableSet.has(field.name)) {
        th.setAttribute(
          "data-sort",
          "true"
        );
      }

      const appliedFilter =
        appliedFilters[field.name];

      if (appliedFilter !== undefined && appliedFilter !== null) {
        const expression = String(
          typeof appliedFilter === "object"
            ? appliedFilter.value ?? ""
            : appliedFilter
        );

        // Keep the original expression available, including complex filters.
        th.setAttribute("data-filter-expression", expression);

        const filter = parseAppliedFilter(appliedFilter, field);

        if (filter) {
          th.setAttribute(
            "data-filters",
            JSON.stringify([filter])
          );
        }
      }

      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    let tbodyHTML = '';

    (actualData).forEach(row => {
      const tr = document.createElement("tr");

      hiddenFields.forEach(field => {
        const cell = row[field.name];

        if (
          cell?.value !== null &&
          cell?.value !== undefined
        ) {
          const attributeName =
            getDataAttributeName(
              field.label_short || field.name
            );

          const attributeValue =
            typeof cell.value === "object"
              ? JSON.stringify(cell.value)
              : String(cell.value);

          tr.setAttribute(
            attributeName,
            attributeValue
          );
        }
      });

      const locationValue = locationField
        ? row[locationField.name]?.value
        : null;

      if (
        locationValue !== null &&
        locationValue !== undefined
      ) {
        const [latitude, longitude] =
          String(locationValue)
            .split(",")
            .map(coordinate => coordinate.trim());

        if (latitude) {
          tr.setAttribute(
            "data-latitude",
            latitude
          );
        }

        if (longitude) {
          tr.setAttribute(
            "data-longitude",
            longitude
          );
        }
      }

      visibleFields.forEach(field => {
        const td = document.createElement("td");
        const cell = row[field.name];

        td.setAttribute("data-field-type", field.type || "unknown");

        if (field.value_format_name) {
          td.setAttribute("data-value-format-name", field.value_format_name);
        }

        td.innerHTML =
          LookerCharts.Utils.htmlForCell(cell);

        tr.appendChild(td);
      });

      tbodyHTML += tr.outerHTML;
    });

    tbody.setAttribute('data-html', tbodyHTML);
    table.appendChild(tbody);
    tableContainer.appendChild(table);

    window.top.postMessage(
      {
        source: "vis",
        type: "loaded"
      },
      "*"
    );

    done();
  }
});
