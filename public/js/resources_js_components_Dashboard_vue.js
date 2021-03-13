(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _layouts_LayoutDashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/LayoutDashboard */ "./resources/js/layouts/LayoutDashboard.vue");
/* harmony import */ var _LogoTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoTime */ "./resources/js/components/LogoTime.vue");
/* harmony import */ var _TodayTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodayTasks */ "./resources/js/components/TodayTasks.vue");
/* harmony import */ var _ClientsTodayContractEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientsTodayContractEnd */ "./resources/js/components/ClientsTodayContractEnd.vue");
/* harmony import */ var _ClientsContractEndIn30Days__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClientsContractEndIn30Days */ "./resources/js/components/ClientsContractEndIn30Days.vue");
/* harmony import */ var _UpdateTasksIn10Days__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UpdateTasksIn10Days */ "./resources/js/components/UpdateTasksIn10Days.vue");
/* harmony import */ var _FailedEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FailedEvents */ "./resources/js/components/FailedEvents.vue");
/* harmony import */ var _TEST__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TEST */ "./resources/js/components/TEST.vue");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['tasks_today', 'update_tasks_10days', 'clients_contract_end_today', 'clients_contract_end_in30_days', 'events_failed'],
  data: function data() {
    return {
      updateData: {
        TasksToday: this.tasks_today,
        TasksUpdate10Days: this.update_tasks_10days,
        ContractEndToday: this.clients_contract_end_today,
        ContractEndIn30Days: this.clients_contract_end_in30_days,
        EventsFailed: this.events_failed
      },
      previousData: {
        previousTasksToday: this.tasks_today,
        previousTasksUpdate10Days: this.update_tasks_10days,
        previousContractEndToday: this.clients_contract_end_today,
        previousContractEndIn30Days: this.clients_contract_end_in30_days,
        previousEventsFailed: this.events_failed
      }
    };
  },
  components: {
    TEST: _TEST__WEBPACK_IMPORTED_MODULE_7__.default,
    FailedEvents: _FailedEvents__WEBPACK_IMPORTED_MODULE_6__.default,
    UpdateTasksIn10Days: _UpdateTasksIn10Days__WEBPACK_IMPORTED_MODULE_5__.default,
    ClientsContractEndIn30Days: _ClientsContractEndIn30Days__WEBPACK_IMPORTED_MODULE_4__.default,
    ClientsTodayContractEnd: _ClientsTodayContractEnd__WEBPACK_IMPORTED_MODULE_3__.default,
    TodayTasks: _TodayTasks__WEBPACK_IMPORTED_MODULE_2__.default,
    LogoTime: _LogoTime__WEBPACK_IMPORTED_MODULE_1__.default
  },
  mounted: function mounted() {
    var _this = this;

    console.log('Dashboard mounted');
    setInterval(function () {
      axios.get('/dashboardUpdate').then(function (response) {
        _this.updateDataIfNeeded(_this.previousData, response.data);

        console.log('DONE');
      });
    }, 5000);
  },
  methods: {
    updateDataIfNeeded: function updateDataIfNeeded(oldData, newData) {
      if (this.isDateChanged(oldData.previousTasksToday, newData.tasks_today)) {
        console.log('difference tasks today');
        this.updateData.TasksToday = newData.tasks_today;
        this.previousData.previousTasksToday = newData.tasks_today;
      }

      if (this.isDateChanged(oldData.previousTasksUpdate10Days, newData.update_tasks_10days)) {
        console.log('difference tasks 10');
        this.updateData.TasksUpdate10Days = newData.update_tasks_10days;
        this.previousData.previousTasksUpdate10Days = newData.update_tasks_10days;
      }

      if (this.isDateChanged(oldData.previousContractEndToday, newData.clients_contract_end_today)) {
        console.log('difference clients today');
        this.updateData.ContractEndToday = newData.clients_contract_end_today;
        this.previousData.previousContractEndToday = newData.clients_contract_end_today;
      }

      if (this.isDateChanged(oldData.previousContractEndIn30Days, newData.clients_contract_end_in30_days)) {
        console.log('difference clients');
        this.updateData.ContractEndIn30Days = newData.clients_contract_end_in30_days;
        this.previousData.previousContractEndIn30Days = newData.clients_contract_end_in30_days;
      }

      if (this.isDateChanged(oldData.previousEventsFailed, newData.events_failed)) {
        console.log('difference events');
        this.updateData.EventsFailed = newData.events_failed;
        this.previousData.previousEventsFailed = newData.events_failed;
      }
    },
    isDateChanged: function isDateChanged(previousData, newData) {
      if (JSON.stringify(previousData) !== JSON.stringify(newData)) {
        return 1;
      }

      return 0;
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TEST.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TEST.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TEST",
  props: ['tests'],
  data: function data() {
    return {// tests:['raul','asus','samsung']
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=script&lang=js ***!
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
  data: function data() {
    return {
      tasks_for_today: this.tasks
    };
  },
  mounted: function mounted() {
    console.log('TodayTasks mounted');
  },
  watch: {
    tasks: function tasks(newTasks) {
      console.log('NEW update tasks TODAY');
      this.tasks_for_today = this.tasks;
    }
  },
  methods: {
    tasksNotFound: function tasksNotFound(obj) {
      if (obj === undefined || obj.length == 0) {
        return 1;
      }

      return 0;
    } // getTasksForToday(tasks) {
    //     const todayDate = new Date();
    //
    //     for (let i = 0; i < tasks.length; i++) {
    //         let taskDate = new Date(tasks[i].task_date);
    //         if (this.sameDay(todayDate, taskDate)) {
    //             this.tasks_for_today.push(tasks[i]);
    //         }
    //     }
    //     JSON.stringify(this.tasks_for_today);
    // },
    // sameDay(d1, d2) {
    //     return d1.getFullYear() === d2.getFullYear() &&
    //         d1.getMonth() === d2.getMonth() &&
    //         d1.getDate() === d2.getDate();
    // }
    // ,

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UpdateTasksIn10Days.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UpdateTasksIn10Days.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UpdateTasksIn10Days",
  props: ['tasks'],
  data: function data() {
    return {
      update_tasks_in10_days: this.tasks
    };
  },
  mounted: function mounted() {
    console.log('UpdateTaskIn10Days mounted');
  },
  watch: {
    tasks: function tasks(newTasks) {
      console.log('NEW update tasks 10');
      this.update_tasks_in10_days = this.tasks;
    }
  },
  methods: {
    dateDiffInDays: function dateDiffInDays(date) {
      var _MS_PER_DAY = 1000 * 60 * 60 * 24;

      date = new Date(date);
      var dateToday = new Date();
      var utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
      var utc2 = Date.UTC(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());
      return Math.floor((utc1 - utc2) / _MS_PER_DAY + 1);
    },
    tasksNotFound: function tasksNotFound(obj) {
      if (obj === undefined || obj.length == 0) {
        return 1;
      }

      return 0;
    } // getUpdateTasksIn10Days(tasks) {
    //     const dateFromToday = new Date(new Date().setHours(0, 0, 0, 0));
    //
    //     let dateOver10days = this.getDateForNext10Days(dateFromToday);
    //     dateOver10days.setHours(0, 0, 0, 0)
    //
    //     for (let i = 0; i < tasks.length; i++) {
    //         let taskDate = new Date(tasks[i].task_date);
    //         taskDate.setHours(0, 0, 0, 0)
    //
    //         if (this.isUpdateTask(tasks[i]) &&
    //             this.isTaskDateBetweenDates(dateFromToday, dateOver10days, taskDate)) {
    //
    //             this.update_tasks_in10_days.push(tasks[i]);
    //         }
    //
    //         JSON.stringify(this.update_tasks_in10_days);
    //     }
    // },
    // isUpdateTask(task) {
    //     if (task.type === 0) {
    //         return 1;
    //     }
    //     return 0;
    // },
    // getDateForNext10Days(date) {
    //     let newDate = new Date().setDate(date.getDate() + 9);
    //     newDate = new Date(newDate);
    //     return newDate;
    // },
    //
    // isTaskDateBetweenDates(dateFrom, dateTo, contractEndDay) {
    //     if (contractEndDay >= dateFrom
    //         && contractEndDay <= dateTo) {
    //         return 1;
    //     }
    //     return 0;
    // },
    // sortTasksAfterDate(tasks) {
    //     tasks.sort(function (a, b) {
    //         return new Date(a.task_date) - new Date(b.task_date);
    //     });
    //     return tasks;
    // },

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/LayoutDashboard.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/LayoutDashboard.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LayoutDashboard",
  components: {},
  mounted: function mounted() {
    console.log('mounted layout dashboard');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css ***!
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9_bindings_tasks_today_props_update_tasks_10days_props_clients_contract_end_today_props_clients_contract_end_in30_days_props_events_failed_props_updateData_data_previousData_data_updateDataIfNeeded_options_isDateChanged_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9&bindings={"tasks_today":"props","update_tasks_10days":"props","clients_contract_end_today":"props","clients_contract_end_in30_days":"props","events_failed":"props","updateData":"data","previousData":"data","updateDataIfNeeded":"options","isDateChanged":"options"} */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={\"tasks_today\":\"props\",\"update_tasks_10days\":\"props\",\"clients_contract_end_today\":\"props\",\"clients_contract_end_in30_days\":\"props\",\"events_failed\":\"props\",\"updateData\":\"data\",\"previousData\":\"data\",\"updateDataIfNeeded\":\"options\",\"isDateChanged\":\"options\"}");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js");



_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Dashboard_vue_vue_type_template_id_040e2ab9_bindings_tasks_today_props_update_tasks_10days_props_clients_contract_end_today_props_clients_contract_end_in30_days_props_events_failed_props_updateData_data_previousData_data_updateDataIfNeeded_options_isDateChanged_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Dashboard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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

/***/ "./resources/js/components/TEST.vue":
/*!******************************************!*\
  !*** ./resources/js/components/TEST.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _TEST_vue_vue_type_template_id_ebc09346_bindings_tests_props___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TEST.vue?vue&type=template&id=ebc09346&bindings={"tests":"props"} */ "./resources/js/components/TEST.vue?vue&type=template&id=ebc09346&bindings={\"tests\":\"props\"}");
/* harmony import */ var _TEST_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TEST.vue?vue&type=script&lang=js */ "./resources/js/components/TEST.vue?vue&type=script&lang=js");



_TEST_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TEST_vue_vue_type_template_id_ebc09346_bindings_tests_props___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_TEST_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/TEST.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TEST_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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
/* harmony import */ var _TodayTasks_vue_vue_type_template_id_960c6a10_scoped_true_bindings_tasks_props_tasks_for_today_data_tasksNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={"tasks":"props","tasks_for_today":"data","tasksNotFound":"options"} */ "./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={\"tasks\":\"props\",\"tasks_for_today\":\"data\",\"tasksNotFound\":\"options\"}");
/* harmony import */ var _TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodayTasks.vue?vue&type=script&lang=js */ "./resources/js/components/TodayTasks.vue?vue&type=script&lang=js");
/* harmony import */ var _TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css */ "./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css");




;
_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TodayTasks_vue_vue_type_template_id_960c6a10_scoped_true_bindings_tasks_props_tasks_for_today_data_tasksNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-960c6a10"
/* hot reload */
if (false) {}

_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/TodayTasks.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/UpdateTasksIn10Days.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/UpdateTasksIn10Days.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _UpdateTasksIn10Days_vue_vue_type_template_id_d5417476_bindings_tasks_props_update_tasks_in10_days_data_dateDiffInDays_options_tasksNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateTasksIn10Days.vue?vue&type=template&id=d5417476&bindings={"tasks":"props","update_tasks_in10_days":"data","dateDiffInDays":"options","tasksNotFound":"options"} */ "./resources/js/components/UpdateTasksIn10Days.vue?vue&type=template&id=d5417476&bindings={\"tasks\":\"props\",\"update_tasks_in10_days\":\"data\",\"dateDiffInDays\":\"options\",\"tasksNotFound\":\"options\"}");
/* harmony import */ var _UpdateTasksIn10Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateTasksIn10Days.vue?vue&type=script&lang=js */ "./resources/js/components/UpdateTasksIn10Days.vue?vue&type=script&lang=js");



