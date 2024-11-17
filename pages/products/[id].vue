<template>
    <div>
        Product pagina
        <div>
            <!-- Use the product data here -->
            <ProductDetails :product="Product" />
            <!-- ... -->
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { $db } = useNuxtApp();
const uri = $db + id

//  fetch the products
const { data: product } = await useFetch(uri, { key: id })

const Product = computed(() => product)

const fetchItems = async () => {
    products.value = await getItems();
};
</script>

<style lang="scss" scoped></style>