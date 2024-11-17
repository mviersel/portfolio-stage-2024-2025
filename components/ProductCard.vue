<template>
    <!-- Product card component -->
    <div class="mt-5 w-80 transform overflow-hidden rounded-lg bg-siteMain-100 shadow-md duration-300 hover:shadow-lg">
        <!-- Product image -->
        <img class="h-48 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Product Image" />
        <div class="p-4">
            <!-- Product name -->
            <h2 class="mb-2 text-lg font-medium text-siteMain-200">Product Name</h2>
            <!-- Product description -->
            <p class="mb-2 text-base text-siteMain-200 opacity-75">Product description goes here.</p>
            <div class="flex items-center">
                <!-- Product price -->
                <p class="mr-2 text-lg font-semibold text-white">€53,-</p>
                <!-- Product original price (with line-through) -->
                <p class="text-base  font-medium line-through text-gray-400">€74,99</p>
                <!-- Product discount -->
                <p class="ml-auto text-base font-medium text-green-500">30% off</p>
            </div>
            <!-- Buy now button -->
            <div>
                <button
                    class="w-full bg-siteMain-200 rounded-md text-center my-2 hover:bg-siteMain-300 hover:text-white">Buy
                    now</button>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped></style>