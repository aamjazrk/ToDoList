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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_services_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/services/project */ \"(app-client)/./src/components/services/project.ts\");\n/* harmony import */ var _components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/todo/AddTask */ \"(app-client)/./src/components/ui/todo/AddTask.tsx\");\n/* harmony import */ var _components_ui_todo_ProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/todo/ProjectList */ \"(app-client)/./src/components/ui/todo/ProjectList.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function Project() {\n    _s();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [projects, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // This code will run when the component mounts\n        const delay = 3000; // Delay in milliseconds (2 seconds)\n        const timer = setTimeout(()=>{\n            // Code to execute after the delay\n            console.log(\"Delayed code executed\");\n            let res = localStorage.getItem(\"id\");\n            if (res) {\n                setId(res);\n            }\n        }, delay);\n        // Clear the timeout when the component unmounts\n        return ()=>clearTimeout(timer);\n    }, []);\n    const delay = 3000; // Delay in milliseconds (2 seconds)\n    const timer = setTimeout(async ()=>{\n        // Code to execute after the delay\n        if (id) {\n            const tasks = await (0,_components_services_project__WEBPACK_IMPORTED_MODULE_1__.getAllbyUser)(id);\n            setProject(tasks);\n        }\n    }, delay);\n    // Clear the timeout when the component unmounts\n    return ()=>clearTimeout(timer);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"max-w-4xl mx-auto mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center my-5 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: \"Todo List App\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/(app)/project/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_todo_AddTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/app/src/app/(app)/project/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_todo_ProjectList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                project: projects\n            }, void 0, false, {\n                fileName: \"/app/src/app/(app)/project/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/(app)/project/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"gjFgeKj0vxE1PJDMYYH0NFFHvSs=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oYXBwKS9wcm9qZWN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2RDtBQUVWO0FBQ1E7QUFDVDtBQUNuQyxlQUFlTTs7SUFDNUIsTUFBTSxDQUFDQyxJQUFJQyxNQUFNLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ0ssVUFBVUMsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBcUIsRUFBRTtJQUM5REMsZ0RBQVNBLENBQUM7UUFDUiwrQ0FBK0M7UUFHL0MsTUFBTU0sUUFBUSxNQUFNLG9DQUFvQztRQUV4RCxNQUFNQyxRQUFRQyxXQUFXO1lBQ3ZCLGtDQUFrQztZQUNsQ0MsUUFBUUMsR0FBRyxDQUFDO1lBQ1osSUFBSUMsTUFBTUMsYUFBYUMsT0FBTyxDQUFDO1lBQy9CLElBQUlGLEtBQUs7Z0JBQ1BSLE1BQU1RO1lBQ1I7UUFDRixHQUFHTDtRQUVILGdEQUFnRDtRQUNoRCxPQUFPLElBQU1RLGFBQWFQO0lBRTVCLEdBQUcsRUFBRTtJQUNMLE1BQU1ELFFBQVEsTUFBTSxvQ0FBb0M7SUFFeEQsTUFBTUMsUUFBUUMsV0FBVztRQUN2QixrQ0FBa0M7UUFDbEMsSUFBSU4sSUFBSTtZQUNOLE1BQU1hLFFBQVEsTUFBTXBCLDBFQUFZQSxDQUFDTztZQUNqQ0csV0FBV1U7UUFDYjtJQUNGLEdBQUdUO0lBRUgsZ0RBQWdEO0lBQ2hELE9BQU8sSUFBTVEsYUFBYVA7SUFJMUIscUJBQ0UsOERBQUNTO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHRixXQUFVO2tDQUFxQjs7Ozs7O2tDQUNuQyw4REFBQ3JCLG1FQUFPQTs7Ozs7Ozs7Ozs7MEJBRVYsOERBQUNDLHVFQUFXQTtnQkFBQ3VCLFNBQVNoQjs7Ozs7Ozs7Ozs7O0FBSTVCO0dBL0M4Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXBwKS9wcm9qZWN0L3BhZ2UudHN4PzZjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBnZXRBbGxieVVzZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3NlcnZpY2VzL3Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RJbnRlcmZhY2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3R5cGVzL0lQcm9qZWN0XCI7XG5pbXBvcnQgQWRkVGFzayBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvZG8vQWRkVGFza1wiO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9kby9Qcm9qZWN0TGlzdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFByb2plY3QoKSB7XG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZTxQcm9qZWN0SW50ZXJmYWNlW10+KFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRoaXMgY29kZSB3aWxsIHJ1biB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXG5cblxuICAgIGNvbnN0IGRlbGF5ID0gMzAwMDsgLy8gRGVsYXkgaW4gbWlsbGlzZWNvbmRzICgyIHNlY29uZHMpXG5cbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gQ29kZSB0byBleGVjdXRlIGFmdGVyIHRoZSBkZWxheVxuICAgICAgY29uc29sZS5sb2coJ0RlbGF5ZWQgY29kZSBleGVjdXRlZCcpO1xuICAgICAgbGV0IHJlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBzZXRJZChyZXMpXG4gICAgICB9XG4gICAgfSwgZGVsYXkpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIHRpbWVvdXQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG5cbiAgfSwgW10pO1xuICBjb25zdCBkZWxheSA9IDMwMDA7IC8vIERlbGF5IGluIG1pbGxpc2Vjb25kcyAoMiBzZWNvbmRzKVxuXG4gIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgLy8gQ29kZSB0byBleGVjdXRlIGFmdGVyIHRoZSBkZWxheVxuICAgIGlmIChpZCkge1xuICAgICAgY29uc3QgdGFza3MgPSBhd2FpdCBnZXRBbGxieVVzZXIoaWQpO1xuICAgICAgc2V0UHJvamVjdCh0YXNrcylcbiAgICB9XG4gIH0sIGRlbGF5KTtcblxuICAvLyBDbGVhciB0aGUgdGltZW91dCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdtYXgtdy00eGwgbXgtYXV0byBtdC00Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS01IGZsZXggZmxleC1jb2wgZ2FwLTQnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPlRvZG8gTGlzdCBBcHA8L2gxPlxuICAgICAgICA8QWRkVGFzayAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UHJvamVjdExpc3QgcHJvamVjdD17cHJvamVjdHN9IC8+XG4gICAgPC9tYWluPlxuXG4gIClcbn0iXSwibmFtZXMiOlsiZ2V0QWxsYnlVc2VyIiwiQWRkVGFzayIsIlByb2plY3RMaXN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2plY3QiLCJpZCIsInNldElkIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0IiwiZGVsYXkiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsZWFyVGltZW91dCIsInRhc2tzIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwicHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(app)/project/page.tsx\n"));

/***/ })

});