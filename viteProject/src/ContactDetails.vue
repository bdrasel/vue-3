<template>
  <div>
    <h1>Contact Details</h1>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
    <p>Phone: {{ phone }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      default: "N/A",
    },
    phone: {
      type: String,
      required: false,
      default: "N/A",
    },
  },
  data() {
    return {
      message: "Hello World!",
    };
  },
};
</script>
