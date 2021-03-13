(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_LayoutDashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js ***!
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
      clients_contract_end_in10days: []
    };
  },
  mounted: function mounted() {
    console.log('ClientsContractEndIn10Days mounted');
    this.getClientsContactEndIn10Days(this.clients);
  },
  methods: {
    getClientsContactEndIn10Days: function getClientsContactEndIn10Days(clients) {
      var dateFromToday = new Date();
      var dateOver10days = this.getDateForNext30Days(dateFromToday);
      dateFromToday.setHours(0, 0, 0, 0);
      dateOver10days.setHours(0, 0, 0, 0);
      console.log(dateFromToday);
      console.log(dateOver10days);

      for (var i = 0; i < clients.length; i++) {
        var contractEndDate = new Date(clients[i].contract_end_date);
        contractEndDate.setHours(0, 0, 0, 0);

        if (this.checkIfContractEndingBetweenDates(dateFromToday, dateOver10days, contractEndDate)) {
          this.clients_contract_end_in10days.push(clients[i]);
        }

        JSON.stringify(this.clients_contract_end_today);
      }

      this.clients_contract_end_in10days = this.sortClientsAfterDate(this.clients_contract_end_in10days);
    },
    getDateForNext30Days: function getDateForNext30Days(date) {
      var newDate = new Date().setDate(date.getDate() + 30);
      newDate = new Date(newDate);
      return newDate;
    },
    checkIfContractEndingBetweenDates: function checkIfContractEndingBetweenDates(dateFrom, dateTo, contractEndDay) {
      if (contractEndDay >= dateFrom && contractEndDay <= dateTo) {
        return 1;
      }

      return 0;
    },
    sortClientsAfterDate: function sortClientsAfterDate(clients) {
      clients.sort(function (a, b) {
        return new Date(a.contract_end_date) - new Date(b.contract_end_date);
      });
      return clients;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js ***!
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
      clients_contract_end_today: []
    };
  },
  mounted: function mounted() {
    console.log('ClientsTodayContractEnd mounted');
    this.getClientsEndToday(this.clients);
  },
  methods: {
    getClientsEndToday: function getClientsEndToday(clients) {
      var todayDate = new Date();

      for (var i = 0; i < clients.length; i++) {
        var contractEndDate = new Date(clients[i].contract_end_date);

        if (this.sameDay(todayDate, contractEndDate)) {
          this.clients_contract_end_today.push(clients[i]);
        }
      }

      JSON.stringify(this.clients_contract_end_today);
    },
    sameDay: function sameDay(d1, d2) {
      return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _LogoTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoTime */ "./resources/js/components/LogoTime.vue");
/* harmony import */ var _TodayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodayTasks */ "./resources/js/components/TodayTasks.vue");
/* harmony import */ var _ClientsTodayContractEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientsTodayContractEnd */ "./resources/js/components/ClientsTodayContractEnd.vue");
/* harmony import */ var _ClientsContractEndIn30Days__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientsContractEndIn30Days */ "./resources/js/components/ClientsContractEndIn30Days.vue");
// import LayoutDashboard from "./LayoutDashboard";




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['tasks', 'clients'],
  data: function data() {
    return {};
  },
  components: {
    ClientsContractEndIn30Days: _ClientsContractEndIn30Days__WEBPACK_IMPORTED_MODULE_3__.default,
    ClientsTodayContractEnd: _ClientsTodayContractEnd__WEBPACK_IMPORTED_MODULE_2__.default,
    TodayTasks: _TodayTasks__WEBPACK_IMPORTED_MODULE_1__.default,
    LogoTime: _LogoTime__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    console.log('Dashboard mounted');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LayoutDashboard.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/LayoutDashboard.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard */ "./resources/js/components/Dashboard.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LayoutDashboard",
  components: {
    Dashboard: _Dashboard__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    console.log('mounted layout dashboard');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=script&lang=js ***!
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

      var time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
      this.time = time;
      this.date = today.toLocaleDateString("en-US", options);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TodayTasks",
  props: ['tasks'],
  mounted: function mounted() {
    console.log('TodayTasks mounted');
    this.getTasksForToday(this.tasks);
  },
  data: function data() {
    return {
      tasks_for_today: []
    };
  },
  methods: {
    getTasksForToday: function getTasksForToday(tasks) {
      var todayDate = new Date();

      for (var i = 0; i < tasks.length; i++) {
        var taskDate = new Date(tasks[i].task_date);

        if (this.sameDay(todayDate, taskDate)) {
          this.tasks_for_today.push(tasks[i]);
        }
      }

      JSON.stringify(this.tasks_for_today);
    },
    sameDay: function sameDay(d1, d2) {
      return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_style_index_0_id_39a3ec76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css");



var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_style_index_0_id_39a3ec76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_style_index_0_id_39a3ec76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_style_index_0_id_5fa7d416_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css");



var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_style_index_0_id_5fa7d416_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_style_index_0_id_5fa7d416_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_style_index_0_id_038b8883_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css");



var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_style_index_0_id_038b8883_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_style_index_0_id_038b8883_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css");



var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/* harmony import */ var _ClientsContractEndIn30Days_vue_vue_type_template_id_39a3ec76_scoped_true_bindings_clients_props_clients_contract_end_in10days_data_getClientsContactEndIn10Days_options_getDateForNext30Days_options_checkIfContractEndingBetweenDates_options_sortClientsAfterDate_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&scoped=true&bindings={"clients":"props","clients_contract_end_in10days":"data","getClientsContactEndIn10Days":"options","getDateForNext30Days":"options","checkIfContractEndingBetweenDates":"options","sortClientsAfterDate":"options"} */ "./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&scoped=true&bindings={\"clients\":\"props\",\"clients_contract_end_in10days\":\"data\",\"getClientsContactEndIn10Days\":\"options\",\"getDateForNext30Days\":\"options\",\"checkIfContractEndingBetweenDates\":\"options\",\"sortClientsAfterDate\":\"options\"}");
/* harmony import */ var _ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientsContractEndIn30Days.vue?vue&type=script&lang=js */ "./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js");
/* harmony import */ var _ClientsContractEndIn30Days_vue_vue_type_style_index_0_id_39a3ec76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css */ "./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css");




;
_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ClientsContractEndIn30Days_vue_vue_type_template_id_39a3ec76_scoped_true_bindings_clients_props_clients_contract_end_in10days_data_getClientsContactEndIn10Days_options_getDateForNext30Days_options_checkIfContractEndingBetweenDates_options_sortClientsAfterDate_options___WEBPACK_IMPORTED_MODULE_0__.render
_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-39a3ec76"
/* hot reload */
if (false) {}

_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/ClientsContractEndIn30Days.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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
/* harmony import */ var _ClientsTodayContractEnd_vue_vue_type_template_id_5fa7d416_scoped_true_bindings_clients_props_clients_contract_end_today_data_getClientsEndToday_options_sameDay_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&scoped=true&bindings={"clients":"props","clients_contract_end_today":"data","getClientsEndToday":"options","sameDay":"options"} */ "./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&scoped=true&bindings={\"clients\":\"props\",\"clients_contract_end_today\":\"data\",\"getClientsEndToday\":\"options\",\"sameDay\":\"options\"}");
/* harmony import */ var _ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientsTodayContractEnd.vue?vue&type=script&lang=js */ "./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js");
/* harmony import */ var _ClientsTodayContractEnd_vue_vue_type_style_index_0_id_5fa7d416_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css */ "./resources/js/components/ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css");




