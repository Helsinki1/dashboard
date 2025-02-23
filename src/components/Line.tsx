import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph = () => {

    const options = {
        responsive: true,
        animation: {
          duration: 1000,
        },
    };

    const data = {
        labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        datasets: [
            {
                label: "Sales",
                data: [30, 50, 45, 60, 80, 70, 90],
                borderColor: "rgb(75, 192, 192",
            },
        ],
    };


    return (
        <Line options={options} data={data}/>
    )
}

export default LineGraph