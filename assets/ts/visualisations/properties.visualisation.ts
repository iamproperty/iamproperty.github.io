import iamPagination from '../../js/components/pagination/pagination.component.min.js';
import iamMenu from '../../js/components/menu/menu.component.min.js';

class iamVisProperties extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/visualisations/properties.visualisation.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/visualisations/properties.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */`
    <style>
    ${loadCSS}
    </style>
    <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.css">

    <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous">

    <!-- MapLibre JavaScript -->
    <script src="https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.js"></script>


    <span class="h4"><span class="count"></span>Properties most likely to switch</span>

    <div id="map"></div>
    <div id="bar">

      <label>
        <input type="checkbox" name="selectall" />
        <span>Select all table items</span>
      </label>

      <div id="actions">
        <button id="addTaskForLater" class="btn btn-action" disabled>Add task to contact later</button>
        <button id="createCampaign" class="btn btn-action" disabled>Create print campaign</button>
        <button id="exportData" class="btn btn-action" disabled>Export table data</button>
      </div>
      <div id="filters">

        <button class="btn btn-action " popovertarget="actions2" >Sort by</button>
        <button command="show-modal" commandfor="filtersDialog" class="btn btn-primary">Filter results</button>
      </div>

    </div>
    <dialog id="filtersDialog">
      <span class="h2">Filterby</span>
      <div class="btn__group">

        <button command="close" commandfor="filtersDialog" class="btn btn-secondary">Clear Filters</button>
        <button command="close" commandfor="filtersDialog" class="btn btn-primary">Update results</button>
      </div>
    </dialog>
    <iam-menu id="actions2" class="menu--fill dropdown" popover="auto" role="menu">

      <button data-v-828268fc="" role="menuitem" tabindex="0" autofocus="true"><i data-v-828268fc="" class="fa-solid fa-edit"></i> Edit</button>
      <button data-v-828268fc="" role="menuitem" tabindex="0"><i data-v-828268fc="" class="fa-solid fa-clone"></i> Duplicate</button>
      <hr data-v-828268fc="">
      <button data-v-828268fc="" role="menuitem" tabindex="0"><i data-v-828268fc="" class="fa-solid fa-trash"></i> Delete</button>
    </iam-menu>

    <div id="bulkDisabled"></div>

    <div id="wrapper" class="table__container">
      <div class="table--cta">
        <div class="table__wrapper">
          <slot></slot>
        </div>
      </div>
      <iam-pagination data-page="1" data-total="15" data-show="15" data-minimal=""></iam-pagination>
    </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('VisPropertiesGlobal'))
      document.head.insertAdjacentHTML('beforeend', `<style id="VisPropertiesGlobal">${loadExtraCSS}</style>`);

    this.map = null;
    this.resizeObserver = null;
    this.latlngObserver = null;
    this.resizeFrame = null;
    this.functionsTimeout = null;
    this.selectAllCheckbox = this.shadowRoot?.querySelector('[name="selectall"]');

  }

  scheduleFunctions = (): void => {
    clearTimeout(this.functionsTimeout);

    this.functionsTimeout = setTimeout(() => {
      this.functionsTimeout = null;
      this.createMap();
      this.paginateTable();

      const componentHeight = this.scrollHeight;

      this.dispatchEvent(
        new CustomEvent("component-loaded", {
          detail: {
            height: componentHeight
          }
        })
      );
    }, 100);
  }

  createMap = (): void => {
    const longitude = Number(this.getAttribute("data-longitude")) || Number(this.querySelector('tr[data-longitude]')?.dataset.longitude) || 2.23;
    const latitude = Number(this.getAttribute("data-latitude")) || Number(this.querySelector('tr[data-latitude]')?.dataset.latitude) || 54.31;
    const minZoom = Number(this.getAttribute("data-min-zoom")) || 8;
    const maxZoom = Number(this.getAttribute("data-max-zoom")) || 12;
    const mapContainer = this.shadowRoot.querySelector("#map");
    const bounds = new maplibregl.LngLatBounds();
    const features = [];

    this.querySelectorAll('tr[data-longitude][data-latitude]').forEach((row, index) => {
      const rowLongitude = Number(row.dataset.longitude);
      const rowLatitude = Number(row.dataset.latitude);

      if (!Number.isFinite(rowLongitude) || !Number.isFinite(rowLatitude)) {
        return;
      }

      if (index <= 15) {
        bounds.extend([rowLongitude, rowLatitude]);
      }

      features.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [rowLongitude, rowLatitude]
        },
        properties: {
          propertyId: row.dataset.id || `property-${index}`,
          price: row.querySelector('[data-field="stock_switch.listing_price_clean"] .drillable-item-content')?.textContent?.trim() || "£250,000"
        }
      });
    });

    this.map?.remove();

    this.map = new maplibregl.Map({
      container: mapContainer,
      style: "https://tiles.openfreemap.org/styles/bright",
      center: [longitude, latitude],
      zoom: maxZoom
    });

    this.map.addControl(
      new maplibregl.NavigationControl(),
      "top-left"
    );

    this.map.on("load", () => {
      this.map.addSource("properties", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features
        },
        cluster: true,
        clusterMaxZoom: maxZoom,
        clusterRadius: 50
      });

      this.map.addLayer({
        id: "property-clusters",
        type: "circle",
        source: "properties",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#7f56d9",
            10,
            "#6941c6",
            50,
            "#53389e"
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            18,
            10,
            22,
            50,
            28
          ],
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 2
        }
      });

      this.map.addLayer({
        id: "property-cluster-count",
        type: "symbol",
        source: "properties",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["Open Sans Semibold"],
          "text-size": 12
        },
        paint: {
          "text-color": "#ffffff"
        }
      });

      this.map.addLayer({
        id: "property-points",
        type: "circle",
        source: "properties",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#ea4335",
          "circle-radius": 9,
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 2
        }
      });

      this.map.on("click", "property-clusters", async (event) => {
        const cluster = this.map.queryRenderedFeatures(event.point, {
          layers: ["property-clusters"]
        })[0];

        if (!cluster) {
          return;
        }

        const source = this.map.getSource("properties");
        const zoom = await source.getClusterExpansionZoom(cluster.properties.cluster_id);

        this.map.easeTo({
          center: cluster.geometry.coordinates,
          zoom
        });
      });

      this.map.on("click", "property-points", (event) => {
        const property = event.features?.[0];

        if (!property) {
          return;
        }

        const popupContent = document.createElement("div");

        popupContent.innerHTML = `
          <div class="popup-content">
            <p class="popup-price"></p>
            <button class="popup-action" type="button">
              View property
            </button>
          </div>
        `;

        popupContent.querySelector(".popup-price").textContent = property.properties.price;

        popupContent
          .querySelector(".popup-action")
          .addEventListener("click", () => {
            this.dispatchEvent(
              new CustomEvent("property-selected", {
                bubbles: true,
                composed: true,
                detail: {
                  propertyId: property.properties.propertyId
                }
              })
            );
          });

        new maplibregl.Popup({
          offset: 14,
          closeButton: true,
          closeOnClick: true,
          className: "property-popup",
          maxWidth: "320px"
        })
          .setLngLat(property.geometry.coordinates)
          .setDOMContent(popupContent)
          .addTo(this.map);
      });

      ["property-clusters", "property-points"].forEach((layer) => {
        this.map.on("mouseenter", layer, () => {
          this.map.getCanvas().style.cursor = "pointer";
        });

        this.map.on("mouseleave", layer, () => {
          this.map.getCanvas().style.cursor = "";
        });
      });

      if (!bounds.isEmpty()) {
        this.map.fitBounds(bounds, {
          padding: 60,
          minZoom,
          maxZoom
        });
      }
    });
  }

  paginateTable = (): void => {
    const pagination = this.shadowRoot?.querySelector('iam-pagination');
    const count = this.shadowRoot?.querySelector('.count');

    const page = pagination.getAttribute('data-page');
    const show = pagination.getAttribute('data-show');
    const end = page * show;
    const start = end - show;

    const rows = this.querySelectorAll('tbody tr:not(.notmatched)');

    rows.forEach((row, index) => {
      if (index >= start && index < end) {
        row.classList.add('show');
      } else {
        row.classList.remove('show');
      }
    });

    pagination?.setAttribute('data-total', rows.length);
    count?.textContent = `${rows.length} `;
  }

  addCheckboxes = (): void => {

    const headingRow = this.querySelector('table thead tr');

    headingRow?.insertAdjacentHTML('afterbegin','<th></th>');

    const rows = this.querySelectorAll('tbody tr');

    rows.forEach((row, index) => {
      row?.insertAdjacentHTML('afterbegin',`<td><label><input type="checkbox" name="row${index}" /></label></td>`);
    });

  }

  selectAllInputs = (): void => {

    this.querySelectorAll('tr:not(.notmatched) [type="checkbox"]').forEach(input => input.checked = true);
    this.selectAllCheckbox.setAttribute('data-checked','all');
  }

  unselectAllInputs = (): void => {
    this.querySelectorAll('tr:not(.notmatched) [type="checkbox"]').forEach(input => input.checked = false);
    this.selectAllCheckbox.removeAttribute('data-checked');
  }


  setSelectAllText = (): void => {
    const selectAllText = this.shadowRoot?.querySelector('[name="selectall"] + span');
    const selectedInputs = this.querySelectorAll('tr:not(.notmatched) [type="checkbox"]:checked');

    selectAllText?.textContent = selectedInputs.length == 0 ? `Select all table items` :`${selectedInputs.length} item${selectedInputs.length > 1 ? 's': ''} selected`;
  }

  getSelectedCheckboxes = (): void => {

    const selected = [];

    this.querySelectorAll('[type="checkbox"]:checked').forEach((input) => {
      selected.push(input.getAttribute('name'));
    });

    return selected;
  }

  createCampaign = (): void => {

    const selected = this.getSelectedCheckboxes();

    console.log(selected);
  }

  addTaskForLater = (): void => {

    const selected = this.getSelectedCheckboxes();

    console.log(selected);
  }

  exportData = (): void => {

    const selected = this.getSelectedCheckboxes();

    console.log(selected);
  }

  checkSelectedCheckboxes = (): void => {

    const bulkDisabledNotification = this.shadowRoot?.querySelector('#bulkDisabled');
    const addTaskForLaterBtn = this.shadowRoot?.querySelector('#addTaskForLater');
    const createCampaignBtn = this.shadowRoot?.querySelector('#createCampaign');
    const exportDataBtn = this.shadowRoot?.querySelector('#exportData');


    const selectedInputs = this.querySelectorAll('tr:not(.notmatched) [type="checkbox"]:checked');

    const selectedBranches = Array.from(
      this.querySelectorAll('tr:not(.notmatched):has([type="checkbox"]:checked)')
    ).reduce((branches, row) => {
      const branch = row.querySelector('[data-field="stock_switch.branch"]')?.textContent?.trim();

      if (branch) {
        branches.add(branch);
      }

      return branches;
    }, new Set<string>()).size;

    console.log(selectedBranches);

    if(selectedInputs.length == 0){
      exportDataBtn?.setAttribute('disabled',true);
      addTaskForLaterBtn?.setAttribute('disabled',true);
      createCampaignBtn?.setAttribute('disabled',true);
      bulkDisabledNotification?.innerHTML = ``;
    }
    else if(selectedInputs.length != 0 && selectedBranches > 1){

      bulkDisabledNotification?.innerHTML = `<p>Some bulk actions are disabled</p>`;
      exportDataBtn?.removeAttribute('disabled');
      addTaskForLaterBtn?.setAttribute('disabled',true);
      createCampaignBtn?.setAttribute('disabled',true);
    }
    else {

      bulkDisabledNotification?.innerHTML = ``;
      exportDataBtn?.removeAttribute('disabled');
      addTaskForLaterBtn?.removeAttribute('disabled');
      createCampaignBtn?.removeAttribute('disabled');
    }

  }

  connectedCallback(): void {

    const pagination = this.shadowRoot?.querySelector('iam-pagination');
    const addTaskForLaterBtn = this.shadowRoot?.querySelector('#addTaskForLater');
    const createCampaignBtn = this.shadowRoot?.querySelector('#createCampaign');
    const exportDataBtn = this.shadowRoot?.querySelector('#exportData');

    if (this.map)
      return;

    // #region init - check that lat and long values exist then create the map and setup the table
    if(this.querySelector('tr[data-longitude][data-latitude]')){

      this.paginateTable();
      this.createMap();
      this.addCheckboxes();

      const componentHeight = this.scrollHeight;

      this.dispatchEvent(
        new CustomEvent("component-loaded", {
          detail: {
            height: componentHeight
          }
        })
      );
    }
    // #endregion

    // #region checkboxes
    this.selectAllCheckbox?.addEventListener('change', () => {

      if(this.selectAllCheckbox.hasAttribute('data-checked') && this.selectAllCheckbox.getAttribute('data-checked') != "all" && this.selectAllCheckbox.getAttribute('data-checked') != 0){

        this.selectAllCheckbox.checked = false;
        this.unselectAllInputs();
      }
      else if(this.selectAllCheckbox.checked)
        this.selectAllInputs();
      else
        this.unselectAllInputs();

      this.setSelectAllText();
    });

    this?.addEventListener('change', (event) => {


      this.selectAllCheckbox.indeterminate = this.querySelectorAll('tr:not(.notmatched) [type="checkbox"]:checked').length != 0;
      this.selectAllCheckbox?.setAttribute('data-checked',this.querySelectorAll('tr:not(.notmatched) [type="checkbox"]:checked').length);

      this.setSelectAllText();

      this.checkSelectedCheckboxes();

    });
    // #endregion

    // #region actions
    addTaskForLaterBtn?.addEventListener('click', (event) => {

      this.addTaskForLater();
    });
    createCampaignBtn?.addEventListener('click', (event) => {

      this.createCampaign();
    });
    exportDataBtn?.addEventListener('click', (event) => {

      this.exportData();
    });

    // #endregion

    // #region Filters
    const filtersDialog = this.shadowRoot?.querySelector('#filtersDialog');

    filtersDialog.addEventListener("toggle", (event) => {
      if (event.newState === "open") {
        this.dispatchEvent(new CustomEvent("filters-open"));
      } else {
        this.dispatchEvent(new CustomEvent("filters-closed"));
      }
    });
    // #endregion


    // #region resize observer
    this.resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(this.resizeFrame);

      this.resizeFrame = requestAnimationFrame(() => {
        this.map?.resize();

      });
    });

    this.resizeObserver.observe(this);
    // #endregion

    // #region lng and lat
    this.latlngObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        // Existing element gained or changed a data attribute
        if (mutation.type === 'attributes') {
          this.scheduleFunctions();
        }

        // New child elements were inserted
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof Element)) return;

            // Check the added element itself
            if(node.hasAttribute('data-latitude') && node.hasAttribute('data-longitude')){
              this.scheduleFunctions();
            }

            // Check any matching descendants
            if(node.querySelector('[data-latitude][data-longitude]')){
              this.scheduleFunctions();
            }
          });
        }
      }
    });


    this.latlngObserver.observe(this, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-latitude', 'data-longitude']
    });
    // #endregion

    // #region pagination
    pagination?.addEventListener('update-page', ()=>{

      this.paginateTable();
    });
    // #endregion
  }

  disconnectedCallback(): void {
    cancelAnimationFrame(this.resizeFrame);
    clearTimeout(this.functionsTimeout);
    this.functionsTimeout = null;
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;

    this.map?.remove();
    this.map = null;

    this.latlngObserver.disconnect();
    this.latlngObserver = null;
  }
}


document.addEventListener('DOMContentLoaded', (): void => {

  if (!window.customElements.get(`iam-vis-properties`))
    window.customElements.define(`iam-vis-properties`, iamVisProperties);

  if (!window.customElements.get(`iam-pagination`) && iamPagination)
    window.customElements.define(`iam-pagination`, iamPagination);

  if (!window.customElements.get(`iam-menu`) && iamMenu)
    window.customElements.define(`iam-menu`, iamMenu);

});

