/* eslint-disable */

const toKebab = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
const toDatasetKey = (value) => value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

const splitSelector = (selector, separator = ',') => {
  const parts = [];
  let current = '';
  let depth = 0;
  let quote = '';

  for (const char of selector) {
    if (quote) {
      current += char;
      if (char === quote) quote = '';
      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      current += char;
      continue;
    }

    if (char === '(' || char === '[') depth++;
    if (char === ')' || char === ']') depth--;

    if (char === separator && depth === 0) {
      parts.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  if (current.trim()) parts.push(current.trim());

  return parts;
};

const splitTokens = (selector) => {
  const tokens = [];
  let current = '';
  let depth = 0;
  let quote = '';

  for (const char of selector.trim()) {
    if (quote) {
      current += char;
      if (char === quote) quote = '';
      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      current += char;
      continue;
    }

    if (char === '(' || char === '[') depth++;
    if (char === ')' || char === ']') depth--;

    if (depth === 0 && (char === ' ' || char === '>')) {
      if (current.trim()) tokens.push(current.trim());
      if (char === '>') tokens.push('>');
      current = '';
      continue;
    }

    current += char;
  }

  if (current.trim()) tokens.push(current.trim());

  return tokens;
};

const stripQuotes = (value) => value.replace(/^["']|["']$/g, '');

class TestClassList {
  constructor(element) {
    this.element = element;
    this.items = new Set();
  }

  add(...classes) {
    classes.filter(Boolean).forEach((className) => this.items.add(className));
    this.sync();
  }

  remove(...classes) {
    classes.forEach((className) => this.items.delete(className));
    this.sync();
  }

  contains(className) {
    return this.items.has(className);
  }

  toggle(className, force) {
    if (force === true) {
      this.add(className);
      return true;
    }

    if (force === false) {
      this.remove(className);
      return false;
    }

    if (this.contains(className)) {
      this.remove(className);
      return false;
    }

    this.add(className);
    return true;
  }

  setFromString(value) {
    this.items = new Set(
      String(value || '')
        .split(/\s+/)
        .filter(Boolean)
    );
    this.sync();
  }

  toString() {
    return Array.from(this.items).join(' ');
  }

  sync() {
    this.element.attributes.class = this.toString();
  }
}

class TestStyle {
  constructor() {
    this.properties = {};
  }

  setProperty(name, value) {
    this.properties[name] = String(value);
  }

  getPropertyValue(name) {
    return this.properties[name] || '';
  }

  toString() {
    return Object.entries(this.properties)
      .map(([name, value]) => `${name}: ${value};`)
      .join(' ');
  }
}

export class TestElement extends EventTarget {
  constructor(tagName = 'div') {
    super();
    this.tagName = tagName.toUpperCase();
    this.nodeName = this.tagName;
    this.localName = tagName.toLowerCase();
    this.attributes = {};
    this.dataset = {};
    this.children = [];
    this.parentNode = null;
    this.parentElement = null;
    this.classList = new TestClassList(this);
    this.style = new TestStyle();
    this.shadowRoot = null;
    this._innerHTML = '';
    this._textContent = '';
    this.value = '';
    this.checked = false;
    this.disabled = false;
    this.open = false;
    this.selectedIndex = 0;
    this.scrollLeft = 0;
    this.scrollTop = 0;
    this.scrollWidth = 0;
    this.scrollHeight = 0;
    this.clientWidth = 0;
    this.clientHeight = 0;
    this.offsetWidth = 0;
    this.offsetHeight = 0;
    this.offsetLeft = 0;
    this.files = [];
    this._rect = { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 };
  }

  get id() {
    return this.getAttribute('id') || '';
  }

  set id(value) {
    this.setAttribute('id', value);
  }

  get className() {
    return this.classList.toString();
  }

  set className(value) {
    this.classList.setFromString(value);
  }

  get textContent() {
    if (this._textContent) return this._textContent;
    if (this.children.length) return this.children.map((child) => child.textContent).join('');
    return this._innerHTML.replace(/<[^>]+>/g, '');
  }

  set textContent(value) {
    this._textContent = String(value);
    this._innerHTML = String(value);
  }

  get innerText() {
    return this.textContent;
  }

  set innerText(value) {
    this.textContent = value;
  }

  get innerHTML() {
    if (this._innerHTML) return this._innerHTML;
    return this.children.map((child) => child.outerHTML).join('');
  }

  set innerHTML(value) {
    this._innerHTML = String(value);
    this._textContent = '';
    this.children = [];
  }

  get outerHTML() {
    const attributes = Object.entries(this.attributes)
      .filter(([, value]) => value !== null && typeof value !== 'undefined' && value !== '')
      .map(([name, value]) => ` ${name}="${String(value)}"`)
      .join('');

    return `<${this.localName}${attributes}>${this.innerHTML || this.textContent}</${this.localName}>`;
  }

  get firstChild() {
    return this.children[0] || null;
  }

  get firstElementChild() {
    return this.firstChild;
  }

  get nextSibling() {
    if (!this.parentNode) return null;
    const index = this.parentNode.children.indexOf(this);
    return this.parentNode.children[index + 1] || null;
  }

  get nextElementSibling() {
    return this.nextSibling;
  }

  get previousSibling() {
    if (!this.parentNode) return null;
    const index = this.parentNode.children.indexOf(this);
    return this.parentNode.children[index - 1] || null;
  }

  get previousElementSibling() {
    return this.previousSibling;
  }

  get options() {
    return this.children.filter((child) => child.matches('option'));
  }

  setAttribute(name, value = '') {
    const stringValue = String(value);
    this.attributes[name] = stringValue;

    if (name === 'class') this.classList.setFromString(stringValue);
    if (name === 'value') this.value = stringValue;
    if (name === 'type') this.type = stringValue;
    if (name === 'checked') this.checked = true;
    if (name === 'disabled') this.disabled = true;
    if (name === 'open') this.open = true;
    if (name === 'style') {
      stringValue
        .split(';')
        .map((part) => part.trim())
        .filter(Boolean)
        .forEach((part) => {
          const [property, ...rest] = part.split(':');
          this.style.setProperty(property.trim(), rest.join(':').trim());
        });
    }
    if (name.startsWith('data-')) this.dataset[toDatasetKey(name.slice(5))] = stringValue;
  }

  getAttribute(name) {
    if (name in this.attributes) return this.attributes[name];
    return null;
  }

  hasAttribute(name) {
    return name in this.attributes;
  }

  removeAttribute(name) {
    delete this.attributes[name];
    if (name === 'class') this.classList.setFromString('');
    if (name === 'checked') this.checked = false;
    if (name === 'disabled') this.disabled = false;
    if (name === 'open') this.open = false;
    if (name.startsWith('data-')) delete this.dataset[toDatasetKey(name.slice(5))];
  }

  toggleAttribute(name, force) {
    if (force === true || (force !== false && !this.hasAttribute(name))) {
      this.setAttribute(name, '');
      return true;
    }

    this.removeAttribute(name);
    return false;
  }

  appendChild(child) {
    if (!child) return child;
    child.parentNode = this;
    child.parentElement = this;
    this.children.push(child);
    this._innerHTML = '';
    return child;
  }

  append(...items) {
    items.forEach((item) => {
      if (typeof item === 'string') this._innerHTML += item;
      else this.appendChild(item);
    });
  }

  prepend(...items) {
    items
      .slice()
      .reverse()
      .forEach((item) => {
        if (typeof item === 'string') {
          this._innerHTML = item + this._innerHTML;
        } else {
          item.parentNode = this;
          item.parentElement = this;
          this.children.unshift(item);
          this._innerHTML = '';
        }
      });
  }

  before(element) {
    if (!this.parentNode) return;
    this.parentNode.insertBefore(element, this);
  }

  insertBefore(child, reference) {
    child.parentNode = this;
    child.parentElement = this;
    const index = reference ? this.children.indexOf(reference) : -1;

    if (index === -1) this.children.push(child);
    else this.children.splice(index, 0, child);

    this._innerHTML = '';
    return child;
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) this.children.splice(index, 1);
    child.parentNode = null;
    child.parentElement = null;
    return child;
  }

  remove() {
    if (this.parentNode) this.parentNode.removeChild(this);
  }

  replaceChild(newChild, oldChild) {
    const index = this.children.indexOf(oldChild);
    if (index === -1) return oldChild;
    newChild.parentNode = this;
    newChild.parentElement = this;
    oldChild.parentNode = null;
    oldChild.parentElement = null;
    this.children[index] = newChild;
    return oldChild;
  }

  cloneNode(deep = false) {
    const clone = new TestElement(this.localName);
    Object.entries(this.attributes).forEach(([name, value]) => clone.setAttribute(name, value));
    clone.value = this.value;
    clone.checked = this.checked;
    clone.innerHTML = this.innerHTML;
    clone.textContent = this._textContent;
    clone.files = Array.from(this.files || []);

    if (deep) this.children.forEach((child) => clone.appendChild(child.cloneNode(true)));

    return clone;
  }

  insertAdjacentHTML(position, html) {
    if (position === 'afterbegin') this._innerHTML = String(html) + this._innerHTML;
    else this._innerHTML += String(html);
  }

  insertAdjacentElement(position, element) {
    if (position === 'afterbegin') this.prepend(element);
    else this.appendChild(element);
    return element;
  }

  querySelector(selector) {
    return this.querySelectorAll(selector)[0] || null;
  }

  querySelectorAll(selector) {
    return selectAll(this, selector);
  }

  getElementsByTagName(tagName) {
    return this.querySelectorAll(tagName);
  }

  closest(selector) {
    let current = this;
    while (current) {
      if (current.matches && current.matches(selector)) return current;
      current = current.parentNode;
    }

    return null;
  }

  contains(element) {
    if (element === this) return true;
    return this.children.some((child) => child.contains(element));
  }

  matches(selector) {
    return matchesSelector(this, selector);
  }

  click() {
    this.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
  }

  focus() {
    globalThis.document.activeElement = this;
  }

  blur() {
    if (globalThis.document.activeElement === this) globalThis.document.activeElement = null;
  }

  scroll(options = {}) {
    if ('left' in options) this.scrollLeft = options.left;
    if ('top' in options) this.scrollTop = options.top;
    this.dispatchEvent(new Event('scroll'));
  }

  scrollIntoView() {}

  showModal() {
    this.setAttribute('open', '');
    this.open = true;
  }

  show() {
    this.showModal();
  }

  close() {
    this.removeAttribute('open');
    this.open = false;
    this.dispatchEvent(new Event('close'));
  }

  submit() {
    this.dispatchEvent(new Event('submit'));
  }

  getBoundingClientRect() {
    return this._rect;
  }

  setRect(rect) {
    this._rect = { ...this._rect, ...rect };
  }
}

export class TestDocument extends TestElement {
  constructor() {
    super('#document');
    this.title = 'Test page';
    this.documentElement = new TestElement('html');
    this.body = new TestElement('body');
    this.documentElement.appendChild(this.body);
    this.appendChild(this.documentElement);
    this.activeElement = null;
  }

  createElement(tagName) {
    return new TestElement(tagName);
  }

  createDocumentFragment() {
    return new TestElement('fragment');
  }

  getElementById(id) {
    return this.querySelector(`#${id}`);
  }

  querySelector(selector) {
    if (selector === 'body') return this.body;
    if (selector === 'html') return this.documentElement;
    return super.querySelector(selector);
  }
}

class TestStorage {
  constructor() {
    this.items = {};
  }

  getItem(key) {
    return this.items[key] || null;
  }

  setItem(key, value) {
    this.items[key] = String(value);
  }

  removeItem(key) {
    delete this.items[key];
  }

  clear() {
    this.items = {};
  }
}

const getDescendants = (root) => {
  const descendants = [];

  root.children.forEach((child) => {
    descendants.push(child);
    descendants.push(...getDescendants(child));
  });

  if (root.shadowRoot) {
    descendants.push(root.shadowRoot);
    descendants.push(...getDescendants(root.shadowRoot));
  }

  return descendants;
};

const unique = (items) => Array.from(new Set(items));

const selectAll = (root, selector) => {
  if (!selector) return [];

  const selectors = splitSelector(selector);
  if (selectors.length > 1) return unique(selectors.flatMap((part) => selectAll(root, part)));

  const normalized = selector.trim();

  if (normalized.startsWith(':scope > ')) {
    const childSelector = normalized.replace(':scope > ', '').trim();
    return root.children.filter((child) => child.matches(childSelector));
  }

  const tokens = splitTokens(normalized);
  if (tokens.length > 1) {
    let current = [root];
    let direct = false;

    tokens.forEach((token) => {
      if (token === '>') {
        direct = true;
        return;
      }

      current = current.flatMap((element) => {
        const candidates = direct ? element.children : getDescendants(element);
        return candidates.filter((candidate) => candidate.matches(token));
      });
      direct = false;
    });

    return unique(current);
  }

  return getDescendants(root).filter((element) => element.matches(normalized));
};

const matchesSelector = (element, selector) => {
  if (!selector) return false;

  const selectors = splitSelector(selector);
  if (selectors.length > 1) return selectors.some((part) => matchesSelector(element, part));

  let current = selector.trim();
  if (current === '*') return true;
  if (current.startsWith(':scope')) current = current.replace(':scope', '').trim();
  if (!current) return true;

  const notMatches = current.match(/:not\((.+)\)$/);
  if (notMatches) {
    current = current.slice(0, notMatches.index);
    if (matchesSelector(element, notMatches[1])) return false;
  }

  const isMatches = current.match(/:is\((.+)\)/);
  if (isMatches) {
    const before = current.slice(0, isMatches.index);
    const after = current.slice(isMatches.index + isMatches[0].length);
    return splitSelector(isMatches[1]).some((part) => matchesSelector(element, `${before}${part}${after}`));
  }

  if (current.endsWith(':first-child')) {
    current = current.replace(':first-child', '');
    if (!element.parentNode || element.parentNode.children[0] !== element) return false;
  }

  if (current.endsWith(':last-child')) {
    current = current.replace(':last-child', '');
    if (!element.parentNode || element.parentNode.children[element.parentNode.children.length - 1] !== element) {
      return false;
    }
  }

  if (current.endsWith(':checked')) {
    current = current.replace(':checked', '');
    if (!element.checked) return false;
  }

  current = current.trim();

  const attributeMatches = Array.from(current.matchAll(/\[([^\]=~*]+)([*]?=)?(?:"([^"]*)"|'([^']*)'|([^\]]+))?\]/g));
  for (const attributeMatch of attributeMatches) {
    const name = attributeMatch[1].trim();
    const operator = attributeMatch[2];
    const expected = stripQuotes(attributeMatch[3] || attributeMatch[4] || attributeMatch[5] || '');
    const actual = name === 'class' ? element.className : element.getAttribute(name);

    if (!operator && actual === null) return false;
    if (operator === '=' && String(actual) !== expected) return false;
    if (operator === '*=' && !String(actual || '').includes(expected)) return false;
  }
  current = current.replace(/\[[^\]]+\]/g, '');

  const idMatch = current.match(/#([A-Za-z0-9_-]+)/);
  if (idMatch && element.getAttribute('id') !== idMatch[1]) return false;
  current = current.replace(/#[A-Za-z0-9_-]+/g, '');

  const classMatches = Array.from(current.matchAll(/\.([A-Za-z0-9_-]+)/g)).map((match) => match[1]);
  if (classMatches.some((className) => !element.classList.contains(className))) return false;
  current = current.replace(/\.[A-Za-z0-9_-]+/g, '').trim();

  if (current && current !== '*' && element.localName !== current.toLowerCase()) return false;

  return true;
};

class TestDataTransfer {
  constructor() {
    this.items = {
      files: [],
      add: (file) => this.items.files.push(file),
    };
  }

  get files() {
    return this.items.files;
  }
}

export const installTestDom = () => {
  const document = new TestDocument();
  const localStorage = new TestStorage();
  const window = globalThis.window || new EventTarget();

  window.document = document;
  window.dataLayer = [];
  window.controller = [];
  window.innerWidth = 1024;
  window.innerHeight = 768;
  window.scrollY = 0;
  window.pageYOffset = 0;
  window.location = { href: 'http://localhost/', hash: '' };
  window.history = { pushState: () => {} };
  window.matchMedia = () => ({ matches: true });
  window.getComputedStyle = (element) => ({
    display: element.style.getPropertyValue('display') || element.getAttribute('data-display') || 'block',
    fontSize: '16px',
    getPropertyValue: (name) => {
      if (name === 'line-height') return element.getAttribute('data-line-height') || '16px';
      if (name === 'display') return element.style.getPropertyValue('display') || 'block';
      if (name === 'font-size') return '16px';
      return element.style.getPropertyValue(name);
    },
  });
  window.URL = {
    createObjectURL: () => 'blob:test',
  };
  window.setTimeout = globalThis.setTimeout.bind(globalThis);
  window.clearTimeout = globalThis.clearTimeout.bind(globalThis);
  window.setInterval = globalThis.setInterval.bind(globalThis);
  window.clearInterval = globalThis.clearInterval.bind(globalThis);
  window.localStorage = localStorage;

  Object.defineProperty(globalThis, 'window', { value: window, writable: true, configurable: true });
  Object.defineProperty(globalThis, 'document', { value: document, writable: true, configurable: true });
  Object.defineProperty(globalThis, 'navigator', {
    value: { userAgent: '', appVersion: '' },
    writable: true,
    configurable: true,
  });

  globalThis.location = window.location;
  globalThis.history = window.history;
  globalThis.localStorage = localStorage;
  globalThis.HTMLElement = TestElement;
  globalThis.Element = TestElement;
  globalThis.HTMLInputElement = TestElement;
  globalThis.getComputedStyle = window.getComputedStyle;
  globalThis.addEventListener = window.addEventListener.bind(window);
  globalThis.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
      this.observed = [];
    }

    observe(element) {
      this.observed.push(element);
      this.callback([{ target: element, intersectionRatio: 1 }]);
    }

    disconnect() {}
  };
  globalThis.ResizeObserver = class {
    constructor(callback) {
      this.callback = callback;
    }

    observe(element) {
      this.callback([{ target: element }]);
    }
  };
  globalThis.MutationObserver = class {
    constructor(callback) {
      this.callback = callback;
    }

    observe() {}
    disconnect() {}
  };
  globalThis.DataTransfer = TestDataTransfer;
  globalThis.Image = class {
    set src(value) {
      this._src = value;
      setTimeout(() => this.onload && this.onload(), 0);
    }

    get src() {
      return this._src;
    }
  };

  return { document, window, localStorage };
};

export const createElement = (tagName, attributes = {}, text = '') => {
  const element = new TestElement(tagName);

  Object.entries(attributes).forEach(([name, value]) => {
    if (name === 'textContent') element.textContent = value;
    else if (name === 'innerHTML') element.innerHTML = value;
    else if (name === 'checked') element.checked = Boolean(value);
    else if (name === 'value') {
      element.value = value;
      element.setAttribute('value', value);
    } else element.setAttribute(toKebab(name), value);
  });

  if (text) element.textContent = text;

  return element;
};
