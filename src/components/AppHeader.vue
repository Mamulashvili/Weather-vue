<template>
  <div>
    <p>{{ headerText }}</p>
    <i class="fas fa-sliders-h" @click="$emit('handle-settings-click')"></i>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    headerText: {
      type: String,
      default: "Weather Forecast",
    },
    emits: ["handle-settings-click"],
  },
};
</script>

<style scoped>
div {
  position: relative;
}
p {
  color: #fff;
  font-size: 21px;
  font-weight: 600;
  margin: 0;
}
i {
  color: #fff;
  font-size: 21px;
  font-weight: 100;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