;
_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ClientsTodayContractEnd_vue_vue_type_template_id_5fa7d416_scoped_true_bindings_clients_props_clients_contract_end_today_data_getClientsEndToday_options_sameDay_options___WEBPACK_IMPORTED_MODULE_0__.render
_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-5fa7d416"
/* hot reload */
if (false) {}

_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/ClientsTodayContractEnd.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9_bindings_tasks_props_clients_props___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9&bindings={"tasks":"props","clients":"props"} */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={\"tasks\":\"props\",\"clients\":\"props\"}");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js");



_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Dashboard_vue_vue_type_template_id_040e2ab9_bindings_tasks_props_clients_props___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Dashboard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/LayoutDashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/LayoutDashboard.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _LayoutDashboard_vue_vue_type_template_id_4cdeb5ef_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutDashboard.vue?vue&type=template&id=4cdeb5ef&bindings={} */ "./resources/js/components/LayoutDashboard.vue?vue&type=template&id=4cdeb5ef&bindings={}");
/* harmony import */ var _LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutDashboard.vue?vue&type=script&lang=js */ "./resources/js/components/LayoutDashboard.vue?vue&type=script&lang=js");



_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _LayoutDashboard_vue_vue_type_template_id_4cdeb5ef_bindings___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/LayoutDashboard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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
/* harmony import */ var _LogoTime_vue_vue_type_template_id_038b8883_scoped_true_bindings_timestamp_props_date_data_time_data_getNow_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoTime.vue?vue&type=template&id=038b8883&scoped=true&bindings={"timestamp":"props","date":"data","time":"data","getNow":"options"} */ "./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&scoped=true&bindings={\"timestamp\":\"props\",\"date\":\"data\",\"time\":\"data\",\"getNow\":\"options\"}");
/* harmony import */ var _LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoTime.vue?vue&type=script&lang=js */ "./resources/js/components/LogoTime.vue?vue&type=script&lang=js");
/* harmony import */ var _LogoTime_vue_vue_type_style_index_0_id_038b8883_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css */ "./resources/js/components/LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css");




