<template>
    <teleport to="#notifications">
      <div class="the-notification">
        {{ text }}
      </div>
    </teleport>
  </template>
  
  <script>
  export default {
    props: ["text"]
  };
  </script>
  
  <style>
  .the-notification {
    width: 222px;
    min-height: 22px;
    border: 1px solid gray;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);
    color: rgb(192, 117, 26);
    padding: 15px 9px;
    margin: 22px;
    margin-right: 0;
    background-color: #fff;
    line-height: 1;
    transition: all 0.25s;
  }
  </style>