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
  inject: ["name", "email", "phone"],
  data() {
    return {
      message: "Hello World!",
    };
  },
};
</script>
