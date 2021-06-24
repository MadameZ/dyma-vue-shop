<template>
  <!-- oPour la partie template, nous allons seulement lier notre propriété products dynamiquement à un attribut personnalisé en utilisant la directive v-bind afin que nos produits soient disponibles sur props dans le composant ShopProductsList : -->
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
    console.log(this.products);
    eventBus.$on("update:products", (products) => {
      this.products = products;
    });
  },
};
</script>

<style></style>
