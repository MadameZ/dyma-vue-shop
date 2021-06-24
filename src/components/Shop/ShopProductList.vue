<template>
  <div class="d-flex flex-row flex-wrap">
    <!-- Vue a besoin d'un attribut key pour chaque composant-->
    <shop-product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></shop-product-item>
  </div>
</template>

<script>
import ShopProductItem from "./ShopProductItem.vue";
export default {
  components: {
    ShopProductItem,
  },
  // on récupère les données products via le vbind du composant parent Shop.vue
  props: ["products"],
};
</script>

<style></style>
