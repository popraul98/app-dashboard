(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ClientsTodayContractEnd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ClientsTodayContractEnd",
  props: ['clients'],
  data: function data() {
    return {
      clients_contract_end_today: this.clients
    };
  },
  mounted: function mounted() {
    console.log('ClientsTodayContractEnd mounted');
  },
  watch: {
    clients: function clients(newClients) {
      console.log('NEW update clients TODAY');
      this.clients_contract_end_today = this.clients;
    }
  },
  methods: {
    clientsNotFound: function clientsNotFound(obj) {
      if (obj === undefined || obj.length == 0) {
        return 1;
      }

      return 0;
    } // getClientsEndToday(clients) {
    //
    //     const todayDate = new Date();
    //
    //     for (let i = 0; i < clients.length; i++) {
    //         let contractEndDate = new Date(clients[i].contract_end_date);
    //
    //         if (this.sameDay(todayDate, contractEndDate)) {
    //             this.clients_contract_end_today.push(clients[i]);
    //         }
    //     }
    //     JSON.stringify(this.clients_contract_end_today);
    // },
    //
    // sameDay(d1, d2) {
    //     return d1.getFullYear() === d2.getFullYear() &&
    //         d1.getMonth() === d2.getMonth() &&
    //         d1.getDate() === d2.getDate();
    // },

  }
});

/***/ }),

/***/ "./resources/js/components/ClientsTodayContractEnd.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/ClientsTodayContractEnd.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ClientsTodayContractEnd_vue_vue_type_template_id_5fa7d416_bindings_clients_props_clients_contract_end_today_data_clientsNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&bindings={"clients":"props","clients_contract_end_today":"data","clientsNotFound":"options"} */ "./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&bindings={\"clients\":\"props\",\"clients_contract_end_today\":\"data\",\"clientsNotFound\":\"options\"}");
/* harmony import */ var _ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientsTodayContractEnd.vue?vue&type=script&lang=js */ "./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js");



_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ClientsTodayContractEnd_vue_vue_type_template_id_5fa7d416_bindings_clients_props_clients_contract_end_today_data_clientsNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/ClientsTodayContractEnd.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientsTodayContractEnd.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&bindings={\"clients\":\"props\",\"clients_contract_end_today\":\"data\",\"clientsNotFound\":\"options\"}":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&bindings={"clients":"props","clients_contract_end_today":"data","clientsNotFound":"options"} ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_template_id_5fa7d416_bindings_clients_props_clients_contract_end_today_data_clientsNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_template_id_5fa7d416_bindings_clients_props_clients_contract_end_today_data_clientsNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&bindings={"clients":"props","clients_contract_end_today":"data","clientsNotFound":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&bindings={\"clients\":\"props\",\"clients_contract_end_today\":\"data\",\"clientsNotFound\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&bindings={\"clients\":\"props\",\"clients_contract_end_today\":\"data\",\"clientsNotFound\":\"options\"}":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&bindings={"clients":"props","clients_contract_end_today":"data","clientsNotFound":"options"} ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "text-left" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { class: "title-box pb-1" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: " far fa-file-excel" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ending contracts today: ")
], -1 /* HOISTED */)
const _hoisted_3 = { class: "divide" }
const _hoisted_4 = {
  key: 0,
  class: "text-second"
}
const _hoisted_5 = { class: "text-main" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "text-second fas fa-angle-right" }, null, -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      ($options.clientsNotFound($data.clients_contract_end_today)==1)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, " 0 found clients "))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.clients_contract_end_today, (client) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_5, [
            _hoisted_6,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" name client: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.name), 1 /* TEXT */)
          ])
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
}

/***/ })

}]);