<template>
    <div class="mt-5 w-80 transform overflow-hidden rounded-lg bg-siteMain-100 shadow-md duration-300 hover:shadow-lg">
        <!-- Product image -->
        <img class="h-48 w-full object-cover object-center" :src="`${product.image}`" alt="Product Image" />
        <div class="p-4">
            <!-- Product name -->
            <h2 class="mb-2 text-lg font-medium text-siteMain-200">{{ product.title }}</h2>
            <!-- Product description -->
            <p class="mb-2 text-base text-siteMain-200 opacity-75">{{ product.description }}</p>
            <div class="flex items-center">
                <!-- Product price -->
                <p class="mr-2 text-lg font-semibold text-white">{{ product.newPrice }}</p>
                <!-- Product original price (with line-through) -->
                <p class="text-base  font-medium line-through text-gray-400">{{ product.oldPrice }}</p>
                <!-- Product discount -->
                <p class="ml-auto text-base font-medium text-green-500">Spulleke denk!</p>
            </div>
            <!-- Buy now button -->
            <div>
                <NuxtLink :to="`/products/${product.id}`" :product="product.id">
                    <button
                        class="w-full bg-siteMain-200 rounded-md text-center my-2 hover:bg-siteMain-300 hover:text-white">Buy
                        now</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
// Define a prop called 'product' to receive the product data from the parent component
const { product } = defineProps(['product'])
</script>

<style scoped></style>