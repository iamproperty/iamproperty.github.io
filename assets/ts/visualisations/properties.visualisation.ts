//import iamTable from '../../js/components/table/table.component.js';

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

    #map {
      width: 100%;
      height: 500px;
      border-radius: 8px;
    }
    </style>
    <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.css">

    <!-- MapLibre JavaScript -->
    <script src="https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.js"></script>

    <div id="filters">
      <button command="show-modal" commandfor="filtersDialog" class="btn btn-primary">Filter results</button>
    </div>
    <dialog id="filtersDialog">
      <span class="h2">Filterby</span>
      <div class="btn__group">

        <button command="close" commandfor="filtersDialog" class="btn btn-secondary">Clear Filters</button>
        <button command="close" commandfor="filtersDialog" class="btn btn-primary">Update results</button>
      </div>
    </dialog>
    <div id="map"></div>
    <div id="wrapper">
      <slot></slot>
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
    this.createMapTimeout = null;
  }

  scheduleCreateMap = (): void => {
    clearTimeout(this.createMapTimeout);

    this.createMapTimeout = setTimeout(() => {
      this.createMapTimeout = null;
      this.createMap();
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
      "top-right"
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

  connectedCallback(): void {

    if (this.map)
      return;

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


    if(this.querySelector('tr[data-longitude][data-latitude]'))
      this.createMap();

    this.resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(this.resizeFrame);

      this.resizeFrame = requestAnimationFrame(() => {
        this.map?.resize();
      });
    });

    this.resizeObserver.observe(this);

    this.latlngObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        // Existing element gained or changed a data attribute
        if (mutation.type === 'attributes') {
          this.scheduleCreateMap();
        }

        // New child elements were inserted
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof Element)) return;

            // Check the added element itself
            if(node.hasAttribute('data-latitude') && node.hasAttribute('data-longitude')){
              this.scheduleCreateMap();
            }

            // Check any matching descendants
            if(node.querySelector('[data-latitude][data-longitude]')){
              this.scheduleCreateMap();
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
  }

  disconnectedCallback(): void {
    cancelAnimationFrame(this.resizeFrame);
    clearTimeout(this.createMapTimeout);
    this.createMapTimeout = null;
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

  /*
  if (!window.customElements.get(`iam-table`) && iamTable)
    window.customElements.define(`iam-table`, iamTable);
*/
});

