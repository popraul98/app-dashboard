<template>
    <div
        class=" break-words text-left p-5 border border-gray-300 shadow rounded-lg bg-gray-100 scrollbar scrollbar-track-blue-hrBg scrollbar-thumb-blue-darkGray">
        <div class=" flex justify-between">
            <div class="text-main text-lg">Edit Task</div>
            <button
                @click="$emit('close')"
                class="mr-3 bg-blue-dark bg-opacity-80 text-white text-sm px-2   rounded border border-blue-dark font-semibold hover:bg-gray-200 hover:text-gray-800">
                Close
            </button>
        </div>
        <div v-if="task_to_edit == ''" class="text-green-500 text-sm mt-3">
            Task <span class="italic">updated</span> successfully!
        </div>
        <div v-else>
            <form @submit.prevent="updateTasks">
                <div class="text-right text-blue-dark mr-6 mt-3 text-xs text-opacity-70 ">
                    * - field required
                </div>
                <ul class="mt-3">

                    <li class="mt-2">
                        <label class="text-blue-dark text-sm">Name:</label>
                        <input class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                               v-model="task_to_edit.name"
                               required>

                    </li>

                    <li class="mt-2">
                        <label class="text-blue-dark text-sm">Client id:</label>
                        <input class="pl-2 text-blue-dark bg-white border rounded w-full border-gray-300"
                               v-model="task_to_edit.client_id"
                               required>
                    </li>

                    <!--                    not editing-->
                    <li class="mt-2">
                        <h2 class="text-blue-dark text-sm">Task Date:</h2>
                        <p class=" pl-2 text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner">
                            {{ task_to_edit.task_date }}
                        </p>
                    </li>

                    <li class="mt-2">
                        <label class="text-blue-dark text-sm"
                               for="type">
                            Task type:
                        </label>
                        <select
                            id="type"
                            class="block rounded p-0 shadow-inner  border-gray-300 w-1/2"
                            v-model="task_to_edit.type"
                            name="task.type"
                            required
                        >
                            <option disabled value="">Select type</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </li>

                    <li class="mt-2">
                        <label class="text-blue-dark text-sm">Details:</label>
                        <textarea class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                                  placeholder="empty"
                                  v-model="task_to_edit.details">
                    </textarea>
                    </li>

                    <li>
                        <label
                            class="text-blue-dark text-sm"
                            for="invoice_date"
                        >
                            Invoice Date:
                        </label>
                        <datepicker
                            placeholder="click here to choose a date"
                            v-model="task_to_edit.invoiced_date"
                            :lower-limit="new Date()"
                            id="invoice_date"
                            name="task.invoice_date"
                            class="block rounded p-0 shadow-inner  border-gray-300 w-1/2"
                            required
                        />
                    </li>

                    <li class="mt-2">
                        <label class="text-blue-dark text-sm">Programming worked minutes:</label>
                        <input class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                               placeholder="empty"
                               v-model="task_to_edit.programming_worked_minutes">
                    </li>

                    <li class="mt-2">
                        <label class="text-blue-dark text-sm">Support worked minutes:</label>
                        <input class="pl-2 text-blue-dark  bg-white border rounded w-full border-gray-300"
                               placeholder="empty"
                               v-model="task_to_edit.support_worked_minutes">
                    </li>

                    <li class="mt-2">
                        <h2 class="text-blue-dark text-sm">Created at:</h2>
                        <p class="pl-2 text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner">
                            {{ task_to_edit.created_at }}
                        </p>
                    </li>

                </ul>
                <button
                    @click="updateTask(task.id)"
                    class="bg-blue-dark bg-opacity-90 text-white px-3.5 py-1.5 mt-5 rounded font-semibold">
                    Update Task
                    <div v-if="visual_spinner">
                        <i class="fa fa-spinner fa-spin" style="font-size:18px"></i>
                    </div>
                </button>


            </form>

            <div>

            </div>
            <div class="mt-7 text-blue-dark text-opacity-60 text-xs">
                task type: 0-upgrade, 1-intern, 2-request
            </div>
        </div>

    </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import {ref} from 'vue'


export default {
    name: "modalEditTask",
    props: ['task'],
    components: {
        Datepicker,
    },
    data() {
        return {
            task_to_edit: {
                name: this.task.name,
                client_id: this.task.client_id,
                task_date: this.formatDate(this.task.task_date),
                type: this.task.type,
                details: this.task.details,
                invoiced_date: new Date(this.task.invoiced_date),
                programming_worked_minutes: this.task.programming_worked_minutes,
                support_worked_minutes: this.task.support_worked_minutes,
            },

            visual_spinner: false,

        }
    },
    mounted() {

    },
    watch: {
        task(newTask) {
            this.task_to_edit = this.task;

        }
    },
    methods: {
        isFieldEmpty(field) {
            if (field == null) {
                return 1;
            }
        },
        updateTask(id) {
            axios.post('/update-task', {
                id: id,
                name: this.task_to_edit.name,
                client_id: this.task_to_edit.client_id,
                task_date: this.formatDate(this.task_to_edit.task_date),
                type: this.task_to_edit.type,
                details: this.task_to_edit.details,
                invoiced_date: this.formatDate(this.task_to_edit.invoiced_date),
                programming_worked_minutes: this.task_to_edit.programming_worked_minutes,
                support_worked_minutes: this.task_to_edit.support_worked_minutes,
            })
                .then(response => {
                    this.onSuccess();
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        onSuccess() {
            this.visual_spinner = false;

            this.resetFields();
            this.$emit('if_updated_successfully');
            this.task_to_edit = '';
        },
        resetFields() {
            this.task_to_edit.name = null;
            this.task_to_edit.client_id = null
            this.task_to_edit.task_date = null
            this.task_to_edit.type = null
            this.task_to_edit.details = null
            this.task_to_edit.invoiced_date = null
            this.task_to_edit.programming_worked_minutes = null
            this.task_to_edit.support_worked_minutes = null
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

