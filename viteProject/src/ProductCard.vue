<template>
  <div class="card">
    <div class="card-header">
      {{ product.name }}
      
      <img src="../public/img/star.png" v-if="product.addToFavorite" @click="toggleFavorite" alt="star">
      <img src="../public/img/un-star.png" v-else alt="star" @click="toggleFavorite">
    </div>
    <div class="card-body">
      <img :src="product.image" alt="product.name" />
      <p>{{ product.description }}</p>
      <strong>${{ product.price }}</strong>
    </div>
    <div class="card-footer">
      <button @click="handleClick">Buy Now</button>
      <button @click="handleProductCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: { product: { type: Object, default: () => {} } },
  methods: {
    handleClick() {
      this.$emit("buy-now", this.product);
    },
    handleProductCart() {
      this.$emit("add-to-cart", this.product);
    },
    toggleFavorite() {
      this.product.addToFavorite = !this.product.addToFavorite;
    },
  },
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
  width: 300px;
  min-height: 200px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.card-header {
  background-color: #25a109c4;
  padding: 10px 15px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.card-header > img {
  width: 20px !important;
  height: 20px;
  margin-left: 10px;
}
.card-body {
  padding: 10px;
  text-align: center;
}
.card-footer {
  background-color: #25a109c4;
  padding: 10px 0px;
  text-align: center;
}
.card img {
  width: 100%;
}
</style>
