// LineChart.js
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const LineChart = ({ apiData }) => {
  const years = apiData?.years || [2016];
  const data = apiData?.data || [2016];
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);
  React.useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: years,
        datasets: [
          {
            label: "Growth",
            data: data,
            fill: true,
            backgroundColor: "rgba(37, 205, 37, 0.4)",
            borderColor: "rgba(37, 205, 37, 1)",
            borderWidth: 1,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} style={{ width: "100%", height: "100px" }} />
    </div>
  );
};

export default LineChart;
