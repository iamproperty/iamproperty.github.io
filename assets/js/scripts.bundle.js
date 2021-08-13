/*!
  * Bootstrap v2.0.0
  * Copyright 2011-2021 [object Object]
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NODE_TEXT = 3;

  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector))
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector)
    },

    children(element, selector) {
      return [].concat(...element.children)
        .filter(child => child.matches(selector))
    },

    parents(element, selector) {
      const parents = [];

      let ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous]
        }

        previous = previous.previousElementSibling;
      }

      return []
    },

    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next]
        }

        next = next.nextElementSibling;
      }

      return []
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';

  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase()
  };

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix))

    return prefix
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href');

      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttr || (!hrefAttr.includes('#') && !hrefAttr.startsWith('.'))) {
        return null
      }

      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null
    }

    return null
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);

    return selector ? document.querySelector(selector) : null
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0
    }

    // Get transition-duration of the element
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);

    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];

    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement = obj => {
    if (!obj || typeof obj !== 'object') {
      return false
    }

    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }

    return typeof obj.nodeType !== 'undefined'
  };

  const getElement = obj => {
    if (isElement(obj)) { // it's a jQuery object or a node element
      return obj.jquery ? obj[0] : obj
    }

    if (typeof obj === 'string' && obj.length > 0) {
      return SelectorEngine.findOne(obj)
    }

    return null
  };

  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(
          `${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
        )
      }
    });
  };

  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false
    }

    return getComputedStyle(element).getPropertyValue('visibility') === 'visible'
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true
    }

    if (element.classList.contains('disabled')) {
      return true
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false'
  };

  const reflow = element => element.offsetHeight;

  const getjQuery = () => {
    const { jQuery } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery
    }

    return null
  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          DOMContentLoadedCallbacks.forEach(callback => callback());
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;

    let called = false;

    const handler = ({ target }) => {
      if (target !== transitionElement) {
        return
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage
  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const customEventsRegex = /^(mouseenter|mouseleave)/i;
  const nativeEvents = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll'
  ]);

  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return (uid && `${uid}::${uidEvent++}`) || element.uidEvent || uidEvent++
  }

  function getEvent(element) {
    const uid = getUidEvent(element);

    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};

    return eventRegistry[uid]
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event])
    }
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let { target } = event; target && target !== this; target = target.parentNode) {
        for (let i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              // eslint-disable-next-line unicorn/consistent-destructuring
              EventHandler.off(element, event.type, selector, fn);
            }

            return fn.apply(target, [event])
          }
        }
      }

      // To please ESLint
      return null
    }
  }

  function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);

    for (let i = 0, len = uidEventList.length; i < len; i++) {
      const event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event
      }
    }

    return null
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler;

    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent]
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    }

    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (customEventsRegex.test(originalTypeEvent)) {
      const wrapFn = fn => {
        return function (event) {
          if (!event.relatedTarget || (event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget))) {
            return fn.call(this, event)
          }
        }
      };

      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;

      return
    }

    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = delegation ?
      bootstrapDelegationHandler(element, handler, delegationFn) :
      bootstrapHandler(element, handler);

    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;

    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};

    Object.keys(storeElementEvent).forEach(handlerKey => {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];

        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event
  }

  const EventHandler = {
    on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },

    one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },

    off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return
      }

      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getEvent(element);
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return
      }

      if (isNamespace) {
        Object.keys(events).forEach(elementEvent => {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      const storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(keyHandlers => {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];

          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null
      }

      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      const isNative = nativeEvents.has(typeEvent);

      let jQueryEvent;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      let evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);

        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles,
          cancelable: true
        });
      }

      // merge custom information in our event
      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(key => {
          Object.defineProperty(evt, key, {
            get() {
              return args[key]
            }
          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const elementMap = new Map();

  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null
      }

      return null
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return
      }

      const instanceMap = elementMap.get(element);

      instanceMap.delete(key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const VERSION = '5.0.2';

  class BaseComponent {
    constructor(element) {
      element = getElement(element);

      if (!element) {
        return
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);

      Object.getOwnPropertyNames(this).forEach(propertyName => {
        this[propertyName] = null;
      });
    }

    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }

    /** Static */

    static getInstance(element) {
      return Data.get(element, this.DATA_KEY)
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null)
    }

    static get VERSION() {
      return VERSION
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!')
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$8 = 'alert';
  const DATA_KEY$7 = 'bs.alert';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$6 = '.data-api';

  const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';

  const EVENT_CLOSE = `close${EVENT_KEY$7}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$7}${DATA_API_KEY$6}`;

  const CLASS_NAME_ALERT = 'alert';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$6 = 'show';

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Alert extends BaseComponent {
    // Getters

    static get NAME() {
      return NAME$8
    }

    // Public

    close(element) {
      const rootElement = element ? this._getRootElement(element) : this._element;
      const customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent === null || customEvent.defaultPrevented) {
        return
      }

      this._removeElement(rootElement);
    }

    // Private

    _getRootElement(element) {
      return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`)
    }

    _triggerCloseEvent(element) {
      return EventHandler.trigger(element, EVENT_CLOSE)
    }

    _removeElement(element) {
      element.classList.remove(CLASS_NAME_SHOW$6);

      const isAnimated = element.classList.contains(CLASS_NAME_FADE$4);
      this._queueCallback(() => this._destroyElement(element), element, isAnimated);
    }

    _destroyElement(element) {
      element.remove();

      EventHandler.trigger(element, EVENT_CLOSED);
    }

    // Static

    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);

        if (config === 'close') {
          data[config](this);
        }
      })
    }

    static handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      }
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$7 = 'button';
  const DATA_KEY$6 = 'bs.button';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$5 = '.data-api';

  const CLASS_NAME_ACTIVE$2 = 'active';

  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="button"]';

  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$6}${DATA_API_KEY$5}`;

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button extends BaseComponent {
    // Getters

    static get NAME() {
      return NAME$7
    }

    // Public

    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$2));
    }

    // Static

    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, event => {
    event.preventDefault();

    const button = event.target.closest(SELECTOR_DATA_TOGGLE$4);
    const data = Button.getOrCreateInstance(button);

    data.toggle();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(val) {
    if (val === 'true') {
      return true
    }

    if (val === 'false') {
      return false
    }

    if (val === Number(val).toString()) {
      return Number(val)
    }

    if (val === '' || val === 'null') {
      return null
    }

    return val
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`)
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {}
      }

      const attributes = {};

      Object.keys(element.dataset)
        .filter(key => key.startsWith('bs'))
        .forEach(key => {
          let pureKey = key.replace(/^bs/, '');
          pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
          attributes[pureKey] = normalizeData(element.dataset[key]);
        });

      return attributes
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`))
    },

    offset(element) {
      const rect = element.getBoundingClientRect();

      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      }
    },

    position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      }
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$6 = 'collapse';
  const DATA_KEY$5 = 'bs.collapse';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const DATA_API_KEY$4 = '.data-api';

  const Default$5 = {
    toggle: true,
    parent: ''
  };

  const DefaultType$5 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };

  const EVENT_SHOW$4 = `show${EVENT_KEY$5}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$5}`;
  const EVENT_HIDE$4 = `hide${EVENT_KEY$5}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$5}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$5}${DATA_API_KEY$4}`;

  const CLASS_NAME_SHOW$5 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';

  const WIDTH = 'width';
  const HEIGHT = 'height';

  const SELECTOR_ACTIVES = '.show, .collapsing';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="collapse"]';

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element);

      this._isTransitioning = false;
      this._config = this._getConfig(config);
      this._triggerArray = SelectorEngine.find(
        `${SELECTOR_DATA_TOGGLE$3}[href="#${this._element.id}"],` +
        `${SELECTOR_DATA_TOGGLE$3}[data-bs-target="#${this._element.id}"]`
      );

      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (let i = 0, len = toggleList.length; i < len; i++) {
        const elem = toggleList[i];
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector)
          .filter(foundElem => foundElem === this._element);

        if (selector !== null && filterElement.length) {
          this._selector = selector;
          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // Getters

    static get Default() {
      return Default$5
    }

    static get NAME() {
      return NAME$6
    }

    // Public

    toggle() {
      if (this._element.classList.contains(CLASS_NAME_SHOW$5)) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$5)) {
        return
      }

      let actives;
      let activesData;

      if (this._parent) {
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent)
          .filter(elem => {
            if (typeof this._config.parent === 'string') {
              return elem.getAttribute('data-bs-parent') === this._config.parent
            }

            return elem.classList.contains(CLASS_NAME_COLLAPSE)
          });

        if (actives.length === 0) {
          actives = null;
        }
      }

      const container = SelectorEngine.findOne(this._selector);
      if (actives) {
        const tempActiveData = actives.find(elem => container !== elem);
        activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

        if (activesData && activesData._isTransitioning) {
          return
        }
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$4);
      if (startEvent.defaultPrevented) {
        return
      }

      if (actives) {
        actives.forEach(elemActive => {
          if (container !== elemActive) {
            Collapse.collapseInterface(elemActive, 'hide');
          }

          if (!activesData) {
            Data.set(elemActive, DATA_KEY$5, null);
          }
        });
      }

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        this._triggerArray.forEach(element => {
          element.classList.remove(CLASS_NAME_COLLAPSED);
          element.setAttribute('aria-expanded', true);
        });
      }

      this.setTransitioning(true);

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$5);

        this._element.style[dimension] = '';

        this.setTransitioning(false);

        EventHandler.trigger(this._element, EVENT_SHOWN$4);
      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$5)) {
        return
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (startEvent.defaultPrevented) {
        return
      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$5);

      const triggerArrayLength = this._triggerArray.length;
      if (triggerArrayLength > 0) {
        for (let i = 0; i < triggerArrayLength; i++) {
          const trigger = this._triggerArray[i];
          const elem = getElementFromSelector(trigger);

          if (elem && !elem.classList.contains(CLASS_NAME_SHOW$5)) {
            trigger.classList.add(CLASS_NAME_COLLAPSED);
            trigger.setAttribute('aria-expanded', false);
          }
        }
      }

      this.setTransitioning(true);

      const complete = () => {
        this.setTransitioning(false);
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }

    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    }

    // Private

    _getConfig(config) {
      config = {
        ...Default$5,
        ...config
      };
      config.toggle = Boolean(config.toggle); // Coerce string values
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config
    }

    _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT
    }

    _getParent() {
      let { parent } = this._config;

      parent = getElement(parent);

      const selector = `${SELECTOR_DATA_TOGGLE$3}[data-bs-parent="${parent}"]`;

      SelectorEngine.find(selector, parent)
        .forEach(element => {
          const selected = getElementFromSelector(element);

          this._addAriaAndCollapsedClass(
            selected,
            [element]
          );
        });

      return parent
    }

    _addAriaAndCollapsedClass(element, triggerArray) {
      if (!element || !triggerArray.length) {
        return
      }

      const isOpen = element.classList.contains(CLASS_NAME_SHOW$5);

      triggerArray.forEach(elem => {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    }

    // Static

    static collapseInterface(element, config) {
      let data = Collapse.getInstance(element);
      const _config = {
        ...Default$5,
        ...Manipulator.getDataAttributes(element),
        ...(typeof config === 'object' && config ? config : {})
      };

      if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      if (!data) {
        data = new Collapse(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Collapse.collapseInterface(this, config);
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || (event.delegateTarget && event.delegateTarget.tagName === 'A')) {
      event.preventDefault();
    }

    const triggerData = Manipulator.getDataAttributes(this);
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);

    selectorElements.forEach(element => {
      const data = Collapse.getInstance(element);
      let config;
      if (data) {
        // update parent attribute
        if (data._parent === null && typeof triggerData.parent === 'string') {
          data._config.parent = triggerData.parent;
          data._parent = data._getParent();
        }

        config = 'toggle';
      } else {
        config = triggerData;
      }

      Collapse.collapseInterface(element, config);
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Collapse);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth)
    }

    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width);
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
    }

    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }

    _setElementAttributes(selector, styleProp, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return
        }

        this._saveInitialAttribute(element, styleProp);
        const calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, 'paddingRight');
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }

    _saveInitialAttribute(element, styleProp) {
      const actualValue = element.style[styleProp];
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProp, actualValue);
      }
    }

    _resetElementAttributes(selector, styleProp) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProp);
        if (typeof value === 'undefined') {
          element.style.removeProperty(styleProp);
        } else {
          Manipulator.removeDataAttribute(element, styleProp);
          element.style[styleProp] = value;
        }
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
      } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
      }
    }

    isOverflowing() {
      return this.getWidth() > 0
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  const Default$4 = {
    isVisible: true, // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body', // give the choice to place backdrop under different elements
    clickCallback: null
  };

  const DefaultType$4 = {
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
  };
  const NAME$5 = 'backdrop';
  const CLASS_NAME_BACKDROP = 'modal-backdrop';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';

  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$5}`;

  class Backdrop {
    constructor(config) {
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return
      }

      this._append();

      if (this._config.isAnimated) {
        reflow(this._getElement());
      }

      this._getElement().classList.add(CLASS_NAME_SHOW$4);

      this._emulateAnimation(() => {
        execute(callback);
      });
    }

    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$4);

      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }

    // Private

    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = CLASS_NAME_BACKDROP;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$3);
        }

        this._element = backdrop;
      }

      return this._element
    }

    _getConfig(config) {
      config = {
        ...Default$4,
        ...(typeof config === 'object' ? config : {})
      };

      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$5, config, DefaultType$4);
      return config
    }

    _append() {
      if (this._isAppended) {
        return
      }

      this._config.rootElement.appendChild(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });

      this._isAppended = true;
    }

    dispose() {
      if (!this._isAppended) {
        return
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();
      this._isAppended = false;
    }

    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$4 = 'modal';
  const DATA_KEY$4 = 'bs.modal';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';

  const Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };

  const DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };

  const EVENT_HIDE$3 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$4}`;
  const EVENT_SHOW$3 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$4}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$4}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$4}`;
  const EVENT_CLICK_DISMISS$2 = `click.dismiss${EVENT_KEY$4}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$4}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$3}`;

  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';

  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element);

      this._config = this._getConfig(config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._isShown = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
    }

    // Getters

    static get Default() {
      return Default$3
    }

    static get NAME() {
      return NAME$4
    }

    // Public

    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget)
    }

    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return
      }

      this._isShown = true;

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._setEscapeEvent();
      this._setResizeEvent();

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, event => this.hide(event));

      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
          if (event.target === this._element) {
            this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(() => this._showElement(relatedTarget));
    }

    hide(event) {
      if (event && ['A', 'AREA'].includes(event.target.tagName)) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return
      }

      this._isShown = false;
      const isAnimated = this._isAnimated();

      if (isAnimated) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();
      this._setResizeEvent();

      EventHandler.off(document, EVENT_FOCUSIN$2);

      this._element.classList.remove(CLASS_NAME_SHOW$3);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      this._queueCallback(() => this._hideModal(), this._element, isAnimated);
    }

    dispose() {
      [window, this._dialog]
        .forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$4));

      this._backdrop.dispose();
      super.dispose();

      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */
      EventHandler.off(document, EVENT_FOCUSIN$2);
    }

    handleUpdate() {
      this._adjustDialog();
    }

    // Private

    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop), // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
      })
    }

    _getConfig(config) {
      config = {
        ...Default$3,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$4, config, DefaultType$3);
      return config
    }

    _showElement(relatedTarget) {
      const isAnimated = this._isAnimated();
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (isAnimated) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      const transitionComplete = () => {
        if (this._config.focus) {
          this._element.focus();
        }

        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }

    _enforceFocus() {
      EventHandler.off(document, EVENT_FOCUSIN$2); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN$2, event => {
        if (document !== event.target &&
            this._element !== event.target &&
            !this._element.contains(event.target)) {
          this._element.focus();
        }
      });
    }

    _setEscapeEvent() {
      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
          if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();
            this.hide();
          } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
            this._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
      }
    }

    _setResizeEvent() {
      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    }

    _hideModal() {
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      });
    }

    _showBackdrop(callback) {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, event => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = false;
          return
        }

        if (event.target !== event.currentTarget) {
          return
        }

        if (this._config.backdrop === true) {
          this.hide();
        } else if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
        }
      });

      this._backdrop.show(callback);
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$2)
    }

    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      if (hideEvent.defaultPrevented) {
        return
      }

      const { classList, scrollHeight, style } = this._element;
      const isModalOverflowing = scrollHeight > document.documentElement.clientHeight;

      // return if the following background transition hasn't yet completed
      if ((!isModalOverflowing && style.overflowY === 'hidden') || classList.contains(CLASS_NAME_STATIC)) {
        return
      }

      if (!isModalOverflowing) {
        style.overflowY = 'hidden';
      }

      classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        classList.remove(CLASS_NAME_STATIC);
        if (!isModalOverflowing) {
          this._queueCallback(() => {
            style.overflowY = '';
          }, this._dialog);
        }
      }, this._dialog);

      this._element.focus();
    }

    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------

    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;

      if ((!isBodyOverflowing && isModalOverflowing && !isRTL()) || (isBodyOverflowing && !isModalOverflowing && isRTL())) {
        this._element.style.paddingLeft = `${scrollbarWidth}px`;
      }

      if ((isBodyOverflowing && !isModalOverflowing && !isRTL()) || (!isBodyOverflowing && isModalOverflowing && isRTL())) {
        this._element.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    // Static

    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config](relatedTarget);
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return
      }

      EventHandler.one(target, EVENT_HIDDEN$3, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });

    const data = Modal.getOrCreateInstance(target);

    data.toggle(this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$3 = 'offcanvas';
  const DATA_KEY$3 = 'bs.offcanvas';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY$2 = '.data-api';
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$3}${DATA_API_KEY$2}`;
  const ESCAPE_KEY = 'Escape';

  const Default$2 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };

  const DefaultType$2 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
  };

  const CLASS_NAME_SHOW$2 = 'show';
  const OPEN_SELECTOR = '.offcanvas.show';

  const EVENT_SHOW$2 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$2 = `shown${EVENT_KEY$3}`;
  const EVENT_HIDE$2 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$3}`;
  const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$2}`;
  const EVENT_CLICK_DISMISS$1 = `click.dismiss${EVENT_KEY$3}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;

  const SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]';
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element);

      this._config = this._getConfig(config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._addEventListeners();
    }

    // Getters

    static get NAME() {
      return NAME$3
    }

    static get Default() {
      return Default$2
    }

    // Public

    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget)
    }

    show(relatedTarget) {
      if (this._isShown) {
        return
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, { relatedTarget });

      if (showEvent.defaultPrevented) {
        return
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
        this._enforceFocusOnElement(this._element);
      }

      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOW$2);

      const completeCallBack = () => {
        EventHandler.trigger(this._element, EVENT_SHOWN$2, { relatedTarget });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }

    hide() {
      if (!this._isShown) {
        return
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (hideEvent.defaultPrevented) {
        return
      }

      EventHandler.off(document, EVENT_FOCUSIN$1);
      this._element.blur();
      this._isShown = false;
      this._element.classList.remove(CLASS_NAME_SHOW$2);
      this._backdrop.hide();

      const completeCallback = () => {
        this._element.setAttribute('aria-hidden', true);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        this._element.style.visibility = 'hidden';

        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }

        EventHandler.trigger(this._element, EVENT_HIDDEN$2);
      };

      this._queueCallback(completeCallback, this._element, true);
    }

    dispose() {
      this._backdrop.dispose();
      super.dispose();
      EventHandler.off(document, EVENT_FOCUSIN$1);
    }

    // Private

    _getConfig(config) {
      config = {
        ...Default$2,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$3, config, DefaultType$2);
      return config
    }

    _initializeBackDrop() {
      return new Backdrop({
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      })
    }

    _enforceFocusOnElement(element) {
      EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN$1, event => {
        if (document !== event.target &&
          element !== event.target &&
          !element.contains(event.target)) {
          element.focus();
        }
      });
      element.focus();
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, () => this.hide());

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (this._config.keyboard && event.key === ESCAPE_KEY) {
          this.hide();
        }
      });
    }

    // Static

    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config](this);
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return
    }

    EventHandler.one(target, EVENT_HIDDEN$2, () => {
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    });

    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
    }

    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });

  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () =>
    SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show())
  );

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY$1 = '.data-api';

  const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };

  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;

  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';

  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_DROPDOWN$1 = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';

  const METHOD_OFFSET = 'offset';
  const METHOD_POSITION = 'position';

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
      this._config = this._getConfig(config);
      this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;

      EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());

      this.refresh();
      this._process();
    }

    // Getters

    static get Default() {
      return Default$1
    }

    static get NAME() {
      return NAME$2
    }

    // Public

    refresh() {
      const autoMethod = this._scrollElement === this._scrollElement.window ?
        METHOD_OFFSET :
        METHOD_POSITION;

      const offsetMethod = this._config.method === 'auto' ?
        autoMethod :
        this._config.method;

      const offsetBase = offsetMethod === METHOD_POSITION ?
        this._getScrollTop() :
        0;

      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();

      const targets = SelectorEngine.find(this._selector);

      targets.map(element => {
        const targetSelector = getSelectorFromElement(element);
        const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          const targetBCR = target.getBoundingClientRect();
          if (targetBCR.width || targetBCR.height) {
            return [
              Manipulator[offsetMethod](target).top + offsetBase,
              targetSelector
            ]
          }
        }

        return null
      })
        .filter(item => item)
        .sort((a, b) => a[0] - b[0])
        .forEach(item => {
          this._offsets.push(item[0]);
          this._targets.push(item[1]);
        });
    }

    dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2);
      super.dispose();
    }

    // Private

    _getConfig(config) {
      config = {
        ...Default$1,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };

      if (typeof config.target !== 'string' && isElement(config.target)) {
        let { id } = config.target;
        if (!id) {
          id = getUID(NAME$2);
          config.target.id = id;
        }

        config.target = `#${id}`;
      }

      typeCheckConfig(NAME$2, config, DefaultType$1);

      return config
    }

    _getScrollTop() {
      return this._scrollElement === window ?
        this._scrollElement.pageYOffset :
        this._scrollElement.scrollTop
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
    }

    _getOffsetHeight() {
      return this._scrollElement === window ?
        window.innerHeight :
        this._scrollElement.getBoundingClientRect().height
    }

    _process() {
      const scrollTop = this._getScrollTop() + this._config.offset;
      const scrollHeight = this._getScrollHeight();
      const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        const target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return
      }

      for (let i = this._offsets.length; i--;) {
        const isActiveTarget = this._activeTarget !== this._targets[i] &&
            scrollTop >= this._offsets[i] &&
            (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }

    _activate(target) {
      this._activeTarget = target;

      this._clear();

      const queries = this._selector.split(',')
        .map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);

      const link = SelectorEngine.findOne(queries.join(','));

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1))
          .classList.add(CLASS_NAME_ACTIVE$1);

        link.classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        // Set triggered link as active
        link.classList.add(CLASS_NAME_ACTIVE$1);

        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1)
          .forEach(listGroup => {
            // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`)
              .forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));

            // Handle special case when .nav-link is inside .nav-item
            SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS)
              .forEach(navItem => {
                SelectorEngine.children(navItem, SELECTOR_NAV_LINKS)
                  .forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
              });
          });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }

    _clear() {
      SelectorEngine.find(this._selector)
        .filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1))
        .forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
    }

    // Static

    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]();
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    SelectorEngine.find(SELECTOR_DATA_SPY)
      .forEach(spy => new ScrollSpy(spy));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'bs.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const DATA_API_KEY = '.data-api';

  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;

  const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';

  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ACTIVE_UL = ':scope > li > .active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab extends BaseComponent {
    // Getters

    static get NAME() {
      return NAME$1
    }

    // Public

    show() {
      if ((this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(CLASS_NAME_ACTIVE))) {
        return
      }

      let previous;
      const target = getElementFromSelector(this._element);
      const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

      if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      const hideEvent = previous ?
        EventHandler.trigger(previous, EVENT_HIDE$1, {
          relatedTarget: this._element
        }) :
        null;

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || (hideEvent !== null && hideEvent.defaultPrevented)) {
        return
      }

      this._activate(this._element, listElement);

      const complete = () => {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
          relatedTarget: this._element
        });
        EventHandler.trigger(this._element, EVENT_SHOWN$1, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    }

    // Private

    _activate(element, container, callback) {
      const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ?
        SelectorEngine.find(SELECTOR_ACTIVE_UL, container) :
        SelectorEngine.children(container, SELECTOR_ACTIVE);

      const active = activeElements[0];
      const isTransitioning = callback && (active && active.classList.contains(CLASS_NAME_FADE$1));

      const complete = () => this._transitionComplete(element, active, callback);

      if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);
        this._queueCallback(complete, element, true);
      } else {
        complete();
      }
    }

    _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);

        const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE);
      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      let parent = element.parentNode;
      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        const dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement)
            .forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    }

    // Static

    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }

          data[config]();
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return
    }

    const data = Tab.getOrCreateInstance(this);
    data.show();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;

  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;

  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';

  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };

  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };

  const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element);

      this._config = this._getConfig(config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }

    // Getters

    static get DefaultType() {
      return DefaultType
    }

    static get Default() {
      return Default
    }

    static get NAME() {
      return NAME
    }

    // Public

    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        this._element.classList.add(CLASS_NAME_SHOW);

        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return
      }

      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.classList.remove(CLASS_NAME_SHOW);
      this._queueCallback(complete, this._element, this._config.animation);
    }

    dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      super.dispose();
    }

    // Private

    _getConfig(config) {
      config = {
        ...Default,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };

      typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config
    }

    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return
      }

      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }

    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = isInteracting;
          break
        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = isInteracting;
          break
      }

      if (isInteracting) {
        this._clearTimeout();
        return
      }

      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return
      }

      this._maybeScheduleHide();
    }

    _setListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, () => this.hide());
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }

    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }

    // Static

    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }

          data[config](this);
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Toast);

  var navbar = function navbar() {
    console.log('navbar');
  };

  // Bootstrap modules

  document.addEventListener("DOMContentLoaded", function () {
    navbar();
    console.log('test.js');
  });

})));
//# sourceMappingURL=scripts.bundle.js.map
