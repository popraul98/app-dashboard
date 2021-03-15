<template>
    <div class="flex h-full">
        <div class="flex-none m-5 w-1/3 inline-block ">

            <div class="mb-3 text-left border border-gray-300 shadow rounded-lg bg-gray-100">
                <div class="font-semibold text-white bg-blue-hrBg p-2 rounded-t-lg">
                    <i class='fas fa-user-friends'></i>
                    Active clients:
                </div>

                <div class="divide p-2.5">

                    <div class="text-second"
                         v-if="clientsNotFound(all_clients)==1"
                    >
                        0 clients
                    </div>
                    <ul v-for="client in all_clients">
                        <li class="font-semibold rounded flex items-center justify-between hover:bg-gray-200">

                            <div class="flex justify-between items-center truncate ">
                                <p class="mr-2 font-medium text-blue-dark py-2 truncate  rounded font-normal items-center">
                                    <i class='text-xs fas fa-user-alt'></i>
                                    {{ client.name }}
                                </p>
                            </div>
                            <div class="flex">
                                <button
                                    @click="showDetailsWindow(client.id)"
                                    class="text-blue-dark mr-2 text-xs flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-white">
                                    details
                                </button>
                                <button
                                    @click="showEditWindow(client.id)"
                                    class="text-blue-dark text-xs mr-2 flex-shrink-0 px-0.5 border border-gray-300 rounded hover:bg-white">
                                    edit
                                </button>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

        </div>

        <!--        Edit and Details Modals-->
        <div class=" my-5 mr-5 flex-grow inline-block">


            <modal-details-client
                v-bind:client="individual_client"
                v-if="showDetailsModal"
                @close="showDetailsModal = false"
            >

            </modal-details-client>

            <!--            <modal-edit-task-->
            <!--                @if_updated_successfully="getTasks"-->
            <!--                v-if="showEditModal"-->
            <!--                @close="showEditModal = false"-->
            <!--                v-bind:task="individual_task"-->

            <!--            >-->
            <!--            </modal-edit-task>-->

        </div>
    </div>

</template>

<script>
import modalDetailsClient from "./componentsDashboardControl/modalDetailsClient";

export default {
    name: "manageClients",
    components: {
        modalDetailsClient,
    },
    data() {
        return {
            all_clients: [],

            individual_client: [],

            showDetailsModal: false,
            showEditModal: false,
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
        },
        clientsNotFound(obj) {
            if (obj === undefined || obj.length == 0) {
                return 1;
            }
            return 0;
        },
        showDetailsWindow(id) {
            for (let i = 0; i < this.all_clients.length; i++) {
                if (this.all_clients[i].id == id) {
                    this.individual_client = this.all_clients[i];
                    break;
                }
            }
            this.showEditModal = false;
            this.showDetailsModal = true;
        },
        showEditWindow(id) {
            this.showDetailsModal = false;
            for (let i = 0; i < this.all_clients.length; i++) {
                if (this.all_clients[i].id == id) {
                    this.individual_client = this.all_clients[i];
                    break;
                }
            }
            this.showEditModal = true;
        },
    },
}
</script>

