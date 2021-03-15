<template>
    <div
        class=" break-words text-left m-7 border border-gray-300 shadow rounded-lg bg-gray-100 w-1/2 text-blue-dark text-opacity-80">

        <div class="sticky top-0 font-semibold text-white bg-blue-hrBg p-3 rounded-t-lg">
            <i class='fas fa-user-plus'></i> Add New Client
        </div>
        <div class="text-right mr-6 mt-3 text-xs text-opacity-10 ">
            * - field required
        </div>

        <form @submit.prevent="submit" class="px-5 pb-5">

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="name"
                >
                    *Name:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="name"
                    name="client.name"
                    v-model="client.name"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="email"
                >
                    *Email:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="email"
                    name="client.email"
                    v-model="client.email"
                    @keydown="disableMessage"

                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="website"
                >
                    *Website:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="website"
                    name="client.website"
                    v-model="client.website"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="company"
                >
                    *Company:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="company"
                    name="client.company"
                    v-model="client.company"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="matriculation_number"
                >
                    *Matriculation number:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="matriculation_number"
                    name="client.matriculation_number"
                    v-model="client.matriculation_number"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="cui"
                >
                    *Cui:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="cui"
                    name="client.cui"
                    v-model="client.cui"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="bank_name"
                >
                    *Bank name:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="bank_name"
                    name="client.bank_name"
                    v-model="client.bank_name"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="bank_account"
                >
                    *Bank account:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="bank_account"
                    name="client.bank_account"
                    v-model="client.bank_account"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="address"
                >
                    *Address:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="address"
                    name="client.address"
                    v-model="client.address"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="contract_start_date"
                >
                    *Contract start date:
                </label>
                <datepicker
                    v-model="client.contract_start_date"
                    placeholder="click here to choose a date"
                    id="contract_start_date"
                    name="client.contract_start_date"
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    @keydown="disableMessage"
                    required
                />
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="contact_person_1"
                >
                    *Contact person 1:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="contact_person_1"
                    name="client.contact_person_1"
                    v-model="client.contact_person_1"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="email_contact_person_1"
                >
                    *Email contact person 1:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="email_contact_person_1"
                    name="client.email_contact_person_1"
                    v-model="client.email_contact_person_1"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="receive_notification_1"
                >
                    *Receive notification 1:
                </label>
                <select
                    id="receive_notification_1"
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    v-model="client.receive_notification_1"
                    name="client.receive_notification_1"
                    required
                >
                    <option disabled>Select:</option>
                    <option value=1>yes</option>
                    <option value=0>no</option>
                </select>
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="contact_person_2"
                >
                    Contact person 2:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="contact_person_2"
                    name="client.contact_person_2"
                    v-model="client.contact_person_2"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="email_contact_person_2"
                >
                    Email contact person 2:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="email_contact_person_2"
                    name="client.email_contact_person_2"
                    v-model="client.email_contact_person_2"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="receive_notification_2"
                >
                    Receive notification 2:
                </label>
                <select
                    id="receive_notification_2"
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    v-model="client.receive_notification_2"
                    name="client.receive_notification_2"
                    @keydown="disableMessage"
                >
                    <option disabled>Select:</option>
                    <option value=1>yes</option>
                    <option value=0>no</option>
                </select>
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="contact_person_3"
                >
                    Contact person 3:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="contact_person_3"
                    name="client.contact_person_3"
                    v-model="client.contact_person_3"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="email_contact_person_3"
                >
                    Email contact person 3:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="email_contact_person_3"
                    name="client.email_contact_person_3"
                    v-model="client.email_contact_person_3"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="receive_notification_3"
                >
                    Receive notification 3:
                </label>
                <select
                    id="receive_notification_3"
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    v-model="client.receive_notification_3"
                    name="client.receive_notification_3"

                >
                    <option disabled>Select:</option>
                    <option value=1>yes</option>
                    <option value=0>no</option>
                </select>
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="programming_hours"
                >
                    Programming hours:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="number"
                    id="programming_hours"
                    name="client.programming_hours"
                    v-model="client.programming_hours"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="support_hours"
                >
                    Support hours:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="number"
                    id="support_hours"
                    name="client.support_hours"
                    v-model="client.support_hours"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="subscription_id"
                >
                    *Subscription Id:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="number"
                    id="subscription_id"
                    name="client.subscription_id"
                    v-model="client.subscription_id"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="new_website"
                >
                    New Website:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="new_website"
                    name="client.new_website"
                    v-model="client.new_website"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="anniversary_date"
                >
                    *Anniversary date:
                </label>
                <datepicker
                    v-model="client.anniversary_date"
                    placeholder="click here to choose a date"
                    id="anniversary_date"
                    name="client.anniversary_date"
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    @keydown="disableMessage"
                    required
                />
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="website_link"
                >
                    Website link:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="website_link"
                    name="client.website_link"
                    v-model="client.website_link"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="website_backend_link"
                >
                    Website backend link:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="website_backend_link"
                    name="client.website_backend_link"
                    v-model="client.website_backend_link"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="jira_link"
                >
                    Jira link:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="jira_link"
                    name="client.jira_link"
                    v-model="client.jira_link"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="google_drive_link"
                >
                    Google Drive link:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="google_drive_link"
                    name="client.google_drive_link"
                    v-model="client.google_drive_link"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="hosting_link"
                >
                    Hosting link:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="hosting_link"
                    name="client.hosting_link"
                    v-model="client.hosting_link"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="contract_sent_date"
                >
                    Contract sent date:
                </label>
                <datepicker
                    v-model="client.contract_sent_date"
                    placeholder="click here to choose a date"
                    id="contract_sent_date"
                    name="client.contract_sent_date"
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    @keydown="disableMessage"
                />
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="contract_end_date"
                >
                    Contract end date:
                </label>
                <datepicker
                    v-model="client.contract_end_date"
                    :lower-limit="new Date()"
                    placeholder="click here to choose a date"
                    id="contract_end_date"
                    name="client.contract_end_date"
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    @keydown="disableMessage"
                />
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="language"
                >
                    *Language:
                </label>
                <select
                    id="language"
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    v-model="client.language"
                    name="client.language"
                    required
                >
                    <option disabled>Select language</option>
                    <option value="ro">romana</option>
                    <option value="en">english</option>
                </select>
            </div>


            <button
                type="submit"
                class="bg-blue-darkGray hover:bg-blue-dark bg-opacity-90 text-white px-3.5 py-1.5 my-5 rounded font-semibold">
                Create!
                <div v-if="visual_spinner">
                    <i class="fa fa-spinner fa-spin" style="font-size:18px"></i>
                </div>
            </button>

            <div class="text-green-600 opacity-90" v-html="message"></div>
            <div>
            </div>

        </form>

    </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import {ref} from 'vue'

