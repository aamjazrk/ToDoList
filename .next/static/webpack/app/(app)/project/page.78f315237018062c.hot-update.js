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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_services_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/services/project */ \"(app-client)/./src/components/services/project.ts\");\n/* harmony import */ var _components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/todo/AddTask */ \"(app-client)/./src/components/ui/todo/AddTask.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var flowbite_react_lib_esm_components_Table_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flowbite-react/lib/esm/components/Table/TableRow */ \"(app-client)/./node_modules/flowbite-react/lib/esm/components/Table/TableRow.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Project() {\n    _s();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const getProject = async ()=>{\n        let id = localStorage.getItem(\"id\");\n        let res = await (0,_components_services_project__WEBPACK_IMPORTED_MODULE_1__.getAllbyUser)(id);\n        if (res) {\n            setProject(res);\n            //debug\n            console.log(res);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getProject();\n    // This code will run when the component mounts\n    // const delay = 8000; // Delay in milliseconds (2 seconds)\n    // const timer = setTimeout(() => {\n    //   // Code to execute after the delay\n    //   console.log('Delayed code executed');\n    //   let res = localStorage.getItem('id');\n    //   if (res) {\n    //     setId(res)\n    //   }\n    //   if (id) {\n    //     const tasks = getAllbyUser(id);\n    //     setProject(tasks)\n    //   }\n    // }, delay);\n    // // Clear the timeout when the component unmounts\n    // return () => clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"max-w-4xl mx-auto mt-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center my-5 flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold\",\n                    children: \"Todo List App\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-x-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Description\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Status\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 9\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: project.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react_lib_esm_components_Table_TableRow__WEBPACK_IMPORTED_MODULE_4__.TableRow, {}, item.Id, false, {\n                                        fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 9\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/app/(app)/project/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/(app)/project/page.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/(app)/project/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"2EsW8/T17Isnp+DMyYN0X8uWkns=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oYXBwKS9wcm9qZWN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU2RDtBQUVWO0FBRUQ7QUFDMEI7QUFDN0QsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsSUFBSUMsTUFBTSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QixNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQXFCLEVBQUU7SUFDN0QsTUFBTVEsYUFBYTtRQUNqQixJQUFJSixLQUFLSyxhQUFhQyxPQUFPLENBQUM7UUFDOUIsSUFBSUMsTUFBTSxNQUFNZCwwRUFBWUEsQ0FBQ087UUFDN0IsSUFBSU8sS0FBSztZQUNMSixXQUFXSTtZQUNYLE9BQU87WUFDUEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBQ0VWLGdEQUFTQSxDQUFDO1FBQ1JPO0lBQ0EsK0NBQStDO0lBQy9DLDJEQUEyRDtJQUUzRCxtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sY0FBYztJQUNkLHNDQUFzQztJQUN0Qyx3QkFBd0I7SUFDeEIsTUFBTTtJQUNOLGFBQWE7SUFFYixtREFBbUQ7SUFDbkQsb0NBQW9DO0lBSXRDLEdBQUcsRUFBRTtJQU1MLHFCQUNFLDhEQUFDTTtRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQXFCOzs7Ozs7OEJBQ25DLDhEQUFDakIsbUVBQU9BOzs7Ozs4QkFDUiw4REFBQ2tCO29CQUFJRCxXQUFVOzhCQUNyQiw0RUFBQ0c7d0JBQU1ILFdBQVU7OzBDQUVmLDhEQUFDSTswQ0FDQyw0RUFBQ0M7O3NEQUNDLDhEQUFDQzs7Ozs7c0RBQ0QsOERBQUNBO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHUiw4REFBQ0M7MENBQ0VoQixRQUFRaUIsR0FBRyxDQUFDLENBQUNDLHFCQUNaLDhEQUFDdEIsc0ZBQVFBLE1BQU1zQixLQUFLQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCOUI7R0EzRXdCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXBwKS9wcm9qZWN0L3BhZ2UudHN4PzZjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUHJvamVjdEhhbmRsZSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvZG8vUHJvamVjdFVwZGF0ZURlbGV0ZVwiO1xuaW1wb3J0IHsgZ2V0QWxsYnlVc2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9zZXJ2aWNlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0SW50ZXJmYWNlIH0gZnJvbSBcIkAvY29tcG9uZW50cy90eXBlcy9JUHJvamVjdFwiO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2RvL0FkZFRhc2tcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvZG8vUHJvamVjdExpc3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYWJsZVJvdyB9IGZyb20gXCJmbG93Yml0ZS1yZWFjdC9saWIvZXNtL2NvbXBvbmVudHMvVGFibGUvVGFibGVSb3dcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlPFByb2plY3RJbnRlcmZhY2VbXT4oW10pXG4gIGNvbnN0IGdldFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJylcbiAgICBsZXQgcmVzID0gYXdhaXQgZ2V0QWxsYnlVc2VyKGlkKTtcbiAgICBpZiAocmVzKSB7XG4gICAgICAgIHNldFByb2plY3QocmVzKVxuICAgICAgICAvL2RlYnVnXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9XG59XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHJvamVjdCgpXG4gICAgLy8gVGhpcyBjb2RlIHdpbGwgcnVuIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcbiAgICAvLyBjb25zdCBkZWxheSA9IDgwMDA7IC8vIERlbGF5IGluIG1pbGxpc2Vjb25kcyAoMiBzZWNvbmRzKVxuXG4gICAgLy8gY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIC8vIENvZGUgdG8gZXhlY3V0ZSBhZnRlciB0aGUgZGVsYXlcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdEZWxheWVkIGNvZGUgZXhlY3V0ZWQnKTtcbiAgICAvLyAgIGxldCByZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKTtcbiAgICAvLyAgIGlmIChyZXMpIHtcbiAgICAvLyAgICAgc2V0SWQocmVzKVxuICAgIC8vICAgfVxuICAgIC8vICAgaWYgKGlkKSB7XG4gICAgLy8gICAgIGNvbnN0IHRhc2tzID0gZ2V0QWxsYnlVc2VyKGlkKTtcbiAgICAvLyAgICAgc2V0UHJvamVjdCh0YXNrcylcbiAgICAvLyAgIH1cbiAgICAvLyB9LCBkZWxheSk7XG5cbiAgICAvLyAvLyBDbGVhciB0aGUgdGltZW91dCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuXG5cbiAgfSwgW10pO1xuICBpbnRlcmZhY2UgVG9kb0xpc3RQcm9wcyB7XG4gICAgdGFza3M6IFByb2plY3RJbnRlcmZhY2VbXTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J21heC13LTR4bCBteC1hdXRvIG10LTQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG15LTUgZmxleCBmbGV4LWNvbCBnYXAtNCc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCc+VG9kbyBMaXN0IEFwcDwvaDE+XG4gICAgICAgIDxBZGRUYXNrIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XG4gIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgIHsvKiBoZWFkICovfVxuICAgIDx0aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgIDx0aD5UaXRsZTwvdGg+XG4gICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgIHtwcm9qZWN0Lm1hcCgoaXRlbTogUHJvamVjdEludGVyZmFjZSk9PihcbiAgICAgICAgPFRhYmxlUm93IGtleT17aXRlbS5JZH0+XG4gICAgICAgICAgXG5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIClcbiAgICAgICl9XG4gICAgIFxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG48L2Rpdj5cbiAgICAgIFxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4gIClcbn0iXSwibmFtZXMiOlsiZ2V0QWxsYnlVc2VyIiwiQWRkVGFzayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUYWJsZVJvdyIsIlByb2plY3QiLCJpZCIsInNldElkIiwicHJvamVjdCIsInNldFByb2plY3QiLCJnZXRQcm9qZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiaXRlbSIsIklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(app)/project/page.tsx\n"));

/***/ })

});