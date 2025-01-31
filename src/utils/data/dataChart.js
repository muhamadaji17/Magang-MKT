/* eslint-disable react-hooks/rules-of-hooks */
// const [chartOptions, setChartOptions] = useState({
//   options: {
//     chart: {
//       id: "basic-bar",
//     },
//     xaxis: {
//       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
//     },
//   },
//   series: [
//     {
//       name: "series-1",
//       data: [30, 40, 45, 50, 49, 60, 70, 91],
//     },
//   ],
// });

import { useState } from "react";

export const [chartData] = useState({
  options: {},
  series: [44, 55, 41, 17, 15],
  labels: ["A", "B", "C", "D", "E"],
});

export const [state, setState] = useState({
  series: [
    {
      name: "Product Two",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
    },
    {
      name: "Product One",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    },
  ],
});

export const [chartOptions, setChartOptions] = useState({
  series: [
    {
      name: "Product One",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    },

    {
      name: "Product Two",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
    },
  ],
});
