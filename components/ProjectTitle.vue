<template>
    <div class="text-gray-900 body-font max-w-screen-xl mx-auto px-4">
        <div class="container mx-auto flex md:px-24 md:pt-10 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1
                    class="text-2xl leading-9 tracking-tight mb-3 text-gray  sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                    {{ title }}
                </h1>
                <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed">
                    {{ subtitle }}
                </p>
            </div>
            <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <img class="object-cover object-center rounded" alt="hero"
                    :src="titleimage">
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    titleimage: {
        type: String
    }
})
</script>

<style lang="scss" scoped></style>