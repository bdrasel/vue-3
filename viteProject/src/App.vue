<template>
  <div>
    <h1>{{ mag }}</h1>
    <div class="container">
      <div class="tab">
        <div class="tab__menu">
          <div
            v-for="tab in tabs"
            :key="tab"
            class="tab__menu-item"
            :class="{ 'tab__menu-item--active': activeTabs === tab }"
            @click="activeTabs = tab"
          >
            {{ tab }}
          </div>
        </div>
      </div>
      <div class="tab__content">
        <!-- <Login v-if="activeTabs === 'Login'" />
        <Register v-if="activeTabs === 'Register'" /> -->

        <keep-alive>
          <component :is="activeTabs" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "./Register.vue";
import Login from "./Login.vue";
import ContactDetails from "./ContactDetails.vue";

export default {
  data() {
    return {
      mag: "Vue is awesome!",
      tabs: ["Login", "Register", "ContactDetails"],
      activeTabs: "Login",
      name: "Rasel Hossain",
      email: "codewithrasel@gmail.com",
      phone: "01700000000",
    };
  },
  methods: {},
  provide() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
    };
  },

  components: {
    Register,
    Login,
    ContactDetails,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  margin-left: 22px;
}

body {
  font-family: sans-serif;
  line-height: 1.8;
}

header {
  background-color: #1f2c46;
  color: #41b883;
  font-size: 22px;
  padding: 22px;
}

header h2 {
  text-align: center;
}

.container {
  padding: 22px;
}

button {
  margin: 5px;
  padding: 5px 11px;
  cursor: pointer;
}

.shadowed {
  box-shadow: 0 0 3px 2px #111;
}

.tab {
}

.tab__menu {
  display: flex;
}

.tab__menu-item {
  padding: 6px 15px;
  background-color: #dbdbdb;
  cursor: pointer;
}

.tab__menu-item--active {
  color: #fff;
  background-color: rgb(27, 104, 192);
}

input {
  padding: 5px 11px;
  margin-bottom: 11px;
}

textarea {
  padding: 5px 11px;
  margin-bottom: 11px;
  width: 100%;
}

.ml-2 {
  margin-left: 11px;
}
</style>
