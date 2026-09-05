class iamMap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/map.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.css">
    <style>
    ${loadCSS}
    </style>

    <div class="wrapper" parts="wrapper">
      <div class="map" id="map" parts="map"></div>
      <slot></slot>
    </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.map = null;
    this.resizeObserver = null;
    this.latlngObserver = null;
    this.resizeFrame = null;
    this.functionsTimeout = null;
    this.selectAllCheckbox = this.shadowRoot?.querySelector('[name="selectall"]');

  }

  connectedCallback(): void {

    const table = document.querySelector(`table[id="${this.getAttribute("data-for")}"]`);

    if(!table) return;

    import(`https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.js`)
    .then((Module) => {

      const longitude = Number(this.getAttribute("data-longitude")) || Number(this.querySelector('tr[data-longitude]')?.dataset.longitude) || 2.23;
      const latitude = Number(this.getAttribute("data-latitude")) || Number(this.querySelector('tr[data-latitude]')?.dataset.latitude) || 54.31;
      const minZoom = Number(this.getAttribute("data-min-zoom")) || 8;
      const maxZoom = Number(this.getAttribute("data-max-zoom")) || 12;
      const mapContainer = this.shadowRoot.querySelector("#map");
      const bounds = new maplibregl.LngLatBounds();
      const features = [];

      table.querySelectorAll('tr[data-longitude][data-latitude]').forEach((row, index) => {
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

    })
    .catch((err) => {
      console.log(err.message);
    });


    // #region resize observer
    this.resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(this.resizeFrame);

      this.resizeFrame = requestAnimationFrame(() => {
        this.map?.resize();

      });
    });

    this.resizeObserver.observe(this);
    // #endregion

  }
}

export default iamMap;
