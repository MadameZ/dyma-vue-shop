<template>
  <!-- on passe les données eventBus avec :products -->
  <shop-product-list :products="products" class="p-3"></shop-product-list>
</template>

<script>
// on récupère la liste de produit de l'eventBus dans le main.js et on le transfert à shoop-product-list
import { eventBus } from "../../main";
import ShopProductList from "./ShopProductList.vue";
export default {
  components: {
    ShopProductList,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    // on récupère dans le hook created le pattern de eventBus :
    this.products = eventBus.products;
    eventBus.$on("update:products", (products) => {
      this.products = products;
    });
  },
};
</script>

<style></style>
