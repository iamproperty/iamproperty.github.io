import iamTable from '../../js/components/table/table.component.js';

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

    <div id="map"></div>
    <div class="wrapper">
      <iam-table>
        <slot></slot>
      </iam-table>
    </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('VisPropertiesGlobal'))
      document.head.insertAdjacentHTML('beforeend', `<style id="VisPropertiesGlobal">${loadExtraCSS}</style>`);


    this.map = null;
    this.resizeObserver = null;
    this.resizeObserver = null;
    this.latlngObserver = null;
    this.resizeFrame = null;
    this.createMapTimeout = null;
    this.markers = [];
  }

  scheduleCreateMap = (): void => {
    clearTimeout(this.createMapTimeout);

    this.createMapTimeout = setTimeout(() => {
      this.createMapTimeout = null;
      this.createMap();
    }, 100);
  }

  createMap = ():void => {

    const longitude = Number(this.getAttribute("data-longitude")) || Number(this.querySelector('tr[data-longitude]')?.dataset.longitude) || 2.23;
    const latitude = Number(this.getAttribute("data-latitude")) || Number(this.querySelector('tr[data-latitude]')?.dataset.latitude) || 54.31;
    const minZoom = Number(this.getAttribute("data-min-zoom")) || 8;
    const maxZoom = Number(this.getAttribute("data-max-zoom")) || 12;

    const mapContainer = this.shadowRoot.querySelector("#map");

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

    this.markers.forEach((marker) => {
      marker.remove();
    });

    this.markers = [];

    const bounds = new maplibregl.LngLatBounds();

    this.querySelectorAll('tr[data-longitude][data-latitude]').forEach((row, index)=>{

      const rowLongitude = Number(row?.dataset.longitude);
      const rowLatitude = Number(row?.dataset.latitude);


      if(index <= 15){

        bounds.extend([
          rowLongitude,
          rowLatitude
        ]);
      }

      const popupContent = document.createElement("div");

      popupContent.innerHTML = `
        <div class="popup-content">
          <p class="popup-price">£250,000</p>
          <button class="popup-action" type="button">
            View property
          </button>
        </div>
      `;

      popupContent
      .querySelector(".popup-action")
      .addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("property-selected", {
            bubbles: true,
            composed: true,
            detail: {
              propertyId: "property-123"
            }
          })
        );

        console.log('hi');
        window.location = "http://www.bbc.com";
      });

      const popup = new maplibregl.Popup({
        offset: 28,
        closeButton: true,
        closeOnClick: false,
        className: "property-popup",
        maxWidth: "320px"
      });

      popup.setDOMContent(popupContent);

      const markerElement = document.createElement("div");

      markerElement.innerHTML = `
        <svg
          width="32"
          height="42"
          viewBox="0 0 32 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#EA4335"
            stroke="#ffffff"
            stroke-width="2"
            d="M16 1C7.7 1 1 7.7 1 16c0 11.3 15 25 15 25s15-13.7 15-25C31 7.7 24.3 1 16 1z"
          />
          <circle cx="16" cy="16" r="6" fill="#ffffff"/>
        </svg>
      `;

      const marker = new maplibregl.Marker({
        element: markerElement,
        anchor: "bottom"
      })
      .setLngLat([rowLongitude, rowLatitude])
      .setPopup(popup)
      .addTo(this.map);

      this.markers.push(marker);

    });

    this.map.fitBounds(bounds, {
      padding: 60,
      minZoom: minZoom,
      maxZoom: maxZoom
    });
  }

  connectedCallback(): void {

    if (this.map)
      return;

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
    this.markers = [];

    this.latlngObserver.disconnect();
    this.latlngObserver = null;
  }
}


document.addEventListener('DOMContentLoaded', (): void => {

  if (!window.customElements.get(`iam-vis-properties`))
    window.customElements.define(`iam-vis-properties`, iamVisProperties);

  if (!window.customElements.get(`iam-table`) && iamTable)
    window.customElements.define(`iam-table`, iamTable);

});

