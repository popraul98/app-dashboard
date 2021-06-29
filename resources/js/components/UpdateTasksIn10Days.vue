<template>
    <div class="text-left">

        <h2 class=" title-box pb-1">
            <i class="fa fa-tasks"></i>
            Update tasks in 10 days:
        </h2>

        <div class="divide">

            <div class="text-second"
                 v-if="tasksNotFound(update_tasks_in10_days)==1"
            >
                0 update tasks for next 10 days
            </div>

            <ul v-for="task in update_tasks_in10_days">

                <li class="text-main flex items-center justify-between">
                    <div class="flex justify-between items-center truncate">
                        <i class="arrow-color fas fa-angle-right"></i>
                        <p class=" pl-1">
                            {{ task.name }}
                        </p>
                    </div>

                    <div
                        class="font-normal text-opacity-80 text-xs italic pl-1 leading-tight flex-shrink-0 text-blue-dark"
                        v-if="dateDiffInDays(task.task_date)!=1"
                    >
                        ..{{ dateDiffInDays(task.task_date) }} days left
                    </div>

                    <div
                        class="font-normal text-opacity-80 text-xs italic pl-1 leading-tight flex-shrink-0 text-red-dark"
                        v-else="dateDiffInDays(task.task_date)==1"
                    >
                        ..last day
                    </div>

                </li>

            </ul>
        </div>
    </div>

</template>

<script>
export default {
    name: "UpdateTasksIn10Days",
    props: ['tasks'],
    data() {
        return {
            update_tasks_in10_days: this.tasks,

        }
    },
    mounted() {
        console.log('UpdateTaskIn10Days mounted')

    },
    watch: {
        tasks(newTasks) {

            console.log('NEW update tasks 10')

            this.update_tasks_in10_days = this.tasks;


        }
    },
    methods: {
        dateDiffInDays(date) {
            const _MS_PER_DAY = 1000 * 60 * 60 * 24;

            date = new Date(date);
            let dateToday = new Date();

            const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
            const utc2 = Date.UTC(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());

            return Math.floor(((utc1 - utc2) / _MS_PER_DAY) + 1);

        },

        tasksNotFound(obj) {
            if (obj === undefined || obj.length == 0) {
                return 1;
            }
            return 0;
        },

    }

}
</script>