export default {
    name: "addClients",
    components: {
        Datepicker
    },
    data() {
        return {
            client: {
                name: null,
                email: null,
                website: null,
                company: null,
                matriculation_number: null,
                cui: null,
                bank_name: null,
                bank_account: null,
                address: null,
                contract_start_date: null,
                contact_person_1: null,
                email_contact_person_1: null,
                receive_notification_1: null,
                contact_person_2: "numepers2",
                email_contact_person_2: "emailpers2",
                receive_notification_2: "1",
                contact_person_3: "numerpers3",
                email_contact_person_3: "emailpers3",
                receive_notification_3: "0",
                programming_hours: null,
                support_hours: null,
                subscription_id: null,
                new_website: null,
                anniversary_date: null,
                website_link: null,
                website_backend_link: null,
                jira_link: null,
                google_drive_link: null,
                hosting_link: null,
                contract_sent_date: null,
                contract_end_date: null,
                language: "ro",
            },
            message: '',
            visual_spinner: false,
        }
    },
    methods: {
        submit() {
            this.message = '';
            this.visual_spinner = true;
            axios.post('/create-client', {
                name: this.client.name,
                email: this.client.email,
                website: this.client.website,
                company: this.client.company,
                matriculation_number: this.client.matriculation_number,
                cui: this.client.cui,
                bank_name: this.client.bank_name,
                bank_account: this.client.bank_account,
                address: this.client.address,
                contract_start_date: this.formatDate(this.client.contract_start_date),
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
                anniversary_date: this.formatDate(this.client.anniversary_date),
                website_link: this.client.website_link,
                website_backend_link: this.client.website_backend_link,
                jira_link: this.client.jira_link,
                google_drive_link: this.client.google_drive_link,
                hosting_link: this.client.hosting_link,
                contract_sent_date: this.formatDate(this.client.contract_sent_date),
                contract_end_date: this.formatDate(this.client.contract_end_date),
                language: this.client.language,
            })
                .then((response) => {
                    this.onSuccess();
                })
                .catch(function (error) {
                    console.log(error);

                });
        },
        onSuccess() {
            this.visual_spinner = false;
            this.message = '<p>Great! Client created successfully!</p>';

            this.resetFields();

        },
        resetFields() {

        },
        disableMessage() {
            this.message = ""
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

    }

}
</script>
