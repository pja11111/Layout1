import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";

// Register Components ของ Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Page1 = () => {
  // Data Set สำหรับ Bar Chart
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [300, 500, 400, 700, 600, 800],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options สำหรับ Bar Chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
  };

  // Data Set สำหรับ Line Chart
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [400, 600, 500, 800, 700, 900],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 6,
      },
    ],
  };

  // Options สำหรับ Line Chart
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue Data",
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Page 1 - Data Visualization</h1>

      {/* Bar Chart */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
        <Bar data={barData} options={barOptions} />
      </div>

      {/* Line Chart */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
};

export default Page1;
