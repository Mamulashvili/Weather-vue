<template>
  <div
    style="height: 400px; width: 100%; display: flex; flex-direction: column"
  >
    <vue3-chart-js
      :id="baseChart.id"
      ref="chartRef"
      :type="baseChart.type"
      :data="baseChart.data"
      @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
</template>

<script>
import { ref } from "vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "BaseChart",
  components: {
    Vue3ChartJs,
  },
  props: {
    chartData: {
      type: [Object, Array],
      required: true,
      default: ["red", "green"],
    },
    chartType: {
      type: String,
      required: false,
      default: "line",
    },
    chartId: {
      type: String,
      required: false,
      default: "chartId",
    },
    datasetBgColor: {
      type: String,
      required: false,
      default: "#FAD059",
    },
    datasetBorderColor: {
      type: String,
      required: false,
      default: "#FAD059",
    },
    datasetLegendText: {
      type: String,
      required: true,
      default: "Today",
    },
  },
  setup(props) {
    const chartRef = ref(null);
    const baseChart = {
      id: props.chartId,
      type: props.chartType,
      data: {
        labels: formatChartData(true, true),
        datasets: [
          {
            data: formatChartData(true, false, true),
            label: props.datasetLegendText,
            backgroundColor: props.datasetBgColor,
            borderColor: props.datasetBorderColor,

            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    };
    const beforeRenderLogic = (event) => {};

    function formatChartData(
      evens = true,
      labelsOnly = false,
      dataOnly = false,
      data = props.chartData
    ) {
      const temp = data
        .map((_item, _i) => {
          if (_item.hour !== undefined) return []; // Too many data for small size chart
          if (evens && _i % 2 === 0) return null;
          if (labelsOnly) return _item.time.split(" ")[1];
          if (dataOnly) return _item.temp_c;
          return {
            label: _item.time.split(" ")[1],
            data: _item.temp_c,
          };
        })
        .filter((_el) => _el !== null);
      return temp;
    }

    const updateChart = () => {
      baseChart.data.labels = formatChartData(true, true);
      baseChart.data.datasets = [
        {
          data: formatChartData(true, false, true),
          backgroundColor: props.datasetBgColor,
          borderColor: props.datasetBorderColor,
          label: props.datasetLegendText,
        },
      ];

      chartRef.value.update(250);
    };

    return {
      baseChart,
      beforeRenderLogic,
      updateChart,
      chartRef,
    };
  },
  created() {
    console.log("Chart created");
  },
  updated() {
    this.updateChart();
    console.log("Chart updated");
  },
};
</script>
