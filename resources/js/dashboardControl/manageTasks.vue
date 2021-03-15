<template>

    <div class="flex h-full">
        <div class="flex-none m-5 w-1/2 inline-block ">

            <div class="mb-3 text-left border border-gray-300 shadow rounded-lg bg-gray-100">
                <div class="font-semibold text-white bg-blue-hrBg p-2 rounded-t-lg">
                    <i class="text-blue-dark fa fa-tasks"></i>
                    Tasks for today:
                </div>

                <div class="divide p-2.5">

                    <div class="text-second"
                         v-if="tasksNotFound(tasks_for_today)==1">
                        0 tasks
                    </div>
                    <ul v-for="task in tasks_for_today">
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
                                <button
                                    @click="showEditWindow(task.id)"
                                    class="text-blue-dark text-xs mr-2 flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-white">
                                    edit
                                </button>
                                <button
                                    @click="toggleConfirmWindow(task.id,task.name)"
                                    class=" text-blue-dark text-xs mr-2 flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-blue-dark hover:text-white">
                                    completed
                                </button>
                            </div>
                        </li>
                    </ul>

                </div>


            </div>
            <div class="mb-3 text-left border border-gray-300 shadow rounded-lg bg-gray-100">
                <div class="font-semibold text-white bg-blue-hrBg p-2 rounded-t-lg">
                    <i class="text-blue-dark fa fa-tasks"></i>
                    Update tasks in 10 days:
                </div>

                <div class="divide p-2.5">

                    <div class="text-second"
                         v-if="tasksNotFound(update_tasks_in10_days)==1">
                        0 tasks
                    </div>
                    <ul v-for="task in update_tasks_in10_days">
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
                                <button
                                    @click="showEditWindow(task.id)"
                                    class="text-blue-dark text-xs mr-2 flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-white">
                                    edit
                                </button>
                                <button
                                    @click="toggleConfirmWindow(task.id,task.name)"
                                    class=" text-blue-dark text-xs mr-2 flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-blue-dark hover:text-white">
                                    completed
                                </button>
                            </div>
                        </li>
                    </ul>

                </div>


            </div>

        </div>

        <!--        Edit and Details Modals-->
        <div class=" my-5 mr-5 flex-grow inline-block">

            <show-task v-bind:task="individual_task"
                       v-if="showDetailsModal"
                       @close="showDetailsModal = false"

            >
            </show-task>

            <modal-edit-task
                @if_updated_successfully="getTasks"
                v-if="showEditModal"
                @close="showEditModal = false"
                v-bind:task="individual_task"

            >
            </modal-edit-task>

        </div>

        <!--        Completed modal-->
        <div v-if="showConfirmModal"
             class="bg-gray-400 bg-opacity-70 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class=" bg-white rounded-2xl">
                <div class="border-b border-gray-200 px-5 pt-5 text-opacity-80 font-semibold text-4xl text-blue-dark">
                    Confirm
                </div>
                <div class="text-lg px-5 py-5 text-left text-blue-dark">
                    Do you mark <span class="font-semibold">{{ name_individual_task }}</span> as completed?
                </div>
                <div class="flex items-center justify-between px-5 pb-5 mt-5">
                    <button
                        @click="toggleConfirmWindow()"
                        class="text-blue-dark text-opacity-80 underline font-semibold uppercase px-1 py-1.5 text-sm outline-none focus:outline-none mr-1"
                        type="button" style="transition: all .15s ease">
                        Cancel
                    </button>
                    <button
                        @click="setAsCompleted"
                        class=" border border-gray-200 text-blue-dark text-opacity-80 rounded-xl hover:bg-blue-hrBg hover:text-white font-bold uppercase px-4 py-1.5 text-sm outline-none focus:outline-none mr-1"
                        type="button" style="transition: all .15s ease">
                        Mark as completed
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import ModalEditTask from "./componentsDashboardControl/modalEditTask";
import ShowTask from "./componentsDashboardControl/modalDetailsTask";

export default {
    name: "editTasks",
    components: {ShowTask, ModalEditTask},
    data() {
        return {
            tasks_for_today: [],
            update_tasks_in10_days: [],
            individual_task: [],

            showDetailsModal: false,
            showEditModal: false,
            showConfirmModal: false,
            id_individual_task: null,
            name_individual_task: null,

        }
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        getTasks() {
            axios.get('/dashboard-control-data')
                .then((response) => {
                    this.tasks_for_today = response.data.tasks_today;
                    this.update_tasks_in10_days = response.data.update_tasks_10days;
                });
        },
        tasksNotFound(obj) {
            if (obj === undefined || obj.length == 0) {
                return 1;
            }
            return 0;
        },
        showDetailsWindow(id) {
            let all_tasks = this.tasks_for_today.concat(this.update_tasks_in10_days);
            for (let i = 0; i < all_tasks.length; i++) {
                if (all_tasks[i].id == id) {
                    this.individual_task = all_tasks[i];
                    break;
                }
            }
            this.showEditModal = false;
            this.showDetailsModal = true;
        },
        showEditWindow(id) {
            this.showDetailsModal = false;
            let all_tasks = this.tasks_for_today.concat(this.update_tasks_in10_days);
            for (let i = 0; i < all_tasks.length; i++) {
                if (all_tasks[i].id == id) {
                    this.individual_task = all_tasks[i];
                    break;
                }
            }
            this.showEditModal = true;
        },

        toggleConfirmWindow(id, task_name) {
            if (this.showConfirmModal === false) {
                this.showConfirmModal = true;
                this.id_individual_task = id;
                this.name_individual_task = task_name;
            } else {
                this.showConfirmModal = false;
                this.id_individual_task = null;
                this.name_individual_task = null;
            }
        },

        setAsCompleted() {
            if (this.id_individual_task !== null) {

                axios.post('/set-completed/', {
                    id: this.id_individual_task,
                })
                    .then(response => {
                        this.getTasks();
                    })
                    .catch(function (error) {
                        console.log(error)
                    });

                this.toggleConfirmWindow();
            }
        }
    },
}
</script>
