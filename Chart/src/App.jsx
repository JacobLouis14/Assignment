import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function App() {
  const [chartData, setChartData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.llama.fi/summary/fees/lyra?dataType=dailyFees")
      .then((response) => {
        setChartData(response.data.totalDataChart);
        console.log(response.data.totalDataChart[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const labels =
    chartData && chartData.length > 0
      ? chartData.map((innerArray) => {
          return innerArray.map((val) => new Date(val));
        })
      : [];
  const options = {
    responsive: true,
    plugins: {
      legend: true,
      title: {
        display: true,
        text: "Data",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Data",
        data:
          chartData && chartData.length > 0
            ? chartData.map((innerArray) => {
                return innerArray.map((val) => val);
              })
            : [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
      },
    ],
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export default App;
