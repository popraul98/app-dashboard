<template>
    <div class="text-left">

        <h2 class="title-box pb-1">
            <i class="fa fa-tasks"></i>
            Tasks for today:
        </h2>

        <div class="divide">

            <div class="text-second"
                 v-if="tasksNotFound(tasks_for_today)==1">
                0 tasks
            </div>

            <div class="text-main truncate"
                 v-for="task in tasks_for_today"
            >
                <i class="arrow-color  fas fa-angle-right"></i>
                {{ task.name }}
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "TodayTasks",
    props: ['tasks'],
    data() {
        return {
            tasks_for_today: this.tasks,
        }
    },
    mounted() {
        console.log('TodayTasks mounted');
    },
    watch: {
        tasks() {
            console.log('NEW update tasks TODAY')

            this.tasks_for_today = this.tasks;
        }
    },
    methods: {
        tasksNotFound(obj) {
            if (obj === undefined || obj.length == 0) {
                return 1;
            }
            return 0;
        }
        // getTasksForToday(tasks) {
        //     const todayDate = new Date();
        //
        //     for (let i = 0; i < tasks.length; i++) {
        //         let taskDate = new Date(tasks[i].task_date);
        //         if (this.sameDay(todayDate, taskDate)) {
        //             this.tasks_for_today.push(tasks[i]);
        //         }
        //     }
        //     JSON.stringify(this.tasks_for_today);
        // },
        // sameDay(d1, d2) {
        //     return d1.getFullYear() === d2.getFullYear() &&
        //         d1.getMonth() === d2.getMonth() &&
        //         d1.getDate() === d2.getDate();
        // }
        // ,
    }
}
</script>
