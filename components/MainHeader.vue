<template>
    <header class="sticky top-0 z-50">
        <!-- PC header -->
        <div
            class='hidden lg:block py-4 px-4 sm:px-10 bg-siteMain-100 font-sans min-h-[70px] tracking-wide sticky z-50 text-white border-b-4 border-siteMain-300 top-0'>
            <div class='flex flex-wrap items-center gap-4 w-full'>
                <!-- Logo -->
                <NuxtLink to="/"><img src="../assets/img/Spulleke-logo-transparent.png" alt="logo"
                        class='w-40 hover:scale-110 duration-150 transition' />
                </NuxtLink>
                <div class="border-l border-siteMain-200 h-6 max-lg:hidden opacity-45"></div>
                <!-- Menu items -->
                <div class="hidden lg:block">
                    <ul class='flex gap-x-8 max-lg:space-y-2 items-center'>
                        <li class='max-lg:py-3'>
                            <NuxtLink to="/" class='hover:text-siteMain-300 block font-medium text-[15px]'>Home
                            </NuxtLink>
                        </li>
                        <li class='max-lg:py-3'>
                            <NuxtLink to="/products" class='hover:text-siteMain-300 block font-medium text-[15px]'>
                                Products
                            </NuxtLink>
                        </li>
                        <li class='max-lg:py-3'>
                            <NuxtLink to="/account" class='hover:text-siteMain-300 block font-medium text-[15px]'>
                                Account
                            </NuxtLink>
                        </li>
                        <!-- Search bar -->
                        <li class='max-lg:py-3'>
                            <input type="text" class="block rounded-lg px-2 py-1 w-80 text-black bg-siteMain-200"
                                placeholder="Zoeken naar..">
                        </li>
                    </ul>
                </div>

                <div class='flex items-center ml-auto space-x-6'>
                    <!-- Check if the user is logged in. If yes, then show user -->
                    <div v-if="user" class="flex items-center gap-6">
                        <p class="font-light">Welcome, {{ user.email }}</p>
                        <button @click="handleLogout"
                            class='hover:text-siteMain-300 block font-medium text-[15px]'>Logout</button>
                    </div>
                    <!-- Else, show login/register button -->
                    <div v-else>
                        <p class="flex gap-2 items-center"><a href="/login"
                                class='hover:text-siteMain-300 block font-medium text-[15px]'>Login</a> or <a
                                href="/register"
                                class='hover:text-siteMain-300 block font-medium text-[15px]'>Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile header -->
        <div class="lg:hidden bg-siteMain-100 w-full sticky top-0">
            <div>
                <!-- Logo -->
                <div class="border-b-4 border-siteMain-300 pt-2">
                    <NuxtLink to="/"><img src="../assets/img/Spulleke-logo-transparent.png" alt="logo"
                            class=" w-[50%] mx-auto py-2" />
                    </NuxtLink>
                </div>
                <!-- Search bar -->
                <div class=" pt-4 w-full flex justify-center ">
                    <input type="searchInput" name="" id="" placeholder="Zoeken naar..."
                        class="h-10 px-2 rounded-lg block w-full mx-2 bg-siteMain-200">
                </div>
                <!-- Menu items -->
                <div class="grid grid-cols-3 grid-container h-14 text-white">
                    <NuxtLink to="/">
                        <div>Home</div>
                    </NuxtLink>
                    <NuxtLink to="/products">
                        <div>Product</div>
                    </NuxtLink>
                    <NuxtLink to="/account">
                        <div>Account</div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { logout } from '~/services/AuthService';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Reactive variable to hold the current user
const user = ref(null);

// Get the Firebase authentication instance
const auth = getAuth();

// Function to handle the logout process
const handleLogout = async () => {
    await logout(); // Call the logout function from the AuthService
    user.value = null; // After logout, set the user to null
};

// On component mount, listen for changes in the authentication state
onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser; // Whenever the user state changes, update the user variable
    });
});
</script>