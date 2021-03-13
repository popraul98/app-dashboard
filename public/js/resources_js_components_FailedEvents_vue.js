(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_FailedEvents_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FailedEvents.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FailedEvents.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FailedEvents",
  props: ['events'],
  data: function data() {
    return {
      failed_events: this.events
    };
  },
  mounted: function mounted() {
    console.log('FailedEvents mounted');
  },
  methods: {
    eventsNotFound: function eventsNotFound(obj) {
      if (obj === undefined || obj.length == 0) {
        return 1;
      }

      return 0;
    } // getFailedEvents(events) {
    //
    //     for (let i = 1; i < events.length; i++) {
    //
    //         if (this.isEventFailed(events[i])) {
    //             this.failed_events.push(events[i]);
    //         }
    //     }
    //     JSON.stringify(this.failed_events);
    // },
    // isEventFailed(event) {
    //     if (event.status == 0) {
    //         return 1;
    //     }
    //     return 0;
    // },
    // sortEventsAfterDate(events) {
    //     events.sort(function (a, b) {
    //         return new Date(b.event_date) - new Date(a.event_date);
    //     });
    //     return events;
    // },

  }
});

/***/ }),

/***/ "./resources/js/components/FailedEvents.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/FailedEvents.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _FailedEvents_vue_vue_type_template_id_7f4128a1_bindings_events_props_failed_events_data_eventsNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FailedEvents.vue?vue&type=template&id=7f4128a1&bindings={"events":"props","failed_events":"data","eventsNotFound":"options"} */ "./resources/js/components/FailedEvents.vue?vue&type=template&id=7f4128a1&bindings={\"events\":\"props\",\"failed_events\":\"data\",\"eventsNotFound\":\"options\"}");
/* harmony import */ var _FailedEvents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FailedEvents.vue?vue&type=script&lang=js */ "./resources/js/components/FailedEvents.vue?vue&type=script&lang=js");



_FailedEvents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _FailedEvents_vue_vue_type_template_id_7f4128a1_bindings_events_props_failed_events_data_eventsNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_FailedEvents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/FailedEvents.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FailedEvents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/FailedEvents.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/FailedEvents.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FailedEvents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FailedEvents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FailedEvents.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FailedEvents.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/FailedEvents.vue?vue&type=template&id=7f4128a1&bindings={\"events\":\"props\",\"failed_events\":\"data\",\"eventsNotFound\":\"options\"}":
/*!**************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/FailedEvents.vue?vue&type=template&id=7f4128a1&bindings={"events":"props","failed_events":"data","eventsNotFound":"options"} ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FailedEvents_vue_vue_type_template_id_7f4128a1_bindings_events_props_failed_events_data_eventsNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FailedEvents_vue_vue_type_template_id_7f4128a1_bindings_events_props_failed_events_data_eventsNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FailedEvents.vue?vue&type=template&id=7f4128a1&bindings={"events":"props","failed_events":"data","eventsNotFound":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FailedEvents.vue?vue&type=template&id=7f4128a1&bindings={\"events\":\"props\",\"failed_events\":\"data\",\"eventsNotFound\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FailedEvents.vue?vue&type=template&id=7f4128a1&bindings={\"events\":\"props\",\"failed_events\":\"data\",\"eventsNotFound\":\"options\"}":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FailedEvents.vue?vue&type=template&id=7f4128a1&bindings={"events":"props","failed_events":"data","eventsNotFound":"options"} ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "text-left" }
const _hoisted_2 = { class: "title-box bg-blue-50 sticky top-0 pt-2" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "far fa-calendar-times" }, null, -1 /* HOISTED */)
const _hoisted_4 = { class: "divide" }
const _hoisted_5 = {
  key: 0,
  class: "text-second"
}
const _hoisted_6 = { class: "text-main " }
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "arrow-color fas fa-angle-right" }, null, -1 /* HOISTED */)
const _hoisted_8 = { class: "bg-red-400 text-white p-0.5 rounded ml-1" }
const _hoisted_9 = { class: "truncate text-second" }
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" type Event: ")
const _hoisted_11 = { class: "text-red-dark" }
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" event Date: ")
const _hoisted_13 = { class: "text-red-dark" }
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" info: ")
const _hoisted_15 = { class: "text-red-dark" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", _hoisted_2, [
      _hoisted_3,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Failed events - latest (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.failed_events.length) + ") ", 1 /* TEXT */)
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
      ($options.eventsNotFound($data.failed_events)==1)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, " 0 failed events "))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.failed_events, (event) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [
            _hoisted_7,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(event.description), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_9, [
              _hoisted_10,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(event.type), 1 /* TEXT */),
              _hoisted_12,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(event.event_date), 1 /* TEXT */),
              _hoisted_14,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(event.info), 1 /* TEXT */)
            ])
          ])
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
}

/***/ })

}]);