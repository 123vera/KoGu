module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanM/NzRlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\n");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\nfunction _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanM/YTdiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAoIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\n");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzP2UzNjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtcmVhY3QtYXBwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\n");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcz8wZTMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDWTtBQUNWO0FBQ2pDO0FBQ2YsU0FBUywrREFBYyxTQUFTLHFFQUFvQixZQUFZLGdFQUFlO0FBQy9FIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\n");

/***/ }),

/***/ "./src/components/hook/ExampleCount/index.js":
/*!***************************************************!*\
  !*** ./src/components/hook/ExampleCount/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_vera_Documents_Project_Private_static_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/components/hook/ExampleCount/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/vera/Documents/Project/Private/static/src/components/hook/ExampleCount/index.js\";\n\n // 自定义hook\n\nfunction useTitle(content) {\n  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(content || ''),\n        _useState2 = Object(_Users_vera_Documents_Project_Private_static_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n        value = _useState2[0],\n        setValue = _useState2[1]; //  document.title = value\n\n\n  const onChange = e => {\n    setValue(e.target.value);\n  };\n\n  return {\n    value,\n    onChange\n  };\n}\n\nfunction Count() {\n  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(3),\n        _useState4 = Object(_Users_vera_Documents_Project_Private_static_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n        count = _useState4[0],\n        setCount = _useState4[1];\n\n  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Mary'),\n        _useState6 = Object(_Users_vera_Documents_Project_Private_static_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n        name = _useState6[0],\n        setName = _useState6[1];\n\n  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('--'),\n        _useState8 = Object(_Users_vera_Documents_Project_Private_static_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState7, 2),\n        value = _useState8[0],\n        setValue = _useState8[1];\n\n  const inputProps = useTitle(name); // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (count < 10) {\n      document.title = `关于HOOK${count}`;\n    } else {\n      document.title = `关于HOOK${name}`;\n    }\n  }, [count, name]);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    id: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.react,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36\n    },\n    __self: this\n  }, count, \" \"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: () => setCount(count + 1),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37\n    },\n    __self: this\n  }, \"add\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: () => setName(name),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39\n    },\n    __self: this\n  }, \"addName\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", Object.assign({}, inputProps, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41\n    },\n    __self: this\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: () => setValue('btn1'),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43\n    },\n    __self: this\n  }, \"btn1\", value), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: () => setValue('btn2'),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44\n    },\n    __self: this\n  }, \"btn2\", value), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"position-test\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"position-test\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"position-sticky\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"position-test\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"position-test\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"position-test\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55\n    },\n    __self: this\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Count);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob29rL0V4YW1wbGVDb3VudC9pbmRleC5qcz9hNTdlIl0sIm5hbWVzIjpbInVzZVRpdGxlIiwiY29udGVudCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIkNvdW50IiwiY291bnQiLCJzZXRDb3VudCIsIm5hbWUiLCJzZXROYW1lIiwiaW5wdXRQcm9wcyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwidGl0bGUiLCJzdHlsZSIsInJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0NBR0c7O0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFBQSxvQkFDR0Msc0RBQVEsQ0FBQ0QsT0FBTyxJQUFJLEVBQVosQ0FEWDtBQUFBO0FBQUEsUUFDakJFLEtBRGlCO0FBQUEsUUFDVkMsUUFEVSxrQkFFMUI7OztBQUVFLFFBQU1DLFFBQVEsR0FBSUMsQ0FBRCxJQUFPO0FBQ3RCRixZQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQVI7QUFDRCxHQUZEOztBQUdDLFNBQU87QUFBQ0EsU0FBRDtBQUFRRTtBQUFSLEdBQVA7QUFDRjs7QUFHSCxTQUFTRyxLQUFULEdBQWlCO0FBQUEscUJBQ1lOLHNEQUFRLENBQUMsQ0FBRCxDQURwQjtBQUFBO0FBQUEsUUFDUE8sS0FETztBQUFBLFFBQ0FDLFFBREE7O0FBQUEscUJBRVVSLHNEQUFRLENBQUMsTUFBRCxDQUZsQjtBQUFBO0FBQUEsUUFFUFMsSUFGTztBQUFBLFFBRURDLE9BRkM7O0FBQUEscUJBR2FWLHNEQUFRLENBQUMsSUFBRCxDQUhyQjtBQUFBO0FBQUEsUUFHUEMsS0FITztBQUFBLFFBR0FDLFFBSEE7O0FBS2YsUUFBTVMsVUFBVSxHQUFHYixRQUFRLENBQUNXLElBQUQsQ0FBM0IsQ0FMZSxDQU9mOztBQUNBRyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFHTCxLQUFLLEdBQUUsRUFBVixFQUFjO0FBQ1pNLGNBQVEsQ0FBQ0MsS0FBVCxHQUFpQixTQUFRUCxLQUFNLEVBQS9CO0FBQ0QsS0FGRCxNQUVPO0FBQ0xNLGNBQVEsQ0FBQ0MsS0FBVCxHQUFrQixTQUFRTCxJQUFLLEVBQS9CO0FBQ0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0YsS0FBRCxFQUFRRSxJQUFSLENBTk0sQ0FBVDtBQVVBLFNBQ0U7QUFBSyxNQUFFLEVBQUVNLGtEQUFLLENBQUNDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJVCxLQUFKLE1BREYsRUFFRTtBQUFRLFdBQU8sRUFBRSxNQUFNQyxRQUFRLENBQUNELEtBQUssR0FBQyxDQUFQLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBUSxXQUFPLEVBQUUsTUFBTUcsT0FBTyxDQUFDRCxJQUFELENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsc0ZBQVdFLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRTtBQUFRLFdBQU8sRUFBRSxNQUFNVCxRQUFRLENBQUMsTUFBRCxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE4Q0QsS0FBOUMsQ0FSRixFQVNFO0FBQVEsV0FBTyxFQUFFLE1BQU1DLFFBQVEsQ0FBQyxNQUFELENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQThDRCxLQUE5QyxDQVRGLEVBYUU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBY0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLEVBZ0JFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBa0JFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixFQW9CRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLENBREY7QUF3QkQ7O0FBRWNLLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaG9vay9FeGFtcGxlQ291bnQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LnNjc3MnXG5cbiAgIC8vIOiHquWumuS5iWhvb2tcbiAgIGZ1bmN0aW9uIHVzZVRpdGxlKGNvbnRlbnQpIHtcbiAgICAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKGNvbnRlbnQgfHwgJycpXG4gICAgLy8gIGRvY3VtZW50LnRpdGxlID0gdmFsdWVcblxuICAgICAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgICAgIH1cbiAgICAgICByZXR1cm4ge3ZhbHVlLCBvbkNoYW5nZX1cbiAgICB9XG5cblxuICBmdW5jdGlvbiBDb3VudCAoKXtcbiAgICBjb25zdCBbIGNvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgzKVxuICAgIGNvbnN0IFsgbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnTWFyeScpXG4gICAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCctLScpXG5cbiAgICBjb25zdCBpbnB1dFByb3BzID0gdXNlVGl0bGUobmFtZSk7XG4gIFxuICAgIC8vIOWmguaenOaDs+aJp+ihjOWPqui/kOihjOS4gOasoeeahCBlZmZlY3TvvIjku4XlnKjnu4Tku7bmjILovb3lkozljbjovb3ml7bmiafooYzvvInvvIzlj6/ku6XkvKDpgJLkuIDkuKrnqbrmlbDnu4TvvIhbXe+8ieS9nOS4uuesrOS6jOS4quWPguaVsOOAgui/meWwseWRiuiviSBSZWFjdCDkvaDnmoQgZWZmZWN0IOS4jeS+nei1luS6jiBwcm9wcyDmiJYgc3RhdGUg5Lit55qE5Lu75L2V5YC877yM5omA5Lul5a6D5rC46L+c6YO95LiN6ZyA6KaB6YeN5aSN5omn6KGM44CCXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKGNvdW50IDwxMCkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9YOWFs+S6jkhPT0ske2NvdW50fWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gYOWFs+S6jkhPT0ske25hbWV9YFxuICAgICAgfVxuICAgIH0sIFtjb3VudCwgbmFtZV0pXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e3N0eWxlLnJlYWN0fT5cbiAgICAgICAgPHA+e2NvdW50fSA8L3A+ICBcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCsxKX0+YWRkPC9idXR0b24+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TmFtZShuYW1lKX0+YWRkTmFtZTwvYnV0dG9uPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8aW5wdXQgey4uLmlucHV0UHJvcHN9Lz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRWYWx1ZSgnYnRuMScpfT5idG4xe3ZhbHVlfTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFZhbHVlKCdidG4yJyl9PmJ0bjJ7dmFsdWV9PC9idXR0b24+XG5cblxuICAgICAgICB7LyogcG9zaXRpb246IHN0aWNreSAg57KY5oCn5a6a5L2NIOW9k+a7muWKqOWIsOafkOS4quS9jee9ruaXtu+8jOiuvue9ruS6hnBvc2l0aW9uOnN0aWNreeeahOWFg+e0oOS8muaCrOWBnOS4jeWKqCovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXRlc3RcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi10ZXN0XCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1zdGlja3lcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXRlc3RcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi10ZXN0XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tdGVzdFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ291bnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/hook/ExampleCount/index.js\n");

/***/ }),

