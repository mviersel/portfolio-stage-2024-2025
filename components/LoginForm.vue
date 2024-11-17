<template>
    <section class="bg-gray-500">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <!-- Login title -->
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <!-- Login form -->
                    <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6">
                        <!-- Email input field -->
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">Your
                                email</label>
                            <input v-model="email" type="email" placeholder="name@email.com" required
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <!-- Password input field -->
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="password" type="password" required placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <!-- Submit button -->
                        <button type="submit"
                            class="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                            in</button>
                        <!-- Error message -->
                        <p v-if="error" class="text-white">{{ error }}</p>
                        <!-- Register link -->
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="/register"
                                class="font-medium text-white hover:underline dark:text-primary-500">Register
                                yourself</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '~/services/AuthService';
import { useRouter } from 'vue-router';

// Reactive variables
const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

// Handle login form submission
const handleLogin = async () => {
    try {
        // Login user using AuthService
        await login(email.value, password.value);
        // Redirect to home page after successful login
        router.push('/');
    } catch (err) {
        // Display error message if login fails
        error.value = err.message;
    }
};
</script>