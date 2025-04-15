"use client";

import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  accounts: Account[];
}

const DoughnutChart = ({ accounts }: Props) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#0747B6", "#2265D8", "#2F91FA"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  const options = {
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
