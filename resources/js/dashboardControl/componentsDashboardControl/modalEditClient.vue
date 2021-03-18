<template>
    <div
        class=" break-words text-left p-5 border border-gray-300 shadow rounded-lg bg-gray-100 scrollbar scrollbar-track-blue-hrBg scrollbar-thumb-blue-darkGray">
        <div class=" flex justify-between">
            <div class="text-main text-lg">Edit Client</div>
            <button
                @click="$emit('close')"
                class="mr-3 bg-blue-dark bg-opacity-80 text-white text-sm px-2   rounded border border-blue-dark font-semibold hover:bg-gray-200 hover:text-gray-800">
                Close
            </button>
        </div>

        <div v-if="client_to_edit == ''" class="text-green-500 text-sm mt-3">
            Client <span class="italic">updated</span> successfully!
        </div>
        <div v-else>

            <form @submit.prevent="updateClients">
                <div class="text-right text-blue-dark mr-5 mt-3 text-xs text-opacity-70 ">
                    * - field required
                </div>
                <ul>

                    <li class="my-1">
                        <label class="text-blue-dark text-sm">*Name:</label>
                        <input class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                               v-model="client_to_edit.name"
                               required
                        >
                    </li>

                    <li class="my-1">
                        <label class="text-blue-dark text-sm">*Email:</label>
                        <input class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                               v-model="client_to_edit.email"
                               required
                        >
                    </li>

                    <li class="my-1">
                        <label class="text-blue-dark text-sm">*Website:</label>
                        <input class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                               v-model="client_to_edit.website"
                               required
                        >
                    </li>

                    <li class="my-1">
                        <label class="text-blue-dark text-sm">*Company:</label>
                        <input class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                               v-model="client_to_edit.company"
                               required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="matriculation_number"
                        >
                            *Matriculation number:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="matriculation_number"
                            name="client_to_edit.matriculation_number"
                            v-model="client_to_edit.matriculation_number"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="cui"
                        >
                            *Cui:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="cui"
                            name="client_to_edit.cui"
                            v-model="client_to_edit.cui"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="bank_name"
                        >
                            *Bank name:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="bank_name"
                            name="client_to_edit.bank_name"
                            v-model="client_to_edit.bank_name"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="bank_account"
                        >
                            *Bank account:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="bank_account"
                            name="client_to_edit.bank_account"
                            v-model="client_to_edit.bank_account"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="address"
                        >
                            *Address:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="address"
                            name="client_to_edit.address"
                            v-model="client_to_edit.address"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="contract_start_date"
                        >
                            *Contract start date:
                        </label>
                        <datepicker
                            v-model="client_to_edit.contract_start_date"
                            id="contract_start_date"
                            name="client_to_edit.contract_start_date"
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            required
                        />
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="contact_person_1"
                        >
                            *Contact person 1:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="contact_person_1"
                            name="client_to_edit.contact_person_1"
                            v-model="client_to_edit.contact_person_1"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="email_contact_person_1"
                        >
                            *Email contact person 1:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="email_contact_person_1"
                            name="client_to_edit.email_contact_person_1"
                            v-model="client_to_edit.email_contact_person_1"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="receive_notification_1"
                        >
                            *Receive notification 1:
                        </label>
                        <select
                            id="receive_notification_1"
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            v-model="client_to_edit.receive_notification_1"
                            name="client_to_edit.receive_notification_1"
                            required
                        >
                            <option disabled>Select:</option>
                            <option value=1>yes</option>
                            <option value=0>no</option>
                        </select>
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="contact_person_2"
                        >
                            Contact person 2:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="contact_person_2"
                            name="client_to_edit.contact_person_2"
                            v-model="client_to_edit.contact_person_2"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="email_contact_person_2"
                        >
                            Email contact person 2:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="email_contact_person_2"
                            name="client_to_edit.email_contact_person_2"
                            v-model="client_to_edit.email_contact_person_2"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="receive_notification_2"
                        >
                            Receive notification 2:
                        </label>
                        <select
                            id="receive_notification_2"
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            v-model="client_to_edit.receive_notification_2"
                            name="client_to_edit.receive_notification_2"
                        >
                            <option disabled>Select:</option>
                            <option value=1>yes</option>
                            <option value=0>no</option>
                        </select>
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="contact_person_3"
                        >
                            Contact person 3:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="contact_person_3"
                            name="client_to_edit.contact_person_3"
                            v-model="client_to_edit.contact_person_3"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="email_contact_person_3"
                        >
                            Email contact person 3:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="email_contact_person_3"
                            name="client_to_edit.email_contact_person_3"
                            v-model="client_to_edit.email_contact_person_3"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="receive_notification_3"
                        >
                            Receive notification 3:
                        </label>
                        <select
                            id="receive_notification_3"
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            v-model="client_to_edit.receive_notification_3"
                            name="client_to_edit.receive_notification_3"

                        >
                            <option disabled>Select:</option>
                            <option value=1>yes</option>
                            <option value=0>no</option>
                        </select>
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="programming_hours"
                        >
                            *Programming hours:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="programming_hours"
                            name="client_to_edit.programming_hours"
                            v-model="client_to_edit.programming_hours"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="support_hours"
                        >
                            *Support hours:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="support_hours"
                            name="client_to_edit.support_hours"
                            v-model="client_to_edit.support_hours"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="subscription_id"
                        >
                            *Subscription Id:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="subscription_id"
                            name="client_to_edit.subscription_id"
                            v-model="client_to_edit.subscription_id"
                            required
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="new_website"
                        >
                            New Website:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="new_website"
                            name="client_to_edit.new_website"
                            v-model="client_to_edit.new_website"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="anniversary_date"
                        >
                            Anniversary date:
                        </label>
                        <datepicker
                            v-model="client_to_edit.anniversary_date"
                            placeholder="click here to choose a date"
                            id="anniversary_date"
                            name="client_to_edit.anniversary_date"
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                        />
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="website_link"
                        >
                            Website link:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="website_link"
                            name="client_to_edit.website_link"
                            v-model="client_to_edit.website_link"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="website_backend_link"
                        >
                            Website backend link:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="website_backend_link"
                            name="client_to_edit.website_backend_link"
                            v-model="client_to_edit.website_backend_link"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="jira_link"
                        >
                            Jira link:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="jira_link"
                            name="client_to_edit.jira_link"
                            v-model="client_to_edit.jira_link"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="google_drive_link"
                        >
                            Google Drive link:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="google_drive_link"
                            name="client_to_edit.google_drive_link"
                            v-model="client_to_edit.google_drive_link"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="hosting_link"
                        >
                            Hosting link:
                        </label>
                        <input
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            id="hosting_link"
                            name="client_to_edit.hosting_link"
                            v-model="client_to_edit.hosting_link"
                        >
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="contract_sent_date"
                        >
                            Contract sent date:
                        </label>
                        <datepicker
                            v-model="client_to_edit.contract_sent_date"
                            placeholder="click here to choose a date"
                            id="contract_sent_date"
                            name="client_to_edit.contract_sent_date"
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                        />
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="contract_end_date"
                        >
                            Contract end date:
                        </label>
                        <datepicker
                            v-model="client_to_edit.contract_end_date"
                            :lower-limit="new Date()"
                            placeholder="click here to choose a date"
                            id="contract_end_date"
                            name="client_to_edit.contract_end_date"
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                        />
                    </li>

                    <li class="my-1">
                        <label
                            class="text-blue-dark text-sm"
                            for="language"
                        >
                            *Language:
                        </label>
                        <select
                            id="language"
                            class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                            v-model="client_to_edit.language"
                            name="client_to_edit.language"
                            required
                        >
                            <option disabled>Select language</option>
                            <option value="ro">romana</option>
                            <option value="en">english</option>
                        </select>
                    </li>

                </ul>
                <button
                    @click="updateClient(client_to_edit.id)"
                    class="bg-blue-dark bg-opacity-90 text-white px-3.5 py-1.5 mt-5 rounded font-semibold">
                    Update Client
                    <div v-if="visual_spinner">
                        <i class="fa fa-spinner fa-spin" style="font-size:18px"></i>
                    </div>
                </button>


            </form>

            <div>

            </div>

        </div>

    </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import {ref} from 'vue'

