"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/project/page",{

/***/ "(app-client)/./src/components/ui/todo/ProjectList.tsx":
/*!************************************************!*\
  !*** ./src/components/ui/todo/ProjectList.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectUpdateDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectUpdateDelete */ \"(app-client)/./src/components/ui/todo/ProjectUpdateDelete.tsx\");\n\n\n\nconst TodoList = (param)=>{\n    let { tasks } = param;\n    const columns = [\n        {\n            name: \"Title\",\n            selector: (row1)=>row1.name\n        },\n        {\n            name: \"Description\",\n            selector: row\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"table w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Status\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectUpdateDelete__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            project: task\n                        }, task.Id, false, {\n                            fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvdWkvdG9kby9Qcm9qZWN0TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzBCO0FBQ3dCO0FBT2xELE1BQU1FLFdBQW9DO1FBQUMsRUFBRUMsS0FBSyxFQUFFO0lBQ2xELE1BQU1DLFVBQVU7UUFDZDtZQUNFQyxNQUFLO1lBQ0xDLFVBQVVDLENBQUFBLE9BQVFBLEtBQUlGLElBQUk7UUFDNUI7UUFDQTtZQUNFQSxNQUFLO1lBQ0xDLFVBQVVDO1FBQ1o7S0FDRDtJQUNELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFNRCxXQUFVOzs4QkFFZiw4REFBQ0U7OEJBQ0MsNEVBQUNDOzswQ0FDQyw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdSLDhEQUFDQzs4QkFDRVgsTUFBTVksR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDZiw0REFBYUE7NEJBQWVnQixTQUFTRDsyQkFBbEJBLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QztLQTlCTWhCO0FBZ0NOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL3RvZG8vUHJvamVjdExpc3QudHN4PzI5YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdEludGVyZmFjZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdHlwZXMvSVByb2plY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9qZWN0SGFuZGxlIGZyb20gXCIuL1Byb2plY3RVcGRhdGVEZWxldGVcIjtcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XG5cbmludGVyZmFjZSBUb2RvTGlzdFByb3BzIHtcbiAgdGFza3M6IFByb2plY3RJbnRlcmZhY2VbXTtcbn1cblxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDPFRvZG9MaXN0UHJvcHM+ID0gKHsgdGFza3MgfSkgPT4ge1xuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6J1RpdGxlJyxcbiAgICAgIHNlbGVjdG9yOiByb3cgPT4gIHJvdy5uYW1lXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOidEZXNjcmlwdGlvbicsXG4gICAgICBzZWxlY3Rvcjogcm93XG4gICAgfVxuICBdXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93LXgtYXV0byc+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB3LWZ1bGwnPlxuICAgICAgICB7LyogaGVhZCAqL31cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XG4gICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgICAgIDxQcm9qZWN0SGFuZGxlIGtleT17dGFzay5JZH0gcHJvamVjdD17dGFza30gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9qZWN0SGFuZGxlIiwiVG9kb0xpc3QiLCJ0YXNrcyIsImNvbHVtbnMiLCJuYW1lIiwic2VsZWN0b3IiLCJyb3ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidGFzayIsInByb2plY3QiLCJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ui/todo/ProjectList.tsx\n"));

/***/ })

});