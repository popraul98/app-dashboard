<template>
    <div class="">
        <div class="ml-10">
            <img class=""
                 src="/images/logo.png"
                 alt="logo-img"
            >
            <div>
                <p class="text-lg text-blue-dark font-medium text-opacity-90">{{ date }}</p>
                <p class="text-4xl text-blue-dark font-semibold text-opacity-90">{{ time }}</p>
            </div>
            <div class="items-center">

                <a href="/logout"
                   class="text-blue-dark hover:underline text-sm"
                >
                    <i class="fas fa-sign-out-alt"></i>
                    Logout
                </a>
            </div>

        </div>

    </div>
</template>

<script>

export default {
    name: "LogoTime",
    props: ['timestamp'],
    data() {
        return {
            date: "",
            time: "",
        }
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    mounted() {
        console.log('LogoTime mounted')
    },
    methods: {
        getNow: function () {

            const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

            const today = new Date();
            // const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            this.time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
            this.date = today.toLocaleDateString("en-US", options);
        }
    }
}
</script>
