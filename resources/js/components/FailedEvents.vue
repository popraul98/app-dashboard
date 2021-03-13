<template>
    <div class="text-left">

        <h2 class="title-box bg-blue-50 sticky top-0 pt-2">
            <i class="far fa-calendar-times"></i>
            Failed events - latest ({{ failed_events.length }})
        </h2>

        <div class="divide">
            <div
                class="text-second"
                v-if="eventsNotFound(failed_events)==1"
            >
                0 failed events
            </div>

            <div v-for="event in failed_events">

                <div class="text-main ">
                    <i class="arrow-color fas fa-angle-right"></i>
                    <span class="bg-red-400 text-white p-0.5 rounded ml-1">
                        {{ event.description }}
                    </span>
                    <p class="truncate text-second">
                        type Event: <span class="text-red-dark"> {{ event.type }}</span>
                        event Date: <span class="text-red-dark">{{ event.event_date }}</span>
                        info: <span class="text-red-dark">{{ event.info }}</span>
                    </p>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "FailedEvents",
    props: ['events'],
    data() {
        return {
            failed_events: this.events,
        }
    },
    mounted() {
        console.log('FailedEvents mounted')
    },
    methods: {
        eventsNotFound(obj) {
            if (obj === undefined || obj.length == 0) {
                return 1;
            }
            return 0;
        }
        // getFailedEvents(events) {
        //
        //     for (let i = 1; i < events.length; i++) {
        //
        //         if (this.isEventFailed(events[i])) {
        //             this.failed_events.push(events[i]);
        //         }
        //     }
        //     JSON.stringify(this.failed_events);
        // },
        // isEventFailed(event) {
        //     if (event.status == 0) {
        //         return 1;
        //     }
        //     return 0;
        // },
        // sortEventsAfterDate(events) {
        //     events.sort(function (a, b) {
        //         return new Date(b.event_date) - new Date(a.event_date);
        //     });
        //     return events;
        // },
    }
}
</script>
