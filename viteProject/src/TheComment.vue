<template>
    <div class="the-comment">
      <label>Comment</label>
      <textarea :value="modelValue" @input="handleInput" v-bind="$attrs" /> 

      <button class="text-right">{{ buttonTxt }}</button>
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
        modelValue: {
        type: String,
        default: "",
      },
      buttonTxt: {
        type: String,
        default: "OK",
      },
    },

    inheritAttrs: false,
    mounted () {
      console.log(this.$attrs);
    },
  
    methods: {
      handleInput(e) {
        this.$emit('update.modelValue', e.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  .the-comment {
    width: 300px;
    border: 1px solid gray;
    padding: 22px;
    border-radius: 5px;
    background-color: rgb(255, 254, 247);
    color: rgb(82, 82, 82);
    min-height: 111px;
  }
  
  textarea {
    padding: 7px 9px;
    margin-bottom: 11px;
    border-radius: 3px;
    width: 90%;
    border: 1px solid gray;
  }

  .shadow {
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  }
  
  </style>
  