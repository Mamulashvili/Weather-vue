<template>
  <div class="container brd">
    <location-picker
      v-if="showLocationPicker"
      v-model:locale="pickedLocation"
      @handle-search="searchWeatherByLocation"
    />
    <app-header @handle-settings-click="toggleAppHeader" />
    <div v-if="weather !== null">
      <base-big-card
        :weather-location="weather.location"
        :weather-current="weather.current"
      />
      <weather-filter @handle-weather-click="setActiveFilter" />
      <base-small-card
        :forecast="getFilteredForecastData()"
        :active-filter="activeFilter"
      />
      <base-chart
        :chart-data="getFilteredForecastData()"
        :dataset-legend-text="activeFilter.name"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
//Static
import AppHeader from "@/components/AppHeader";
// Dynamic
const LocationPicker = defineAsyncComponent(() =>
  import("@/components/LocationPicker")
);
const BaseBigCard = defineAsyncComponent(() =>
  import("@/components/BaseBigCard")
);
const BaseSmallCard = defineAsyncComponent(() =>
  import("@/components/BaseSmallCard")
);

const WeatherFilter = defineAsyncComponent(() =>
  import("@/components/WeatherFilter")
);
const BaseChart = defineAsyncComponent(() => import("@/components/BaseChart"));

export default {
  name: "BaseScreen",
  components: {
    LocationPicker,
    AppHeader,
    BaseBigCard,
    BaseSmallCard,
    WeatherFilter,
    BaseChart,
  },
  data() {
    return {
      showLocationPicker: false,
      pickedLocation: "Tbilisi",
      weather: null,
      networkError: false,
      activeFilter: { id: 0 },
    };
  },
  methods: {
    toggleAppHeader() {
      this.showLocationPicker = !this.showLocationPicker;
    },

    async getWeather(loc = "Tbilisi") {
      const url = `${process.env.VUE_APP_API_URL}v1/forecast.json?key=${process.env.VUE_APP_API_KEY}&q=${loc}&days=${process.env.VUE_APP_DAYS}&aqi=no&alerts=${process.env.VUE_APP_ALERTS}`;

      try {
        const data = await fetch(url);
        const response = await data.json();
        this.weather = response;
      } catch (error) {
        console.log(error);
        this.networkError = true;
      }
    },

    searchWeatherByLocation(location = this.pickedLocation) {
      this.getWeather(location);
      this.showLocationPicker = !this.showLocationPicker;
    },

    setActiveFilter(active) {
      this.activeFilter = active;
    },

    getFilteredForecastData() {
      if (this.activeFilter.id === "all")
        return this.weather?.forecast?.forecastday;
      return this.weather?.forecast?.forecastday[this.activeFilter.id].hour;
    },
  },
  created() {
    this.getWeather();
  },
};
</script>
