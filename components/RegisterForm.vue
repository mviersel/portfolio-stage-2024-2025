<template>
    <!-- Registration section -->
    <section class="bg-gray-50 dark:bg-gray-500">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <!-- Registration title -->
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <!-- Registration form -->
                    <form class="space-y-4 md:space-y-6" @submit.prevent="handleRegister">
                        <!-- Email input field -->
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input v-model="email" type="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required>
                        </div>
                        <!-- Password input field -->
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="password" type="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                        <!-- Error message -->
                        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
                        <!-- Submit button -->
                        <button type="submit"
                            class="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                            an account</button>
                        <!-- Login link -->
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="/login"
                                class="font-medium text-white hover:underline dark:text-primary-500">Login
                                here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { register } from '~/services/AuthService';
import { useRouter } from 'vue-router';

// Reactive variables
const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

// Handle registration form submission
const handleRegister = async () => {
    // Validate password length
    if (password.value.length < 6) {
        error.value = 'Password must be at least 6 characters long';
        return;
    }
    try {
        // Register user using AuthService
        await register(email.value, password.value);
        // Redirect to home page after successful registration
        router.push('/');
    } catch (err) {
        // Display error message if registration fails
        error.value = err.message;
    }
};
</script>