_UpdateTasksIn10Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _UpdateTasksIn10Days_vue_vue_type_template_id_d5417476_bindings_tasks_props_update_tasks_in10_days_data_dateDiffInDays_options_tasksNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_UpdateTasksIn10Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/UpdateTasksIn10Days.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_UpdateTasksIn10Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/layouts/LayoutDashboard.vue":
/*!**************************************************!*\
  !*** ./resources/js/layouts/LayoutDashboard.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _LayoutDashboard_vue_vue_type_template_id_29708a54_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutDashboard.vue?vue&type=template&id=29708a54&bindings={} */ "./resources/js/layouts/LayoutDashboard.vue?vue&type=template&id=29708a54&bindings={}");
/* harmony import */ var _LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutDashboard.vue?vue&type=script&lang=js */ "./resources/js/layouts/LayoutDashboard.vue?vue&type=script&lang=js");



_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _LayoutDashboard_vue_vue_type_template_id_29708a54_bindings___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/layouts/LayoutDashboard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/components/TEST.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/TEST.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TEST_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TEST_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TEST.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TEST.vue?vue&type=script&lang=js");
 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TodayTasks.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UpdateTasksIn10Days.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UpdateTasksIn10Days.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateTasksIn10Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateTasksIn10Days_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateTasksIn10Days.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UpdateTasksIn10Days.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/layouts/LayoutDashboard.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/layouts/LayoutDashboard.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LayoutDashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LayoutDashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/LayoutDashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_style_index_0_id_960c6a10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=style&index=0&id=960c6a10&scoped=true&lang=css");


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

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={\"tasks_today\":\"props\",\"update_tasks_10days\":\"props\",\"clients_contract_end_today\":\"props\",\"clients_contract_end_in30_days\":\"props\",\"events_failed\":\"props\",\"updateData\":\"data\",\"previousData\":\"data\",\"updateDataIfNeeded\":\"options\",\"isDateChanged\":\"options\"}":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={"tasks_today":"props","update_tasks_10days":"props","clients_contract_end_today":"props","clients_contract_end_in30_days":"props","events_failed":"props","updateData":"data","previousData":"data","updateDataIfNeeded":"options","isDateChanged":"options"} ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_040e2ab9_bindings_tasks_today_props_update_tasks_10days_props_clients_contract_end_today_props_clients_contract_end_in30_days_props_events_failed_props_updateData_data_previousData_data_updateDataIfNeeded_options_isDateChanged_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_040e2ab9_bindings_tasks_today_props_update_tasks_10days_props_clients_contract_end_today_props_clients_contract_end_in30_days_props_events_failed_props_updateData_data_previousData_data_updateDataIfNeeded_options_isDateChanged_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=040e2ab9&bindings={"tasks_today":"props","update_tasks_10days":"props","clients_contract_end_today":"props","clients_contract_end_in30_days":"props","events_failed":"props","updateData":"data","previousData":"data","updateDataIfNeeded":"options","isDateChanged":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={\"tasks_today\":\"props\",\"update_tasks_10days\":\"props\",\"clients_contract_end_today\":\"props\",\"clients_contract_end_in30_days\":\"props\",\"events_failed\":\"props\",\"updateData\":\"data\",\"previousData\":\"data\",\"updateDataIfNeeded\":\"options\",\"isDateChanged\":\"options\"}");


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

/***/ "./resources/js/components/TEST.vue?vue&type=template&id=ebc09346&bindings={\"tests\":\"props\"}":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/TEST.vue?vue&type=template&id=ebc09346&bindings={"tests":"props"} ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TEST_vue_vue_type_template_id_ebc09346_bindings_tests_props___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TEST_vue_vue_type_template_id_ebc09346_bindings_tests_props___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TEST.vue?vue&type=template&id=ebc09346&bindings={"tests":"props"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TEST.vue?vue&type=template&id=ebc09346&bindings={\"tests\":\"props\"}");


/***/ }),

/***/ "./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={\"tasks\":\"props\",\"tasks_for_today\":\"data\",\"tasksNotFound\":\"options\"}":
/*!************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={"tasks":"props","tasks_for_today":"data","tasksNotFound":"options"} ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_template_id_960c6a10_scoped_true_bindings_tasks_props_tasks_for_today_data_tasksNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodayTasks_vue_vue_type_template_id_960c6a10_scoped_true_bindings_tasks_props_tasks_for_today_data_tasksNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={"tasks":"props","tasks_for_today":"data","tasksNotFound":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={\"tasks\":\"props\",\"tasks_for_today\":\"data\",\"tasksNotFound\":\"options\"}");


/***/ }),

