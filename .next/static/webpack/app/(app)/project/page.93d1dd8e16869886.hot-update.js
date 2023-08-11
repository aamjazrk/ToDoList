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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_services_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/services/project */ \"(app-client)/./src/components/services/project.ts\");\n/* harmony import */ var _components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/todo/AddTask */ \"(app-client)/./src/components/ui/todo/AddTask.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var flowbite_react_lib_esm_components_Table_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flowbite-react/lib/esm/components/Table/TableRow */ \"(app-client)/./node_modules/flowbite-react/lib/esm/components/Table/TableRow.js\");\n/* harmony import */ var flowbite_react_lib_esm_components_Table_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flowbite-react/lib/esm/components/Table/TableCell */ \"(app-client)/./node_modules/flowbite-react/lib/esm/components/Table/TableCell.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Project() {\n    _s();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const getProject = async ()=>{\n        let id = localStorage.getItem(\"id\");\n        let res = await (0,_components_services_project__WEBPACK_IMPORTED_MODULE_1__.getAllbyUser)(id);\n        if (res) {\n            setProject(res);\n            //debug\n            console.log(res);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getProject();\n    // This code will run when the component mounts\n    // const delay = 8000; // Delay in milliseconds (2 seconds)\n    // const timer = setTimeout(() => {\n    //   // Code to execute after the delay\n    //   console.log('Delayed code executed');\n    //   let res = localStorage.getItem('id');\n    //   if (res) {\n    //     setId(res)\n    //   }\n    //   if (id) {\n    //     const tasks = getAllbyUser(id);\n    //     setProject(tasks)\n    //   }\n    // }, delay);\n    // // Clear the timeout when the component unmounts\n    // return () => clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"max-w-4xl mx-auto mt-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center my-5 flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold\",\n                    children: \"Todo List App\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-x-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Description\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Status\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 9\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: project.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react_lib_esm_components_Table_TableRow__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react_lib_esm_components_Table_TableCell__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                            align: \"center\",\n                                            children: item.Title\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 11\n                                        }, this)\n                                    }, item.Id, false, {\n                                        fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 9\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/app/(app)/project/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/app/src/app/(app)/project/page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/(app)/project/page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/(app)/project/page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"2EsW8/T17Isnp+DMyYN0X8uWkns=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oYXBwKS9wcm9qZWN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFNkQ7QUFFVjtBQUVEO0FBQzBCO0FBQ0U7QUFDL0QsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsSUFBSUMsTUFBTSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QixNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQXFCLEVBQUU7SUFDN0QsTUFBTVMsYUFBYTtRQUNqQixJQUFJSixLQUFLSyxhQUFhQyxPQUFPLENBQUM7UUFDOUIsSUFBSUMsTUFBTSxNQUFNZiwwRUFBWUEsQ0FBQ1E7UUFDN0IsSUFBSU8sS0FBSztZQUNMSixXQUFXSTtZQUNYLE9BQU87WUFDUEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBQ0VYLGdEQUFTQSxDQUFDO1FBQ1JRO0lBQ0EsK0NBQStDO0lBQy9DLDJEQUEyRDtJQUUzRCxtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sY0FBYztJQUNkLHNDQUFzQztJQUN0Qyx3QkFBd0I7SUFDeEIsTUFBTTtJQUNOLGFBQWE7SUFFYixtREFBbUQ7SUFDbkQsb0NBQW9DO0lBSXRDLEdBQUcsRUFBRTtJQU1MLHFCQUNFLDhEQUFDTTtRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQXFCOzs7Ozs7OEJBQ25DLDhEQUFDbEIsbUVBQU9BOzs7Ozs4QkFDUiw4REFBQ21CO29CQUFJRCxXQUFVOzhCQUNyQiw0RUFBQ0c7d0JBQU1ILFdBQVU7OzBDQUVmLDhEQUFDSTswQ0FDQyw0RUFBQ0M7O3NEQUNDLDhEQUFDQzs7Ozs7c0RBQ0QsOERBQUNBO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHUiw4REFBQ0M7MENBQ0VoQixRQUFRaUIsR0FBRyxDQUFDLENBQUNDLHFCQUNaLDhEQUFDdkIsc0ZBQVFBO2tEQUNQLDRFQUFDQyx3RkFBU0E7NENBQUN1QixPQUFNO3NEQUFVRCxLQUFLRSxLQUFLOzs7Ozs7dUNBRHhCRixLQUFLRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCOUI7R0E1RXdCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXBwKS9wcm9qZWN0L3BhZ2UudHN4PzZjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUHJvamVjdEhhbmRsZSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvZG8vUHJvamVjdFVwZGF0ZURlbGV0ZVwiO1xuaW1wb3J0IHsgZ2V0QWxsYnlVc2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9zZXJ2aWNlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0SW50ZXJmYWNlIH0gZnJvbSBcIkAvY29tcG9uZW50cy90eXBlcy9JUHJvamVjdFwiO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2RvL0FkZFRhc2tcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvZG8vUHJvamVjdExpc3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYWJsZVJvdyB9IGZyb20gXCJmbG93Yml0ZS1yZWFjdC9saWIvZXNtL2NvbXBvbmVudHMvVGFibGUvVGFibGVSb3dcIjtcbmltcG9ydCB7IFRhYmxlQ2VsbCB9IGZyb20gXCJmbG93Yml0ZS1yZWFjdC9saWIvZXNtL2NvbXBvbmVudHMvVGFibGUvVGFibGVDZWxsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KCkge1xuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZTxQcm9qZWN0SW50ZXJmYWNlW10+KFtdKVxuICBjb25zdCBnZXRQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXG4gICAgbGV0IHJlcyA9IGF3YWl0IGdldEFsbGJ5VXNlcihpZCk7XG4gICAgaWYgKHJlcykge1xuICAgICAgICBzZXRQcm9qZWN0KHJlcylcbiAgICAgICAgLy9kZWJ1Z1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgfVxufVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByb2plY3QoKVxuICAgIC8vIFRoaXMgY29kZSB3aWxsIHJ1biB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXG4gICAgLy8gY29uc3QgZGVsYXkgPSA4MDAwOyAvLyBEZWxheSBpbiBtaWxsaXNlY29uZHMgKDIgc2Vjb25kcylcblxuICAgIC8vIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAvLyBDb2RlIHRvIGV4ZWN1dGUgYWZ0ZXIgdGhlIGRlbGF5XG4gICAgLy8gICBjb25zb2xlLmxvZygnRGVsYXllZCBjb2RlIGV4ZWN1dGVkJyk7XG4gICAgLy8gICBsZXQgcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XG4gICAgLy8gICBpZiAocmVzKSB7XG4gICAgLy8gICAgIHNldElkKHJlcylcbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmIChpZCkge1xuICAgIC8vICAgICBjb25zdCB0YXNrcyA9IGdldEFsbGJ5VXNlcihpZCk7XG4gICAgLy8gICAgIHNldFByb2plY3QodGFza3MpXG4gICAgLy8gICB9XG4gICAgLy8gfSwgZGVsYXkpO1xuXG4gICAgLy8gLy8gQ2xlYXIgdGhlIHRpbWVvdXQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gICAgLy8gcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG5cblxuXG4gIH0sIFtdKTtcbiAgaW50ZXJmYWNlIFRvZG9MaXN0UHJvcHMge1xuICAgIHRhc2tzOiBQcm9qZWN0SW50ZXJmYWNlW107XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdtYXgtdy00eGwgbXgtYXV0byBtdC00Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS01IGZsZXggZmxleC1jb2wgZ2FwLTQnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPlRvZG8gTGlzdCBBcHA8L2gxPlxuICAgICAgICA8QWRkVGFzayAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICB7LyogaGVhZCAqL31cbiAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0aD48L3RoPlxuICAgICAgICA8dGg+VGl0bGU8L3RoPlxuICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICA8dGg+U3RhdHVzPC90aD5cbiAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgICB7cHJvamVjdC5tYXAoKGl0ZW06IFByb2plY3RJbnRlcmZhY2UpPT4oXG4gICAgICAgIDxUYWJsZVJvdyBrZXk9e2l0ZW0uSWR9PlxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57aXRlbS5UaXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICBcblxuICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgKVxuICAgICAgKX1cbiAgICAgXG4gICAgPC90Ym9keT5cbiAgPC90YWJsZT5cbjwvZGl2PlxuICAgICAgXG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgKVxufSJdLCJuYW1lcyI6WyJnZXRBbGxieVVzZXIiLCJBZGRUYXNrIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiUHJvamVjdCIsImlkIiwic2V0SWQiLCJwcm9qZWN0Iiwic2V0UHJvamVjdCIsImdldFByb2plY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJpdGVtIiwiYWxpZ24iLCJUaXRsZSIsIklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(app)/project/page.tsx\n"));

/***/ })

});