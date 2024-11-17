<template>
    <div class="flex justify-center">
        <div class=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5">
            <div v-for="product in products" :key="product.id">
                <productCards :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useFirestore from "~/composables/useFirestore";

const { getItems } = useFirestore();

const products = ref([]);

const fetchItems = async () => {
    products.value = await getItems();
    console.log(products);
};

onMounted(fetchItems);
</script>