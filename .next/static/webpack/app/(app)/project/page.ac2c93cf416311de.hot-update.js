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

/***/ "(app-client)/./src/app/(app)/project/page.tsx":
/*!****************************************!*\
  !*** ./src/app/(app)/project/page.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_services_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/services/project */ \"(app-client)/./src/components/services/project.ts\");\n/* harmony import */ var _components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/todo/AddTask */ \"(app-client)/./src/components/ui/todo/AddTask.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Project() {\n    _s();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const getProject = async ()=>{\n        let id = localStorage.getItem(\"id\");\n        let res = await (0,_components_services_project__WEBPACK_IMPORTED_MODULE_1__.getAllbyUser)(id);\n        if (res) {\n            setProject(res);\n            //debug\n            console.log(res);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getProject();\n    // This code will run when the component mounts\n    // const delay = 8000; // Delay in milliseconds (2 seconds)\n    // const timer = setTimeout(() => {\n    //   // Code to execute after the delay\n    //   console.log('Delayed code executed');\n    //   let res = localStorage.getItem('id');\n    //   if (res) {\n    //     setId(res)\n    //   }\n    //   if (id) {\n    //     const tasks = getAllbyUser(id);\n    //     setProject(tasks)\n    //   }\n    // }, delay);\n    // // Clear the timeout when the component unmounts\n    // return () => clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"max-w-4xl mx-auto mt-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center my-5 flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold\",\n                    children: \"Todo List App\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-x-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Description\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Status\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 9\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                ke: true\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/app/(app)/project/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/(app)/project/page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/(app)/project/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"2EsW8/T17Isnp+DMyYN0X8uWkns=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oYXBwKS9wcm9qZWN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTZEO0FBRVY7QUFFRDtBQUNuQyxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxJQUFJQyxNQUFNLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBcUIsRUFBRTtJQUM3RCxNQUFNTyxhQUFhO1FBQ2pCLElBQUlKLEtBQUtLLGFBQWFDLE9BQU8sQ0FBQztRQUM5QixJQUFJQyxNQUFNLE1BQU1iLDBFQUFZQSxDQUFDTTtRQUM3QixJQUFJTyxLQUFLO1lBQ0xKLFdBQVdJO1lBQ1gsT0FBTztZQUNQQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFDRVQsZ0RBQVNBLENBQUM7UUFDUk07SUFDQSwrQ0FBK0M7SUFDL0MsMkRBQTJEO0lBRTNELG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsMENBQTBDO0lBQzFDLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixjQUFjO0lBQ2Qsc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixNQUFNO0lBQ04sYUFBYTtJQUViLG1EQUFtRDtJQUNuRCxvQ0FBb0M7SUFJdEMsR0FBRyxFQUFFO0lBTUwscUJBQ0UsOERBQUNNO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBcUI7Ozs7Ozs4QkFDbkMsOERBQUNoQixtRUFBT0E7Ozs7OzhCQUNSLDhEQUFDaUI7b0JBQUlELFdBQVU7OEJBQ3JCLDRFQUFDRzt3QkFBTUgsV0FBVTs7MENBRWYsOERBQUNJOzBDQUNDLDRFQUFDQzs7c0RBQ0MsOERBQUNDOzs7OztzREFDRCw4REFBQ0E7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdSLDhEQUFDQztnQ0FDREMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlOO0dBdEV3QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGFwcCkvcHJvamVjdC9wYWdlLnRzeD82Yzc5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFByb2plY3RIYW5kbGUgZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2RvL1Byb2plY3RVcGRhdGVEZWxldGVcIjtcbmltcG9ydCB7IGdldEFsbGJ5VXNlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2VydmljZXMvcHJvamVjdFwiO1xuaW1wb3J0IHsgUHJvamVjdEludGVyZmFjZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdHlwZXMvSVByb2plY3RcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9kby9BZGRUYXNrXCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2RvL1Byb2plY3RMaXN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCgpIHtcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGU8UHJvamVjdEludGVyZmFjZVtdPihbXSlcbiAgY29uc3QgZ2V0UHJvamVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxuICAgIGxldCByZXMgPSBhd2FpdCBnZXRBbGxieVVzZXIoaWQpO1xuICAgIGlmIChyZXMpIHtcbiAgICAgICAgc2V0UHJvamVjdChyZXMpXG4gICAgICAgIC8vZGVidWdcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgIH1cbn1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQcm9qZWN0KClcbiAgICAvLyBUaGlzIGNvZGUgd2lsbCBydW4gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xuICAgIC8vIGNvbnN0IGRlbGF5ID0gODAwMDsgLy8gRGVsYXkgaW4gbWlsbGlzZWNvbmRzICgyIHNlY29uZHMpXG5cbiAgICAvLyBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgLy8gQ29kZSB0byBleGVjdXRlIGFmdGVyIHRoZSBkZWxheVxuICAgIC8vICAgY29uc29sZS5sb2coJ0RlbGF5ZWQgY29kZSBleGVjdXRlZCcpO1xuICAgIC8vICAgbGV0IHJlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xuICAgIC8vICAgaWYgKHJlcykge1xuICAgIC8vICAgICBzZXRJZChyZXMpXG4gICAgLy8gICB9XG4gICAgLy8gICBpZiAoaWQpIHtcbiAgICAvLyAgICAgY29uc3QgdGFza3MgPSBnZXRBbGxieVVzZXIoaWQpO1xuICAgIC8vICAgICBzZXRQcm9qZWN0KHRhc2tzKVxuICAgIC8vICAgfVxuICAgIC8vIH0sIGRlbGF5KTtcblxuICAgIC8vIC8vIENsZWFyIHRoZSB0aW1lb3V0IHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xuICAgIC8vIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuXG5cblxuICB9LCBbXSk7XG4gIGludGVyZmFjZSBUb2RvTGlzdFByb3BzIHtcbiAgICB0YXNrczogUHJvamVjdEludGVyZmFjZVtdO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nbWF4LXctNHhsIG14LWF1dG8gbXQtNCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXktNSBmbGV4IGZsZXgtY29sIGdhcC00Jz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkJz5Ub2RvIExpc3QgQXBwPC9oMT5cbiAgICAgICAgPEFkZFRhc2sgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgey8qIGhlYWQgKi99XG4gICAgPHRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgPHRoPlRpdGxlPC90aD5cbiAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgPHRoPlN0YXR1czwvdGg+XG4gICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5XG4gICAga2VcbiAgICA+XG4gICAgIFxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG48L2Rpdj5cbiAgICAgIFxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4gIClcbn0iXSwibmFtZXMiOlsiZ2V0QWxsYnlVc2VyIiwiQWRkVGFzayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9qZWN0IiwiaWQiLCJzZXRJZCIsInByb2plY3QiLCJzZXRQcm9qZWN0IiwiZ2V0UHJvamVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsImtlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(app)/project/page.tsx\n"));

/***/ })

});