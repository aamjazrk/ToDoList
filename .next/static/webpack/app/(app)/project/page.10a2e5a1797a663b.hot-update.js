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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectUpdateDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectUpdateDelete */ \"(app-client)/./src/components/ui/todo/ProjectUpdateDelete.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst ProjectList = (param)=>{\n    let { project } = param;\n    // const [id,setId] = useState('')\n    // useEffect(() => {\n    //   // This code will run when the component mounts\n    //   let res = localStorage.getItem('id');\n    //   if(res){\n    //     setId(res)\n    //   }\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"table w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: project.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectUpdateDelete__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            project: project\n                        }, project.Id, false, {\n                            fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/app/src/components/ui/todo/ProjectList.tsx\",\n        lineNumber: 27,\n        columnNumber: 7\n    }, undefined);\n};\n_c = ProjectList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectList);\nvar _c;\n$RefreshReg$(_c, \"ProjectList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvdWkvdG9kby9Qcm9qZWN0TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTBCO0FBQ3dCO0FBVWxELE1BQU1FLGNBQXNDO1FBQUMsRUFBRUMsT0FBTyxFQUFFO0lBQ3RELGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsb0RBQW9EO0lBRXBELDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLE1BQU07SUFFTixVQUFVO0lBRVIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUNDO1lBQU1ELFdBQVU7OzhCQUVmLDhEQUFDRTs4QkFDQyw0RUFBQ0M7OzBDQUNDLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNDOzhCQUNFUCxRQUFRUSxHQUFHLENBQUMsQ0FBQ1Isd0JBQ1osOERBQUNGLDREQUFhQTs0QkFBa0JFLFNBQVNBOzJCQUFyQkEsUUFBUVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDO0tBOUJNVjtBQStCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS90b2RvL1Byb2plY3RMaXN0LnRzeD8yOWJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgUHJvamVjdEludGVyZmFjZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdHlwZXMvSVByb2plY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9qZWN0SGFuZGxlIGZyb20gXCIuL1Byb2plY3RVcGRhdGVEZWxldGVcIjtcbmltcG9ydCBleHAgZnJvbSBcImNvbnN0YW50c1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IGdldEFsbGJ5VXNlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2VydmljZXMvcHJvamVjdFwiO1xuaW1wb3J0ICB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgUHJvamVjdFByb3BzIHtcbiAgcHJvamVjdDogUHJvamVjdEludGVyZmFjZVtdO1xufVxuXG5jb25zdCBQcm9qZWN0TGlzdDogUmVhY3QuRkM8UHJvamVjdFByb3BzPiA9ICh7IHByb2plY3QgfSkgPT4ge1xuICAvLyBjb25zdCBbaWQsc2V0SWRdID0gdXNlU3RhdGUoJycpXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gVGhpcyBjb2RlIHdpbGwgcnVuIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcbiAgICBcbiAgLy8gICBsZXQgcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XG4gIC8vICAgaWYocmVzKXtcbiAgLy8gICAgIHNldElkKHJlcylcbiAgLy8gICB9XG4gICAgXG4gIC8vIH0sIFtdKTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy14LWF1dG8nPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgdy1mdWxsJz5cbiAgICAgICAgey8qIGhlYWQgKi99XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxuICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3Byb2plY3QubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8UHJvamVjdEhhbmRsZSBrZXk9e3Byb2plY3QuSWR9IHByb2plY3Q9e3Byb2plY3R9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvamVjdEhhbmRsZSIsIlByb2plY3RMaXN0IiwicHJvamVjdCIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ui/todo/ProjectList.tsx\n"));

/***/ })

});