<template>
    <div class="text-left pb-2">
        <h2 class="title-box ">
            <i class="far fa-file-excel"></i>
            Ending contracts in 30 days:
        </h2>
        <div class="divide">
            <div
                class="text-second" v-if="clientsNotFound(clients_contract_end_in30days)==1"
            >
                0 found clients
            </div>
            <div v-for="client in clients_contract_end_in30days">
                <div class="text-main">
                    <i class="arrow-color fas fa-angle-right"></i>
                    {{ client.name }}<br>
                    <p class="text-second"> contract-end-date:
                        {{ client.contract_end_date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClientsContractEndIn30Days",
    props: ['clients'],
    data() {
        return {
            clients_contract_end_in30days: this.clients,
        }
    },
    mounted() {
        console.log('ClientsContractEndIn10Days mounted');
    },
    watch: {
        clients(newClients) {

            console.log('NEW update clients 30')

            this.clients_contract_end_in30days = this.clients;
        }
    },
    methods: {
        clientsNotFound(obj) {
            if (obj === undefined || obj.length == 0) {
                return 1;
            }
            return 0;
        }
        // getClientsContactEndIn30Days(clients) {
        //     const dateFromToday = new Date(new Date().setHours(0, 0, 0, 0));
        //
        //     let dateOver30days = this.getDateForNext30Days(dateFromToday);
        //     dateOver30days.setHours(0, 0, 0, 0)
        //
        //     for (let i = 0; i < clients.length; i++) {
        //         let contractEndDate = new Date(clients[i].contract_end_date);
        //         contractEndDate.setHours(0, 0, 0, 0)
        //
        //         if (this.isContractDateBetweenDates(dateFromToday, dateOver30days, contractEndDate)) {
        //             this.clients_contract_end_in30days.push(clients[i])
        //         }
        //         JSON.stringify(this.clients_contract_end_today);
        //     }
        //
        // },

        // getDateForNext30Days(date) {
        //     let newDate = new Date().setDate(date.getDate() + 29);
        //     newDate = new Date(newDate);
        //     return newDate;
        // },

        // isContractDateBetweenDates(dateFrom, dateTo, contractEndDay) {
        //     if (contractEndDay >= dateFrom
        //         && contractEndDay <= dateTo) {
        //         return 1;
        //     }
        //     return 0;
        // },

        // sortClientsAfterDate(clients) {
        //     clients.sort(function (a, b) {
        //         return new Date(a.contract_end_date) - new Date(b.contract_end_date);
        //     });
        //     return clients;
        // },

    },
}
</script>
