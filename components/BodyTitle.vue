<template>
    <div class="flex justify-center py-12 text-2xl">
        <H1>{{ stap }}</H1>
        <span class="w-10 h-0.5 bg-gray-300 mt-5 mx-5"></span>
        <H1>{{ fase }}</H1>
    </div>
</template>

<script setup>
defineProps({
    stap: {
        type: String
    },
    fase: {
        type: String
    }
})
</script>

<style lang="scss" scoped></style>