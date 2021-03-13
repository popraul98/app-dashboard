<template>
    <!--    <layout-dashboard>-->

    <div class=" bg-gradient-to-tl bg-fixed bg-gray-200">
        <ul class="grid gap-3 grid-cols-4 grid-rows-2 grid-flow-row border-blue-dark border-2 h-screen p-4 ">

            <!--            LOGO AND TIME-->
            <li class=" text-white text-center flex items-center">
                <logo-time></logo-time>
            </li>

            <!--                CLIENTS ENDING CONTRACT IN 30 DAYS DONE -->
            <li class="row-span-2 grid-box">
                <clients-contract-end-in30-days v-bind:clients="updateData.ContractEndIn30Days"></clients-contract-end-in30-days>
            </li>

            <!--                FAILED EVENTS-->
            <li class="  grid-box-overflow-visible col-span-2 scrollbar scrollbar-track-blue-50 scrollbar-thumb-blue-dark ">
                <failed-events v-bind:events="updateData.EventsFailed"></failed-events>
            </li>

            <!--               TASKS FOR TODAY DONE-->
            <li class="grid-box">
                <today-tasks v-bind:tasks="updateData.TasksToday"></today-tasks>
            </li>

            <!--                CLIENTS ENDING CONTRACT TODAY DONE -->
            <li class="grid-box">
                <clients-today-contract-end v-bind:clients="updateData.ContractEndToday"></clients-today-contract-end>
            </li>

            <!--                UPDATE TASKS IN 10 DAYS  DONE -->
            <li class="grid-box">
                <update-tasks-in10-days v-bind:tasks="updateData.TasksUpdate10Days"></update-tasks-in10-days>
            </li>

        </ul>
    </div>

    <!--    </layout-dashboard>-->
</template>

<script>
import LayoutDashboard from "../layouts/LayoutDashboard";
import LogoTime from "./LogoTime";
import TodayTasks from "./TodayTasks";
import ClientsTodayContractEnd from "./ClientsTodayContractEnd";
import ClientsContractEndIn30Days from "./ClientsContractEndIn30Days";
import UpdateTasksIn10Days from "./UpdateTasksIn10Days";
import FailedEvents from "./FailedEvents";
import TEST from "./TEST";


export default {
    props: [
        'tasks_today',
        'update_tasks_10days',

        'clients_contract_end_today',
        'clients_contract_end_in30_days',

        'events_failed',

    ],
    data() {
        return {
            updateData: {
                TasksToday: this.tasks_today,
                TasksUpdate10Days: this.update_tasks_10days,
                ContractEndToday: this.clients_contract_end_today,
                ContractEndIn30Days: this.clients_contract_end_in30_days,
                EventsFailed: this.events_failed,
            },

            previousData: {
                previousTasksToday: this.tasks_today,
                previousTasksUpdate10Days: this.update_tasks_10days,
                previousContractEndToday: this.clients_contract_end_today,
                previousContractEndIn30Days: this.clients_contract_end_in30_days,
                previousEventsFailed: this.events_failed,
            },
        }
    },
    components: {
        TEST,
        FailedEvents,
        UpdateTasksIn10Days,
        ClientsContractEndIn30Days,
        ClientsTodayContractEnd,
        TodayTasks,
        LogoTime
    },
    mounted() {
        console.log('Dashboard mounted')
        setInterval(() => {
            axios.get('/dashboardUpdate')
                .then((response) => {

                    this.updateDataIfNeeded(this.previousData, response.data)
                    console.log('DONE')
                });
        }, 5000)
    },
    methods: {
        updateDataIfNeeded(oldData, newData) {
            if (this.isDateChanged(oldData.previousTasksToday, newData.tasks_today)) {
                console.log('difference tasks today')

                this.updateData.TasksToday = newData.tasks_today;
                this.previousData.previousTasksToday = newData.tasks_today;
            }
            if (this.isDateChanged(oldData.previousTasksUpdate10Days, newData.update_tasks_10days)) {
                console.log('difference tasks 10')

                this.updateData.TasksUpdate10Days = newData.update_tasks_10days;
                this.previousData.previousTasksUpdate10Days = newData.update_tasks_10days;
            }

            if (this.isDateChanged(oldData.previousContractEndToday, newData.clients_contract_end_today)) {
                console.log('difference clients today')

                this.updateData.ContractEndToday = newData.clients_contract_end_today;
                this.previousData.previousContractEndToday = newData.clients_contract_end_today;
            }
            if (this.isDateChanged(oldData.previousContractEndIn30Days, newData.clients_contract_end_in30_days)) {
                console.log('difference clients')

                this.updateData.ContractEndIn30Days = newData.clients_contract_end_in30_days;
                this.previousData.previousContractEndIn30Days = newData.clients_contract_end_in30_days;
            }

            if (this.isDateChanged(oldData.previousEventsFailed, newData.events_failed)) {
                console.log('difference events')

                this.updateData.EventsFailed = newData.events_failed;
                this.previousData.previousEventsFailed = newData.events_failed;
            }

        },
        isDateChanged(previousData, newData) {
            if (JSON.stringify(previousData) !== JSON.stringify(newData)) {
                return 1;
            }
            return 0;
        }
    }
};
</script>