export default {
    name: "modalEditClient",
    props: ['client'],
    components: {
        Datepicker,
    },
    data() {
        return {
            client_to_edit: {
                name: this.client.name,
                email: this.client.email,
                website: this.client.website,
                company: this.client.company,
                matriculation_number: this.client.matriculation_number,
                cui: this.client.cui,
                bank_name: this.client.bank_name,
                bank_account: this.client.bank_account,
                address: this.client.address,
                contract_start_date: new Date(this.client.contract_start_date),
                contact_person_1: this.client.contact_person_1,
                email_contact_person_1: this.client.email_contact_person_1,
                receive_notification_1: this.client.receive_notification_1,
                contact_person_2: this.client.contact_person_2,
                email_contact_person_2: this.client.email_contact_person_2,
                receive_notification_2: this.client.receive_notification_2,
                contact_person_3: this.client.contact_person_3,
                email_contact_person_3: this.client.email_contact_person_3,
                receive_notification_3: this.client.receive_notification_3,
                programming_hours: this.client.programming_hours,
                support_hours: this.client.support_hours,
                subscription_id: this.client.subscription_id,
                new_website: this.client.new_website,
                anniversary_date: new Date(this.client.anniversary_date),
                website_link: this.client.website_link,
                website_backend_link: this.client.website_backend_link,
                jira_link: this.client.jira_link,
                google_drive_link: this.client.google_drive_link,
                hosting_link: this.client.hosting_link,
                contract_sent_date: new Date(this.client.contract_sent_date),
                contract_end_date: new Date(this.client.contract_end_date),
                language: this.client.language,
            },
            visual_spinner: false,
        }
    },
    mounted() {
        this.client_to_edit = this.client;
    },
    watch: {
        client(newClient) {
            this.client_to_edit = this.client;
        }
    },
    methods: {
        isFieldEmpty(field) {
            if (field == null) {
                return 1;
            }
        },
        updateClient(id) {
            axios.post('/update-client', {
                id: id,
                name: this.client_to_edit.name,
                email: this.client_to_edit.email,
                website: this.client_to_edit.website,
                company: this.client_to_edit.company,
                matriculation_number: this.client_to_edit.matriculation_number,
                cui: this.client_to_edit.cui,
                bank_name: this.client_to_edit.bank_name,
                bank_account: this.client_to_edit.bank_account,
                address: this.client_to_edit.address,
                contract_start_date: this.formatDate(this.client_to_edit.contract_start_date),
                contact_person_1: this.client_to_edit.contact_person_1,
                email_contact_person_1: this.client_to_edit.email_contact_person_1,
                receive_notification_1: this.client_to_edit.receive_notification_1,
                contact_person_2: this.client_to_edit.contact_person_2,
                email_contact_person_2: this.client_to_edit.email_contact_person_2,
                receive_notification_2: this.client_to_edit.receive_notification_2,
                contact_person_3: this.client_to_edit.contact_person_3,
                email_contact_person_3: this.client_to_edit.email_contact_person_3,
                receive_notification_3: this.client_to_edit.receive_notification_3,
                programming_hours: this.client_to_edit.programming_hours,
                support_hours: this.client_to_edit.support_hours,
                subscription_id: this.client_to_edit.subscription_id,
                new_website: this.client_to_edit.new_website,
                anniversary_date: this.formatDate(this.client_to_edit.anniversary_date),
                website_link: this.client_to_edit.website_link,
                website_backend_link: this.client_to_edit.website_backend_link,
                jira_link: this.client_to_edit.jira_link,
                google_drive_link: this.client_to_edit.google_drive_link,
                hosting_link: this.client_to_edit.hosting_link,
                contract_sent_date: this.formatDate(this.client_to_edit.contract_sent_date),
                contract_end_date: this.formatDate(this.client_to_edit.contract_end_date),
                language: this.client_to_edit.language,
            })
                .then(response => {
                    this.onSuccess();
                    console.log('succes')

                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        onSuccess() {
            this.visual_spinner = false;

            this.$emit('if_updated_successfully');
            this.client_to_edit = '';
        },

        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        }
    },
}
</script>
