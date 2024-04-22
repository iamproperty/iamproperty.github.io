// @ts-nocheck
import fileupload from "../../modules/fileupload";

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "fileupload"
});

class iamFileupload extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets'
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/fileupload.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="file-upload">
      <span class="file-upload__title">Upload file</span>
      <p class="helper-text"><slot name="helper"></slot></p>
      <button class="btn btn-primary" type="button"><slot name="btn"></slot> Upload ${this.hasAttribute('data-filetype') ? this.getAttribute('data-filetype') : 'file'}</button>
      <div class="drop-area"></div>
      <hr/>
      <slot></slot>
      <div class="files"><slot name="files"></slot></div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    this.innerHTML += '<i class="fa-regular fa-arrow-up-from-bracket me-2" aria-hidden="true" slot="btn"></i>';
    
    const wrapper = this.shadowRoot.querySelector('.file-upload');
    const input = this.querySelector('input');
    const helperText = this.shadowRoot.querySelector('.helper-text');

    if(!this.querySelector('[slot="helper"]'))
      helperText.innerHTML = `${this.hasAttribute('data-maxsize') ? `Max file size is ${this.getAttribute('data-maxsize')}kb. ` : '' }${ input.hasAttribute('accept') ? `Supported file types are ${input.getAttribute('accept')}` : '' }`;

    fileupload(this,wrapper);
  }
}

export default iamFileupload;