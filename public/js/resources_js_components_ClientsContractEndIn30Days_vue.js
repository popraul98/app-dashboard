(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ClientsContractEndIn30Days_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ClientsContractEndIn30Days",
  props: ['clients'],
  data: function data() {
    return {
      clients_contract_end_in30days: this.clients
    };
  },
  mounted: function mounted() {
    console.log('ClientsContractEndIn10Days mounted');
  },
  watch: {
    clients: function clients(newClients) {
      console.log('NEW update clients 30');
      this.clients_contract_end_in30days = this.clients;
    }
  },
  methods: {
    clientsNotFound: function clientsNotFound(obj) {
      if (obj === undefined || obj.length == 0) {
        return 1;
      }

      return 0;
    } // getClientsContactEndIn30Days(clients) {
    //     const dateFromToday = new Date(new Date().setHours(0, 0, 0, 0));
    //
    //     let dateOver30days = this.getDateForNext30Days(dateFromToday);
    //     dateOver30days.setHours(0, 0, 0, 0)
    //
    //     for (let i = 0; i < clients.length; i++) {
    //         let contractEndDate = new Date(clients[i].contract_end_date);
    //         contractEndDate.setHours(0, 0, 0, 0)
    //
    //         if (this.isContractDateBetweenDates(dateFromToday, dateOver30days, contractEndDate)) {
    //             this.clients_contract_end_in30days.push(clients[i])
    //         }
    //         JSON.stringify(this.clients_contract_end_today);
    //     }
    //
    // },
    // getDateForNext30Days(date) {
    //     let newDate = new Date().setDate(date.getDate() + 29);
    //     newDate = new Date(newDate);
    //     return newDate;
    // },
    // isContractDateBetweenDates(dateFrom, dateTo, contractEndDay) {
    //     if (contractEndDay >= dateFrom
    //         && contractEndDay <= dateTo) {
    //         return 1;
    //     }
    //     return 0;
    // },
    // sortClientsAfterDate(clients) {
    //     clients.sort(function (a, b) {
    //         return new Date(a.contract_end_date) - new Date(b.contract_end_date);
    //     });
    //     return clients;
    // },

  }
});

/***/ }),

/***/ "./resources/js/components/ClientsContractEndIn30Days.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/ClientsContractEndIn30Days.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ClientsContractEndIn30Days_vue_vue_type_template_id_39a3ec76_bindings_clients_props_clients_contract_end_in30days_data_clientsNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&bindings={"clients":"props","clients_contract_end_in30days":"data","clientsNotFound":"options"} */ "./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&bindings={\"clients\":\"props\",\"clients_contract_end_in30days\":\"data\",\"clientsNotFound\":\"options\"}");
/* harmony import */ var _ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientsContractEndIn30Days.vue?vue&type=script&lang=js */ "./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js");



_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ClientsContractEndIn30Days_vue_vue_type_template_id_39a3ec76_bindings_clients_props_clients_contract_end_in30days_data_clientsNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/ClientsContractEndIn30Days.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientsContractEndIn30Days.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&bindings={\"clients\":\"props\",\"clients_contract_end_in30days\":\"data\",\"clientsNotFound\":\"options\"}":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&bindings={"clients":"props","clients_contract_end_in30days":"data","clientsNotFound":"options"} ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_template_id_39a3ec76_bindings_clients_props_clients_contract_end_in30days_data_clientsNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_template_id_39a3ec76_bindings_clients_props_clients_contract_end_in30days_data_clientsNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&bindings={"clients":"props","clients_contract_end_in30days":"data","clientsNotFound":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&bindings={\"clients\":\"props\",\"clients_contract_end_in30days\":\"data\",\"clientsNotFound\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&bindings={\"clients\":\"props\",\"clients_contract_end_in30days\":\"data\",\"clientsNotFound\":\"options\"}":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&bindings={"clients":"props","clients_contract_end_in30days":"data","clientsNotFound":"options"} ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "text-left pb-2" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { class: "title-box " }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "far fa-file-excel" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ending contracts in 30 days: ")
], -1 /* HOISTED */)
const _hoisted_3 = { class: "divide" }
const _hoisted_4 = {
  key: 0,
  class: "text-second"
}
const _hoisted_5 = { class: "text-main" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "arrow-color fas fa-angle-right" }, null, -1 /* HOISTED */)
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1 /* HOISTED */)
const _hoisted_8 = { class: "text-second" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      ($options.clientsNotFound($data.clients_contract_end_in30days)==1)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, " 0 found clients "))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.clients_contract_end_in30days, (client) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [
            _hoisted_6,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.name), 1 /* TEXT */),
            _hoisted_7,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_8, " contract-end-date: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.contract_end_date), 1 /* TEXT */)
          ])
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
}

/***/ })

}]);