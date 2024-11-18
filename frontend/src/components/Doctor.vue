<script setup lang="ts">
import {onMounted, ref} from "vue"
const data = ref("")
onMounted(async() => {
    data.value = await fetch("http://localhost:3000/doctor").then(value => value.json())
})
</script>
<template>
    <div>
        {{ data }}
    </div>
</template>