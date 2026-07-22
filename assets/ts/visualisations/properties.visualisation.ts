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
    <div class="wrapper"><slot></slot></div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('VisPropertiesGlobal'))
      document.head.insertAdjacentHTML('beforeend', `<style id="VisPropertiesGlobal">${loadExtraCSS}</style>`);


    this.map = null;
    this.resizeObserver = null;
    this.resizeFrame = null;
  }

  connectedCallback(): void {
    console.log('hello');


    if (this.map) {
      return;
    }

    const longitude = Number(this.getAttribute("longitude")) || 0.558525;
    const latitude = Number(this.getAttribute("latitude")) || 51.873238;
    const zoom = Number(this.getAttribute("zoom")) || 12;

    const mapContainer = this.shadowRoot.querySelector("#map");

    this.map = new maplibregl.Map({
      container: mapContainer,
        style: "https://tiles.openfreemap.org/styles/liberty",
      center: [longitude, latitude],
      zoom
    });

    this.map.addControl(
      new maplibregl.NavigationControl(),
      "top-right"
    );

    this.resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(this.resizeFrame);

        this.resizeFrame = requestAnimationFrame(() => {
          this.map?.resize();
        });
      });

      this.resizeObserver.observe(this);
/*
    const locationCoordinates = [-1.6178, 54.9783];

    let mapCreated = false;

    if(!mapCreated){

      this.insertAdjacentHTML('afterBegin', `<div id="map"></div>`);
      const map = new maplibregl.Map({
        container: "map",
        style: 'https://demotiles.maplibre.org/globe.json',
        center: locationCoordinates,
        zoom: 12
      });

      mapCreated = true;
    }

    console.log('hey');
*/


  }

  disconnectedCallback() {
      cancelAnimationFrame(this.resizeFrame);
      this.resizeObserver?.disconnect();
      this.resizeObserver = null;

      this.map?.remove();
      this.map = null;
    }
}

if (!window.customElements.get(`iam-vis-properties`))
  window.customElements.define(`iam-vis-properties`, iamVisProperties);
