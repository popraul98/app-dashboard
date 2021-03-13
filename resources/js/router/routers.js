import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import manageTasks from "../dashboardControl/manageTasks";
import home from "../dashboardControl/homeDashboardControl";
import addClient from "../dashboardControl/addClient";
import addTask from "../dashboardControl/addTask";
import completedTasks from "../dashboardControl/completedTasks";
import manageClients from "../dashboardControl/manageClients";
import outOfDateTasks from "../dashboardControl/componentsDashboardControl/outOfDateTasks";

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/manage-tasks',
        component: manageTasks,
    },
    {
        path: '/add-client',
        component: addClient,
    },
    {
        path: '/add-task',
        component: addTask,
    },
    {
        path: '/completed-tasks',
        component: completedTasks,
    },
    {
        path:'/manage-clients',
        component: manageClients,
    },
    {
        path:'/out-of-date-tasks',
        component: outOfDateTasks,
    }
]
const routerHistory = createWebHashHistory();

export default createRouter({
    history: routerHistory,
    linkActiveClass: 'font-bold underline tracking-normal text-white',
    routes,
})
