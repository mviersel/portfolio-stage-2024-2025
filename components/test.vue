<template>
    <div>
        <form @submit.prevent="signUp">
            <input v-model="email" type="email" placeholder="Email" required>
            <input v-model="password" type="password" placeholder="Password" required>
            <input v-model="displayName" type="text" placeholder="Display Name" required>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            displayName: ''
        }
    },
    methods: {
        async signUp() {
            try {
                const auth = this.$auth;
                const firestore = this.$firestore;

                const userCredential = await auth.createUserWithEmailAndPassword(this.email, this.password);
                const user = userCredential.user;
                const uid = user.uid;

                // Save user data in Firestore
                await firestore.collection('users').doc(uid).set({
                    profile: {
                        name: this.displayName,
                        email: this.email
                    },
                    data: {
                        // Initialize with any user-specific data
                    }
                });

                // Optionally update the user's display name
                await user.updateProfile({
                    displayName: this.displayName
                });

                console.log('User signed up and data linked:', user);
            } catch (error) {
                console.error('Error signing up', error);
            }
        }
    }
}
</script>