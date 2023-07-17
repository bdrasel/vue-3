<template>
  <teleport to="#dialog">
    <div class="the-dialog">
      <div class="the-dialog__container">
        <div class="the-dialog__header">
          {{ heading }}
        </div>
        <div class="the-dialog__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["heading"],
};
</script>

<style>
.the-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}

.the-dialog__container {
  margin: auto;
  width: 333px;
  min-height: 222px;
  background-color: #fff;
  border-radius: 10px;
}

.the-dialog__header {
  border-radius: 10px 10px 0 0;
  background-color: rgb(233, 233, 233);
  font-weight: bold;
  padding: 9px 18px;
}

.the-dialog__body {
  padding: 9px 18px;
}
</style>
