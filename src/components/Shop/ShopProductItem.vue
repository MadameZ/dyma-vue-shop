<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px" :src="product.img" alt="" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr />
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price }}</span>
      <button class="btn btn-primary btn-sm float-right">
        Commander avec un clique
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
.product-container {
  height: 400px;
}
/*  Tous les paragraphes de tous les composants auront ce style : */
p {
  font-size: 12px;
}
</style>
