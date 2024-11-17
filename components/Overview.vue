<!-- pages/index.vue -->
<template>
    <div class="w-fit mt-8 ml-8">
        <div>
            <table class="border-separate border-spacing-x-4">
                <thead>
                    <tr class="text-siteMain-300">
                        <th class="pb-3 text-left">Title</th>
                        <th class="pb-3 text-left">Description</th>
                        <th class="pb-3 text-left">Old price</th>
                        <th class="pb-3 text-left">New price</th>
                        <th class="pb-3 text-left">Image</th>
                        <th class="pb-3 text-left">Edit</th>
                        <th class="pb-3 text-left">Remove</th>
                    </tr>
                </thead>
                <tbody v-for="product in products" :key="product.id">
                    <tr class=" border-b border-black">
                        <td>{{ product.title }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.oldPrice }}</td>
                        <td>{{ product.newPrice }}</td>
                        <td>{{ product.image }}</td>
                        <td><button @click="editItem(product)"
                                class="middle none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true">Edit product</button></td>
                        <td><button @click="removeItem(product.id)"
                                class="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true">Remove product</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Verandering UI -->
        <div>
            <table id="editForm" style="display: none; padding-top: 50px">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Old price</th>
                        <th>New price</th>
                    </tr>
                </thead>
                <tbody>
                    <td><input type="text" id="title" name="title"></td>
                    <td><input type="text" id="description" name="description"></td>
                    <td><input type="text" id="oldPrice" name="oldPrice"></td>
                    <td><input type="text" id="newPrice" name="newPrice"></td>
                    <td><input type="text" id="image" name="image"></td>
                    <td><button id="saveButton">Save</button></td>
                    <td><button id="cancelButton">Cancel</button></td>
                </tbody>
            </table>
        </div>

        <!-- new item form -->
        <div>
            <h1>Add Item</h1>
            <input required v-model="newItem.title" placeholder="New title" />
            <input required v-model="newItem.description" placeholder="New description" />
            <input required v-model="newItem.oldPrice" placeholder="New old price" />
            <input required v-model="newItem.newPrice" placeholder="New new price" />
            <input required v-model="newItem.image" placeholder="New image" />
            <button @click="addItemHandler">Add Item</button>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import useFirestore from "~/composables/useFirestore";

const { getItems, addItem, updateItem, deleteItem } = useFirestore();

const products = ref([]);
const newItem = ref({ title: "", description: "", oldPrice: "", newPrice: "", image: "" });

const fetchItems = async () => {
    products.value = await getItems();
};

const addItemHandler = async () => {
    if (newItem.value.title.trim()) {
        await addItem({ title: newItem.value.title, description: newItem.value.description, oldPrice: newItem.value.oldPrice, newPrice: newItem.value.newPrice, image: newItem.value.image });
        newItem.value.title = "";
        newItem.value.description = "";
        newItem.value.oldPrice = "";
        newItem.value.newPrice = "";
        newItem.value.image = "";
        fetchItems();
    }
};

// Testing

const editItem = (product) => {
    // Show the form
    const form = document.getElementById("editForm");
    form.style.display = "block";

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

        if (Object.keys(updates).length > 0) {
            console.log("Updating product with id:", product.id);
            await updateItem(product.id, updates);
            console.log("Product updated:", product.id);
            fetchItems();
        }

        // Hide the form after saving
        form.style.display = "none";
    };

    // Handle cancel button click
    document.getElementById("cancelButton").onclick = () => {
        form.style.display = "none";
    };
};

const removeItem = async (id) => {
    await deleteItem(id);
    fetchItems();
};

onMounted(fetchItems);
</script>