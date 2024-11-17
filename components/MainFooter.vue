<template>
    <!-- Footer section -->
    <footer class="bg-siteMain-100 mt-5">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <!-- Logo link -->
                <NuxtLink to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="../assets/img/Spulleke-logo-transparent.png" class="h-8" alt="spullekes Logo" />
                </NuxtLink>
                <!-- Navigation links -->
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                    <li>
                        <NuxtLink to="/" class="hover:underline me-4 md:me-6">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:underline me-4 md:me-6">Privacy Policy</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:underline me-4 md:me-6">Licensing</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:underline me-4 md:me-6">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
            <!-- Divider line -->
            <hr class="my-6 border-siteMain-300 sm:mx-auto lg:my-8" />
            <!-- Copyright notice -->
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024
                <NuxtLink to="/" class="hover:underline">Spullekesnet</NuxtLink>. All Rights Reserved.
            </span>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>