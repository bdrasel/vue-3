<template>
  <div class="card">
    <div class="card-header">{{ cardTitle }}</div>
    <div class="card-body">
      <slot v-if="$slots.default"> Default content here </slot>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots.default);
  },
  props: ["cardTitle"],
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
}
.card-footer {
  background-color: #ccc;
  padding: 10px 0px;
  text-align: center;
}
</style>
