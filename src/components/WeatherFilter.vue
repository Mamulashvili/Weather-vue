<template>
  <ul>
    <li
      v-for="filter in filters"
      :key="filter.id"
      :class="active.id == filter.id ? 'active' : ''"
      @click="setActive(filter)"
    >
      {{ filter.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "WeatherFilter",
  data() {
    return {
      filters: [
        {
          id: 0,
          name: "Today",
        },
        {
          id: 1,
          name: "Tomorrow",
        },
        {
          id: "all",
          name: "Next Days",
        },
      ],
      active: { id: 0 },
    };
  },
  emits: ["handleWeatherClick"],
  methods: {
    setActive(selected) {
      this.active = selected;
      this.$emit("handleWeatherClick", selected);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
  margin-top: 2rem;
}

ul li {
  display: inline-block;
  margin-right: 1.5rem;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
}

.active {
  color: var(--yellow);
  font-weight: 600;
  transition: 0.3s ease;
}
</style>
