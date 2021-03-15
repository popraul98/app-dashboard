<template>
    <div v-if="tasksNotFound(out_of_date_tasks)==1" class="flex h-screen">
        <div v-html="message" class="text-4xl text-blue-dark text-opacity-70 m-auto">

        </div>
    </div>

    <div v-else class="flex h-full">

        <div class="flex-none m-5 w-1/2 inline-block ">
            <div class="mb-3 text-left border border-gray-300 shadow rounded-lg bg-gray-100">
                <div class="sticky top-0 font-semibold text-white bg-red-dark p-2 rounded-t-lg">
                    <i class="text-blue-dark fa fa-tasks"></i>
                    Out of date tasks:
                </div>

                <div class="divide p-2.5">

                    <ul v-for="task in out_of_date_tasks">
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
                                    @click="toggleConfirmWindow(task.id,task.name)"
                                    class=" text-blue-dark text-xs mr-2 flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-blue-dark hover:text-white">
                                    completed
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


            <modal-show-task v-bind:task="individual_task"
                             v-if="showDetailsModal"
                             @close="showDetailsModal = false"

            >
            </modal-show-task>


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
import modalShowTask from "./componentsDashboardControl/modalDetailsTask";

export default {
    name: "outOfDateTasks",
    components: {modalShowTask},
    data() {
        return {
            out_of_date_tasks: [],
            individual_task: [],

            showDetailsModal: false,
            showConfirmModal: false,
            id_individual_task: null,
            name_individual_task:null,

            message: '',
        }
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        tasksNotFound(obj) {
            if (obj === undefined || obj.length == 0) {
                return 1;
            }
            return 0;
        },
        getTasks() {
            axios.get('/dashboard-control-data')
                .then((response) => {
                    this.out_of_date_tasks = response.data.out_of_date_tasks;
                    if (this.tasksNotFound(this.out_of_date_tasks)) {
                        this.message = 'Well done, all tasks completed.<span class="text-xl italic block text-right">0 tasks out of date.</span>';
                    }
                });

        },
        showDetailsWindow(id) {
            for (let i = 0; i < this.out_of_date_tasks.length; i++) {
                if (this.out_of_date_tasks[i].id == id) {
                    this.individual_task = this.out_of_date_tasks[i];
                    break;
                }
            }
            this.showDetailsModal = true;
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

<style scoped>

</style>
