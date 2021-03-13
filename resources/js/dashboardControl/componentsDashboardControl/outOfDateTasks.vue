<template>
    <div v-if="tasksNotFound(out_of_date_tasks)==1"
         class="flex h-screen"
    >
        <div class="text-4xl text-blue-dark text-opacity-70 m-auto">
            Well done, all tasks completed.
            <span class="text-xl italic block text-right">0 tasks out of date.</span>
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
                                    @click="setAsCompleted(task.id)"
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

    </div>

</template>

<script>
import modalShowTask from "./modalShowTask";

export default {
    name: "outOfDateTasks",
    components: {modalShowTask},
    data() {
        return {
            out_of_date_tasks: [],
            individual_task: [],

            showDetailsModal: false,

        }
    },
    created() {
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
        setAsCompleted(id) {

            axios.post('/set-completed/', {
                id: id,
            })
                .then(response => {
                    this.getTasks();
                })
                .catch(function (error) {
                    console.log(error)
                });
        }
    },
}
</script>

<style scoped>

</style>
