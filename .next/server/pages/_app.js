"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);
/* harmony import */ var _contexts_dataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(985);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_immer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_dummyresponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(367);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import '@/styles/globals.css'







function App({ Component , pageProps  }) {
    const [tableData, setTableData] = (0,use_immer__WEBPACK_IMPORTED_MODULE_3__.useImmer)({
        headers: [],
        rows: []
    });
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        (0,_api__WEBPACK_IMPORTED_MODULE_6__/* .fetchScreenRiskWeight */ .Yh)().then(setTableData);
    }, [
        setTableData
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_dataContext__WEBPACK_IMPORTED_MODULE_2__/* .DataContext.Provider */ .R.Provider, {
        value: {
            tableData,
            setTableData
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            value: {
                tableData,
                setTableData
            },
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("use-immer");

/***/ }),

/***/ 210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [531], () => (__webpack_exec__(730)));
module.exports = __webpack_exports__;

})();