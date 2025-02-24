import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph =() => {
    
    const options = {
        responsive: true,
        animation: {
          duration: 1000,
        },
    };

    const data = {
        labels: ["Labor", "Utilities", "Materials", "Transportation", "Taxes"],
        datasets: [
            {
                label: "Expenses",
                data: [1200, 500, 350, 180, 100],
                backgroundColor: ["rgba(255,99,132,0.2)"],
                borderColor: ["rgba(54, 162, 235, 1)"],
                borderWidth: 1,
            },
        ],
    };

    return(
        <Bar options={options} data={data}/>
    )
}

export default BarGraph