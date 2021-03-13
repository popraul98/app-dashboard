<template>
    <div class="grid grid-cols-2 grid-flow-col gap-1 items-center">

        <div class="h-screen  pt-56 pl-20 ">
            <h1 class="antialiased  font-semibold text-4xl text-blue-dark text-opacity-80">
                WELCOME TO
            </h1>
            <h1 class="antialiased  font-semibold text-6xl text-blue-dark text-opacity-90">
                DASHBOARD CONTROL
            </h1>
        </div>
        <div class="flex justify-center text-center mr-10">
            <logo-time></logo-time>
        </div>

    </div>

</template>

<script>
import LogoTime from "../components/LogoTime";

export default {
    name: "addClient",
    components: {LogoTime}
}
</script>

<style scoped>

</style>
