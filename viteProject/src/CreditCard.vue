<template>
  <div class="credit-card">
    <label>Card Holder Name</label>
    <input
      type="text"
      :value="cardHolderName"
      @input="handleInput('update:cardHolderName', $event)"
    />
    <label>Card Number</label>
    <input
      type="text"
      :value="cardNumber"
      @input="handleInput('update:cardNumber', $event)"
    />
    <div class="row">
      <div class="col-6">
        <label>Card Month</label>
        <input
          type="text"
          :value="cardMonth"
          @input="handleInput('update:cardMonth', $event)"
        />
      </div>
      <div class="col-6">
        <label>Card Year</label>
        <input
          type="text"
          :value="cardYear"
          @input="handleInput('update:cardYear', $event)"
        />
      </div>
    </div>
    <label>Card CVV</label>
    <input
      type="text"
      :value="cardCvv"
      @input="handleInput('update:cardCvv', $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    cardHolderName: {
      type: String,
      default: "",
    },
    cardNumber: {
      type: Number,
      default: "",
    },
    cardMonth: {
      type: Number,
      default: "",
    },
    cardYear: {
      type: Number,
      default: "",
    },
    cardCvv: {
      type: Number,
      default: "",
    },
  },

  methods: {
    handleInput(eventName, e) {
      this.$emit(eventName, e.target.value);
    },
  },
};
</script>

<style>
.credit-card {
  width: 300px;
  border: 1px solid gray;
  padding: 22px;
  border-radius: 5px;
  background-color: rgb(255, 254, 247);
  color: rgb(82, 82, 82);
  min-height: 111px;
}

input {
  padding: 7px 9px;
  margin-bottom: 11px;
  border-radius: 3px;
  width: 90%;
  border: 1px solid gray;
}

.row {
  display: flex;
}

.col-6 {
  flex: 1;
  padding: 0 2px;
}
</style>
