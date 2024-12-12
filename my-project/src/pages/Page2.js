// import React from "react";

// const Page2 = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">Page 2</h1>
//       <p className="mt-4">This is the content for Page 2.</p>
//     </div>
//   );
// };

// export default Page2;

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Page2 = () => {
  // Sample data for the bar chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"], // Months
    datasets: [
      {
        label: "Sales", // The name of the dataset
        data: [12, 19, 3, 5, 2, 3, 6], // Example sales data
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Bar color
        borderColor: "rgb(75, 192, 192)", // Border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales Over Time",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Page 2</h1>
      <p className="mt-4">This is the content for Page 2.</p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Sales Data</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Page2;
