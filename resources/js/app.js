import {createRouter, createWebHistory} from "vue-router";

require('./bootstrap');

require('alpinejs');

import {createApp, h} from "vue";
import {app, plugin} from "@inertiajs/inertia-vue3";

import routes from './router/routers';


// 5. Create and mount the root instance.
const sidebar = createApp({})
sidebar.use(routes)
sidebar.mount('#sidebar')


const el = document.getElementById("app");

createApp({
    render: () =>
        h(app, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) =>
                import(`@/components/${name}`).then((module) => module.default),
        }),

})
    .use(plugin)
    .mount(el);


