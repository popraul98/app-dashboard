<template>
    <div class="flex h-full">

        <div class="flex-none m-5 w-1/2 inline-block ">
            <div class="mb-3 text-left border border-gray-300 shadow rounded-lg bg-gray-100">
                <div class="sticky top-0 font-semibold text-white bg-blue-hrBg p-2 rounded-t-lg">
                    <i class="text-blue-dark fa fa-tasks"></i>
                    Completed tasks
                </div>

                <div class="divide p-2.5">

                    <div class="text-second"
                         v-if="tasksNotFound(completed_tasks)==1">
                        0 tasks
                    </div>
                    <ul v-for="task in completed_tasks">
                        <li class="font-semibold rounded flex items-center justify-between hover:bg-gray-200">

                            <div class="flex justify-between items-center truncate ">
                                <p class="font-medium text-blue-dark py-2 truncate  rounded font-normal items-center">
                                    <i class="text-sm fa fa-bolt"></i>
                                    {{ task.name }}
                                </p>

                            </div>
                            <div class="flex">
                                <button
                                    @click="showDetailsWindow(task.id)"
                                    class="text-blue-dark mr-2 text-xs flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-white">
                                    details
                                </button>
                                <!--                            <button-->
                                <!--                                @click="showEditWindow(task.id)"-->
                                <!--                                class="text-blue-dark text-xs mr-2 flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-white">-->
                                <!--                                edit-->
                                <!--                            </button>-->

                            </div>
                        </li>
                    </ul>

                </div>

            </div>
        </div>

        <!--display modals-->
        <div class=" my-5 mr-5 flex-grow inline-block">

            <show-task v-bind:task="individual_task"
                       v-if="showDetailsModal"
                       @close="showDetailsModal = false"

            >
            </show-task>


        </div>

    </div>
</template>

<script>
import modalShowTask from "./componentsDashboardControl/modalDetailsTask";
import ShowTask from "./componentsDashboardControl/modalDetailsTask";

export default {
    name: "tasksCompleted",
    components: {
        ShowTask,
        modalShowTask
    },
    data() {
        return {
            completed_tasks: [],
            individual_task: [],
            showDetailsModal: false,
        }
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        getTasks() {
            axios.get('/dashboard-control-data')
                .then((response) => {
                    this.completed_tasks = response.data.completed_tasks
                });
        },
        tasksNotFound(obj) {
            if (obj === undefined || obj.length == 0) {
                return 1;
            }
            return 0;
        },
        showDetailsWindow(id) {
            for (let i = 0; i < this.completed_tasks.length; i++) {
                if (this.completed_tasks[i].id == id) {
                    this.individual_task = this.completed_tasks[i];
                    break;
                }
            }
            this.showDetailsModal = true;
        },
    },
}
</script>

<style scoped>

</style>