;
_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _LogoTime_vue_vue_type_template_id_038b8883_scoped_true_bindings_timestamp_props_date_data_time_data_getNow_options___WEBPACK_IMPORTED_MODULE_0__.render
_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-038b8883"
/* hot reload */
if (false) {}

_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/LogoTime.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/TodayTasks.vue":
/*!************************************************!*\
  !*** ./resources/js/components/TodayTasks.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _TodayTasks_vue_vue_type_template_id_960c6a10_scoped_true_bindings_tasks_props_tasks_for_today_data_getTasksForToday_options_sameDay_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={"tasks":"props","tasks_for_today":"data","getTasksForToday":"options","sameDay":"options"} */ "./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={\"tasks\":\"props\",\"tasks_for_today\":\"data\",\"getTasksForToday\":\"options\",\"sameDay\":\"options\"}");
/* harmony import */ var _TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodayTasks.vue?vue&type=script&lang=js */ "./resources/js/components/TodayTasks.vue?vue&type=script&lang=js");
/* harmony import */ var _TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css */ "./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css");




;
_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TodayTasks_vue_vue_type_template_id_960c6a10_scoped_true_bindings_tasks_props_tasks_for_today_data_getTasksForToday_options_sameDay_options___WEBPACK_IMPORTED_MODULE_0__.render
_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-960c6a10"
/* hot reload */
if (false) {}

_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/TodayTasks.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./ClientsContractEndIn30Days.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=script&lang=js");


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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./ClientsTodayContractEnd.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=script&lang=js");


/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=script&lang=js");


/***/ }),

/***/ "./resources/js/components/LayoutDashboard.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/LayoutDashboard.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./LayoutDashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LayoutDashboard.vue?vue&type=script&lang=js");


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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./LogoTime.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=script&lang=js");


/***/ }),

/***/ "./resources/js/components/TodayTasks.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/TodayTasks.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/routers.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./TodayTasks.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=script&lang=js");


/***/ }),

