import Cookies from '../../../../node_modules/js-cookie/dist/js.cookie.mjs';
import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-config');

class iamConfig extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/config.component.css";`;

    const template = document.createElement('template');

    template.innerHTML = /* HTML */ `
      <style>
        ${loadCSS}
      </style>
      <div id="wrapper">
        <div id="items">
          <div id="buckets"></div>  
          <div id="any" data-bucket="any"></div>
        </div>
        <div class="btn__group">
          <button class="btn btn-tertiary" command="show-modal" commandfor="editBucketsDialog">Edit buckets</button>
          <button class="btn btn-secondary" data-add-item>Add ${this.getAttribute('data-item-name')??'item'}</button> <!-- Changes to open a model if we want to validate the add form first -->
          <button id="save" class="btn btn-primary" type="submit">Save</button>
        </div>
      </div>
      <dialog id="addFormDialog">
        <slot></slot>
        <form id="addForm">
          <div class="btn__group">
            <button class="btn btn-secondary" formmethod="dialog">Cancel</button>
            <button class="btn btn-primary">Add ${this.getAttribute('data-item-name')??'item'}</button>
          </div>
        </form>
      </dialog>
      <dialog id="editBucketsDialog">
        <div id="editBuckets"></div>
        <form id="editBucketsForm">
          <div class="btn__group mb-0 text-end">
            <button class="btn btn-tertiary my-auto" formmethod="dialog">Cancel</button>
            <button class="btn btn-secondary" type="button" command="add">Add bucket</button>
            <button class="btn btn-primary">Confirm</button>
          </div>
        </form>
      </dialog>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  async importData(ajaxURL): void {

    // Setup controller vars if not already set
    if (!window.controller) window.controller = [];

    // Abort if controller already present for this url
    if (window.controller[ajaxURL]) window.controller[ajaxURL].abort();

    // Create a new controller so it can be aborted if new fetch made
    window.controller[ajaxURL] = new AbortController();
    const { signal } = window.controller[ajaxURL];

    try {
      return await fetch(ajaxURL, {
        signal: signal,
        method: 'get',
        credentials: 'same-origin',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
        }),
      })
        .then((response) => response.json())
        .then((response) => {

          const returnData = response['data'] ? response['data'] : response;

          return returnData;
        });
    } catch (error) {
      //console.log(error);
      return 'There has been a problem. Please try again in a few moments.';
    }

  }

  getBucketsData = (data): void => {

    if(!data)
      return [];

    const buckets = [];
    // TODO: check local storage first
    data.forEach(bucket => {

      if(typeof bucket.attributes?.criteria == "object" && Array.isArray(bucket.attributes?.criteria)){

        buckets.push(bucket);
      }
    });

    return buckets; 
  }

  createBuckets = (buckets): void => {
    
    console.log(buckets);

    const bucketsContainer = this.shadowRoot.querySelector('#buckets'); // TODO: rename

    if(!buckets)
      return false;

    buckets.forEach((bucket) => {

      if(bucket.id)
        bucketsContainer?.insertAdjacentHTML('beforeend',`<div class="bucket" data-bucket="${bucket.id}"></div>`);

      this.createForms(bucket.attributes.items, bucket.id);

    });

    return true;
  }

  createEditBuckets = (buckets):void => {

    const editBuckets = this.shadowRoot.querySelector('#editBuckets'); 

    if(!buckets)
      return false;

    buckets.forEach((bucket) => {

      const editBucket = document.createElement('div');
      editBucket.classList.add('bucket--edit');
      editBucket.setAttribute('data-bucket',bucket.id);

      editBucket.innerHTML = this.addBucketHTML(bucket.attributes);
      editBuckets?.appendChild(editBucket);

      const criteriaContainer = editBucket.querySelector('.criteria--container');

      bucket.attributes.criteria.forEach((criteria) => {
        const criteriaForm = document.createElement('form');
        criteriaForm.classList.add('criteria');

        criteriaForm.innerHTML = this.addCriteriaHTML(criteria.attributes);

        // TODO add to HTML
        criteriaForm.querySelector('[name="attribute"]')?.value = criteria.attributes.attribute;
        criteriaForm.querySelector('[name="rule"]')?.value = criteria.attributes.rule;
        criteriaForm.querySelector('[name="match"]')?.value = criteria.attributes.match;

        criteriaContainer?.appendChild(criteriaForm);

        // TODO add buttons
        // TODO add events
      });

      this.createEditBucketsEvents(editBucket);
    });
  }

  addCriteriaHTML = (attributes): void => {
    return /*HTML*/ `<label>
      <span class="visually-hidden">Attribute</span>
      ${this.createCriteriaDropdown(attributes.attribute)}
    </label>
    <label>
      <span class="visually-hidden">Rule</span>
      <select name="rule" class="mt-0 select--sm">
        <option value="set">is not empty</option>
        <option value="empty">is empty</option>
        <option value="equals">equals</option>
        <option value="not">is not</option>
        <option value="greater">greater than</option>
        <option value="less">less than</option>
      </select>
    </label>
    <label>
      <span class="visually-hidden">Match</span>
      <input type="text" name="match" class="mt-0 input--sm" /> <!-- TODO Add datalist or transform into select -->
    </label>
    <div class="btn__group">
    <button class="btn btn-compact btn-sm mt-0 btn-secondary fa-plus" type="button" data-direction="add" title="Delete">Add</button>
    <button class="btn btn-compact btn-sm mt-0 btn-secondary fa-trash" type="button" data-direction="delete" title="Delete">Delete</button>
    </div>`;
  }

  addBucketHTML = (attributes):void => {

    return /*HTML*/ `<label>
        <span class="visually-hidden">Name</span>
        <input type="text" name="bucket" value="${attributes.name}"/>
      </label>
      <div class="btn__group text-end"><button class="btn btn-compact btn-sm mt-0 btn-secondary fa-arrows-from-dotted-line" data-expand title="Expand to see more options">Expand</button>${this.buttonHTML}</div>
      <div class="criteria--container">
      </div>`;
  }


  createCriteriaDropdown = (attribute):void => {

    const form = this.querySelector('form');

    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());

    let optionsHtml = '';
    Object.keys(formDataObj).forEach(function(key){
      optionsHtml += `<option value="${key}" ${key == attribute ? ' selected="selected"' : ''}>${key}</option>`;
    });

    return `<select name="attributes[criteria]" class="mt-0 select--sm">
      <option value=""></option>
      ${optionsHtml}
    </select>`;  
  }

  createEditBucketsEvents = (editBucket):Void => {
    this.addButtonEvents(editBucket,false);
    const expandButton = editBucket?.querySelector('[data-expand]');

    expandButton?.addEventListener('click',() => {

      editBucket.classList.toggle('bucket--expanded');
    });
  }


  async importAttributeData(comonponent): void {

  }

  createForms = (data, bucketId = "any"):void => {

    data.forEach(item => {

      if(typeof item.attributes?.criteria == "undefined"){

        const formElement = this.createForm(item, bucketId);

        Object.keys(item.attributes).forEach(function(key){

          if(formElement.querySelector(`[name="${key}"]`)){

            const element = formElement.querySelector(`[name="${key}"]`);

            if(element.matches('select[data-import]') && !element.querySelector(`option[value="${item.attributes[key]}"]`)){
              const optionElement = document.createElement('option');
              optionElement.value = item.attributes[key];
              optionElement.innerHTML = item.attributes[key];
              element.appendChild(optionElement);
            }
            element.value = item.attributes[key];
          }
        });
      }
    });
  }

  checkCriteria = (attributes, bucket):void => {

    if(attributes[bucket])
      return true;

    return false;
  }

  checkBuckets = (attributes):any => {

    const anyContainer = this.shadowRoot.querySelector('#any'); // TODO: rename
    let container = anyContainer;

    if(!this.hasAttribute('data-buckets'))
      return container;


    let buckets = [];
    let addedToBucket = false;
    
    // If data attribute set
    buckets = this.getAttribute('data-buckets').split(',');

    // TODO: If importing the config from a json file

    buckets.forEach((bucket)=>{

      const addToBucket = !addedToBucket ? this.checkCriteria(attributes, bucket) : false;

      if(addToBucket){
        addedToBucket = true;
        container = this.shadowRoot.querySelector(`[data-bucket="${bucket}"]`);
      }
    });

    return container;
  }

  createForm = (item, bucketId = "any"):void => {

    const anyContainer = this.shadowRoot.querySelector(`#items [data-bucket="${bucketId}"]`); // TODO: rename
    //const bucketsContainer = this.shadowRoot.querySelector('#buckets'); // TODO: rename
    //const container = this.checkBuckets(item.attributes); TODO: re-enable
    const container = anyContainer;

    const formTemplate = this.querySelector(`form`)?.cloneNode(true);
    formTemplate.setAttribute('id', item.id);

    // TODO check if it matches a bucket
    container?.insertAdjacentElement('beforeend',formTemplate);
    const formElement = container?.querySelector(`[id="${item.id}"]`);
    formElement?.addEventListener('submit', (event) => {

      event.preventDefault();
    });

    this.addButtons(item.id, formElement);

    return formElement;
  }

  getCurrentIds = ():void => {

    const idsArr = [];

    Array.from(this.shadowRoot?.querySelectorAll('#items form')).forEach((form) => {
      idsArr.push(parseInt(form.getAttribute('id')));
    });

    return idsArr;
  }

  generateId = ():any => {

    return Math.max(...this.getCurrentIds()) + 1;
  }

  addButtonEvents = (element, scrollIntoView:boolean = true):void => {
    
    const upButton = element?.querySelector('[data-direction="up"]');
    const downButton = element?.querySelector('[data-direction="down"]');
    const deleteButton = element?.querySelector('[data-direction="delete"]');

    upButton?.addEventListener('click',() => {

      if(element?.previousElementSibling){
        element?.parentNode.insertBefore(element, element.previousElementSibling);

        if(scrollIntoView)
          element?.scrollIntoView({ behavior: "instant", block: "center" });
      }
    });

    downButton?.addEventListener('click',() => {

      if(element.nextElementSibling){
        element?.parentNode.insertBefore(element, element.nextElementSibling.nextElementSibling);
      }
      else {
        element?.parentNode.insertAdjacentElement('beforeend',element);
      }

      if(scrollIntoView)
        element?.scrollIntoView({ behavior: "instant", block: "center" });
    });

    deleteButton?.addEventListener('click',() => {

      element.remove();
    });
  }

  addButtons = (id, form):void => {

    form?.insertAdjacentHTML('beforeend',`<div class="btn__group">${this.buttonHTML}</div>`);

    this.addButtonEvents(form);
  }

  async connectedCallback(): void {
    this.buttonHTML = /* HTML */`
    <button class="btn btn-compact btn-sm mt-0 btn-secondary fa-chevron-up" type="button" data-direction="up" title="Move up">Up</button>
    <button class="btn btn-compact btn-sm mt-0 btn-secondary fa-chevron-down" type="button" data-direction="down" title="Move down">Down</button>
    <button class="btn btn-compact btn-sm mt-0 btn-secondary fa-trash" type="button" data-direction="delete" title="Delete">Delete</button>
    `;

    const dataImportUrl = this.getAttribute('data-import');
    const getBucketsData = this.getBucketsData;
    const createBuckets = this.createBuckets;
    const createEditBuckets = this.createEditBuckets;

    const addButtons = this.addButtons;
    const createForms = this.createForms;
    const createForm = this.createForm;
    const itemsContainer = this.shadowRoot.querySelector('#items'); // TODO: rename
    const bucketsContainer = this.shadowRoot.querySelector('#buckets'); // TODO: rename
    const editBuckets = this.shadowRoot.querySelector('#editBuckets'); // TODO: rename
    const anyContainer = this.shadowRoot.querySelector('#any'); // TODO: rename
    const saveButton = this.shadowRoot.querySelector('#save');
    const addButton = this.shadowRoot?.querySelector('[data-add-item]')
    const addForm = this.shadowRoot?.querySelector('#addForm');
    const addFormDialog = this.shadowRoot?.querySelector('#addFormDialog');
    const editBucketsDialog = this.shadowRoot?.querySelector('#editBucketsDialog');
    const editBucketsForm = this.shadowRoot?.querySelector('#editBucketsForm');
    const editBucketsFormSubmit = this.shadowRoot?.querySelector('#editBucketsForm .btn-primary');
    const addBucketButton = editBucketsForm?.querySelector('[command="add"]');
    
    
    const templateForm = this?.querySelector('form');

    let editBucketsOriginalState = '';

    let buckets = [];

    // Prevent the template form from submitting anything
    templateForm?.addEventListener('submit', (event) => {

      event.preventDefault();
    });


    // TODO: add this to an on change event on the select
    Array.from(this.querySelectorAll('select[data-import]')).forEach(async(select) =>{


      const ajaxURL = select.getAttribute('data-import');

        this.importData(ajaxURL).then(
          (data) => {
            if(typeof data == 'string')
              return data;

            data.forEach(item =>{

              const optionElement = document.createElement('option');
              optionElement.value = item.id;
              optionElement.innerHTML = item.attributes.name;
              select.appendChild(optionElement);
            });

            return true;
          }
        );
    });
    

    

    // #region import data
    // TODO load from web storage if its newer

    const storedData = localStorage.getItem(`config-${this.getAttribute('data-name')}`);
    //const buckets = this.getBucketsData(); // TODO: load from local storage

    if(storedData){

      createForms(JSON.parse(storedData), buckets);
    }
    else if(dataImportUrl){

      const dataImport = await this.importData(dataImportUrl).then(
        (data) => {
          if(typeof data == 'string')
            return data;

          const buckets = getBucketsData(data);

          if(buckets){
              
            createBuckets(buckets);
            createEditBuckets(buckets);
          }
          createForms(data); // any bucket

          return true;
        }
      );
    }
    // #endregion
    
    // #region Add buckets to edit modal


      editBucketsForm?.addEventListener('submit', (event) => {

        event.stopPropagation();
        event.preventDefault();

        if(event.submitter == editBucketsFormSubmit){

          // Clear what is there already
          //anyContainer?.innerHTML = '';

          Array.from(itemsContainer?.querySelectorAll('form')).forEach((formElement:HTMLElement, index):void => {

            anyContainer?.insertAdjacentElement('beforeend',formElement);
          });

          // Empty the buckets
          bucketsContainer?.innerHTML = '';

          // Load the new bucket data then recreate them
          const buckets = [];
          Array.from(editBuckets?.querySelectorAll('[data-bucket]')).forEach((editBucketElement:HTMLElement, index):void => {

            bucketsContainer?.insertAdjacentHTML('beforeend',`<div class="bucket" data-bucket="${editBucketElement.getAttribute('data-bucket')}"></div>`);

            const bucket = {}

            bucket.id = editBucketElement.getAttribute('data-bucket');
            bucket.attributes = {};

            bucket.attributes.name = editBucketElement.querySelector('[name="bucket"]')?.value;

            //const formData = new FormData(editBucketElement);
            //const formDataObj = Object.fromEntries(formData.entries());
            // TODO cycle through the criteria forms

            buckets.push(bucket);
          });
          

          console.log(buckets);
          // this.createBuckets(buckets); TODO: re-enable

          /*
          // Move items back into buckets
          Array.from(itemsContainer?.querySelectorAll('form')).forEach((formElement:HTMLElement, index):void => {

            const formData = new FormData(formElement);
            const formDataObj = Object.fromEntries(formData.entries());
            const newContainer = this.checkBuckets(formDataObj);

            if(newContainer != anyContainer){
              newContainer?.insertAdjacentElement('beforeend',formElement);
            }
          });
        
          */
          editBucketsOriginalState = editBuckets.innerHTML;
        }

        editBucketsDialog?.close();
      });

    /*
      
      addBucketButton?.addEventListener('click', (event) => {

        const editBucket = document.createElement('div');
        editBucket.classList.add('bucket--edit');
        editBucket.innerHTML = this.addBucketHTML();

        editBuckets?.insertAdjacentElement('beforeend', editBucket)

        this.addButtonEvents(editBucket,false);
        const expandButton = editBucket?.querySelector('[data-expand]');

        expandButton?.addEventListener('click',() => {

          editBucket.classList.toggle('bucket--expanded');
        });
      });

    */

    editBucketsDialog?.addEventListener('beforetoggle', (event)=>{

      if(event.newState == 'open'){
        editBucketsOriginalState = editBuckets.innerHTML;
      }
      else if(editBucketsOriginalState){
        editBuckets.innerHTML = editBucketsOriginalState;

        Array.from(editBuckets?.querySelectorAll('.bucket--edit')).forEach((element) => {

          this.createEditBucketsEvents(element);
        });
      }
    });
    // #endregion

    // #region add data


    addButton?.addEventListener('click',() => {
      

      if(this.hasAttribute('data-validate-add')){
        addFormDialog.showModal();
      }
      else {
        const entry = {};
        entry.id = this.generateId();
        const formData = new FormData(addForm);
        const formDataObj = Object.fromEntries(formData.entries());
        entry.attributes = formDataObj;

        createForm(entry);
      }

    })

    addForm?.addEventListener('submit', (event) => {

      event.preventDefault();

      if(!event.submitter.hasAttribute('formmethod') || event.submitter.getAttribute('formmethod') != "dialog"){

        // valid templateform first
        // clear template form
        // clear was-validated class
        // copy form and add to bottom

        const entry = {};
        entry.id = this.generateId();
        const formData = new FormData(addForm);
        const formDataObj = Object.fromEntries(formData.entries());

        entry.attributes = formDataObj;

        createForm(entry);
      }
      addFormDialog?.close();
    });
    // #endregion


    // #region update values

    this.shadowRoot.addEventListener('change', (event) => {

      const container = event.target.closest('[data-bucket]');

      if(!container)
        return false;

      const attribute = event.target.name;
      const value = event.target.value;
      const attributes = {};
      attributes[attribute] = value;
      const newContainer = this.checkBuckets(attributes);

      if(newContainer != container){
        const form = event.target.closest(`form`);
        // TODO a confirmation modal
        newContainer?.insertAdjacentElement('beforeend',form);

        
        form?.scrollIntoView({ behavior: "instant", block: "center" });
      }

    });
    // #endregion

    // #region save data
    saveButton?.addEventListener('click', (event) => {

      event.preventDefault();

      // TODO validation

      const entries = [];
      const buckets = [];

      Array.from(itemsContainer?.querySelectorAll('form')).forEach((formElement:HTMLElement, index):void => {

        const entry = {};
        entry.id = formElement.getAttribute('id');
        entry.index = index;
        const formData = new FormData(formElement);
        const formDataObj = Object.fromEntries(formData.entries());

        entry.attributes = formDataObj;

        entries.push(entry);
      });

      const entriesJson = JSON.stringify(entries);

      // TODO add toast message
      // TODO save locally for now but when pushing to endpoint the web storage file should get deleted

      localStorage.setItem(`config-${this.getAttribute('data-name')}`, entriesJson);

      // Save buckets data
      Array.from(editBuckets?.querySelectorAll('.bucket--edit')).forEach((bucketElement:HTMLElement, index):void => {

        const bucket = {};
        bucket.attributes = {};
        bucket.attributes.id = bucketElement?.querySelector('[name="bucket"]').value;
        bucket.attributes.index = index;

        const criteria = [];
        // populate criteria
        buckets.push(bucket);
      });

      const bucketsJson = JSON.stringify(buckets);

      localStorage.setItem(`config-buckets-${this.getAttribute('data-name')}`, bucketsJson);

    });
    // #endregion
  }
}

export default iamConfig;
