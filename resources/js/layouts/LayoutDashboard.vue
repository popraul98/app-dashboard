<template>
    <div>
        <nav class="relative flex  bg-blue-darkGray text-white py-3 pl-10">
            <div class="right-0 mr-10">
                <a href="/logout"
                   class="border rounded-lg hover:bg-white hover:text-black px-2 py-1">
                    Dashboard / Logout
                </a>
            </div>

        </nav>
        <div>
            <slot></slot>
        </div>
    </div>


</template>

<script>


export default {
    name: "LayoutDashboard",
    components: {},
    mounted() {
        console.log('mounted layout dashboard')
    },
}
</script>
