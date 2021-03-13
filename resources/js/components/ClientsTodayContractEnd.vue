<template>
    <div class="text-left">

        <h2 class="title-box pb-1">
            <i class=" far fa-file-excel"></i>
            Ending contracts today:
        </h2>

        <div class="divide">
            <div class="text-second"
                 v-if="clientsNotFound(clients_contract_end_today)==1"
            >
                0 found clients
            </div>
            <div v-for="client in clients_contract_end_today">
                <p class="text-main">
                    <i class="text-second fas fa-angle-right"></i>
                    name client: {{ client.name }}
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ClientsTodayContractEnd",
    props: ['clients'],
    data() {
        return {
            clients_contract_end_today: this.clients,
        }
    },
    mounted() {
        console.log('ClientsTodayContractEnd mounted');
    },
    watch: {
        clients(newClients) {

            console.log('NEW update clients TODAY')

            this.clients_contract_end_today = this.clients;
        }
    },
    methods: {
        clientsNotFound(obj) {
            if (obj === undefined || obj.length == 0) {
                return 1;
            }
            return 0;
        }
        // getClientsEndToday(clients) {
        //
        //     const todayDate = new Date();
        //
        //     for (let i = 0; i < clients.length; i++) {
        //         let contractEndDate = new Date(clients[i].contract_end_date);
        //
        //         if (this.sameDay(todayDate, contractEndDate)) {
        //             this.clients_contract_end_today.push(clients[i]);
        //         }
        //     }
        //     JSON.stringify(this.clients_contract_end_today);
        // },
        //
        // sameDay(d1, d2) {
        //     return d1.getFullYear() === d2.getFullYear() &&
        //         d1.getMonth() === d2.getMonth() &&
        //         d1.getDate() === d2.getDate();
        // },

    }
}
</script>
