
// Import necessary functions from the Nuxt app and Firebase Firestore
import { useNuxtApp } from "#app";
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

// Define a custom composable function called useFirestore
const useFirestore = () => {
    // Get the Firestore instance from the Nuxt app
    const { $db } = useNuxtApp();

    // Reference to the 'products' collection in Firestore
    const collectionRef = collection($db, "products");

    // Function to get all items from the 'products' collection
    const getItems = async () => {
        const querySnapshot = await getDocs(collectionRef);
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };

    // Function to get a single item by its ID from the 'products' collection
    const getItemById = async (id) => {
        const docRef = doc($db, "products", id);
        const docSnapshot = await getDoc(docRef);
        return { id: docSnapshot.id, ...docSnapshot.data() };
    }

    // Function to add a new item to the 'products' collection
    const addItem = async (product) => {
        const docRef = await addDoc(collectionRef, product);
        return docRef.id;
    };

    // Function to update an existing item in the 'products' collection
    const updateItem = async (id, updatedProduct) => {
        const docRef = doc($db, "products", id);
        await updateDoc(docRef, updatedProduct);
    };

    // Function to delete an item from the 'products' collection
    const deleteItem = async (id) => {
        const docRef = doc($db, "products", id);
        await deleteDoc(docRef);
    };

    // Return an object containing all the defined functions
    return {
        getItems,
        addItem,
        updateItem,
        deleteItem,
    };
};

// Export the useFirestore composable function
export default useFirestore;