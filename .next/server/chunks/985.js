"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 4056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OD": () => (/* binding */ uploadScreenQuestionMatrix),
/* harmony export */   "SB": () => (/* binding */ updateScreenQuestionMatrix),
/* harmony export */   "YB": () => (/* binding */ fetchAssetRisk),
/* harmony export */   "Yh": () => (/* binding */ fetchScreenRiskWeight)
/* harmony export */ });
const { axiosInstance  } = __webpack_require__(7343);
const fetchScreenRiskWeight = async ()=>{
    return axiosInstance.get("/risk_db/download_screen_risk_weight").then((res)=>res.data);
};
const updateScreenQuestionMatrix = async (payload)=>{
    return axiosInstance.post("/risk_db/update_screen_question_matrix", payload).then((res)=>res.data);
};
const uploadScreenQuestionMatrix = async (formData)=>{
    return axiosInstance.post("/risk_db/upload_screen_question_matrix/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};
const fetchAssetRisk = async (payload)=>{
    return axiosInstance.post("/risks/get_asset_risk/", payload).then((res)=>res.data);
};


/***/ }),

/***/ 7343:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axiosInstance": () => (/* binding */ axiosInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://devsita.netrum-tech.com"
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* binding */ DataProvider),
/* harmony export */   "Z3": () => (/* binding */ useTableData)
/* harmony export */ });
/* unused harmony export DataContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4056);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_immer__WEBPACK_IMPORTED_MODULE_3__);




const { createContext , useContext  } = __webpack_require__(6689);
const DataContext = createContext({
    tableData: {},
    setTableData: ()=>{}
});
const useTableData = ()=>{
    const { tableData , setTableData  } = useContext(DataContext);
    return {
        tableData,
        setTableData
    };
};
const DataProvider = ({ children  })=>{
    const [tableData, setTableData] = (0,use_immer__WEBPACK_IMPORTED_MODULE_3__.useImmer)({
        headers: [],
        rows: []
    });
    (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "screenRiskWeight"
    ], _api__WEBPACK_IMPORTED_MODULE_1__/* .fetchScreenRiskWeight */ .Yh, {
        onSuccess: (data)=>{
            setTableData(data);
        },
        refetchOnWindowFocus: false
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataContext.Provider, {
        value: {
            tableData,
            setTableData
        },
        children: children
    });
};


/***/ })

};
;