/***/ "./resources/js/components/UpdateTasksIn10Days.vue?vue&type=template&id=d5417476&bindings={\"tasks\":\"props\",\"update_tasks_in10_days\":\"data\",\"dateDiffInDays\":\"options\",\"tasksNotFound\":\"options\"}":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/UpdateTasksIn10Days.vue?vue&type=template&id=d5417476&bindings={"tasks":"props","update_tasks_in10_days":"data","dateDiffInDays":"options","tasksNotFound":"options"} ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateTasksIn10Days_vue_vue_type_template_id_d5417476_bindings_tasks_props_update_tasks_in10_days_data_dateDiffInDays_options_tasksNotFound_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateTasksIn10Days_vue_vue_type_template_id_d5417476_bindings_tasks_props_update_tasks_in10_days_data_dateDiffInDays_options_tasksNotFound_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateTasksIn10Days.vue?vue&type=template&id=d5417476&bindings={"tasks":"props","update_tasks_in10_days":"data","dateDiffInDays":"options","tasksNotFound":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UpdateTasksIn10Days.vue?vue&type=template&id=d5417476&bindings={\"tasks\":\"props\",\"update_tasks_in10_days\":\"data\",\"dateDiffInDays\":\"options\",\"tasksNotFound\":\"options\"}");


/***/ }),

