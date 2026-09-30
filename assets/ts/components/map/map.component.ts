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

    <div class="wrapper" part="wrapper">
      <div class="map" id="map" part="map"></div>
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

    let table;

    table = this.querySelector(`table`);

    // Hide the table if it is a child of the map component
    if(table){
      table.setAttribute("slot", "map");
    }

    if(!table)
      table = document.querySelector(`table[id="${this.getAttribute("data-for")}"]`);

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

      const pinCount = table.querySelectorAll('tr[data-longitude][data-latitude]').length;
      const clusterMidCount = Math.max(1, Math.round(pinCount * 0.25));
      const clusterHighCount = Math.max(clusterMidCount + 1, Math.round(pinCount * 0.5));

      const tableHeadings = Array.from(table.querySelectorAll("thead th")).map((th) => th.textContent?.trim() || "");
      let onloadPopup;

      table.querySelectorAll('tr[data-longitude][data-latitude]').forEach((row, index) => {
        const rowLongitude = Number(row.dataset.longitude);
        const rowLatitude = Number(row.dataset.latitude);


        if (!Number.isFinite(rowLongitude) || !Number.isFinite(rowLatitude)) {
          return;
        }

        // Only extend the bounds for the first 15 rows, this represents the first pagination of results and prevents the map from zooming out too far when there are many rows in the table
        if (index <= 15) {
          bounds.extend([rowLongitude, rowLatitude]);
        }

        const rowData: Record<string, string> = {};
        tableHeadings.forEach((heading, headingIndex) => {
          const cell = row.querySelector(`td:nth-child(${headingIndex + 1})`);
          if (!cell?.hasAttribute("data-popup-title") && !cell?.querySelector("a:first-child:last-child")) {
            rowData[heading] = cell?.textContent?.trim() || "";
          }
        });

        // Populate the features array with the table data to be used later for the map markers and popups

        const feature = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [rowLongitude, rowLatitude]
          },
          properties: {
            title: row.querySelector('[data-popup-title]')?.textContent?.trim() || "",
            link: row.querySelector('a:first-child:last-child')?.href || "",
            linkText: row.querySelector('a:first-child:last-child')?.textContent?.trim() || "",
            ...rowData
          }
        }

        features.push(feature);

        // Set the "data-open-popup" attribute on the first row to open the popup for that property when the map is loaded
        if(row.hasAttribute("data-open-popup")){

          onloadPopup = feature;
        }
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
      // TO DO: add dark mode support to the cluster colours and pin icon when the user has dark mode enabled on their device
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

        // Apply a shadow to the clusters to make them more visible on the map
        this.map.addLayer({
          id: "property-clusters-shadow",
          type: "circle",
          source: "properties",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": "#000000",
            "circle-opacity": 0.25,
            "circle-radius": [
              "step",
              ["get", "point_count"],
              22,
              clusterMidCount,
              26,
              clusterHighCount,
              32
            ],
            "circle-blur": 0.5,
            "circle-translate": [0, 3],
            "circle-translate-anchor": "viewport"
          }
        });

        // Create the clusters circles
        this.map.addLayer({
          id: "property-clusters",
          type: "circle",
          source: "properties",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": [
              "step",
              ["get", "point_count"],
              "#BCECF8",
              clusterMidCount,
              "#62D2EE",
              clusterHighCount,
              "#1EBEE6"
            ],
            "circle-radius": [
              "step",
              ["get", "point_count"],
              28,
              clusterMidCount,
              28,
              clusterHighCount,
              28
            ],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 1
          }
        });

        // Create the cluster count labels
        this.map.addLayer({
          id: "property-cluster-count",
          type: "symbol",
          source: "properties",
          filter: ["has", "point_count"],
          layout: {
            "text-field": ["get", "point_count_abbreviated"],
            "text-font": ["Noto Sans Regular"],
            "text-size": 16
          },
          paint: {
            "text-color": "#00313c"
          }
        });

        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 538 538">
            <path d="M77.1 200.6C77.1 96.4 163.1 12 269.1 12C375.1 12 461.1 96.4 461.1 200.6C461.1 319.9 340.9 462.9 290.7 517.4C278.9 530.2 259.2 530.2 247.4 517.4C197.2 462.9 77 319.9 77 200.6H77.1ZM269.1 268C304.4 268 333.1 239.3 333.1 204C333.1 168.7 304.4 140 269.1 140C233.8 140 205.1 168.7 205.1 204C205.1 239.3 233.8 268 269.1 268Z" fill="#1EBEE6" stroke="#fff" stroke-width="2"/>
          </svg>
        `;

        const pinImage = new Image();
        pinImage.onload = () => {

          this.map.addImage("property-pin", pinImage);

          this.map.addLayer({
            id: "property-points",
            type: "symbol",
            source: "properties",
            filter: ["!", ["has", "point_count"]],
            layout: {
              "icon-image": "property-pin",
              "icon-size": 1,
              "icon-anchor": "bottom",
              "icon-allow-overlap": true
            }
          });
        };

        pinImage.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

        // Event listener for clicking on clusters to zoom in and expand them
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

        // Event listener for clicking on individual property points to show a popup with details
        const openPopup = (event) => {
          const property = event.features?.[0];

          if (!property) {
            return;
          }

          const popupContent = document.createElement("div");
          popupContent.innerHTML = `
            <div class="popup__content">
              <span class="h4 popup__title">${property.properties.title}</span>
              <div class="popup__fields">
                ${Object.entries(property.properties).filter(([key]) => key !== "title" && key !== "link" && key !== "linkText").map(([key, value]) => {
                  return `<div class="popup__field"><span class="popup__field-label strong">${key}:</span> <span class="popup__field-value">${value}</span></div>`;
                }).join("")}
              </div>
              <a class="btn btn-sm btn-primary" href="${property.properties.link || "#"}" target="_blank">
                ${property.properties.linkText || "View property"}
              </a>
            </div>
          `;

          popupContent.querySelector(".popup__title").textContent = property.properties.title;
          popupContent
            .querySelector(".btn-primary")
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

          this.map.easeTo({
            center: property.geometry.coordinates,
            zoom: Math.max(this.map.getZoom(), 12),
            padding: { left: 0, top: 250, right: 0, bottom: 0 }
          });

          new maplibregl.Popup({
            offset: 14,
            closeButton: true,
            closeOnClick: true,
            className: "property-popup",
            maxWidth: "600px",
            focusAfterOpen: false
          })
          .setLngLat(property.geometry.coordinates)
          .setDOMContent(popupContent)
          .addTo(this.map);
        }
        this.map.on("click", "property-points", openPopup);

        // Update the cursor to a pointer when hovering over clusters or property points
        ["property-clusters", "property-points"].forEach((layer) => {
          this.map.on("mouseenter", layer, () => {
            this.map.getCanvas().style.cursor = "pointer";
          });

          this.map.on("mouseleave", layer, () => {
            this.map.getCanvas().style.cursor = "";
          });
        });

        // Fit the map to the bounds of the properties if no specific coordinates are provided
        if (!bounds.isEmpty() && !this.hasAttribute("data-longitude") && !this.hasAttribute("data-latitude")) {
          this.map.fitBounds(bounds, {
            padding: 60,
            minZoom,
            maxZoom
          });
        }

        // If the "data-open-popup" attribute is set on a row, open the popup for that property when the map is loaded
        if (onloadPopup) {
          openPopup({ features: [onloadPopup] });
        }
      });



      // Useful debugging functions

      if (this.hasAttribute("data-debug")) {
        this.map.on("click", (event) => {
          const center = this.map.getCenter();
          const zoom = this.map.getZoom();
          console.log("Map clicked");
          console.log("Center:", center.lat, center.lng);
          console.log("Current zoom:", zoom);
          console.log("Clicked coordinates:", event.lngLat.lat, event.lngLat.lng);
        });
      }

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
