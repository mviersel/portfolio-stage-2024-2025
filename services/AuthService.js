// services/AuthService.js

import { useNuxtApp } from '#app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const register = async (email, password) => {
    const { $auth } = useNuxtApp();
    try {
        const userCredential = await createUserWithEmailAndPassword($auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

export const login = async (email, password) => {
    const { $auth } = useNuxtApp();
    try {
        const userCredential = await signInWithEmailAndPassword($auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

export const logout = async () => {
    const { $auth } = useNuxtApp();
    try {
        await signOut($auth);
    } catch (error) {
        console.error("Error logging out user:", error);
        throw error;
    }
};
