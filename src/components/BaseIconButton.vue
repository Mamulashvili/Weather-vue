<template>
  <button class="search-btn" @click="$emit('btnIconClick')">
    <slot></slot>
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "BaseIconButton",
  props: {
    buttonText: {
      type: String,
      default: "",
    },
  },
  emits: ["btnIconClick"],
};
</script>

<style>
button {
  background-color: #222148;
  border: none;
  width: 47px;
  height: 47px;
  border-radius: 8px;
  color: #ddd;
  font-size: 18px;
  cursor: pointer;
}
</style>
