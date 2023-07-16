<template>
  <div>
    <h1>{{ mag }}</h1>
    <h3>The Comment</h3>
    <the-comment
      v-model="myComment"
      buttonTxt="continue"
      class="shadow"
      placeholder="Enter your comment here...."
    ></the-comment>

    <br />
    <hr />
    <br />
    <p>
      {{ myComment }}
    </p>
  </div>
</template>

<script>
import TheComment from "./TheComment.vue";
export default {
  data() {
    return {
      mag: "Vue is awesome!",
      myComment: "",
    };
  },
  methods: {},

  components: {
    TheComment,
  },
};
</script>

<style></style>
