/*!
  * Bootstrap v2.0.0
  * Copyright 2011-2021 [object Object]
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var global = require('../internals/global');
  var DOMIterables = require('../internals/dom-iterables');
  var forEach = require('../internals/array-for-each');
  var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

  for (var COLLECTION_NAME in DOMIterables) {
    var Collection = global[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  }

  var $$7 = require('../internals/export');
  var from = require('../internals/array-from');
  var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$7({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from
  });

  var charAt = require('../internals/string-multibyte').charAt;
  var toString$3 = require('../internals/to-string');
  var InternalStateModule = require('../internals/internal-state');
  var defineIterator = require('../internals/define-iterator');

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState(this, {
      type: STRING_ITERATOR,
      string: toString$3(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';

  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase()
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
      return document.querySelector(obj)
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

  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */
  const reflow = element => {
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
  };

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
   * Bootstrap (v5.1.0): dom/event-handler.js
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
   * Bootstrap (v5.1.0): dom/data.js
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
   * Bootstrap (v5.1.0): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const VERSION = '5.1.0';

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
      return Data.get(getElement(element), this.DATA_KEY)
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
   * Bootstrap (v5.1.0): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;

    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return
      }

      const target = getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): alert.js
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

  const EVENT_CLOSE = `close${EVENT_KEY$7}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$7}`;
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

    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return
      }

      this._element.classList.remove(CLASS_NAME_SHOW$6);

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$4);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }

    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }

    // Static

    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);

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

  enableDismissTrigger(Alert, 'close');
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): dom/manipulator.js
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
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
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
   * Bootstrap (v5.1.0): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
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
    },

    focusableChildren(element) {
      const focusables = [
        'a',
        'button',
        'input',
        'textarea',
        'select',
        'details',
        '[tabindex]',
        '[contenteditable="true"]'
      ].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');

      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el))
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$7 = 'collapse';
  const DATA_KEY$6 = 'bs.collapse';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$4 = '.data-api';

  const Default$6 = {
    toggle: true,
    parent: null
  };

  const DefaultType$6 = {
    toggle: 'boolean',
    parent: '(null|element)'
  };

  const EVENT_SHOW$4 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$6}`;
  const EVENT_HIDE$4 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$4}`;

  const CLASS_NAME_SHOW$5 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';

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
      this._triggerArray = [];

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

      this._initializeChildren();

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // Getters

    static get Default() {
      return Default$6
    }

    static get NAME() {
      return NAME$7
    }

    // Public

    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (this._isTransitioning || this._isShown()) {
        return
      }

      let actives = [];
      let activesData;

      if (this._config.parent) {
        const children = SelectorEngine.find(`.${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`, this._config.parent);
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
      }

      const container = SelectorEngine.findOne(this._selector);
      if (actives.length) {
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

      actives.forEach(elemActive => {
        if (container !== elemActive) {
          Collapse.getOrCreateInstance(elemActive, { toggle: false }).hide();
        }

        if (!activesData) {
          Data.set(elemActive, DATA_KEY$6, null);
        }
      });

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$5);

        this._element.style[dimension] = '';

        EventHandler.trigger(this._element, EVENT_SHOWN$4);
      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._isShown()) {
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
      for (let i = 0; i < triggerArrayLength; i++) {
        const trigger = this._triggerArray[i];
        const elem = getElementFromSelector(trigger);

        if (elem && !this._isShown(elem)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }

    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$5)
    }

    // Private

    _getConfig(config) {
      config = {
        ...Default$6,
        ...Manipulator.getDataAttributes(this._element),
        ...config
      };
      config.toggle = Boolean(config.toggle); // Coerce string values
      config.parent = getElement(config.parent);
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config
    }

    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT
    }

    _initializeChildren() {
      if (!this._config.parent) {
        return
      }

      const children = SelectorEngine.find(`.${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`, this._config.parent);
      SelectorEngine.find(SELECTOR_DATA_TOGGLE$3, this._config.parent).filter(elem => !children.includes(elem))
        .forEach(element => {
          const selected = getElementFromSelector(element);

          if (selected) {
            this._addAriaAndCollapsedClass([element], this._isShown(selected));
          }
        });
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return
      }

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

    static jQueryInterface(config) {
      return this.each(function () {
        const _config = {};
        if (typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        const data = Collapse.getOrCreateInstance(this, _config);

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

  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || (event.delegateTarget && event.delegateTarget.tagName === 'A')) {
      event.preventDefault();
    }

    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);

    selectorElements.forEach(element => {
      Collapse.getOrCreateInstance(element, { toggle: false }).toggle();
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
   * Bootstrap (v5.1.0): util/scrollBar.js
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
   * Bootstrap (v5.1.0): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  const Default$5 = {
    className: 'modal-backdrop',
    isVisible: true, // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body', // give the choice to place backdrop under different elements
    clickCallback: null
  };

  const DefaultType$5 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
  };
  const NAME$6 = 'backdrop';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';

  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$6}`;

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
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$3);
        }

        this._element = backdrop;
      }

      return this._element
    }

    _getConfig(config) {
      config = {
        ...Default$5,
        ...(typeof config === 'object' ? config : {})
      };

      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config
    }

    _append() {
      if (this._isAppended) {
        return
      }

      this._config.rootElement.append(this._getElement());

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
   * Bootstrap (v5.1.0): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  const Default$4 = {
    trapElement: null, // The element to trap focus inside of
    autofocus: true
  };

  const DefaultType$4 = {
    trapElement: 'element',
    autofocus: 'boolean'
  };

  const NAME$5 = 'focustrap';
  const DATA_KEY$5 = 'bs.focustrap';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;

  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';

  class FocusTrap {
    constructor(config) {
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    activate() {
      const { trapElement, autofocus } = this._config;

      if (this._isActive) {
        return
      }

      if (autofocus) {
        trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN$1, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));

      this._isActive = true;
    }

    deactivate() {
      if (!this._isActive) {
        return
      }

      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }

    // Private

    _handleFocusin(event) {
      const { target } = event;
      const { trapElement } = this._config;

      if (
        target === document ||
        target === trapElement ||
        trapElement.contains(target)
      ) {
        return
      }

      const elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }

    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }

    _getConfig(config) {
      config = {
        ...Default$4,
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$5, config, DefaultType$4);
      return config
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): modal.js
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
  const EVENT_RESIZE = `resize${EVENT_KEY$4}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
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
      this._focustrap = this._initializeFocusTrap();
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

      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
          if (event.target === this._element) {
            this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(() => this._showElement(relatedTarget));
    }

    hide() {
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

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$3);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      this._queueCallback(() => this._hideModal(), this._element, isAnimated);
    }

    dispose() {
      [window, this._dialog]
        .forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$4));

      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
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

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
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
        document.body.append(this._element);
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

      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }

        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, isAnimated);
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
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, event => {
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

  enableDismissTrigger(Modal);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): offcanvas.js
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
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';

  const EVENT_SHOW$2 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$2 = `shown${EVENT_KEY$3}`;
  const EVENT_HIDE$2 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$2}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;

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
      this._focustrap = this._initializeFocusTrap();
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
      }

      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOW$2);

      const completeCallBack = () => {
        if (!this._config.scroll) {
          this._focustrap.activate();
        }

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

      this._focustrap.deactivate();
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
      this._focustrap.deactivate();
      super.dispose();
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
        className: CLASS_NAME_BACKDROP,
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      })
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      })
    }

    _addEventListeners() {
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

  enableDismissTrigger(Offcanvas);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.0): scrollspy.js
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
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}, .${CLASS_NAME_DROPDOWN_ITEM}`;
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

      const targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);

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

      config.target = getElement(config.target) || document.documentElement;

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

      const queries = SELECTOR_LINK_ITEMS.split(',')
        .map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);

      const link = SelectorEngine.findOne(queries.join(','), this._config.target);

      link.classList.add(CLASS_NAME_ACTIVE$1);
      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1))
          .classList.add(CLASS_NAME_ACTIVE$1);
      } else {
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
      SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target)
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
   * Bootstrap (v5.1.0): tab.js
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
   * Bootstrap (v5.1.0): toast.js
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

  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;

  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
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
        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW);
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
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
        this._element.classList.remove(CLASS_NAME_SHOWING);
        this._element.classList.remove(CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.classList.add(CLASS_NAME_SHOWING);
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

  enableDismissTrigger(Toast);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Toast);

  var $$6 = require('../internals/export');
  var $padStart = require('../internals/string-pad').start;
  var WEBKIT_BUG = require('../internals/string-pad-webkit-bug');

  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  $$6({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
    padStart: function padStart(maxLength /* , fillString = ' ' */) {
      return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  /** 
   * Global helper functions to help maintain and enhance framework elements.
   * @module Helpers 
   */

  /**
   * Add global classes used by the CSS and later JavaScript.
   * @param {HTMLElement} body Dom element, this doesn't have to be the body but it is recommended.
   */
  var addBodyClasses = function addBodyClasses(body) {
    body.classList.add("js-enabled");

    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
      body.classList.add("ie");
    }

    return null;
  };
  /**
   * Check if an element contains certain elements that needs enhancing with the JavaScript helpers, it is recommended to do this on the page body after the dom is loaded. Elements that are loaded via ajax should also run this function. 
   * @param {HTMLElement} element Dom element, this doesn't have to be the body but it is recommended.
   */


  var checkElements = function checkElements(element) {
    // Tables
    Array.from(element.querySelectorAll('table')).forEach(function (table, index) {
      tableStacked(table);
      tableWrap(table);
    });
  };
  /**
   * Wrap tables with a table wrapper div to help maintain its responsive design.
   * @param {HTMLElement} table Dom table element
   */


  var tableWrap = function tableWrap(table) {
    if (!table.parentNode.classList.contains('table__wrapper')) {
      var tableHTML = table.outerHTML;
      table.outerHTML = "<div class=\"table__wrapper\">".concat(tableHTML, "</div>");
    }
  };
  /**
   * Creates data attributes to be used by the CSS for mobile views.
   * @param {HTMLElement} table Dom table element
   */


  var tableStacked = function tableStacked(table) {
    var colHeadings = Array.from(table.querySelectorAll('thead th'));
    var colRows = Array.from(table.querySelectorAll('tbody tr'));
    colRows.forEach(function (row, index) {
      var cells = Array.from(row.querySelectorAll('th, td'));
      cells.forEach(function (cell, cellIndex) {
        var heading = colHeadings[cellIndex];

        if (typeof heading != "undefined") {
          var tempDiv = document.createElement("div");
          tempDiv.innerHTML = heading.innerHTML;
          var headingText = tempDiv.textContent || tempDiv.innerText || "";
          cell.setAttribute('data-label', headingText);
        }
      });
    });
  };

  var isNumeric = function isNumeric(str) {
    if (typeof str != "string") return false; // we only process strings!  

    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
  };

  var zeroPad = function zeroPad(num, places) {
    return String(num).padStart(places, '0');
  };

  var navbar = function navbar() {
    console.log('navbar');
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
  var redefine$1 = require('../internals/redefine');
  var toString$2 = require('../internals/object-to-string');

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    redefine$1(Object.prototype, 'toString', toString$2, { unsafe: true });
  }

  var redefine = require('../internals/redefine');
  var anObject$1 = require('../internals/an-object');
  var $toString = require('../internals/to-string');
  var fails$4 = require('../internals/fails');
  var flags = require('../internals/regexp-flags');

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails$4(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$1(this);
      var p = $toString(R.source);
      var rf = R.flags;
      var f = $toString(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  var $$5 = require('../internals/export');
  var aFunction = require('../internals/a-function');
  var toObject$2 = require('../internals/to-object');
  var toLength$2 = require('../internals/to-length');
  var toString$1 = require('../internals/to-string');
  var fails$3 = require('../internals/fails');
  var internalSort = require('../internals/array-sort');
  var arrayMethodIsStrict$1 = require('../internals/array-method-is-strict');
  var FF = require('../internals/engine-ff-version');
  var IE_OR_EDGE = require('../internals/engine-is-ie-or-edge');
  var V8 = require('../internals/engine-v8-version');
  var WEBKIT = require('../internals/engine-webkit-version');

  var test = [];
  var nativeSort = test.sort;

  // IE8-
  var FAILS_ON_UNDEFINED = fails$3(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$3(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD$1 = arrayMethodIsStrict$1('sort');

  var STABLE_SORT = !fails$3(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;

    var result = '';
    var code, chr, value, index;

    // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66: case 69: case 70: case 72: value = 3; break;
        case 68: case 71: value = 4; break;
        default: value = 2;
      }

      for (index = 0; index < 47; index++) {
        test.push({ k: chr + index, v: value });
      }
    }

    test.sort(function (a, b) { return b.v - a.v; });

    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });

  var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$1(x) > toString$1(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$5({ target: 'Array', proto: true, forced: FORCED$1 }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aFunction(comparefn);

      var array = toObject$2(this);

      if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);

      var items = [];
      var arrayLength = toLength$2(array.length);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) items.push(array[index]);
      }

      items = internalSort(items, getSortCompare(comparefn));
      itemsLength = items.length;
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) delete array[index++];

      return array;
    }
  });

  var $$4 = require('../internals/export');
  var fails$2 = require('../internals/fails');
  var isArray = require('../internals/is-array');
  var isObject = require('../internals/is-object');
  var toObject$1 = require('../internals/to-object');
  var toLength$1 = require('../internals/to-length');
  var createProperty = require('../internals/create-property');
  var arraySpeciesCreate = require('../internals/array-species-create');
  var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
  var wellKnownSymbol$1 = require('../internals/well-known-symbol');
  var V8_VERSION = require('../internals/engine-v8-version');

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$1('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$2(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$4({ target: 'Array', proto: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$1(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = toLength$1(E.length);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var $$3 = require('../internals/export');
  var IndexedObject = require('../internals/indexed-object');
  var toIndexedObject = require('../internals/to-indexed-object');
  var arrayMethodIsStrict = require('../internals/array-method-is-strict');

  var nativeJoin = [].join;

  var ES3_STRINGS = IndexedObject != Object;
  var STRICT_METHOD = arrayMethodIsStrict('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$3({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  var $$2 = require('../internals/export');
  var $map = require('../internals/array-iteration').map;
  var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$2({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$1 = require('../internals/export');
  var toObject = require('../internals/to-object');
  var nativeKeys = require('../internals/object-keys');
  var fails$1 = require('../internals/fails');

  var FAILS_ON_PRIMITIVES = fails$1(function () { nativeKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$1({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return nativeKeys(toObject(it));
    }
  });

  var $ = require('../internals/export');
  var exec = require('../internals/regexp-exec');

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
    exec: exec
  });

  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
  var fails = require('../internals/fails');
  var anObject = require('../internals/an-object');
  var toInteger = require('../internals/to-integer');
  var toLength = require('../internals/to-length');
  var toString = require('../internals/to-string');
  var requireObjectCoercible = require('../internals/require-object-coercible');
  var advanceStringIndex = require('../internals/advance-string-index');
  var getSubstitution = require('../internals/get-substitution');
  var regExpExec = require('../internals/regexp-exec-abstract');
  var wellKnownSymbol = require('../internals/well-known-symbol');

  var REPLACE = wellKnownSymbol('replace');
  var max = Math.max;
  var min = Math.min;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(toString(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString(string);

        if (
          typeof replaceValue === 'string' &&
          replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
          replaceValue.indexOf('$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = toString(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = toString(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString(result[0]);
          var position = max(min(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = toString(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  function table(tableElement) {
    if (_typeof(tableElement) != "object") return false;
    var thead = tableElement.querySelector('thead');
    var tbody = tableElement.querySelector('tbody');
    var storedData = tbody.cloneNode(true);
    var sortedEvent = new Event('sorted');
    var filteredEvent = new Event('filtered');
    var randID = 'tabe_' + Math.random().toString(36).substr(2, 9); // Random to make sure IDs created are unique

    var draggedRow;
    tableElement.setAttribute('id', randID); // #region Sortable

    var sortTable = function sortTable(sortBy, sort) {
      // Create an array from the table rows, the index created is then used to sort the array
      var tableArr = [];
      Array.from(tbody.querySelectorAll('tr')).forEach(function (tableRow, index) {
        var rowIndex = tableRow.querySelector('td[data-label="' + sortBy + '"], th[data-label="' + sortBy + '"]').textContent;
        if (isNumeric(rowIndex)) rowIndex = zeroPad(rowIndex, 10);
        var dataRow = {
          index: rowIndex,
          row: tableRow
        };
        tableArr.push(dataRow);
      }); // Sort array

      tableArr.sort(function (a, b) {
        return a.index > b.index ? 1 : -1;
      }); // Reverse if descending

      if (sort == "descending") tableArr = tableArr.reverse(); // Create a string to return and populate the tbody

      var strTbody = '';
      tableArr.forEach(function (tableRow, index) {
        strTbody += tableRow.row.outerHTML;
      });
      tbody.innerHTML = strTbody; // Dispatch the sortable event

      tableElement.dispatchEvent(sortedEvent);
    }; // Declare event handlers


    tableElement.addEventListener('click', function (e) {
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('[data-sortable]')) {
          // Get current sort order
          var sort = target.getAttribute('aria-sort') == "ascending" ? "descending" : "ascending"; // unset sort attributes

          Array.from(tableElement.querySelectorAll('[data-sortable]')).forEach(function (col, index) {
            col.setAttribute('aria-sort', 'none');
          }); // Set the sort order attribute

          target.setAttribute('aria-sort', sort); // Save the sort options on the table element so that it can be re-sorted later

          tableElement.setAttribute('data-sort', sort);
          tableElement.setAttribute('data-sortBy', target.textContent); // Sort the table

          sortTable(target.textContent, sort);
          Array.from(tableElement.querySelectorAll('tr[draggable]')).forEach(function (tableRow, index) {
            tableRow.removeAttribute('draggable');
          });
          break;
        }
      }
    }, false); // On page load check if the table should be pre-sorted, if so trigger a click

    if (tableElement.getAttribute('data-sortBy')) {
      var sort = tableElement.getAttribute('data-sort') == "ascending" ? "descending" : "ascending";
      Array.from(tableElement.querySelectorAll('[data-sortable]')).forEach(function (col, index) {
        if (col.textContent == tableElement.getAttribute('data-sortBy')) {
          col.setAttribute('aria-sort', sort);
          col.click();
        }
      });
    } // #endregion Sortable
    // #region Filters


    var createFilterForm = function createFilterForm(count) {
      // Create wrapper div
      var form = document.createElement("div");
      form.classList.add('table__filters');
      form.classList.add('row');
      form.classList.add('pt-1');
      form.classList.add('pb-3'); // Create the filter options array

      var filterColumns = Array.from(tableElement.querySelectorAll('th[data-filterable]')); // Populate a list of searchable terms from the cells of the columns that could be used as a filter

      var searchableTerms = {};
      filterColumns.forEach(function (columnHeading, index) {
        Array.from(tableElement.querySelectorAll('td[data-label="' + columnHeading.textContent + '"]')).forEach(function (label, index) {
          searchableTerms[label.textContent] = label.textContent;
        });
      }); // Create the form

      var filterTitle = filterColumns.length == 1 ? "Filter by " + filterColumns[0].textContent : "Filter"; // Update title if only one filter is chosen

      var checkboxClass = filterColumns.length == 1 ? "d-none" : "d-sm-flex"; // Hide controls when only one filter is chosen

      form.innerHTML = "<div class=\"col-sm-6 col-md-4 pb-3\">\n  <div class=\"form-control__wrapper form-control-inline mb-0\">\n    <label for=\"".concat(randID, "_filter\" class=\"form-label\">").concat(filterTitle, ":</label>\n    <input type=\"search\" name=\"").concat(randID, "_filter\" id=\"").concat(randID, "_filter\" class=\"form-control form-control-sm\" placeholder=\"\" list=\"").concat(randID, "_list\" />\n  </div>\n  <datalist id=\"").concat(randID, "_list\">\n    ").concat(Object.keys(searchableTerms).map(function (term) {
        return "<option value=\"".concat(term, "\"></option>");
      }).join(""), "\n  </datalist>\n</div>\n<div class=\"col-md-8 align-items-center pb-3 ").concat(checkboxClass, "\">\n  ").concat("<span class=\"pe-3 text-nowrap\">Filter by: </span>" + filterColumns.map(function (column) {
        return "<div class=\"form-check pe-3\"><input class=\"form-check-input\" type=\"checkbox\" id=\"".concat(randID, "_").concat(column.textContent.replace(' ', '_').toLowerCase(), "\" checked=\"checked\" /><label class=\"form-check-label text-nowrap\" for=\"").concat(randID, "_").concat(column.textContent.replace(' ', '_').toLowerCase(), "\">").concat(column.textContent, "</label></div>");
      }).join(""), "\n</div>"); // Add before the actual table

      tableElement.prepend(form);
    };

    var filterTable = function filterTable(searchTerm) {
      // Create an array of rows that match the search term
      var tableArr = [];
      Array.from(storedData.querySelectorAll('tr')).forEach(function (tableRow, index) {
        // We want one long search string per row including each filterable table cell
        var rowSearchString = '';
        Array.from(tableElement.querySelectorAll('[type="checkbox"]:checked + label')).forEach(function (label, index) {
          rowSearchString += tableRow.querySelector('td[data-label="' + label.textContent + '"]').textContent + ' | ';
        }); // Check if the table row search string contains the search term

        if (rowSearchString.indexOf(searchTerm) >= 0) {
          var dataRow = {
            row: tableRow
          };
          tableArr.push(dataRow);
        }
      }); // Create a string to return and populate the tbody

      var strTbody = '';
      tableArr.forEach(function (tableRow, index) {
        strTbody += tableRow.row.outerHTML;
      });
      tbody.innerHTML = strTbody; // Dispatch the filter event.

      tableElement.dispatchEvent(filteredEvent);
    };

    var createFilterList = function createFilterList() {
      // Check which options are checked
      var filterOptions = [];
      Array.from(tableElement.querySelectorAll('[type="checkbox"]:checked + label')).forEach(function (label, index) {
        filterOptions.push(label.textContent);
      }); // Build up the list of searchable terms

      var searchableTerms = [];
      filterOptions.forEach(function (option, index) {
        Array.from(tableElement.querySelectorAll('td[data-label="' + option + '"]')).forEach(function (label, index) {
          searchableTerms[label.textContent] = label.textContent;
        });
      }); // Rebuild the list

      var dataList = tableElement.querySelector('datalist');
      dataList.innerHTML = Object.keys(searchableTerms).map(function (term) {
        return "<option value=\"".concat(term, "\"></option>");
      }).join("");
    }; // On page load check if filters are needed


    if (Array.from(tableElement.querySelectorAll('[data-filterable]')).length) {
      // Create the filter options
      createFilterForm(tableElement, Array.from(tableElement.querySelectorAll('[data-filterable]')).length); // Add event handlers for the filter options

      tableElement.addEventListener('keyup', function (e) {
        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('input[type="search"]')) {
            var searchTerm = target.value;
            filterTable(searchTerm);
          }
        }
      });
      tableElement.addEventListener('change', function (e) {
        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('input[type="search"]')) {
            var searchTerm = target.value;
            filterTable(searchTerm);
          }
        }
      });
      tableElement.addEventListener('change', function (e) {
        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('input[type="checkbox"]')) {
            var searchTerm = tableElement.querySelector('input[type="search"]').value;
            filterTable(searchTerm);
            createFilterList();
          }
        }
      });
    } // #endregion Filters
    // #region Pagination


    var paginateRows = function paginateRows(show, page) {
      // Create some inline CSS to control what is viewed on the table, unline the filters we are just hiding the rable rows not removing them from the DOM.
      var style = document.getElementById(randID + '_style');

      if (style == null) {
        style = document.createElement("style");
        style.setAttribute('id', randID + '_style');
      }

      var startShowing = show * (page - 1) + 1;
      var stopShowing = show * page;
      style.innerHTML = "\n    #".concat(randID, " tbody tr {\n      display: none;\n    }\n    #").concat(randID, " tbody tr:nth-child(").concat(startShowing, "),\n    #").concat(randID, " tbody tr:nth-child(").concat(startShowing, ") ~ tr{\n      display: table-row;\n    }\n    #").concat(randID, " tbody tr:nth-child(").concat(stopShowing, ") ~ tr{\n      display: none;\n    }\n    ");
      tableElement.append(style);
    };

    var createPaginationForm = function createPaginationForm(show, page, totalRows) {
      var form = document.createElement("div");
      form.classList.add('table__pagination');
      form.classList.add('row');
      form.classList.add('pt-3');
      form.classList.add('pb-3'); // Create the form and create a container div to hold the pagination buttons

      form.innerHTML = "<div class=\"col-6 col-sm-3 col-md-2 mb-3\">\n  <div class=\"form-control__wrapper form-control-inline mb-0\">\n    <label for=\"".concat(randID, "_showing\" class=\"form-label\">Showing:</label>\n    <input type=\"number\" name=\"").concat(randID, "_showing\" id=\"").concat(randID, "_showing\" class=\"form-control form-control-sm\" placeholder=\"\" list=\"").concat(randID, "_pagination\" value=\"").concat(show, "\" min=\"1\" max=\"").concat(totalRows, "\" />\n  </div>\n  <datalist id=\"").concat(randID, "_pagination\">\n  <option value=\"5\">5</option>\n  ").concat(totalRows > 10 ? "<option value=\"10\">10</option>" : '', "\n  ").concat(totalRows > 20 ? "<option value=\"20\">20</option>" : '', "\n  <option value=\"").concat(totalRows, "\">").concat(totalRows, "</option>\n  </datalist>\n</div>\n<div class=\"col-6 col-sm-2 col-md-2 d-flex align-items-center mb-3\"><span class=\"label\">per page</span></div>\n<div class=\"col-sm-7 col-md-8 d-sm-flex justify-content-end align-items-center mb-3\" id=\"").concat(randID, "_paginationBtns\"></div>"); // Add after the actual table

      tableElement.append(form);
    };

    var createPaginationButttons = function createPaginationButttons(show, page, totalRows) {
      var paginationButtonsWrapper = document.getElementById(randID + '_paginationBtns');
      if (paginationButtonsWrapper == null) return false;
      var numberPages = Math.ceil(totalRows / show);

      if (numberPages == 1) {
        // Remore the buttons or dont display any if we dont need them
        paginationButtonsWrapper.innerHTML = '';
      } else if (numberPages < 5) {
        // If less than 5 pages (which fits comfortably on mobile) we display buttons
        var strButtons = '';

        for (var i = 1; i <= numberPages; i++) {
          if (i == page) strButtons += "<li class=\"page-item active\" aria-current=\"page\"><span class=\"page-link\">".concat(i, "</span></li>");else strButtons += "<li class=\"page-item\"><button class=\"page-link\" data-page=\"".concat(i, "\">").concat(i, "</button></li>");
        }

        paginationButtonsWrapper.innerHTML = "<span class=\"pe-2\">Page: </span><ul class=\"pagination mb-0\">\n        ".concat(page == 1 ? "<li class=\"page-item disabled\"><span class=\"page-link\">Previous</span></li>" : "<li class=\"page-item\"><button class=\"page-link\" data-page=\"".concat(parseInt(page) - 1, "\">Previous</button></li>"), "\n        ").concat(strButtons, "\n        ").concat(page == numberPages ? "<li class=\"page-item disabled\"><span class=\"page-link\">Next</span></li>" : "<li class=\"page-item\"><button class=\"page-link\" data-page=\"".concat(parseInt(page) + 1, "\">Next</button></li>"), "\n      </ul>");
      } else {
        // If more than 5 lets show a select field instead so that we dont have loads and loads of buttons
        var strOptions = '';

        for (var _i = 1; _i <= numberPages; _i++) {
          if (_i == page) strOptions += "<option value=\"".concat(_i, "\" selected>Page ").concat(_i, "</option>");else strOptions += "<option value=\"".concat(_i, "\">Page ").concat(_i, "</option>");
        }

        paginationButtonsWrapper.innerHTML = "\n<select class=\"form-select mb-3\">\n  ".concat(strOptions, "\n</select>\n      ");
      }
    }; // On page load check if the table should be paginated


    if (tableElement.getAttribute('data-show')) {
      var show = parseInt(tableElement.getAttribute('data-show'));
      var page = parseInt(tableElement.getAttribute('data-page')) ? parseInt(tableElement.getAttribute('data-page')) : 1;
      var totalRows = tableElement.querySelectorAll('tbody tr').length;

      if (show < totalRows) {
        paginateRows(show, page);
        createPaginationForm(show, page, totalRows);
        createPaginationButttons(show, page, totalRows);
        tableElement.addEventListener('change', function (e) {
          for (var target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches('.table__pagination input[type="number"]')) {
              paginateRows(target.value, page);
              createPaginationButttons(target.value, page, totalRows);
              tableElement.setAttribute('data-show', target.value);
            }
          }
        });
        tableElement.addEventListener('click', function (e) {
          for (var target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches('.page-item:not(.active):not(.disabled) .page-link')) {
              paginateRows(tableElement.getAttribute('data-show'), target.getAttribute('data-page'));
              createPaginationButttons(tableElement.getAttribute('data-show'), target.getAttribute('data-page'), totalRows);
            }
          }
        }, false);
        tableElement.addEventListener('change', function (e) {
          for (var target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches('.table__pagination select')) {
              paginateRows(tableElement.getAttribute('data-show'), target.value);
              createPaginationButttons(tableElement.getAttribute('data-show'), target.value, totalRows);
            }
          }
        });
      }
    } // #endregion Pagination
    // #region Reorderable
    // Set the row thats being dragged and copy the row


    function setDraggedRow(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      draggedRow = e.target;
      e.target.classList.add('tr--dragging');
    } // Create the order column and event handler for rows


    var setReorderRows = function setReorderRows() {
      Array.from(tbody.querySelectorAll('tr')).forEach(function (tableRow, index) {
        // Create column if not already created
        if (tableRow.querySelector('[data-label="Order"]') == null) {
          var orderColumn = document.createElement('th');
          orderColumn.innerHTML = index + 1;
          orderColumn.setAttribute('data-label', 'Order');
          tableRow.prepend(orderColumn);
        } // Make draggable


        tableRow.setAttribute('id', randID + '_row_' + (index + 1));
        tableRow.setAttribute('data-order', index + 1);
        tableRow.setAttribute('draggable', 'true');
        tableRow.addEventListener("dragstart", setDraggedRow);
      });
    };

    if (tableElement.getAttribute('data-reorder')) {
      // Add column heading
      var orderHeading = document.createElement('th');
      orderHeading.innerHTML = 'Order';
      orderHeading.classList.add('table-order-reset');
      thead.querySelector('tr').prepend(orderHeading);
      setReorderRows(); // Reset order button

      tableElement.addEventListener('click', function (e) {
        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('.table-order-reset')) {
            // unset sort attributes
            Array.from(tableElement.querySelectorAll('[data-sortable]')).forEach(function (col, index) {
              col.setAttribute('aria-sort', 'none');
            }); // Save the sort options on the table element so that it can be re-sorted later

            tableElement.removeAttribute('data-sort');
            tableElement.removeAttribute('data-sortBy'); // Sort the table

            sortTable('Order', 'ascending');
            Array.from(tableElement.querySelectorAll('tbody tr')).forEach(function (tableRow, index) {
              tableRow.setAttribute('draggable', 'true');
            });
            break;
          }
        }
      }, false);
      document.addEventListener("dragover", function (e) {
        // prevent default to allow drop
        e.preventDefault();
      }, false);
      document.addEventListener("dragenter", function (e) {
        // prevent default to allow drop
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";

        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('[data-reorder] tbody tr')) {
            target.classList.add('tr--dropable');
          }
        }
      }, false);
      document.addEventListener("dragleave", function (e) {
        // prevent default to allow drop
        e.preventDefault();

        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('[data-reorder] tbody tr')) {
            target.classList.remove('tr--dropable');
          }
        }
      }, false);
      document.addEventListener("drop", function (e) {
        e.preventDefault();

        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('[data-reorder] tbody tr')) {
            if (target.parentNode != null && draggedRow.parentNode != null && target != draggedRow) {
              draggedRow.parentNode.removeChild(draggedRow);
              if (draggedRow.getAttribute('data-order') > target.getAttribute('data-order')) target.parentNode.insertBefore(draggedRow, target);else target.parentNode.insertBefore(draggedRow, target.nextElementSibling); // Re label the rows

              Array.from(tbody.querySelectorAll('tr')).forEach(function (tableRowOrder, index) {
                tableRowOrder.classList.remove('tr--dragging');
                tableRowOrder.classList.remove('tr--dropable');
                tableRowOrder.querySelector('th').innerHTML = index + 1;
                tableRowOrder.setAttribute('data-order', index + 1);
              });
            }

            break;
          }
        }
      }, false);
    } // #endregion Reorderable
    // Watch for the filterable event and re-sort the tbody


    tableElement.addEventListener('filtered', function (e) {
      if (tableElement.getAttribute('data-sortBy') && tableElement.getAttribute('data-sort')) sortTable(tableElement.getAttribute('data-sortBy'), tableElement.getAttribute('data-sort'));

      if (tableElement.getAttribute('data-show')) {
        var _show = parseInt(tableElement.getAttribute('data-show'));

        var _totalRows = tableElement.querySelectorAll('tbody tr').length;
        var tablePagination = tableElement.querySelector('.table__pagination');
        if (tablePagination != null) tablePagination.remove();

        if (_show < _totalRows) {
          paginateRows(_show, 1);
          createPaginationForm(_show, 1, _totalRows);
          createPaginationButttons(_show, 1, _totalRows);
        }
      }

      if (tableElement.getAttribute('data-reorder')) {
        setReorderRows();
      }
    }, false);
    tableElement.addEventListener('sorted', function (e) {
      if (tableElement.getAttribute('data-reorder')) {
        setReorderRows();
      }
    }, false);
  }

  function accordion(accordionElement) {
    // Fetch all the details element.
    var details = accordionElement.querySelectorAll("details"); // Add the onclick listeners.

    details.forEach(function (targetDetail) {
      targetDetail.addEventListener("click", function () {
        // Close all the details that are not targetDetail.
        details.forEach(function (detail) {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });

    if (window.location.hash && document.querySelector(window.location.hash + ':not([open]) summary')) {
      var detail = document.querySelector(window.location.hash + ' summary');
      detail.click();
    }

    window.addEventListener('hashchange', function () {
      if (window.location.hash && document.querySelector(window.location.hash + ' summary')) {
        var _detail = document.querySelector(window.location.hash + ' summary');

        _detail.click();
      }
    });
  }

  function testimonial(testimonialElement) {
    var scrollTimeout;
    var imagesCarousel = testimonialElement.querySelector('.testimonial__images');
    var itemCount = imagesCarousel.querySelectorAll('img').length; // If we only have 1 item lets not bother doing anything else

    if (itemCount == 1) {
      return false;
    }

    testimonialElement.classList.add('testimonial--multi'); // Set where the buttons go to

    var setButtons = function setButtons(scrollTo) {
      var nextButton = testimonialElement.querySelector('.btn-next');
      var prevButton = testimonialElement.querySelector('.btn-prev');
      nextButton.setAttribute('data-go', scrollTo + 1);
      prevButton.setAttribute('data-go', scrollTo - 1);
      nextButton.removeAttribute('disabled');
      prevButton.removeAttribute('disabled');
      if (scrollTo == 1) prevButton.setAttribute('disabled', true);else if (scrollTo == itemCount) nextButton.setAttribute('disabled', true);
    }; // On scroll we need to make sure the buttons get corrected and the next testimonial is shown


    imagesCarousel.addEventListener('scroll', function (e) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        var scrollWidth = imagesCarousel.scrollWidth;
        var scrollHeight = imagesCarousel.scrollHeight;
        var scrollLeft = imagesCarousel.scrollLeft;
        var scrollDown = imagesCarousel.scrollTop;
        var scrollTo = Math.round(scrollLeft / scrollWidth * itemCount) + 1; // Change in scroll direction

        if (scrollLeft == 0 && scrollDown != 0) scrollTo = Math.round(scrollDown / scrollHeight * itemCount) + 1;
        testimonialElement.setAttribute('data-show', scrollTo);
        setButtons(scrollTo);
      }, 300);
    }, false); // when the buttons are used we need to make sure the carousel scrolls to the correct place

    testimonialElement.addEventListener('click', function (e) {
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('[data-go]')) {
          var scrollTo = parseInt(target.getAttribute('data-go'));
          var scrollDown = 0;
          var scrollLeft = 0;
          var scrollWidth = imagesCarousel.scrollWidth;
          var scrollHeight = imagesCarousel.scrollHeight;
          if (scrollWidth > scrollHeight) scrollLeft = Math.floor(scrollWidth * ((scrollTo - 1) / itemCount));else scrollDown = Math.floor(scrollHeight * ((scrollTo - 1) / itemCount)); // Trigger the scroll

          imagesCarousel.scroll({
            top: scrollDown,
            left: scrollLeft,
            behavior: 'smooth'
          });
          break;
        }
      }
    }, false);
  }

  function carousel(carouselElement) {
    var scrollTimeout;
    var carouselInner = carouselElement.querySelector('.carousel__inner');
    var itemCount = carouselElement.querySelectorAll('.carousel__item').length;
    carouselElement.querySelector('.carousel__controls a').classList.add('active'); // On scroll we need to make sure the buttons get corrected and the next testimonial is shown

    carouselInner.addEventListener('scroll', function (e) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        var scrollArea = carouselInner.clientWidth;
        var scrollWidth = carouselInner.scrollWidth;
        var scrollLeft = carouselInner.scrollLeft;
        var targetSlide = Math.round(scrollLeft / scrollWidth * itemCount) + 1;
        var lastItemOffset = carouselElement.querySelector('.carousel__item:last-child').offsetLeft;
        Array.from(carouselElement.querySelectorAll('.carousel__controls a')).forEach(function (link, index) {
          link.classList.remove('active');
        });
        carouselElement.querySelector('.control-' + targetSlide).classList.add('active'); // Disable the previous button

        if (targetSlide == 1) carouselElement.querySelector('.btn-prev').setAttribute('disabled', 'disabled');else carouselElement.querySelector('.btn-prev').removeAttribute('disabled'); // Disable the next button if the last item is in view

        if (carouselInner.scrollLeft + scrollArea > lastItemOffset) carouselElement.querySelector('.btn-next').setAttribute('disabled', 'disabled');else carouselElement.querySelector('.btn-next').removeAttribute('disabled');
      }, 100);
    }, false); // when the buttons are used we need to make sure the carousel scrolls to the correct place

    carouselElement.addEventListener('click', function (e) {
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('.carousel__controls a')) {
          e.preventDefault();
          Array.from(carouselElement.querySelectorAll('.carousel__controls a')).forEach(function (link, index) {
            link.classList.remove('active');
          });
          target.classList.add('active');
          var el = document.querySelector(target.getAttribute('href'));
          carouselInner.scroll({
            top: 0,
            left: el.offsetLeft,
            behavior: 'smooth'
          });
          break;
        }
      }
    }, false);
    carouselElement.addEventListener('click', function (e) {
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('.btn-next, .btn-prev')) {
          e.preventDefault();
          var scrollTo = target.classList.contains('btn-prev') ? carouselInner.scrollLeft - carouselInner.clientWidth : carouselInner.scrollLeft + carouselInner.clientWidth;
          carouselInner.scroll({
            top: 0,
            left: scrollTo,
            behavior: 'smooth'
          });
          break;
        }
      }
    }, false);
  }

  document.addEventListener("DOMContentLoaded", function () {
    addBodyClasses(document.body);
    checkElements(document.body);
    navbar();
    console.log('test.js'); // Advanced tables

    Array.from(document.querySelectorAll('.table__wrapper')).forEach(function (arrayElement, index) {
      table(arrayElement);
    }); // Accordions

    Array.from(document.querySelectorAll('.accordion')).forEach(function (arrayElement, index) {
      accordion(arrayElement);
    }); // Testimonial

    Array.from(document.querySelectorAll('.testimonial')).forEach(function (arrayElement, index) {
      testimonial(arrayElement);
    }); // Carousel

    Array.from(document.querySelectorAll('.carousel')).forEach(function (arrayElement, index) {
      carousel(arrayElement);
    });
  });

})));
//# sourceMappingURL=scripts.bundle.js.map
