<template>
    <div>
      <h1>{{ mag }}</h1>
      <product-details
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        @buy-now="buyNowProduct"
        @add-to-cart="onAddToCart"
      ></product-details>
    </div>
  </template>
  
  <script>
  import ProductDetails from "./ProductCard.vue";
  export default {
    data() {
      return {
        mag: "Vue is awesome!",
        products: [
          {
            name: "iPhone 15",
            description: "The latest iPhone 15, released in 2025",
            price: 799,
            addToFavorite: false,
            image:
              "https://imageio.forbes.com/specials-images/imageserve/63fa3390146518bf6a8ba852/Apple--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-colors--iPhone-15-Pro/0x0.jpg?format=jpg&crop=945,709,x230,y89,safe&width=960",
          },
  
          {
            name: "iPhone 16",
            description: "The latest iPhone 16, released in 2026",
            price: 899,
            addToFavorite: true,
            image:
              "https://imageio.forbes.com/specials-images/imageserve/63fa3390146518bf6a8ba852/Apple--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-colors--iPhone-15-Pro/0x0.jpg?format=jpg&crop=945,709,x230,y89,safe&width=960",
          },
  
          {
            name: "iPhone 17",
            description: "The latest iPhone 17, released in 2027",
            price: 999,
            addToFavorite: false,
            image:
              "https://imageio.forbes.com/specials-images/imageserve/63fa3390146518bf6a8ba852/Apple--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-colors--iPhone-15-Pro/0x0.jpg?format=jpg&crop=945,709,x230,y89,safe&width=960",
          },
        ],
      };
    },
    methods: {
      buyNowProduct(product) {
        alert(`Buying ${product.name} for $${product.price}`);
      },
      onAddToCart(product) {
        alert(`Adding ${product.name} to cart`);
      },
    },
    components: {
      ProductDetails,
    },
  };
  </script>
  
  <style></style>
  