<template>
    <div
        class="mb-5 break-words text-left p-5 border border-gray-300 shadow rounded-lg bg-gray-100 scrollbar scrollbar-track-blue-hrBg scrollbar-thumb-blue-darkGray">
        <div class=" flex justify-between">
            <div class="text-main text-lg">Task Description</div>
            <button
                @click="$emit('close')"
                class="mr-3 bg-blue-dark bg-opacity-80 text-white text-sm px-2   rounded border border-blue-dark font-semibold hover:bg-gray-200 hover:text-gray-800">
                Close
            </button>
        </div>
        <div v-if="task_to_show == ''" class="text-blue-dark text-sm mt-3">
            click on <span class="italic">details</span> to show description
        </div>
        <div v-else>
            <ul class="mt-3">

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Completed date:</h2>
                    <p v-if="!isFieldEmpty(task_to_show.closed_date)" class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ task_to_show.closed_date }}
                    </p>
                    <p v-else class=" pl-2 text-sm text-second text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner" >
                        Task not completed
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Name:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50 shadow-inner">
                        {{ task_to_show.name }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Client id:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner">
                        {{ task_to_show.client_id }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">
                        Task Date:
                        <span v-if="parseInt(dateDiffInDays(task_to_show.task_date)) > 0" class=" pl-1.5 text-xs text-blue-dark text-opacity-80">
                        ..{{ dateDiffInDays(task_to_show.task_date) }} days left
                    </span>
                    </h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner">
                        {{ task_to_show.task_date }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Task type:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner">
                        {{ task_to_show.type }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Details:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner"
                       v-if="!isFieldEmpty(task_to_show.details)"
                    >
                        {{ task_to_show.details }}
                    </p>
                    <p class=" pl-2 text-sm text-second text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner"
                       v-else="isFieldEmpty(task_to_show.details)"
                    >
                        empty
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Invoice Date:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner"
                       v-if="!isFieldEmpty(task_to_show.invoiced_date)"
                    >
                        {{ task_to_show.invoiced_date }}
                    </p>
                    <p class=" pl-2 text-sm text-second text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner"
                       v-else="isFieldEmpty(task_to_show.invoiced_date)"
                    >
                        empty
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Programming worked minutes:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner"
                       v-if="!isFieldEmpty(task_to_show.programming_worked_minutes)"
                    >
                        {{ task_to_show.programming_worked_minutes }}
                    </p>
                    <p class=" pl-2 text-sm text-second text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner"
                       v-else="isFieldEmpty(task_to_show.programming_worked_minutes)"
                    >
                        empty
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm">Support worked minutes:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner"
                       v-if="!isFieldEmpty(task_to_show.support_worked_minutes)"
                    >
                        {{ task_to_show.support_worked_minutes }}
                    </p>
                    <p class=" pl-2 text-sm text-second text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner"
                       v-else="isFieldEmpty(task_to_show.support_worked_minutes)"
                    >
                        empty
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm ">Created at:</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner">
                        {{ task_to_show.created_at }}
                    </p>
                </li>

                <li class="mt-3">
                    <h2 class="text-blue-dark text-sm ">Last Update</h2>
                    <p class="font-semibold pl-2  text-blue-dark  bg-gray-200 bg-opacity-50  shadow-inner">
                        {{ task_to_show.updated_at }}
                    </p>
                </li>

            </ul>

            <div class="mt-7 text-blue-dark text-opacity-60 text-xs">
                task type: 0-upgrade, 1-intern, 2-request
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "showTask",
    props: ['task'],
    data() {
        return {
            task_to_show: this.task,

        }
    },
    mounted() {

    },
    watch: {
        task(newTask) {
            this.task_to_show = this.task;

        }
    },
    methods: {
        isFieldEmpty(field) {
            if (field == null) {
                return 1;
            }
        },
        dateDiffInDays(date) {
            const _MS_PER_DAY = 1000 * 60 * 60 * 24;

            date = new Date(date);
            let dateToday = new Date();

            const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
            const utc2 = Date.UTC(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());

            return Math.floor(((utc1 - utc2) / _MS_PER_DAY) + 1);

        },
    }
}
</script>

<style scoped>

</style>
