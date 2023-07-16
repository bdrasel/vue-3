<template>
    <div>
      <h1>{{ mag }}</h1>
      <h3>Credit Card Input</h3>
      <credit-card
        v-model:cardHolderName="cardHolderName"
        v-model:cardNumber="cardNumber"
        v-model:cardMonth="cardMonth"
        v-model:cardYear="cardYear"
        v-model:cardCvv="cardCvv"
      ></credit-card>
  
      <br />
      <hr />
      <br />
      <p>
        <strong>Card Holder Name:</strong> {{ cardHolderName }} <br />
        <strong>Card Number:</strong> {{ cardNumber }} <br />
        <strong>Card Month:</strong> {{ cardMonth }} <br />
        <strong>Card Year:</strong> {{ cardYear }} <br />
        <strong>Card CVV:</strong> {{ cardCvv }} <br />
      </p>
    </div>
  </template>
  
  <script>
  import CreditCard from "./CreditCard.vue";
  export default {
    data() {
      return {
        mag: "Vue is awesome!",
        cardHolderName: "",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
        cardCvv: "",
      };
    },
    methods: {
     
    },
    components: {
      CreditCard,
    },
  };
  </script>
  
  <style>
  
  </style>
  