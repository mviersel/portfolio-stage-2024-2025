<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String
    },
    content: {
        type: String
    }
})
</script>

<style lang="scss" scoped></style>