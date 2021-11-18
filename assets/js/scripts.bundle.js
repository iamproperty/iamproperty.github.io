/*!
  * Bootstrap v2.1.0
  * Copyright 2011-2021 [object Object]
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
  var redefine$1 = require('../internals/redefine');
  var toString$3 = require('../internals/object-to-string');

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    redefine$1(Object.prototype, 'toString', toString$3, { unsafe: true });
  }

  var global$1 = require('../internals/global');
  var DOMIterables = require('../internals/dom-iterables');
  var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
  var forEach = require('../internals/array-for-each');
  var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    if (DOMIterables[COLLECTION_NAME]) {
      handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(DOMTokenListPrototype);

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
  var toString$2 = require('../internals/to-string');
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
      string: toString$2(iterated),
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

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  var navbar = function navbar(element) {
    Array.from(element.querySelectorAll('details')).forEach(function (detail, index) {
      detail.addEventListener('mouseenter', function (e) {
        if (window.matchMedia('(min-width: 62em)').matches) detail.setAttribute('open', 'true');
      }, false);
      detail.addEventListener('mouseleave', function (e) {
        if (window.matchMedia('(min-width: 62em)').matches) detail.removeAttribute('open');
      }, false);
    });
    var observer = new IntersectionObserver(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          e = _ref2[0];

      return e.target.classList.toggle("is-stuck", e.intersectionRatio < 1);
    }, {
      threshold: [1]
    });
    observer.observe(element);
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

  var uncurryThis$3 = require('../internals/function-uncurry-this');
  var PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER;
  var redefine = require('../internals/redefine');
  var anObject$1 = require('../internals/an-object');
  var isPrototypeOf = require('../internals/object-is-prototype-of');
  var $toString = require('../internals/to-string');
  var fails$4 = require('../internals/fails');
  var regExpFlags = require('../internals/regexp-flags');

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var n$ToString = RegExpPrototype[TO_STRING];
  var getFlags = uncurryThis$3(regExpFlags);

  var NOT_GENERIC = fails$4(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$1(this);
      var p = $toString(R.source);
      var rf = R.flags;
      var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  var $$5 = require('../internals/export');
  var uncurryThis$2 = require('../internals/function-uncurry-this');
  var aCallable = require('../internals/a-callable');
  var toObject$2 = require('../internals/to-object');
  var lengthOfArrayLike$1 = require('../internals/length-of-array-like');
  var toString$1 = require('../internals/to-string');
  var fails$3 = require('../internals/fails');
  var internalSort = require('../internals/array-sort');
  var arrayMethodIsStrict$1 = require('../internals/array-method-is-strict');
  var FF = require('../internals/engine-ff-version');
  var IE_OR_EDGE = require('../internals/engine-is-ie-or-edge');
  var V8 = require('../internals/engine-v8-version');
  var WEBKIT = require('../internals/engine-webkit-version');

  var test = [];
  var un$Sort = uncurryThis$2(test.sort);
  var push$1 = uncurryThis$2(test.push);

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
      if (comparefn !== undefined) aCallable(comparefn);

      var array = toObject$2(this);

      if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

      var items = [];
      var arrayLength = lengthOfArrayLike$1(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$1(items, array[index]);
      }

      internalSort(items, getSortCompare(comparefn));

      itemsLength = items.length;
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) delete array[index++];

      return array;
    }
  });

  var $$4 = require('../internals/export');
  var global = require('../internals/global');
  var fails$2 = require('../internals/fails');
  var isArray = require('../internals/is-array');
  var isObject = require('../internals/is-object');
  var toObject$1 = require('../internals/to-object');
  var lengthOfArrayLike = require('../internals/length-of-array-like');
  var createProperty = require('../internals/create-property');
  var arraySpeciesCreate = require('../internals/array-species-create');
  var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
  var wellKnownSymbol$1 = require('../internals/well-known-symbol');
  var V8_VERSION = require('../internals/engine-v8-version');

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$1('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
  var TypeError$1 = global.TypeError;

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
          len = lengthOfArrayLike(E);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var $$3 = require('../internals/export');
  var uncurryThis$1 = require('../internals/function-uncurry-this');
  var IndexedObject = require('../internals/indexed-object');
  var toIndexedObject = require('../internals/to-indexed-object');
  var arrayMethodIsStrict = require('../internals/array-method-is-strict');

  var un$Join = uncurryThis$1([].join);

  var ES3_STRINGS = IndexedObject != Object;
  var STRICT_METHOD = arrayMethodIsStrict('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$3({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
    join: function join(separator) {
      return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
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

  var apply = require('../internals/function-apply');
  var call = require('../internals/function-call');
  var uncurryThis = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
  var fails = require('../internals/fails');
  var anObject = require('../internals/an-object');
  var isCallable = require('../internals/is-callable');
  var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
  var toLength = require('../internals/to-length');
  var toString = require('../internals/to-string');
  var requireObjectCoercible = require('../internals/require-object-coercible');
  var advanceStringIndex = require('../internals/advance-string-index');
  var getMethod = require('../internals/get-method');
  var getSubstitution = require('../internals/get-substitution');
  var regExpExec = require('../internals/regexp-exec-abstract');
  var wellKnownSymbol = require('../internals/well-known-symbol');

  var REPLACE = wellKnownSymbol('replace');
  var max = Math.max;
  var min = Math.min;
  var concat = uncurryThis([].concat);
  var push = uncurryThis([].push);
  var stringIndexOf = uncurryThis(''.indexOf);
  var stringSlice = uncurryThis(''.slice);

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
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
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
        var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
        return replacer
          ? call(replacer, searchValue, O, replaceValue)
          : call(nativeReplace, toString(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
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

          push(results, result);
          if (!global) break;

          var matchStr = toString(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            var replacement = toString(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice(S, nextSourcePosition);
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
      }).join(""), "\n  </datalist>\n</div>\n<div class=\"col-md-8 align-items-center pb-3 ").concat(checkboxClass, "\">\n  ").concat("<span class=\"pe-3 text-nowrap h5 mb-0\">Filter by: </span>" + filterColumns.map(function (column) {
        return "<div class=\"form-check pe-3 mt-0 mb-0\"><input class=\"form-check-input\" type=\"checkbox\" id=\"".concat(randID, "_").concat(column.textContent.replace(' ', '_').toLowerCase(), "\" checked=\"checked\" /><label class=\"form-check-label text-nowrap\" for=\"").concat(randID, "_").concat(column.textContent.replace(' ', '_').toLowerCase(), "\">").concat(column.textContent, "</label></div>");
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
    tableElement.addEventListener('populated', function (e) {
      var tableFilter = tableElement.querySelector('.table__filters');
      tableFilter.remove();
      var tablePagination = tableElement.querySelector('.table__pagination');
      tablePagination.remove();
      var newTable = tableElement.cloneNode(true);
      tableElement.parentNode.replaceChild(newTable, tableElement);
      table(newTable);
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
    carouselElement.getAttribute('data-cols');
    var smCols = carouselElement.getAttribute('data-sm-cols');
    var mdCols = carouselElement.getAttribute('data-md-cols');
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
    }, false); // Add responsive hide button classes

    if (itemCount == 1) carouselElement.classList.add('hide-btns');
    if (smCols >= itemCount) carouselElement.classList.add('hide-sm-btns');
    if (mdCols >= itemCount) carouselElement.classList.add('hide-md-btns');
  }

  // Create a link between two input/selects with one acting as setting a minimum value and the second a maximum
  // The link between the two will prevent the max input field form setting a lower value than the min and vice versa
  function inputRange(inputWrapper) {
    inputWrapper.addEventListener('change', function (e) {
      var min = parseInt(inputWrapper.querySelector('[data-min] select,[data-min] input').value);
      var max = parseInt(inputWrapper.querySelector('[data-max] select,[data-max] input').value); // Set attributes for input fields

      Array.from(inputWrapper.querySelectorAll('[data-min] input')).forEach(function (input, index) {
        input.setAttribute('max', max);
      });
      Array.from(inputWrapper.querySelectorAll('[data-max] input')).forEach(function (input, index) {
        input.setAttribute('min', min);
      }); // Hide select options if they are higher or lower than the min and max values

      Array.from(inputWrapper.querySelectorAll('[data-min] select option')).forEach(function (option, index) {
        if (parseInt(option.getAttribute('value')) > max) option.classList.add('d-none');else option.classList.remove('d-none');
      });
      Array.from(inputWrapper.querySelectorAll('[data-max] select option')).forEach(function (option, index) {
        if (parseInt(option.getAttribute('value')) < min) option.classList.add('d-none');else option.classList.remove('d-none');
      });
    }, false);
  } // Acts as an overall initialise function to trigger other functions.


  function form(formElement) {
    // Check for input range groups
    Array.from(formElement.querySelectorAll('[data-input-range]')).forEach(function (arrayElement, index) {
      inputRange(arrayElement);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    addBodyClasses(document.body);
    checkElements(document.body);
    console.log('test.js'); // ANav

    Array.from(document.querySelectorAll('.nav')).forEach(function (arrayElement, index) {
      navbar(arrayElement);
    }); // Advanced tables

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
    }); // Form

    Array.from(document.querySelectorAll('form')).forEach(function (arrayElement, index) {
      form(arrayElement);
    }); // Modal

    Array.from(document.querySelectorAll('.modal')).forEach(function (arrayElement, index) {
      modal(arrayElement);
    });
  });

}));
//# sourceMappingURL=scripts.bundle.js.map
