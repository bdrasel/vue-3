<template>
  <div class="card">
    <div class="card-header">{{ product.name }}</div>
    <div class="card-body">
      <img :src="product.image" alt="product.name" />
      <p>{{ product.description }}</p>
      <strong>${{ product.price }}</strong>
    </div>
    <div class="card-footer">
      <button @click="handleClick">Buy Now</button>
      <button>Add to Cart</button>
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
  background-color: #ccc;
  padding: 10px 0px;
  margin-bottom: 10px;
  text-align: center;
}
.card-body {
  padding: 10px;
  text-align: center;
}
.card-footer {
  background-color: #ccc;
  padding: 10px 0px;
  text-align: center;
}
.card img {
  width: 100%;
}
</style>
