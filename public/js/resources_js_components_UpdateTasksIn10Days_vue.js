(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_UpdateTasksIn10Days_vue"],{

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

/***/ })

}]);