/***/ "./src/components/hook/ExampleCount/index.scss":
/*!*****************************************************!*\
  !*** ./src/components/hook/ExampleCount/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hvb2svRXhhbXBsZUNvdW50L2luZGV4LnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/hook/ExampleCount/index.scss\n");

/***/ }),

/***/ "./src/mock/index.js":
/*!***************************!*\
  !*** ./src/mock/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"mockjs\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n // import { delay } from 'roadhog-api-doc';  // 需要添加所有的请求延迟的时候， 可以通过第三方插件来简化这个问题\n// 当客户端（浏览器）发送请求，如：GET /api/users，\n// 那么本地启动的 umi dev 会跟此配置文件匹配请求路径以及方法，\n// 如果匹配到了，就会将请求通过配置处理，就可以像样例一样，\n// 你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。\n// 以下真假切换接口\n// if (process.env.NODE_ENV === 'development') {\n//   require('./src/mock')\n// }\n// let postApi = (path, mock) => {\n//   // 当为0的时候\n//   return path + (mock ? '' : '.mock'); // '/todoList.mock'\n// };\n// export default {\n//   \"newsList\": postApi(\"/api/order/news\"),\n//   \"newsList2\": postApi(\"/api/newsList2\"),\n//   \"todoList\": postApi(\"/todoList\", 0)  // postApi方法接收两个参数，接口地址及是否需要mock数据，0需要，1不需要\n// }\n// 以上真假切换接口\n\nconst getNotice = (req, res) => {\n  res.end('OK');\n};\n\nconst proxy = {\n  // Mock.mock( rurl, template )\n  'GET /api/currentUser': mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock('', {\n    'code': 0,\n    'data': {\n      'list|1-10': [{\n        // 属性 id 是一个自增数，起始值为 1，每次增 1\n        'id|+1': 1,\n        'title': '前端人人@id',\n        'status': 1\n      }]\n    },\n    'message': '操作成功',\n    'systemDate': new Date().getTime()\n  }),\n  // 使用 mockjs 等三方库   Mock.mock( rurl, rtype, template )\n  'GET /api/tags': mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock('/api/tags', 'get', {\n    'list|100': [{\n      name: '@city',\n      'value|1-10': 50,\n      'type|0-2': 1\n    }]\n  }),\n  // 添加跨域请求头 Mock.mock( rurl, rtype, function( options ) )\n  '/api/users/create': mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock('/api/users/create', (req, res) => {\n    // 指定被拦截的 Ajax 请求的响应时间，单位是毫秒。值可以是正整数，例如 400，表示 400 毫秒 后才会返回响应内容；也可以是横杠 '-' 风格的字符串，例如 '200-600'，表示响应时间介于 200 和 600 毫秒之间。默认值是'10-100'。\n    mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.setup({\n      timeout: 400\n    }); // res.setHeader('Access-Control-Allow-Origin', '*');\n\n    return {\n      users: [1, 2]\n    }; // 直接输出res.data = { users: [1, 2] }\n  }),\n  // 支持制定执行回调\n  'GET /api/project/notice': getNotice,\n  // 支持值为 Object 和 Array\n  'GET /api/users': {\n    users: [1, 2]\n  },\n  // 静态 Mock 数据\n  '/api/random': mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock({\n    // 只随机一次\n    'number|1-100': 100\n  }),\n  // 动态 Mock 数据\n  '/api/randoms': (req, res) => {\n    res.send(mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock({\n      // 每次请求均产生随机值\n      'number|1-100': 100\n    }));\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (proxy); // 调用 delay 函数，统一处理\n// export default delay(proxy, 1000)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9jay9pbmRleC5qcz8yNDVhIl0sIm5hbWVzIjpbImdldE5vdGljZSIsInJlcSIsInJlcyIsImVuZCIsInByb3h5IiwibW9ja2pzIiwibW9jayIsIkRhdGUiLCJnZXRUaW1lIiwibmFtZSIsInNldHVwIiwidGltZW91dCIsInVzZXJzIiwic2VuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0NBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFJLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQUVBLEtBQUcsQ0FBQ0MsR0FBSixDQUFRLElBQVI7QUFBZ0IsQ0FBbkQ7O0FBRUMsTUFBTUMsS0FBSyxHQUFHO0FBQ2I7QUFDQSwwQkFBd0JDLDZDQUFNLENBQUNDLElBQVAsQ0FBYSxFQUFiLEVBQWdCO0FBQ3RDLFlBQVEsQ0FEOEI7QUFFdEMsWUFBUTtBQUNKLG1CQUFhLENBQUM7QUFDVjtBQUNBLGlCQUFTLENBRkM7QUFHVixpQkFBUyxTQUhDO0FBSVYsa0JBQVU7QUFKQSxPQUFEO0FBRFQsS0FGOEI7QUFVdEMsZUFBVyxNQVYyQjtBQVd0QyxrQkFBYyxJQUFJQyxJQUFKLEdBQVdDLE9BQVg7QUFYd0IsR0FBaEIsQ0FGWDtBQWdCYjtBQUNBLG1CQUFpQkgsNkNBQU0sQ0FBQ0MsSUFBUCxDQUFZLFdBQVosRUFBeUIsS0FBekIsRUFBZ0M7QUFDL0MsZ0JBQVksQ0FBQztBQUFFRyxVQUFJLEVBQUUsT0FBUjtBQUFpQixvQkFBYyxFQUEvQjtBQUFtQyxrQkFBWTtBQUEvQyxLQUFEO0FBRG1DLEdBQWhDLENBakJKO0FBcUJiO0FBQ0EsdUJBQXFCSiw2Q0FBTSxDQUFDQyxJQUFQLENBQVksbUJBQVosRUFBaUMsQ0FBQ0wsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDbEU7QUFDQUcsaURBQU0sQ0FBQ0ssS0FBUCxDQUFhO0FBQ1hDLGFBQU8sRUFBRTtBQURFLEtBQWIsRUFGa0UsQ0FLbEU7O0FBQ0EsV0FBTztBQUFFQyxXQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUFULEtBQVAsQ0FOa0UsQ0FNekM7QUFFMUIsR0FSb0IsQ0F0QlI7QUFnQ1o7QUFDRCw2QkFBMkJaLFNBakNkO0FBbUNaO0FBQ0Esb0JBQWtCO0FBQUVZLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBQVQsR0FwQ047QUF1Q1o7QUFDRCxpQkFBZVAsNkNBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ3pCO0FBQ0Esb0JBQWdCO0FBRlMsR0FBWixDQXhDRjtBQTZDYjtBQUNDLGtCQUFnQixDQUFDTCxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUM3QkEsT0FBRyxDQUFDVyxJQUFKLENBQVNSLDZDQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNuQjtBQUNBLHNCQUFnQjtBQUZHLEtBQVosQ0FBVDtBQUlEO0FBbkRZLENBQWQ7QUF3RGNGLG9FQUFmLEUsQ0FJQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL21vY2svaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9ja2pzIGZyb20gJ21vY2tqcyc7XG4vLyBpbXBvcnQgeyBkZWxheSB9IGZyb20gJ3JvYWRob2ctYXBpLWRvYyc7ICAvLyDpnIDopoHmt7vliqDmiYDmnInnmoTor7fmsYLlu7bov5/nmoTml7blgJnvvIwg5Y+v5Lul6YCa6L+H56ys5LiJ5pa55o+S5Lu25p2l566A5YyW6L+Z5Liq6Zeu6aKYXG5cblxuLy8g5b2T5a6i5oi356uv77yI5rWP6KeI5Zmo77yJ5Y+R6YCB6K+35rGC77yM5aaC77yaR0VUIC9hcGkvdXNlcnPvvIxcbi8vIOmCo+S5iOacrOWcsOWQr+WKqOeahCB1bWkgZGV2IOS8mui3n+atpOmFjee9ruaWh+S7tuWMuemFjeivt+axgui3r+W+hOS7peWPiuaWueazle+8jFxuLy8g5aaC5p6c5Yy56YWN5Yiw5LqG77yM5bCx5Lya5bCG6K+35rGC6YCa6L+H6YWN572u5aSE55CG77yM5bCx5Y+v5Lul5YOP5qC35L6L5LiA5qC377yMXG4vLyDkvaDlj6/ku6Xnm7TmjqXov5Tlm57mlbDmja7vvIzkuZ/lj6/ku6XpgJrov4flh73mlbDlpITnkIbku6Xlj4rph43lrprlkJHliLDlj6bkuIDkuKrmnI3liqHlmajjgIJcblxuLy8g5Lul5LiL55yf5YGH5YiH5o2i5o6l5Y+jXG5cbi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuLy8gICByZXF1aXJlKCcuL3NyYy9tb2NrJylcbi8vIH1cblxuLy8gbGV0IHBvc3RBcGkgPSAocGF0aCwgbW9jaykgPT4ge1xuLy8gICAvLyDlvZPkuLow55qE5pe25YCZXG4vLyAgIHJldHVybiBwYXRoICsgKG1vY2sgPyAnJyA6ICcubW9jaycpOyAvLyAnL3RvZG9MaXN0Lm1vY2snXG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCB7XG4vLyAgIFwibmV3c0xpc3RcIjogcG9zdEFwaShcIi9hcGkvb3JkZXIvbmV3c1wiKSxcbi8vICAgXCJuZXdzTGlzdDJcIjogcG9zdEFwaShcIi9hcGkvbmV3c0xpc3QyXCIpLFxuLy8gICBcInRvZG9MaXN0XCI6IHBvc3RBcGkoXCIvdG9kb0xpc3RcIiwgMCkgIC8vIHBvc3RBcGnmlrnms5XmjqXmlLbkuKTkuKrlj4LmlbDvvIzmjqXlj6PlnLDlnYDlj4rmmK/lkKbpnIDopoFtb2Nr5pWw5o2u77yMMOmcgOimge+8jDHkuI3pnIDopoFcbi8vIH1cblxuLy8g5Lul5LiK55yf5YGH5YiH5o2i5o6l5Y+jXG5cbmNvbnN0IGdldE5vdGljZSA9ICAocmVxLCByZXMpID0+IHsgcmVzLmVuZCgnT0snKTsgfVxuXG4gY29uc3QgcHJveHkgPSB7XG4gIC8vIE1vY2subW9jayggcnVybCwgdGVtcGxhdGUgKVxuICAnR0VUIC9hcGkvY3VycmVudFVzZXInOiBtb2NranMubW9jayggJycse1xuICAgICdjb2RlJzogMCxcbiAgICAnZGF0YSc6IHtcbiAgICAgICAgJ2xpc3R8MS0xMCc6IFt7XG4gICAgICAgICAgICAvLyDlsZ7mgKcgaWQg5piv5LiA5Liq6Ieq5aKe5pWw77yM6LW35aeL5YC85Li6IDHvvIzmr4/mrKHlop4gMVxuICAgICAgICAgICAgJ2lkfCsxJzogMSxcbiAgICAgICAgICAgICd0aXRsZSc6ICfliY3nq6/kurrkurpAaWQnLFxuICAgICAgICAgICAgJ3N0YXR1cyc6IDFcbiAgICAgICAgfV1cbiAgICB9LFxuICAgICdtZXNzYWdlJzogJ+aTjeS9nOaIkOWKnycsXG4gICAgJ3N5c3RlbURhdGUnOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICB9KSxcblxuICAvLyDkvb/nlKggbW9ja2pzIOetieS4ieaWueW6kyAgIE1vY2subW9jayggcnVybCwgcnR5cGUsIHRlbXBsYXRlIClcbiAgJ0dFVCAvYXBpL3RhZ3MnOiBtb2NranMubW9jaygnL2FwaS90YWdzJywgJ2dldCcsIHtcbiAgICAnbGlzdHwxMDAnOiBbeyBuYW1lOiAnQGNpdHknLCAndmFsdWV8MS0xMCc6IDUwLCAndHlwZXwwLTInOiAxIH1dLFxuICB9KSxcblxuICAvLyDmt7vliqDot6jln5/or7fmsYLlpLQgTW9jay5tb2NrKCBydXJsLCBydHlwZSwgZnVuY3Rpb24oIG9wdGlvbnMgKSApXG4gICcvYXBpL3VzZXJzL2NyZWF0ZSc6IG1vY2tqcy5tb2NrKCcvYXBpL3VzZXJzL2NyZWF0ZScsIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIOaMh+Wumuiiq+aLpuaIqueahCBBamF4IOivt+axgueahOWTjeW6lOaXtumXtO+8jOWNleS9jeaYr+avq+enkuOAguWAvOWPr+S7peaYr+ato+aVtOaVsO+8jOS+i+WmgiA0MDDvvIzooajnpLogNDAwIOavq+enkiDlkI7miY3kvJrov5Tlm57lk43lupTlhoXlrrnvvJvkuZ/lj6/ku6XmmK/mqKrmnaAgJy0nIOmjjuagvOeahOWtl+espuS4su+8jOS+i+WmgiAnMjAwLTYwMCfvvIzooajnpLrlk43lupTml7bpl7Tku4vkuo4gMjAwIOWSjCA2MDAg5q+r56eS5LmL6Ze044CC6buY6K6k5YC85pivJzEwLTEwMCfjgIJcbiAgICBtb2NranMuc2V0dXAoe1xuICAgICAgdGltZW91dDogNDAwIFxuICAgIH0pXG4gICAgLy8gcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXR1cm4geyB1c2VyczogWzEsIDJdIH0gLy8g55u05o6l6L6T5Ye6cmVzLmRhdGEgPSB7IHVzZXJzOiBbMSwgMl0gfVxuICBcbiAgfSksXG5cbiAgIC8vIOaUr+aMgeWItuWumuaJp+ihjOWbnuiwg1xuICAnR0VUIC9hcGkvcHJvamVjdC9ub3RpY2UnOiBnZXROb3RpY2UsXG5cbiAgIC8vIOaUr+aMgeWAvOS4uiBPYmplY3Qg5ZKMIEFycmF5XG4gICAnR0VUIC9hcGkvdXNlcnMnOiB7IHVzZXJzOiBbMSwgMl0gfSxcblxuXG4gICAvLyDpnZnmgIEgTW9jayDmlbDmja5cbiAgJy9hcGkvcmFuZG9tJzogbW9ja2pzLm1vY2soe1xuICAgIC8vIOWPqumaj+acuuS4gOasoVxuICAgICdudW1iZXJ8MS0xMDAnOiAxMDAsXG4gIH0pLFxuXG4gIC8vIOWKqOaAgSBNb2NrIOaVsOaNrlxuICAgJy9hcGkvcmFuZG9tcyc6IChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kKG1vY2tqcy5tb2NrKHtcbiAgICAgIC8vIOavj+asoeivt+axguWdh+S6p+eUn+maj+acuuWAvFxuICAgICAgJ251bWJlcnwxLTEwMCc6IDEwMCxcbiAgICB9KSlcbiAgfSxcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBwcm94eVxuXG5cblxuLy8g6LCD55SoIGRlbGF5IOWHveaVsO+8jOe7n+S4gOWkhOeQhlxuLy8gZXhwb3J0IGRlZmF1bHQgZGVsYXkocHJveHksIDEwMDApICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/mock/index.js\n");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_hook_ExampleCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hook/ExampleCount */ \"./src/components/hook/ExampleCount/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ \"react-copy-to-clipboard\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock */ \"./src/mock/index.js\");\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.scss */ \"./src/pages/home.scss\");\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/vera/Documents/Project/Private/static/src/pages/home.js\";\n\n\n\n\n\n // import JsTool from './../components/common/JsTool'\n\n // 如果你在beforePopState中返回 false，Router将不会执行popstate事件。\n// Router.beforePopState(({ url, as, options }) => {\n//   // I only want to allow these two routes!\n//   if (as !== \"/\" || as !== \"/other\") {\n//     // Have SSR render bad routes as a 404.\n//     window.location.href = as\n//     return false\n//   }\n//   return true\n// });\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  componentDidMount() {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/tags') //这列的'/api/tags'与mock.js文件里的地址一致\n    .then(res => {//  console.log('323', JSON.stringify(res.data, null, 4))\n    });\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/users/create`) //这列的'/api/users/create'与mock.js文件里的地址一致\n    .then(res => {\n      console.log('22222323', res);\n    }); // Mock.mock( rurl, template )\n\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/currentUser`) //这列的'/api/currentUser'与mock.js文件里的地址一致\n    .then(res => {\n      console.log('res', res);\n    });\n  }\n\n  render() {\n    console.log(next_router__WEBPACK_IMPORTED_MODULE_4___default.a.router && next_router__WEBPACK_IMPORTED_MODULE_4___default.a.router.pathname);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"home\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/viinet'),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49\n      },\n      __self: this\n    }, \"HookHookHookHookHookHook\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__[\"CopyToClipboard\"], {\n      style: {\n        cursor: 'pointer'\n      },\n      text: '这是一段复制内容',\n      onCopy: () => alert('複製成功'),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56\n      },\n      __self: this\n    }, '複製地址')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hook_ExampleCount__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59\n      },\n      __self: this\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS5qcz84MDczIl0sIm5hbWVzIjpbIkhvbWUiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJSb3V0ZXIiLCJyb3V0ZXIiLCJwYXRobmFtZSIsInB1c2giLCJjdXJzb3IiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsK0NBQW5CLENBQTZCO0FBQzNCQyxtQkFBaUIsR0FBRTtBQUNqQkMsZ0RBQUssQ0FDSkMsR0FERCxDQUNLLFdBREwsRUFDa0I7QUFEbEIsS0FFQ0MsSUFGRCxDQUVNQyxHQUFHLElBQUUsQ0FDTDtBQUNMLEtBSkQ7QUFNQUgsZ0RBQUssQ0FDSkMsR0FERCxDQUNNLG1CQUROLEVBQzBCO0FBRDFCLEtBRUNDLElBRkQsQ0FFTUMsR0FBRyxJQUFFO0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLEdBQXhCO0FBQ0gsS0FKRCxFQVBpQixDQWFqQjs7QUFDQUgsZ0RBQUssQ0FDSkMsR0FERCxDQUNNLGtCQUROLEVBQ3lCO0FBRHpCLEtBRUNDLElBRkQsQ0FFTUMsR0FBRyxJQUFFO0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJGLEdBQW5CO0FBQ0gsS0FKRDtBQUtEOztBQUVERyxRQUFNLEdBQUc7QUFDUEYsV0FBTyxDQUFDQyxHQUFSLENBQVlFLGtEQUFNLENBQUNDLE1BQVAsSUFBaUJELGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsUUFBM0M7QUFFQSxXQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGFBQU8sRUFBRSxNQUFNRixrREFBTSxDQUFDRyxJQUFQLENBQVksU0FBWixDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixFQUdDLDJEQUFDLHVFQUFEO0FBQ0ssV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWLE9BRFo7QUFFSyxVQUFJLEVBQUUsVUFGWDtBQUdLLFlBQU0sRUFBRSxNQUFNQyxLQUFLLENBQUMsTUFBRCxDQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU8sTUFBUCxDQUxMLENBSEQsRUFXRSwyREFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVhGLENBREY7QUFlRDs7QUF4QzBCOztBQTJDZGYsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9ob29rL0V4YW1wbGVDb3VudCdcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJ1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBcIi4uL21vY2tcIlxuLy8gaW1wb3J0IEpzVG9vbCBmcm9tICcuLy4uL2NvbXBvbmVudHMvY29tbW9uL0pzVG9vbCdcbmltcG9ydCAnLi9ob21lLnNjc3MnXG5cbi8vIOWmguaenOS9oOWcqGJlZm9yZVBvcFN0YXRl5Lit6L+U5ZueIGZhbHNl77yMUm91dGVy5bCG5LiN5Lya5omn6KGMcG9wc3RhdGXkuovku7bjgIJcbi8vIFJvdXRlci5iZWZvcmVQb3BTdGF0ZSgoeyB1cmwsIGFzLCBvcHRpb25zIH0pID0+IHtcbi8vICAgLy8gSSBvbmx5IHdhbnQgdG8gYWxsb3cgdGhlc2UgdHdvIHJvdXRlcyFcbi8vICAgaWYgKGFzICE9PSBcIi9cIiB8fCBhcyAhPT0gXCIvb3RoZXJcIikge1xuLy8gICAgIC8vIEhhdmUgU1NSIHJlbmRlciBiYWQgcm91dGVzIGFzIGEgNDA0LlxuLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbi8vICAgICByZXR1cm4gZmFsc2Vcbi8vICAgfVxuXG4vLyAgIHJldHVybiB0cnVlXG4vLyB9KTtcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgYXhpb3NcbiAgICAuZ2V0KCcvYXBpL3RhZ3MnKSAvL+i/meWIl+eahCcvYXBpL3RhZ3Mn5LiObW9jay5qc+aWh+S7tumHjOeahOWcsOWdgOS4gOiHtFxuICAgIC50aGVuKHJlcz0+e1xuICAgICAgICAgIC8vICBjb25zb2xlLmxvZygnMzIzJywgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEsIG51bGwsIDQpKVxuICAgIH0pXG5cbiAgICBheGlvc1xuICAgIC5nZXQoYC9hcGkvdXNlcnMvY3JlYXRlYCkgLy/ov5nliJfnmoQnL2FwaS91c2Vycy9jcmVhdGUn5LiObW9jay5qc+aWh+S7tumHjOeahOWcsOWdgOS4gOiHtFxuICAgIC50aGVuKHJlcz0+e1xuICAgICAgICBjb25zb2xlLmxvZygnMjIyMjIzMjMnLCByZXMpXG4gICAgfSlcblxuICAgIC8vIE1vY2subW9jayggcnVybCwgdGVtcGxhdGUgKVxuICAgIGF4aW9zXG4gICAgLmdldChgL2FwaS9jdXJyZW50VXNlcmApIC8v6L+Z5YiX55qEJy9hcGkvY3VycmVudFVzZXIn5LiObW9jay5qc+aWh+S7tumHjOeahOWcsOWdgOS4gOiHtFxuICAgIC50aGVuKHJlcz0+e1xuICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCl7XG4gICAgY29uc29sZS5sb2coUm91dGVyLnJvdXRlciAmJiBSb3V0ZXIucm91dGVyLnBhdGhuYW1lKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lJz5cbiAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvdmlpbmV0Jyl9Pkhvb2tIb29rSG9va0hvb2tIb29rSG9vazwvaDI+XG5cbiAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgdGV4dD17J+i/meaYr+S4gOauteWkjeWItuWGheWuuSd9XG4gICAgICAgICAgICBvbkNvcHk9eygpID0+IGFsZXJ0KCfopIfoo73miJDlip8nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj57J+ikh+ijveWcsOWdgCd9PC9zcGFuPlxuICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPiBcbiAgICAgICAgey8qIDxKc1Rvb2wvPiAqL31cbiAgICAgICAgPENvdW50Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home.js\n");

/***/ }),

/***/ "./src/pages/home.scss":
/*!*****************************!*\
  !*** ./src/pages/home.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9wYWdlcy9ob21lLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home.scss\n");

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./src/pages/home.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vera/Documents/Project/Private/static/src/pages/home.js */"./src/pages/home.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "mockjs":
/*!*************************!*\
  !*** external "mockjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mockjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2NranNcIj82MTI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vY2tqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vY2tqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mockjs\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-copy-to-clipboard\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiPzA1Y2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtY29weS10by1jbGlwYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-copy-to-clipboard\n");

/***/ })

/******/ });