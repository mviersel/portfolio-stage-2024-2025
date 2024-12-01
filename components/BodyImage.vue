<template>
    <!-- <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="flex-1 p-4 text-center md:text-left"></div>
<div class="grow">{{ content }}</div>
<div class="grow"><img class="" :src="image"></div>
    </div> -->
    <div class="px-4 sm:px-32 lg:px-28 xl:px-24 my-5">
        <div class="flex flex-col lg:flex-row items-center justify-between">

            <!-- Image Section -->
            <div class="flex-1 p-4">
                <img :src="image" alt="Placeholder" class="w-full h-auto object-cover">
            </div>
        </div>
    </div>


</template>

<script setup>
defineProps({
    image: {
        type: String
    }
})
</script>

<style lang="scss" scoped></style>