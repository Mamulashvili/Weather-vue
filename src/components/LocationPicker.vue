<template>
  <div class="wrapper">
    <p class="main-txt">Pick location</p>
    <p class="def-txt">
      Find area or city that you want to know the detailed weather info at this
      time
    </p>
    <div class="search-wrapper">
      <base-input
        input-name="location"
        input-id="location"
        input-placeholder="City or country"
        input-type="text"
        @input="updateValue"
        :value="locale"
      />
      <base-icon-button
        add-style="search-btn"
        @btn-icon-click="$emit('handleSearch')"
      >
        <i class="fas fa-map-marker-alt"></i
      ></base-icon-button>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseIconButton from "@/components/BaseIconButton";

export default {
  name: "LocationPicker",
  components: {
    BaseInput,
    BaseIconButton,
  },
  props: { locale: String },
  emits: ["update:locale", "handleSearch"],
  methods: {
    updateValue(e) {
      this.$emit("update:locale", e.target.value);
    },
  },
  created() {
    console.log("LocationPicker rendered");
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #101039;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  padding: 2rem;
  animation: fade-down 0.7s;
  z-index: 3;
}
.main-txt {
  color: #fff;
  font-size: 31px;
  font-weight: 500;
  line-height: 60px;
  margin: 0;
}

.def-txt {
  margin-top: 0.5rem;
}

.search-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-btn {
  margin-left: 20px;
}

@keyframes fade-down {
  from {
    top: -1000px;
  }
  to {
    top: 0;
  }
}
</style>
