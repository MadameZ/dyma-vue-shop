<template>
  <div class="d-flex flex-row flex-wrap">
    <!-- il faut une key unique car on vuet que chaque item soit unique par rapport à un élément du DOM-->
    <shop-product-item
      v-for="product in products"
      :key="product.id"
    ></shop-product-item>
  </div>
</template>

<script>
import ShopProductItem from "./ShopProductItem.vue";
export default {
  components: {
    ShopProductItem,
  },
  props: ["products"],
};
</script>

<style></style>
