<template>
    <div
        class="mb-5 break-words text-left p-5 border border-gray-300 shadow rounded-lg bg-gray-100 scrollbar scrollbar-track-blue-hrBg scrollbar-thumb-blue-darkGray">
        <div class=" flex justify-between">
            <div class="text-main text-lg">Client Description</div>
            <button
                @click="$emit('close')"
                class="mr-3 bg-blue-dark bg-opacity-80 text-white text-sm px-2   rounded border border-blue-dark font-semibold hover:bg-gray-200 hover:text-gray-800">
                Close
            </button>
        </div>

        <div v-if="client_to_show == ''" class="text-blue-dark text-sm mt-3">
            click on <span class="italic">details</span> to show description
        </div>

        <div v-else>

            <ul class="mt-3">

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Name:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.name }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Email:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.email }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Website:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.website }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Company:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.company }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Matriculation number:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.matriculation_number }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Cui:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.cui }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Bank name:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.bank_name }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Bank Account:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.bank_account }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Address:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.address }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Contract start date:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.contract_start_date }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Contact person 1:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.contact_person_1 }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Email contact person 1:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.email_contact_person_1 }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Receive notification 1:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.receive_notification_1 }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Contact person 2:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.contact_person_2 }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Email contact person 2:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.email_contact_person_2 }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Receive notification 2:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.receive_notification_2 }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Contact person 3:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.contact_person_3 }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Email contact person 3:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.email_contact_person_3 }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Receive notification 3:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.receive_notification_3 }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Programming hours:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.programming_hours }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Support hours:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.support_hours }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Subscription id:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.subscription_id }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">New website:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.new_website }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Anniversary date:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ client_to_show.anniversary_date }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Website link:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.website_link }}">{{ client_to_show.website_link }}</a>
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Website backend link:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.website_backend_link }}">{{
                                client_to_show.website_backend_link
                            }}</a>
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Jira link:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.jira_link }}">{{ client_to_show.jira_link }}</a>
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Google drive link:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.google_drive_link }}">{{ client_to_show.google_drive_link }}</a>
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Hosting link:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.hosting_link }}">{{ client_to_show.hosting_link }}</a>
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Contract sent date:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.contract_sent_date }}">{{ client_to_show.contract_sent_date }}</a>
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Contract ent date:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.contract_end_date }}">{{ client_to_show.contract_end_date }}</a>
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Language:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.language }}">{{ client_to_show.language }}</a>
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Created_at:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.created_at }}">{{ client_to_show.created_at }}</a>
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Updated_at:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        <a href="{{ client_to_show.updated_at }}">{{ client_to_show.updated_at }}</a>
                    </p>
                </li>

            </ul>
            <button
                class="float-right italic font-semibold text-sm text-gray-800 rounded-3xl bg-blue-hrBg mt-5 p-2 "
                @click="scrollTop"
            >
                <i class='fas fa-angle-double-up'></i>  Go UP
            </button>

        </div>

    </div>
</template>

<script>
export default {
    name: "modalDetailsClient",
    props: ['client'],
    data() {
        return {
            client_to_show: this.client,
        }
    },
    watch: {
        client(newClient) {
            this.client_to_show = this.client;

        }
    },
    methods: {
        isFieldEmpty(field) {
            if (field == null) {
                return 1;
            }
        },
        scrollTop: function () {
            this.intervalId = setInterval(() => {
                if (window.pageYOffset === 0) {
                    clearInterval(this.intervalId)
                }
                window.scroll(0, window.pageYOffset - 50)
            }, 20)
        },
    }
}
</script>

<style scoped>

</style>
