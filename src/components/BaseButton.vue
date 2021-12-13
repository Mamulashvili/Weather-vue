<template>
  <button class="def-btn" :class="addClass" @click="$emit('btn-click')">
    {{ buttonTitle }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    buttonTitle: {
      type: String,
      default: "Get start",
    },
    addClass: String,
  },
  emits: ["btn-click"],
};
</script>
