<template>
  <ul v-if="activeFilter.id !== 'all'">
    <li v-for="(item, index) in forecast" :key="index">
      <div class="card">
        <div class="img-wrapper">
          <figure>
            <img
              :src="
                require('../assets/icons/' +
                  generateWeatherImage(item?.condition?.text, item?.is_day) +
                  '.png')
              "
              alt="Weather icon"
            />
          </figure>
        </div>
        <div class="card-footer">
          <p class="time">{{ item?.time?.split(" ")[1] }}</p>
          <p class="temp flex">
            <span>{{ item?.temp_c }}</span>
            <span>C</span>
          </p>
        </div>
      </div>
    </li>
  </ul>
  <ul v-else>
    <div v-for="(items, index) in forecast" :key="index" class="outer-loop">
      <li v-for="(item, ind) in items.hour" :key="ind">
        <div class="card">
          <div class="img-wrapper">
            <figure>
              <img
                :src="
                  require('../assets/icons/' +
                    generateWeatherImage(item?.condition?.text, item?.is_day) +
                    '.png')
                "
                alt="Weather icon"
              />
            </figure>
          </div>
          <div class="card-footer">
            <p class="time">{{ item?.time }}</p>
            <p class="temp flex">
              <span>{{ item?.temp_c }}</span>
              <span>C</span>
            </p>
          </div>
        </div>
      </li>
    </div>
  </ul>
</template>

<script>
import { generateWeatherImage } from "../../config/helpers/HelperFunc";

export default {
  name: "BaseSmallCard",
  props: {
    forecast: {
      type: [Array, Object],
      required: false,
    },
    activeFilter: {
      type: [Array, Object],
      required: false,
    },
  },
  methods: {
    generateWeatherImage,
  },
};
</script>

<style scoped>
.card {
  width: 130px;
  height: 130px;
  border-radius: 20px;
  padding: 0.5rem;
  background-color: rgb(29 29 74);
  margin-right: 2rem;
  margin-top: 1rem;
  padding: 1rem;
}

.img-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.card figure {
  width: 50%;
  margin: 0;
}

.card figure img {
  max-width: 100%;
}

p {
  margin: 0;
}

.time {
  text-align: left;
  color: #fff;
  font-size: 13px;
}

.temp span:first-child {
  font-size: 21px;
  font-weight: bold;
  line-height: 25px;
  color: #fff;
}

.temp span:last-child {
  margin-left: 7px;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  position: relative;
  color: var(--yellow);
}

.temp span:last-child::before {
  content: "\26AC";
  position: absolute;
  left: -7px;
  top: -6px;
  font-weight: bold;
}

.card-footer {
  margin-top: -10px;
}

ul {
  padding: 0;
  float: left;
  overflow: scroll;
  display: flex;
  width: 100%;
}
ul li {
  list-style-type: none;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s ease;
}

ul li img {
  transition: 0.3s ease;
}

ul li:hover img {
  transform: scale(1.1);
}

.outer-loop {
  display: flex;
}
</style>
