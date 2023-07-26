<template>
  <div>
    <h1>{{ mag }}</h1>
    <h3>The Comment</h3>
    <the-comment
      v-model="myComment"
      buttonTxt="continue"
      class="shadow"
      placeholder="Enter your comment here...."
      @clickEventModal="handleClickEventModal"
    ></the-comment>

    <br />
    <hr />
    <br />
    <p>
      {{ myComment }}
    </p>

    <button @click="showNotification">Show Notification</button>
    <the-dialog heading="My Dialog" v-if="showModal">
      <p>My Dialog Content</p>
      <button @click="showModal = false">Close</button>
      <button @click="showModal = false">OK</button>
    </the-dialog>

    <br />
    <hr />
    <br />
    <h3>Notification</h3>
    <the-notification
      v-for="(notification, index) in notifications"
      :key="index"
      :text="notification"
    >
    </the-notification>
  </div>
</template>

<script>
import TheComment from "./TheComment.vue";
import TheDialog from "./TheDialog.vue";
import TheNotification from "./TheNotification.vue";
export default {
  data() {
    return {
      mag: "Vue is awesome!",
      myComment: "",
      showModal: false,
      notifications: [],
    };
  },
  methods: {
    handleClickEventModal() {
      this.showModal = true;
    },
    showNotification() {
      this.notifications.push("Hello World");
      setTimeout(() => {
        this.notifications.shift();
      }, 3000);
    },
  },

  components: {
    TheComment,
    TheDialog,
    TheNotification,
  },
};
</script>

<style></style>
