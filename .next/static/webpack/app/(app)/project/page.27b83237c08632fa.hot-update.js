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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_services_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/services/project */ \"(app-client)/./src/components/services/project.ts\");\n/* harmony import */ var _components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/todo/AddTask */ \"(app-client)/./src/components/ui/todo/AddTask.tsx\");\n/* harmony import */ var _components_ui_todo_ProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/todo/ProjectList */ \"(app-client)/./src/components/ui/todo/ProjectList.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function Project() {\n    _s();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [projects, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // This code will run when the component mounts\n        const delay = 6000; // Delay in milliseconds (2 seconds)\n        const timer = setTimeout(()=>{\n            // Code to execute after the delay\n            console.log(\"Delayed code executed\");\n            let res = localStorage.getItem(\"id\");\n            if (res) {\n                setId(res);\n            }\n        }, delay);\n        // Clear the timeout when the component unmounts\n        return ()=>clearTimeout(timer);\n    }, [\n        tasks\n    ]);\n    if (id) {\n        const tasks1 = await (0,_components_services_project__WEBPACK_IMPORTED_MODULE_1__.getAllbyUser)(id);\n        setProject(tasks1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"max-w-4xl mx-auto mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center my-5 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: \"Todo List App\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/(app)/project/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/app/src/app/(app)/project/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_todo_ProjectList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                project: projects\n            }, void 0, false, {\n                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/(app)/project/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"gjFgeKj0vxE1PJDMYYH0NFFHvSs=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oYXBwKS9wcm9qZWN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2RDtBQUVWO0FBQ1E7QUFDVDtBQUNuQyxlQUFlTTs7SUFDNUIsTUFBTSxDQUFDQyxJQUFJQyxNQUFNLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ0ssVUFBVUMsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBcUIsRUFBRTtJQUM5REMsZ0RBQVNBLENBQUM7UUFDUiwrQ0FBK0M7UUFHL0MsTUFBTU0sUUFBUSxNQUFNLG9DQUFvQztRQUV4RCxNQUFNQyxRQUFRQyxXQUFXO1lBQ3ZCLGtDQUFrQztZQUNsQ0MsUUFBUUMsR0FBRyxDQUFDO1lBQ1osSUFBSUMsTUFBTUMsYUFBYUMsT0FBTyxDQUFDO1lBQy9CLElBQUlGLEtBQUs7Z0JBQ1BSLE1BQU1RO1lBQ1I7UUFDRixHQUFHTDtRQUVILGdEQUFnRDtRQUNoRCxPQUFPLElBQU1RLGFBQWFQO0lBRTVCLEdBQUc7UUFBQ1E7S0FBTTtJQUNWLElBQUliLElBQUk7UUFDTixNQUFNYSxTQUFRLE1BQU1wQiwwRUFBWUEsQ0FBQ087UUFDakNHLFdBQVdVO0lBQ2I7SUFHQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQXFCOzs7Ozs7a0NBQ25DLDhEQUFDckIsbUVBQU9BOzs7Ozs7Ozs7OzswQkFFViw4REFBQ0MsdUVBQVdBO2dCQUFDdUIsU0FBU2hCOzs7Ozs7Ozs7Ozs7QUFJNUI7R0F0QzhCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhcHApL3Byb2plY3QvcGFnZS50c3g/NmM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IGdldEFsbGJ5VXNlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2VydmljZXMvcHJvamVjdFwiO1xuaW1wb3J0IHsgUHJvamVjdEludGVyZmFjZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdHlwZXMvSVByb2plY3RcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9kby9BZGRUYXNrXCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2RvL1Byb2plY3RMaXN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUHJvamVjdCgpIHtcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlPFByb2plY3RJbnRlcmZhY2VbXT4oW10pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVGhpcyBjb2RlIHdpbGwgcnVuIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcblxuXG4gICAgY29uc3QgZGVsYXkgPSA2MDAwOyAvLyBEZWxheSBpbiBtaWxsaXNlY29uZHMgKDIgc2Vjb25kcylcblxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBDb2RlIHRvIGV4ZWN1dGUgYWZ0ZXIgdGhlIGRlbGF5XG4gICAgICBjb25zb2xlLmxvZygnRGVsYXllZCBjb2RlIGV4ZWN1dGVkJyk7XG4gICAgICBsZXQgcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIHNldElkKHJlcylcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG5cbiAgICAvLyBDbGVhciB0aGUgdGltZW91dCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICB9LCBbdGFza3NdKTtcbiAgaWYgKGlkKSB7XG4gICAgY29uc3QgdGFza3MgPSBhd2FpdCBnZXRBbGxieVVzZXIoaWQpO1xuICAgIHNldFByb2plY3QodGFza3MpXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdtYXgtdy00eGwgbXgtYXV0byBtdC00Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS01IGZsZXggZmxleC1jb2wgZ2FwLTQnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPlRvZG8gTGlzdCBBcHA8L2gxPlxuICAgICAgICA8QWRkVGFzayAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UHJvamVjdExpc3QgcHJvamVjdD17cHJvamVjdHN9IC8+XG4gICAgPC9tYWluPlxuXG4gIClcbn0iXSwibmFtZXMiOlsiZ2V0QWxsYnlVc2VyIiwiQWRkVGFzayIsIlByb2plY3RMaXN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2plY3QiLCJpZCIsInNldElkIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0IiwiZGVsYXkiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsZWFyVGltZW91dCIsInRhc2tzIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwicHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(app)/project/page.tsx\n"));

/***/ })

});