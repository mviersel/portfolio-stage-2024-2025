<template>
    <div class="bg-gray-100 py-16 px-6 sm:px-8 lg:px-16">
        <!-- Hero Section -->
        <section class="relative bg-blue-600 text-white rounded-lg overflow-hidden">
            <div class="absolute inset-0">
                <img :src="heroImage" alt="Project Hero" class="object-cover w-full h-full opacity-40" />
            </div>

            <div class="relative container mx-auto flex flex-col sm:flex-row items-center justify-between py-12 px-6">
                <div class="max-w-lg text-center sm:text-left">
                    <h1 class="text-5xl font-extrabold leading-tight mb-4">{{ title }}</h1>
                    <p class="text-xl mb-6">{{ company }}</p>
                </div>

                <div class="mt-6 sm:mt-0">
                    <img :src="projectImage" alt="Project Image" class="rounded-lg shadow-lg w-full sm:w-96" />
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="container mx-auto mt-12">
            <slot></slot> <!-- This is where page content will go, like project details -->
        </section>
    </div>
</template>

<script setup>
// Define props for dynamic content
defineProps({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    heroImage: {
        type: String,
        required: true
    },
    projectImage: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
/* You can add additional custom styles if needed */
</style>