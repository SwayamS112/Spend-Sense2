import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const Card = ({ name }) => {
  const data = {
    labels: ["Rent", "Food", "Transport", "Entertainment", "Savings"],
    datasets: [
      {
        data: [500, 300, 150, 100, 200], // Sample expenses in dollars
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"],
      },
    ],
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800/80 dark:border-gray-700 mx-auto p-5">
        {/* Pie Chart for Monthly Expenses */}
        <div className="mb-5">
          <Pie data={data} />
        </div>

        <div className="px-5 pb-5 text-center">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <div className="flex items-center justify-center mt-4">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Show Expenses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
