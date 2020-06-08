webpackHotUpdate("static/development/pages/home.js",{

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_hook_ExampleCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hook/ExampleCount */ \"./src/components/hook/ExampleCount/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock */ \"./src/mock/index.js\");\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.scss */ \"./src/pages/home.scss\");\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/vera/Documents/Project/Private/static/src/pages/home.js\";\n\n\n\n\n\n // import JsTool from './../components/common/JsTool'\n\n // 如果你在beforePopState中返回 false，Router将不会执行popstate事件。\n// Router.beforePopState(({ url, as, options }) => {\n//   // I only want to allow these two routes!\n//   if (as !== \"/\" || as !== \"/other\") {\n//     // Have SSR render bad routes as a 404.\n//     window.location.href = as\n//     return false\n//   }\n//   return true\n// });\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  componentDidMount() {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/tags') //这列的'/api/tags'与mock.js文件里的地址一致\n    .then(res => {//  console.log('323', JSON.stringify(res.data, null, 4))\n    });\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/users/create`) //这列的'/api/users/create'与mock.js文件里的地址一致\n    .then(res => {\n      console.log('22222323', res);\n    }); // Mock.mock( rurl, template )\n\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/currentUser`) //这列的'/api/currentUser'与mock.js文件里的地址一致\n    .then(res => {\n      console.log('res', res);\n    });\n  }\n\n  render() {\n    const url = this.props.url;\n    console.log(url);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"home\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/viinet'),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50\n      },\n      __self: this\n    }, \"HookHookHookHookHookHook\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__[\"CopyToClipboard\"], {\n      style: {\n        cursor: 'pointer'\n      },\n      text: '这是一段复制内容',\n      onCopy: () => alert('複製成功'),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57\n      },\n      __self: this\n    }, '複製地址')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hook_ExampleCount__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60\n      },\n      __self: this\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS5qcz84MDczIl0sIm5hbWVzIjpbIkhvbWUiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJ1cmwiLCJwcm9wcyIsIlJvdXRlciIsInB1c2giLCJjdXJzb3IiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsK0NBQW5CLENBQTZCO0FBQzNCQyxtQkFBaUIsR0FBRTtBQUNqQkMsZ0RBQUssQ0FDSkMsR0FERCxDQUNLLFdBREwsRUFDa0I7QUFEbEIsS0FFQ0MsSUFGRCxDQUVNQyxHQUFHLElBQUUsQ0FDTDtBQUNMLEtBSkQ7QUFNQUgsZ0RBQUssQ0FDSkMsR0FERCxDQUNNLG1CQUROLEVBQzBCO0FBRDFCLEtBRUNDLElBRkQsQ0FFTUMsR0FBRyxJQUFFO0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLEdBQXhCO0FBQ0gsS0FKRCxFQVBpQixDQWFqQjs7QUFDQUgsZ0RBQUssQ0FDSkMsR0FERCxDQUNNLGtCQUROLEVBQ3lCO0FBRHpCLEtBRUNDLElBRkQsQ0FFTUMsR0FBRyxJQUFFO0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJGLEdBQW5CO0FBQ0gsS0FKRDtBQUtEOztBQUVERyxRQUFNLEdBQUc7QUFBQSxVQUNDQyxHQURELEdBQ1MsS0FBS0MsS0FEZCxDQUNDRCxHQUREO0FBRVBILFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaO0FBRUEsV0FDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxhQUFPLEVBQUUsTUFBTUUsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVosQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFHQywyREFBQyx1RUFBRDtBQUNLLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVixPQURaO0FBRUssVUFBSSxFQUFFLFVBRlg7QUFHSyxZQUFNLEVBQUUsTUFBTUMsS0FBSyxDQUFDLE1BQUQsQ0FIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPLE1BQVAsQ0FMTCxDQUhELEVBV0UsMkRBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYRixDQURGO0FBZUQ7O0FBekMwQjs7QUE0Q2RmLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2hvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvdW50IGZyb20gJy4uL2NvbXBvbmVudHMvaG9vay9FeGFtcGxlQ291bnQnXG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgXCIuLi9tb2NrXCJcbi8vIGltcG9ydCBKc1Rvb2wgZnJvbSAnLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Kc1Rvb2wnXG5pbXBvcnQgJy4vaG9tZS5zY3NzJ1xuXG4vLyDlpoLmnpzkvaDlnKhiZWZvcmVQb3BTdGF0ZeS4rei/lOWbniBmYWxzZe+8jFJvdXRlcuWwhuS4jeS8muaJp+ihjHBvcHN0YXRl5LqL5Lu244CCXG4vLyBSb3V0ZXIuYmVmb3JlUG9wU3RhdGUoKHsgdXJsLCBhcywgb3B0aW9ucyB9KSA9PiB7XG4vLyAgIC8vIEkgb25seSB3YW50IHRvIGFsbG93IHRoZXNlIHR3byByb3V0ZXMhXG4vLyAgIGlmIChhcyAhPT0gXCIvXCIgfHwgYXMgIT09IFwiL290aGVyXCIpIHtcbi8vICAgICAvLyBIYXZlIFNTUiByZW5kZXIgYmFkIHJvdXRlcyBhcyBhIDQwNC5cbi8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4vLyAgICAgcmV0dXJuIGZhbHNlXG4vLyAgIH1cblxuLy8gICByZXR1cm4gdHJ1ZVxuLy8gfSk7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGF4aW9zXG4gICAgLmdldCgnL2FwaS90YWdzJykgLy/ov5nliJfnmoQnL2FwaS90YWdzJ+S4jm1vY2suanPmlofku7bph4znmoTlnLDlnYDkuIDoh7RcbiAgICAudGhlbihyZXM9PntcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coJzMyMycsIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLCBudWxsLCA0KSlcbiAgICB9KVxuXG4gICAgYXhpb3NcbiAgICAuZ2V0KGAvYXBpL3VzZXJzL2NyZWF0ZWApIC8v6L+Z5YiX55qEJy9hcGkvdXNlcnMvY3JlYXRlJ+S4jm1vY2suanPmlofku7bph4znmoTlnLDlnYDkuIDoh7RcbiAgICAudGhlbihyZXM9PntcbiAgICAgICAgY29uc29sZS5sb2coJzIyMjIyMzIzJywgcmVzKVxuICAgIH0pXG5cbiAgICAvLyBNb2NrLm1vY2soIHJ1cmwsIHRlbXBsYXRlIClcbiAgICBheGlvc1xuICAgIC5nZXQoYC9hcGkvY3VycmVudFVzZXJgKSAvL+i/meWIl+eahCcvYXBpL2N1cnJlbnRVc2VyJ+S4jm1vY2suanPmlofku7bph4znmoTlnLDlnYDkuIDoh7RcbiAgICAudGhlbihyZXM9PntcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcycsIHJlcylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpe1xuICAgIGNvbnN0IHsgdXJsIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2codXJsKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lJz5cbiAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvdmlpbmV0Jyl9Pkhvb2tIb29rSG9va0hvb2tIb29rSG9vazwvaDI+XG5cbiAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgdGV4dD17J+i/meaYr+S4gOauteWkjeWItuWGheWuuSd9XG4gICAgICAgICAgICBvbkNvcHk9eygpID0+IGFsZXJ0KCfopIfoo73miJDlip8nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj57J+ikh+ijveWcsOWdgCd9PC9zcGFuPlxuICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPiBcbiAgICAgICAgey8qIDxKc1Rvb2wvPiAqL31cbiAgICAgICAgPENvdW50Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home.js\n");

/***/ })

})