<template>
  <div
    class="card"
    :class="{ 'card-details': details, addStyle }"
    @click="toggleDetails"
  >
    <div class="flex flex-spc-btwn">
      <span class="today">Today</span>
      <span v-if="showCardDate" class="today-sml">{{ date }}</span>
    </div>
    <div class="card-container flex flex-spc-btwn">
      <p class="temp flex">
        <span>{{ weatherCurrent.temp_c }}</span>
        <span>C</span>
      </p>
      <figure v-if="imgUrl != ''">
        <img :src="imgUrl" alt="weather" />
      </figure>
    </div>
    <div class="card-footer">
      <i class="fas fa-map-marker-alt"></i>
      <span>{{
        `${weatherLocation.name}, ${weatherLocation.region}, ${weatherLocation.country}`
      }}</span>
    </div>
    <div v-if="details" class="card-details-wraper">
      <br />
      <div class="flex flex-spc-btwn weather-details">
        <div>
          <p>Wind</p>
          <p>{{ weatherCurrent?.wind_kph }}</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>{{ weatherCurrent?.humidity }}</p>
        </div>
        <div>
          <p>Cloud</p>
          <p>{{ weatherCurrent?.cloud }}</p>
        </div>
      </div>
      <br />
      <div class="flex flex-spc-btwn weather-details">
        <div>
          <p>Wind deg</p>
          <p>{{ weatherCurrent?.wind_degree }}</p>
        </div>
        <div>
          <p>Wind dir</p>
          <p>{{ weatherCurrent?.wind_dir }}</p>
        </div>
        <div>
          <p>Feels like</p>
          <p>{{ weatherCurrent?.feelslike_c }}</p>
        </div>
      </div>
      <br />
      <div class="flex flex-spc-btwn weather-details">
        <div>
          <p>Pressure</p>
          <p>{{ weatherCurrent?.pressure_mb }} mb</p>
        </div>
        <div>
          <p>Visibility</p>
          <p>{{ weatherCurrent?.vis_km }} km</p>
        </div>
        <div>
          <p>UV index</p>
          <p>{{ weatherCurrent?.uv }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { generateWeatherImage } from "../../config/helpers/HelperFunc";

export default {
  name: "BaseCard",
  props: {
    cardTextDay: {
      type: String,
      default: "Today",
    },
    showCardDate: {
      type: Boolean,
      default: true,
    },
    weatherCurrent: Object,
    weatherLocation: Object,
    addStyle: Object,
  },
  data() {
    return {
      date: "",
      cond: "",
      daytime: "",
      imgUrl: "",
      details: false,
    };
  },
  methods: {
    generateWeatherImage,
    dateNow() {
      this.date = moment(new Date()).format("ddd, D MMM");
    },

    toggleDetails() {
      this.details = !this.details;
    },
  },
  created() {
    this.dateNow();
    this.imgUrl = require("../assets/icons/" +
      this.generateWeatherImage(
        this.weatherCurrent.condition.text,
        this.weatherCurrent.is_day
      ) +
      ".png");
  },
  updated() {
    this.imgUrl = require("../assets/icons/" +
      this.generateWeatherImage(
        this.weatherCurrent.condition.text,
        this.weatherCurrent.is_day
      ) +
      ".png");
  },
};
</script>

<style scoped>
.card {
  padding: 1.7rem;
  background-color: rgb(29 29 74);
  border-radius: 20px;
  transition: 0.3s ease-in;
  height: 270px;
  overflow: hidden;
}
.today {
  color: #fff;
  font-size: 23px;
  font-weight: 600;
}
.today-sml {
  color: #fff;
  font-weight: 400;
  font-size: 14px;
}

.temp {
  color: #fff;
  margin: 0;
}

.temp span:first-child {
  font-size: 70px;
  font-weight: bold;
  line-height: 45px;
}

.temp span:last-child {
  margin-left: 15px;
  font-size: 27px;
  font-weight: 500;
  line-height: 35px;
  position: relative;
  color: var(--yellow);
}

.temp span:last-child::before {
  content: "\26AC";
  position: absolute;
  left: -12px;
  top: -6px;
  font-weight: bold;
}

.card-container {
  margin-top: 0.7rem;
}

.card-container figure {
  max-width: 35%;
  margin: 0;
}

.card-container figure img {
  width: 100%;
}

.card-footer {
  text-align: left;
}

.card-footer span {
  color: #fff;
}

.card-footer i {
  color: var(--yellow);
  margin-right: 10px;
  font-weight: 100;
}

.card-details {
  height: 500px;
}

.card-details-wraper {
  height: 500px;
  margin-top: 1rem;
}

.card-details-wraper p {
  margin: 0;
  color: #fff;
}

.weather-details div p {
  font-size: 13px;
}

.weather-details div p:first-child {
  font-weight: bold;
}
</style>