/***/ "./resources/js/layouts/LayoutDashboard.vue?vue&type=template&id=29708a54&bindings={}":
/*!********************************************************************************************!*\
  !*** ./resources/js/layouts/LayoutDashboard.vue?vue&type=template&id=29708a54&bindings={} ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LayoutDashboard_vue_vue_type_template_id_29708a54_bindings___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LayoutDashboard_vue_vue_type_template_id_29708a54_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LayoutDashboard.vue?vue&type=template&id=29708a54&bindings={} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/LayoutDashboard.vue?vue&type=template&id=29708a54&bindings={}");


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

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={\"tasks_today\":\"props\",\"update_tasks_10days\":\"props\",\"clients_contract_end_today\":\"props\",\"clients_contract_end_in30_days\":\"props\",\"events_failed\":\"props\",\"updateData\":\"data\",\"previousData\":\"data\",\"updateDataIfNeeded\":\"options\",\"isDateChanged\":\"options\"}":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&bindings={"tasks_today":"props","update_tasks_10days":"props","clients_contract_end_today":"props","clients_contract_end_in30_days":"props","events_failed":"props","updateData":"data","previousData":"data","updateDataIfNeeded":"options","isDateChanged":"options"} ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: " bg-gradient-to-tl bg-fixed bg-gray-200" }
const _hoisted_2 = { class: "grid gap-3 grid-cols-4 grid-rows-2 grid-flow-row border-blue-dark border-2 h-screen p-4 " }
const _hoisted_3 = { class: " text-white text-center flex items-center" }
const _hoisted_4 = { class: "row-span-2 grid-box" }
const _hoisted_5 = { class: "  grid-box-overflow-visible col-span-2 scrollbar scrollbar-track-blue-50 scrollbar-thumb-blue-dark " }
const _hoisted_6 = { class: "grid-box" }
const _hoisted_7 = { class: "grid-box" }
const _hoisted_8 = { class: "grid-box" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_logo_time = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("logo-time")
  const _component_clients_contract_end_in30_days = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("clients-contract-end-in30-days")
  const _component_failed_events = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("failed-events")
  const _component_today_tasks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("today-tasks")
  const _component_clients_today_contract_end = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("clients-today-contract-end")
  const _component_update_tasks_in10_days = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("update-tasks-in10-days")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("    <layout-dashboard>"),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            LOGO AND TIME"),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_logo_time)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                CLIENTS ENDING CONTRACT IN 30 DAYS DONE "),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_clients_contract_end_in30_days, {
            clients: $data.updateData.ContractEndIn30Days
          }, null, 8 /* PROPS */, ["clients"])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                FAILED EVENTS"),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_failed_events, {
            events: $data.updateData.EventsFailed
          }, null, 8 /* PROPS */, ["events"])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("               TASKS FOR TODAY DONE"),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_today_tasks, {
            tasks: $data.updateData.TasksToday
          }, null, 8 /* PROPS */, ["tasks"])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                CLIENTS ENDING CONTRACT TODAY DONE "),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_7, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_clients_today_contract_end, {
            clients: $data.updateData.ContractEndToday
          }, null, 8 /* PROPS */, ["clients"])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                UPDATE TASKS IN 10 DAYS  DONE "),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_8, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_update_tasks_in10_days, {
            tasks: $data.updateData.TasksUpdate10Days
          }, null, 8 /* PROPS */, ["tasks"])
        ])
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("    </layout-dashboard>")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

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

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TEST.vue?vue&type=template&id=ebc09346&bindings={\"tests\":\"props\"}":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TEST.vue?vue&type=template&id=ebc09346&bindings={"tests":"props"} ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "text-left" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { class: " font-medium text-lg pb-1" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "fa fa-tasks" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update tasks in 10 days:")
], -1 /* HOISTED */)
const _hoisted_3 = { class: "divide-y divide-blue-hrBg" }
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "text-green-blue fas fa-angle-right" }, null, -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.tests, (test) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
            _hoisted_4,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(test), 1 /* TEXT */)
          ])
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={\"tasks\":\"props\",\"tasks_for_today\":\"data\",\"tasksNotFound\":\"options\"}":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TodayTasks.vue?vue&type=template&id=960c6a10&scoped=true&bindings={"tasks":"props","tasks_for_today":"data","tasksNotFound":"options"} ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { class: "title-box pb-1" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "fa fa-tasks" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tasks for today: ")
], -1 /* HOISTED */)
const _hoisted_3 = { class: "divide" }
const _hoisted_4 = {
  key: 0,
  class: "text-second"
}
const _hoisted_5 = { class: "text-main truncate" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "arrow-color  fas fa-angle-right" }, null, -1 /* HOISTED */)
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      ($options.tasksNotFound($data.tasks_for_today)==1)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, " 0 tasks "))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.tasks_for_today, (task) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [
          _hoisted_6,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(task.name), 1 /* TEXT */)
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
})

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UpdateTasksIn10Days.vue?vue&type=template&id=d5417476&bindings={\"tasks\":\"props\",\"update_tasks_in10_days\":\"data\",\"dateDiffInDays\":\"options\",\"tasksNotFound\":\"options\"}":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UpdateTasksIn10Days.vue?vue&type=template&id=d5417476&bindings={"tasks":"props","update_tasks_in10_days":"data","dateDiffInDays":"options","tasksNotFound":"options"} ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "text-left" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { class: " title-box pb-1" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "fa fa-tasks" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update tasks in 10 days: ")
], -1 /* HOISTED */)
const _hoisted_3 = { class: "divide" }
const _hoisted_4 = {
  key: 0,
  class: "text-second"
}
const _hoisted_5 = { class: "text-main flex items-center justify-between" }
const _hoisted_6 = { class: "flex justify-between items-center truncate" }
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "arrow-color fas fa-angle-right" }, null, -1 /* HOISTED */)
const _hoisted_8 = { class: " pl-1" }
const _hoisted_9 = {
  key: 0,
  class: "font-normal text-opacity-80 text-xs italic pl-1 leading-tight flex-shrink-0 text-blue-dark"
}
const _hoisted_10 = {
  key: 1,
  class: "font-normal text-opacity-80 text-xs italic pl-1 leading-tight flex-shrink-0 text-red-dark"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      ($options.tasksNotFound($data.update_tasks_in10_days)==1)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, " 0 update tasks for next 10 days "))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.update_tasks_in10_days, (task) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [
              _hoisted_7,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(task.name), 1 /* TEXT */)
            ]),
            ($options.dateDiffInDays(task.task_date)!=1)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_9, " .." + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.dateDiffInDays(task.task_date)) + " days left ", 1 /* TEXT */))
              : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_10, " ..last day "))
          ])
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/LayoutDashboard.vue?vue&type=template&id=29708a54&bindings={}":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/LayoutDashboard.vue?vue&type=template&id=29708a54&bindings={} ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", { class: "relative flex  bg-blue-darkGray text-white py-3 pl-10" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "right-0 mr-10" }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
      href: "/logout",
      class: "border rounded-lg hover:bg-white hover:text-black px-2 py-1"
    }, " Dashboard / Logout ")
  ])
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    _hoisted_1,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
    ])
  ]))
}

/***/ })

}]);