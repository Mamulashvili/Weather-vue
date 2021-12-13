<template>
  <div class="container brd">
    <figure>
      <img src="../assets/logo.png" alt="Logo" class="logo" />
    </figure>
    <p class="title">
      Weather
      <span>News & Feed</span>
    </p>
    <p class="def-txt">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut
    </p>
    <base-button @btn-click="$emit('switchScreens')" />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  name: "welcome",
  components: {
    BaseButton,
  },
  emits: ["switchScreens"],
};
</script>

<style scoped>
.container {
  background-color: var(--primary);
}
.logo {
  max-width: 60%;
  margin-top: 7rem;
}

.title {
  margin: 7rem 2rem 1rem 2rem;
  color: #fff;
  font-size: 51px;
  font-weight: 500;
  line-height: 60px;
}

.title span {
  color: var(--yellow);
}

.def-btn {
  margin-top: 1rem;
}
</style>
