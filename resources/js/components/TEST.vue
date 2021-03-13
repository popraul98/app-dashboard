<template>
    <div class="text-left">

        <h2 class=" font-medium text-lg pb-1"><i class="fa fa-tasks"></i> Update tasks in 10 days:</h2>
        <div class="divide-y divide-blue-hrBg">
            <div v-for="test in tests">
                <div><i class="text-green-blue fas fa-angle-right"></i> {{ test }}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TEST",
    props: ['tests'],
    data(){
        return{
            // tests:['raul','asus','samsung']
        }
    }
}
</script>
