<template>
    <div class="">
        <!-- Grid layout for displaying products -->
        <div class=" md:grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5">
            <!-- Loop through products and display each one -->
            <div v-for="product in products" :key="product.id">
                <div class="border-b-2 p-4 m-auto pb-2 overflow-hidden md:w-80">
                    <!-- Product image -->
                    <img class="h-48 w-full object-cover object-center" :src="`${product.image}`" alt="Product Image" />
                    <!-- Product details -->
                    <div class="overview-border">{{ product.title }}</div>
                    <div class="overview-border">{{ product.description }}</div>
                    <div class="overview-border">{{ product.oldPrice }}</div>
                    <div class="overview-border">{{ product.newPrice }}</div>
                    <div class="overview-border">{{ product.image }}</div>
                    <!-- Edit and delete buttons -->
                    <div class="flex justify-center space-x-8 pt-4">
                        <button @click="editItem(product)"
                            class="middle none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true">Bewerken</button>
                        <button @click="removeItem(product.id)"
                            class="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true">Verwijderen</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit product overlay -->
    <div id="editForm" style="display: none; ">
        <div class="fixed top-0 left-0 bg-white z-10 w-screen h-screen flex justify-center items-center rounded-md">
            <!-- Edit product form -->
            <div class="m-5 w-96">
                <!-- Form fields -->
                <p class="overview-border font-bold">Title</p>
                <input class="overview-border" type="text" id="title" name="title">
                <p class="overview-border font-bold">Descirption</p>
                <input class="overview-border" type="text" id="description" name="description">
                <p class="overview-border font-bold">Old price</p>
                <input class="overview-border" type="text" id="oldPrice" name="oldPrice">
                <p class="overview-border font-bold">New price</p>
                <input class="overview-border" type="text" id="newPrice" name="newPrice">
                <p class="overview-border font-bold">Image</p>
                <input class="overview-border" type="text" id="image" name="image">
                <!-- Save and cancel buttons -->
                <div class="flex justify-center space-x-8 pt-4">
                    <button id="saveButton"
                        class="middle none center rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true">Opslaan</button>
                    <button id="cancelButton"
                        class="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <!-- New item form -->
    <div class="bg-gray-200">
        <div class="flex flex-col m-5">
            <h1 class="">Add Item</h1>
            <!-- Input fields for new product details -->
            <input class="bg-inherit overview-border" required v-model="newItem.title" placeholder="New title" />
            <input class="bg-inherit overview-border" required v-model="newItem.description"
                placeholder="New description" />
            <input class="bg-inherit overview-border" required v-model="newItem.oldPrice" placeholder="New old price" />
            <input class="bg-inherit overview-border" required v-model="newItem.newPrice" placeholder="New new price" />
            <input class="bg-inherit overview-border" required v-model="newItem.image" placeholder="New image" />
            <!-- Add item button -->
            <button @click="addItemHandler">Add Item</button>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import useFirestore from "~/composables/useFirestore";

// Import Firestore functions
const { getItems, addItem, updateItem, deleteItem } = useFirestore();

// Reactive products array
const products = ref([]);
// Reactive new item object
const newItem = ref({ title: "", description: "", oldPrice: "", newPrice: "", image: "" });

// Fetch products from Firestore
const fetchItems = async () => {
    products.value = await getItems();
};

// Add new item to Firestore
const addItemHandler = async () => {
    if (newItem.value.title.trim()) {
        await addItem({ title: newItem.value.title, description: newItem.value.description, oldPrice: newItem.value.oldPrice, newPrice: newItem.value.newPrice, image: newItem.value.image });
        // Clear input fields
        newItem.value.title = "";
        newItem.value.description = "";
        newItem.value.oldPrice = "";
        newItem.value.newPrice = "";
        newItem.value.image = "";
        // Fetch updated products
        fetchItems();
    }
};

// Edit existing product
const editItem = (product) => {
    // Show the edit form
    const form = document.getElementById("editForm");
    form.style.display = "grid";

    // Pre-fill the form with current product details
    document.getElementById("title").value = product.title;
    document.getElementById("oldPrice").value = product.oldPrice;
    document.getElementById("newPrice").value = product.newPrice;
    document.getElementById("description").value = product.description;
    document.getElementById("image").value = product.image;

    // Handle save button click
    document.getElementById("saveButton").onclick = async () => {
        const updatedTitle = document.getElementById("title").value;
        const updatedOldPrice = document.getElementById("oldPrice").value;
        const updatedNewPrice = document.getElementById("newPrice").value;
        const updatedDescription = document.getElementById("description").value;
        const updatedImage = document.getElementById("image").value;

        const updates = {};

        // Check which fields have been updated
        if (updatedTitle.trim() !== product.title) {
            updates.title = updatedTitle;
        }
        if (updatedOldPrice.trim() !== product.oldPrice) {
            updates.oldPrice = updatedOldPrice;
        }
        if (updatedNewPrice.trim() !== product.newPrice) {
            updates.newPrice = updatedNewPrice;
        }
        if (updatedDescription.trim() !== product.description) {
            updates.description = updatedDescription;
        }
        if (updatedImage.trim() !== product.image) {
            updates.image = updatedImage;
        }

        // Update product in Firestore if any fields have been updated
        if (Object.keys(updates).length > 0) {
            console.log("Updating product with id:", product.id);
            await updateItem(product.id, updates);
            console.log("Product updated:", product.id);
            fetchItems();
        }

        // Hide the edit form after saving
        form.style.display = "none";
    };

    // Handle cancel button click
    document.getElementById("cancelButton").onclick = () => {
        form.style.display = "none";
    };
};

// Delete product from Firestore
const removeItem = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
        await deleteItem(id);
        fetchItems();
    }
};

// Fetch products when the component is mounted
onMounted(fetchItems);
</script>