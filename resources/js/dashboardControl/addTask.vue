<template>
    <div class=" break-words text-left m-7 border border-gray-300 shadow rounded-lg bg-gray-100 w-1/2 text-blue-dark text-opacity-80">

        <div class="font-semibold text-white bg-blue-hrBg p-3 rounded-t-lg">
            Add New Task
        </div>

        <form @submit.prevent="submit" class="p-5">

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="name"
                >
                    Name Task
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full "
                    type="text"
                    id="name"
                    name="task.name"
                    v-model="task.name"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="client_id"
                >
                    Client ID:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    type="text"
                    id="client_id"
                    name="task.client_id"
                    v-model="task.client_id"
                    @keydown="disableMessage"
                    required
                >
            </div>

            <div class="my-1 flex">
                <div class="flex-grow mr-4">
                    <label
                        class="font-bold text-sm"
                        for="task_date"
                    >
                        Task Date:
                    </label>
                    <datepicker
                        v-model="task.task_date"
                        :lower-limit="new Date()"
                        placeholder="click here to choose a date"
                        id="task_date"
                        name="task.task_date"
                        class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                        @keydown="disableMessage"
                        required
                    />
                </div>

                <div class="flex-grow">
                    <label
                        class="font-bold text-sm"
                        for="type"
                    >
                        Type:
                    </label>
                    <select
                        id="type"
                        class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                        v-model="task.type"
                        name="task.type"
                        required
                    >
                        <option disabled>Select type</option>
                        <option value="0">0 - upgrade</option>
                        <option value="1">1 - intern</option>
                        <option value="2">2 - request</option>
                    </select>
                </div>
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="details"
                >
                    Details:
                </label>
                <textarea
                    placeholder="write details.."
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    type="text"
                    id="details"
                    name="task.details"
                    v-model="task.details"
                    @keydown="disableMessage"
                ></textarea>
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="invoiced_date"
                >
                    Invoice Date:
                </label>
                <datepicker
                    v-model="task.invoiced_date"
                    :lower-limit="new Date()"
                    placeholder="click here to choose a date"
                    id="invoiced_date"
                    name="task.invoiced_date"
                    class="block rounded p-0 shadow-inner  border-gray-300 w-1/2"
                    @keydown="disableMessage"
                    required
                />
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="programming_worked_minutes"
                >
                    Programming Worked Minutes:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    type="text"
                    id="programming_worked_minutes"
                    name="task.programming_worked_minutes"
                    v-model="task.programming_worked_minutes"
                    @keydown="disableMessage"
                >
            </div>

            <div class="my-1">
                <label
                    class="font-bold text-sm"
                    for="support_worked_minutes"
                >
                    Support Worked Minutes:
                </label>
                <input
                    class="block rounded p-0 shadow-inner  border-gray-300 w-full"
                    type="text"
                    id="support_worked_minutes"
                    name="task.support_worked_minutes"
                    v-model="task.support_worked_minutes"
                    @keydown="disableMessage"
                >
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
    name: "addTask",
    components: {
        Datepicker
    },
    data() {
        return {
            task: {
                name: null,
                client_id: null,
                task_date: null,
                type: null,
                details: null,
                invoiced_date: null,
                programming_worked_minutes: null,
                support_worked_minutes: null,
            },

            message: "",
            visual_spinner: false,
        }
    },
    methods: {
        submit() {
            this.message = '';
            this.visual_spinner = true;
            axios.post('/create-task', {
                name: this.task.name,
                client_id: this.task.client_id,
                task_date: this.formatDate(this.task.task_date),
                type: this.task.type,
                details: this.task.details,
                invoiced_date: this.formatDate(this.task.invoiced_date),
                programming_worked_minutes: this.task.programming_worked_minutes,
                support_worked_minutes: this.task.support_worked_minutes,

            })
                .then((response) => {
                    this.onSuccess();
                })
                .catch((error) => {
                    console.log(error);
                    this.onFail();
                });
        },
        onSuccess() {
            this.visual_spinner = false;
            this.message = '<p>Great! Task added successfully!</p>';

            this.resetFields();

        },
        onFail() {
            this.visual_spinner = false;
            this.message = '<p class="text-red-500">Something went wrong!</p>';

        },
        disableMessage() {
            this.message = ""
        },
        resetFields() {
            this.task.name = null;
            this.task.client_id = null
            this.task.task_date = null
            this.task.type = null
            this.task.details = null
            this.task.invoiced_date = null
            this.task.programming_worked_minutes = null
            this.task.support_worked_minutes = null
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

<style scoped>

</style>
