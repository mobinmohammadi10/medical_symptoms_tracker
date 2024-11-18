<script setup lang="ts">
    import Doctor from "./Doctor.vue"
    import Patient from "./Patient.vue"
    import { useRoute} from "vue-router"


    const route = useRoute()
</script>

<template>
    <header>
        <h1>Hi I am home page component</h1>
    </header>
    <body>
        <Doctor v-if="route.name === 'doctor'"/>
        <Patient v-else-if="route.name === 'patient'"/>
    </body>
</template>