/***/ "./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_style_index_0_id_39a3ec76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=style&index=0&id=39a3ec76&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_style_index_0_id_5fa7d416_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=style&index=0&id=5fa7d416&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_style_index_0_id_038b8883_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=style&index=0&id=038b8883&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&scoped=true&bindings={\"clients\":\"props\",\"clients_contract_end_in10days\":\"data\",\"getClientsContactEndIn10Days\":\"options\",\"getDateForNext30Days\":\"options\",\"checkIfContractEndingBetweenDates\":\"options\",\"sortClientsAfterDate\":\"options\"}":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&scoped=true&bindings={"clients":"props","clients_contract_end_in10days":"data","getClientsContactEndIn10Days":"options","getDateForNext30Days":"options","checkIfContractEndingBetweenDates":"options","sortClientsAfterDate":"options"} ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_template_id_39a3ec76_scoped_true_bindings_clients_props_clients_contract_end_in10days_data_getClientsContactEndIn10Days_options_getDateForNext30Days_options_checkIfContractEndingBetweenDates_options_sortClientsAfterDate_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsContractEndIn30Days_vue_vue_type_template_id_39a3ec76_scoped_true_bindings_clients_props_clients_contract_end_in10days_data_getClientsContactEndIn10Days_options_getDateForNext30Days_options_checkIfContractEndingBetweenDates_options_sortClientsAfterDate_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&scoped=true&bindings={"clients":"props","clients_contract_end_in10days":"data","getClientsContactEndIn10Days":"options","getDateForNext30Days":"options","checkIfContractEndingBetweenDates":"options","sortClientsAfterDate":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&scoped=true&bindings={\"clients\":\"props\",\"clients_contract_end_in10days\":\"data\",\"getClientsContactEndIn10Days\":\"options\",\"getDateForNext30Days\":\"options\",\"checkIfContractEndingBetweenDates\":\"options\",\"sortClientsAfterDate\":\"options\"}");


/***/ }),

/***/ "./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&scoped=true&bindings={\"clients\":\"props\",\"clients_contract_end_today\":\"data\",\"getClientsEndToday\":\"options\",\"sameDay\":\"options\"}":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&scoped=true&bindings={"clients":"props","clients_contract_end_today":"data","getClientsEndToday":"options","sameDay":"options"} ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_template_id_5fa7d416_scoped_true_bindings_clients_props_clients_contract_end_today_data_getClientsEndToday_options_sameDay_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientsTodayContractEnd_vue_vue_type_template_id_5fa7d416_scoped_true_bindings_clients_props_clients_contract_end_today_data_getClientsEndToday_options_sameDay_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&scoped=true&bindings={"clients":"props","clients_contract_end_today":"data","getClientsEndToday":"options","sameDay":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&scoped=true&bindings={\"clients\":\"props\",\"clients_contract_end_today\":\"data\",\"getClientsEndToday\":\"options\",\"sameDay\":\"options\"}");


/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={\"tasks\":\"props\",\"clients\":\"props\"}":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={"tasks":"props","clients":"props"} ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_040e2ab9_bindings_tasks_props_clients_props___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_040e2ab9_bindings_tasks_props_clients_props___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=040e2ab9&bindings={"tasks":"props","clients":"props"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={\"tasks\":\"props\",\"clients\":\"props\"}");


/***/ }),

/***/ "./resources/js/components/LayoutDashboard.vue?vue&type=template&id=4cdeb5ef&bindings={}":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/LayoutDashboard.vue?vue&type=template&id=4cdeb5ef&bindings={} ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LayoutDashboard_vue_vue_type_template_id_4cdeb5ef_bindings___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LayoutDashboard_vue_vue_type_template_id_4cdeb5ef_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./LayoutDashboard.vue?vue&type=template&id=4cdeb5ef&bindings={} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LayoutDashboard.vue?vue&type=template&id=4cdeb5ef&bindings={}");


/***/ }),

/***/ "./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&scoped=true&bindings={\"timestamp\":\"props\",\"date\":\"data\",\"time\":\"data\",\"getNow\":\"options\"}":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&scoped=true&bindings={"timestamp":"props","date":"data","time":"data","getNow":"options"} ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_template_id_038b8883_scoped_true_bindings_timestamp_props_date_data_time_data_getNow_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogoTime_vue_vue_type_template_id_038b8883_scoped_true_bindings_timestamp_props_date_data_time_data_getNow_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./LogoTime.vue?vue&type=template&id=038b8883&scoped=true&bindings={"timestamp":"props","date":"data","time":"data","getNow":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&scoped=true&bindings={\"timestamp\":\"props\",\"date\":\"data\",\"time\":\"data\",\"getNow\":\"options\"}");


/***/ }),

