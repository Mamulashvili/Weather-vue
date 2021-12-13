<template>
  <input
    :type="inputType"
    :name="inputName"
    :id="inputId"
    class="def-input"
    :class="addStyle"
    :placeholder="inputPlaceholder"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    inputName: {
      type: String,
      default: "name",
    },
    inputId: {
      type: String,
      default: (Math.random() * 1000).toString(),
    },
    inputPlaceholder: {
      type: String,
      default: "Placeholder",
    },
    addStyle: String,
  },
};
</script>

<style scoped>
.def-input {
  background-color: #222148;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  color: #ddd;
}
</style>
