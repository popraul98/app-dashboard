(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_LogoTime_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LogoTime",
  props: ['timestamp'],
  data: function data() {
    return {
      date: "",
      time: ""
    };
  },
  created: function created() {
    setInterval(this.getNow, 1000);
  },
  mounted: function mounted() {
    console.log('LogoTime mounted');
  },
  methods: {
    getNow: function getNow() {
      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      var today = new Date(); // const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      this.time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
      this.date = today.toLocaleDateString("en-US", options);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/LogoTime.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/LogoTime.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _LogoTime_vue_vue_type_template_id_038b8883_bindings_timestamp_props_date_data_time_data_getNow_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoTime.vue?vue&type=template&id=038b8883&bindings={"timestamp":"props","date":"data","time":"data","getNow":"options"} */ "./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&bindings={\"timestamp\":\"props\",\"date\":\"data\",\"time\":\"data\",\"getNow\":\"options\"}");
/* harmony import */ var _LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoTime.vue?vue&type=script&lang=js */ "./resources/js/components/LogoTime.vue?vue&type=script&lang=js");



_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _LogoTime_vue_vue_type_template_id_038b8883_bindings_timestamp_props_date_data_time_data_getNow_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/LogoTime.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/LogoTime.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/LogoTime.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogoTime.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&bindings={\"timestamp\":\"props\",\"date\":\"data\",\"time\":\"data\",\"getNow\":\"options\"}":
/*!**********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&bindings={"timestamp":"props","date":"data","time":"data","getNow":"options"} ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_template_id_038b8883_bindings_timestamp_props_date_data_time_data_getNow_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_template_id_038b8883_bindings_timestamp_props_date_data_time_data_getNow_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogoTime.vue?vue&type=template&id=038b8883&bindings={"timestamp":"props","date":"data","time":"data","getNow":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&bindings={\"timestamp\":\"props\",\"date\":\"data\",\"time\":\"data\",\"getNow\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&bindings={\"timestamp\":\"props\",\"date\":\"data\",\"time\":\"data\",\"getNow\":\"options\"}":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&bindings={"timestamp":"props","date":"data","time":"data","getNow":"options"} ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "" }
const _hoisted_2 = { class: "ml-10" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  class: "",
  src: "/images/logo.png",
  alt: "logo-img"
}, null, -1 /* HOISTED */)
const _hoisted_4 = { class: "text-lg text-blue-dark font-medium text-opacity-90" }
const _hoisted_5 = { class: "text-4xl text-blue-dark font-semibold text-opacity-90" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "items-center" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
    href: "/logout",
    class: "text-blue-dark hover:underline text-sm"
  }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "fas fa-sign-out-alt" }),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Logout ")
  ])
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
      _hoisted_3,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.date), 1 /* TEXT */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.time), 1 /* TEXT */)
      ]),
      _hoisted_6
    ])
  ]))
}

/***/ })

}]);