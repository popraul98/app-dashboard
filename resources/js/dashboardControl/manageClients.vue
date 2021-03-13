<template>
    <div class="flex h-full">
        <div class="flex-none m-5 inline-block ">

            <div class="mb-3 text-left border border-gray-300 shadow rounded-lg bg-gray-100">
                <div class="font-semibold text-white bg-blue-hrBg p-2 rounded-t-lg">
                    <i class="text-blue-dark fa fa-tasks"></i>
                    Active clients:
                </div>

                <div class="divide p-2.5">

                    <!--                    <div class="text-second"-->
                    <!--                         v-if="tasksNotFound(tasks_for_today)==1"-->
                    <!--                    >-->
                    <!--                        0 tasks-->
                    <!--                    </div>-->
                    <ul v-for="client in all_clients">
                        <li class="font-semibold rounded flex items-center justify-between hover:bg-gray-200">

                            <div class="flex justify-between items-center truncate ">
                                <p class="font-medium text-blue-dark py-2 truncate  rounded font-normal items-center">
                                    <i class="text-sm fa fa-bolt"></i>
                                    {{ client.name }}
                                </p>
                            </div>
                            <!--                            <div class="flex">-->
                            <!--                                <button-->
                            <!--                                    @click="showDetailsWindow(task.id)"-->
                            <!--                                    class="text-blue-dark mr-2 text-xs flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-white">-->
                            <!--                                    details-->
                            <!--                                </button>-->
                            <!--                                <button-->
                            <!--                                    @click="showEditWindow(task.id)"-->
                            <!--                                    class="text-blue-dark text-xs mr-2 flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-white">-->
                            <!--                                    edit-->
                            <!--                                </button>-->
                            <!--                                <button-->
                            <!--                                    @click="setAsCompleted(task.id)"-->
                            <!--                                    class=" text-blue-dark text-xs mr-2 flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-blue-dark hover:text-white">-->
                            <!--                                    completed-->
                            <!--                                </button>-->
                            <!--                            </div>-->
                        </li>
                    </ul>

                </div>
            </div>

        </div>

        <!--        Edit and Details Modals-->
        <!--        <div class=" my-5 mr-5 flex-grow inline-block">-->

        <!--            <show-task v-bind:task="individual_task"-->
        <!--                       v-if="showDetailsModal"-->
        <!--                       @close="showDetailsModal = false"-->

        <!--            >-->
        <!--            </show-task>-->

        <!--            <modal-edit-task-->
        <!--                @if_updated_successfully="getTasks"-->
        <!--                v-if="showEditModal"-->
        <!--                @close="showEditModal = false"-->
        <!--                v-bind:task="individual_task"-->

        <!--            >-->
        <!--            </modal-edit-task>-->

        <!--        </div>-->
    </div>

</template>

<script>
export default {
    name: "manageClients",
    data() {
        return {
            all_clients: []
        }
    },
    mounted() {
        this.getClients();
    },
    methods: {
        getClients() {
            axios.get('/dashboard-control-data')
                .then((response) => {
                    this.all_clients = response.data.all_clients;
                });
            console.log(this.all_clients)
        }
    },
}
</script>

