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

            </div>
        </div>

        <!-- Mobile header -->
        <div class="lg:hidden bg-siteMain-100 w-full sticky top-0">

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