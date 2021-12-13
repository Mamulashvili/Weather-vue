<template>
  <welcome v-if="welcomeScreen" @switch-screens="switchScreens" />
  <base-screen v-if="baseScreen" />
</template>

<script>
import Welcome from "./components/Welcome.vue";
import BaseScreen from "@/components/BaseScreen.vue";

export default {
  name: "App",
  components: {
    Welcome,
    BaseScreen,
  },
  data() {
    return {
      welcomeScreen: true,
      baseScreen: false,
    };
  },
  methods: {
    switchScreens() {
      this.welcomeScreen = !this.welcomeScreen;
      this.baseScreen = !this.baseScreen;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600;700;800&display=swap");
*,
body {
  box-sizing: border-box;
}

:root {
  --primary: #18184a;
  --card: #23224c;
  --yellow: #fad059;
}

body {
  background-color: #dadfff;
}

#app {
  font-family: "Baloo Bhaijaan 2", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.brd {
  border: 1px solid;
}

.container {
  background-color: var(--primary);
  width: 450px;
  height: 850px;
  border-radius: 35px;
  padding: 2rem;
  margin: auto;
  position: relative;
  overflow: hidden;
}

.def-txt {
  color: #bdbdc9;
  font-size: 20px;
  line-height: 30px;
  font-weight: normal;
}

.def-btn {
  width: 100%;
  padding: 1rem;
  background-color: var(--yellow);
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.flex-spc-btwn {
  align-items: center;
  justify-content: space-between;
}
</style>