/***/ "./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={\"tasks\":\"props\",\"tasks_for_today\":\"data\",\"getTasksForToday\":\"options\",\"sameDay\":\"options\"}":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={"tasks":"props","tasks_for_today":"data","getTasksForToday":"options","sameDay":"options"} ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_template_id_960c6a10_scoped_true_bindings_tasks_props_tasks_for_today_data_getTasksForToday_options_sameDay_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_template_id_960c6a10_scoped_true_bindings_tasks_props_tasks_for_today_data_getTasksForToday_options_sameDay_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={"tasks":"props","tasks_for_today":"data","getTasksForToday":"options","sameDay":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={\"tasks\":\"props\",\"tasks_for_today\":\"data\",\"getTasksForToday\":\"options\",\"sameDay\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&scoped=true&bindings={\"clients\":\"props\",\"clients_contract_end_in10days\":\"data\",\"getClientsContactEndIn10Days\":\"options\",\"getDateForNext30Days\":\"options\",\"checkIfContractEndingBetweenDates\":\"options\",\"sortClientsAfterDate\":\"options\"}":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/ClientsContractEndIn30Days.vue?vue&type=template&id=39a3ec76&scoped=true&bindings={"clients":"props","clients_contract_end_in10days":"data","getClientsContactEndIn10Days":"options","getDateForNext30Days":"options","checkIfContractEndingBetweenDates":"options","sortClientsAfterDate":"options"} ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-39a3ec76")

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-39a3ec76")
const _hoisted_1 = { class: "text-left" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { class: " font-medium text-lg pb-2" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "fas fa-file-excel" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ending contracts in 30 days:")
], -1 /* HOISTED */)
const _hoisted_3 = { class: "divide-y divide-blue-hrBg" }
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "text-green-blue fas fa-angle-right" }, null, -1 /* HOISTED */)
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1 /* HOISTED */)
const _hoisted_6 = { class: "text-green-blue" }
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.clients_contract_end_in10days, (client) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
            _hoisted_4,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.name), 1 /* TEXT */),
            _hoisted_5,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_6, " contract-end-date: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.contract_end_date), 1 /* TEXT */)
          ])
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
})

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&scoped=true&bindings={\"clients\":\"props\",\"clients_contract_end_today\":\"data\",\"getClientsEndToday\":\"options\",\"sameDay\":\"options\"}":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/ClientsTodayContractEnd.vue?vue&type=template&id=5fa7d416&scoped=true&bindings={"clients":"props","clients_contract_end_today":"data","getClientsEndToday":"options","sameDay":"options"} ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-5fa7d416")

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5fa7d416")
const _hoisted_1 = { class: "text-left" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { class: " font-medium text-lg  pb-2" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "fas fa-file-excel" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ending contracts today")
], -1 /* HOISTED */)
const _hoisted_3 = { class: "divide-y divide-blue-hrBg" }
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "text-green-blue fas fa-angle-right" }, null, -1 /* HOISTED */)
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.clients_contract_end_today, (client) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [
            _hoisted_4,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" name client: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.name), 1 /* TEXT */)
          ])
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
})

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={\"tasks\":\"props\",\"clients\":\"props\"}":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={"tasks":"props","clients":"props"} ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: " bg-gradient-to-tl from-blue-600 via-blue-400 to-blue-400 " }
const _hoisted_2 = { class: "" }
const _hoisted_3 = { class: "grid gap-4 grid-cols-4 grid-rows-2 grid-flow-row border-blue-dark border-2 h-screen p-6 " }
const _hoisted_4 = { class: "text-white text-center p-3 " }
const _hoisted_5 = { class: "row-span-2 overflow-hidden bg-blue-darkGray text-white  shadow-2xl rounded text-center border border-gray-700 p-5 " }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", { class: "col-span-2 overflow-hidden bg-blue-darkGray text-white  shadow-2xl rounded text-center border border-gray-700 p-5 " }, null, -1 /* HOISTED */)
const _hoisted_7 = { class: " overflow-hidden bg-blue-darkGray text-white  shadow-2xl rounded text-center border border-gray-700 p-5 " }
const _hoisted_8 = { class: " overflow-hidden bg-blue-darkGray text-white  shadow-2xl rounded text-center border border-gray-700 p-5 " }
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", { class: " overflow-hidden bg-blue-darkGray text-white  shadow-2xl rounded text-center border border-gray-700 p-5 " }, null, -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_logo_time = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("logo-time")
  const _component_clients_contract_end_in30_days = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("clients-contract-end-in30-days")
  const _component_today_tasks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("today-tasks")
  const _component_clients_today_contract_end = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("clients-today-contract-end")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("    <layout-dashboard>"),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_4, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_logo_time)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_clients_contract_end_in30_days, { clients: $props.clients }, null, 8 /* PROPS */, ["clients"])
          ]),
          _hoisted_6,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_7, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_today_tasks, { tasks: $props.tasks }, null, 8 /* PROPS */, ["tasks"])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_8, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_clients_today_contract_end, { clients: $props.clients }, null, 8 /* PROPS */, ["clients"])
          ]),
          _hoisted_9
        ])
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("    </layout-dashboard>")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LayoutDashboard.vue?vue&type=template&id=4cdeb5ef&bindings={}":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/LayoutDashboard.vue?vue&type=template&id=4cdeb5ef&bindings={} ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "relative flex  bg-blue-dark text-white py-3 pl-10" }
const _hoisted_2 = { class: "" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home ")
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "absolute right-0 mr-10" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
    href: "/logout",
    class: "border rounded-lg hover:bg-white hover:text-black px-2 py-1"
  }, "Logout ")
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
          href: "/",
          class: "border rounded-lg hover:bg-white hover:text-black px-2 py-1"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            _hoisted_3
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _hoisted_4
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&scoped=true&bindings={\"timestamp\":\"props\",\"date\":\"data\",\"time\":\"data\",\"getNow\":\"options\"}":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/LogoTime.vue?vue&type=template&id=038b8883&scoped=true&bindings={"timestamp":"props","date":"data","time":"data","getNow":"options"} ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-038b8883")

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-038b8883")
const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  class: "mb-3 pt-7",
  src: "https://wpfitness.eu/wp-content/uploads/2020/09/WPFitness-Wordpress-maintenance-security-logo.png",
  alt: "logo-img"
}, null, -1 /* HOISTED */)
const _hoisted_2 = { class: "text-lg text-gray-200 font-medium" }
const _hoisted_3 = { class: "text-4xl text-blue-dark font-semibold" }
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "items-center" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "fas fa-sign-out-alt" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
    href: "/logout",
    class: "hover:underline  rounded-sm shadow-2xl"
  }, " Logout ")
], -1 /* HOISTED */)
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    _hoisted_1,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.date), 1 /* TEXT */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.time), 1 /* TEXT */)
    ]),
    _hoisted_4
  ]))
})

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={\"tasks\":\"props\",\"tasks_for_today\":\"data\",\"getTasksForToday\":\"options\",\"sameDay\":\"options\"}":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/routers.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={"tasks":"props","tasks_for_today":"data","getTasksForToday":"options","sameDay":"options"} ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-960c6a10")

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-960c6a10")
const _hoisted_1 = { class: "text-left" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { class: " font-medium text-lg pb-2" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "fa fa-tasks" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tasks For Today:")
], -1 /* HOISTED */)
const _hoisted_3 = { class: "divide-y divide-blue-hrBg" }
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "text-green-blue fas fa-angle-right" }, null, -1 /* HOISTED */)
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.tasks_for_today, (task) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [
            _hoisted_4,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(task.name), 1 /* TEXT */)
          ])
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
})

/***/ })

}]);
