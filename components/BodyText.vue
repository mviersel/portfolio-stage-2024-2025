<template>
    <div class="px-4 sm:px-32 lg:px-28 xl:px-24 my-5">
        <p class="text-gray-600">{{ alinea }}</p>
    </div>
</template>

<script setup>
defineProps({
    alinea: {
        type: String
    }
})
</script>

<style lang="scss" scoped></style>