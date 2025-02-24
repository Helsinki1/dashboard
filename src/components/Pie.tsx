import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props{
  label: string,
  labels: string[],
  values: number[],
  colors: string[],
  hoverColors: string[]
}

function PieGraph({label,labels,values,colors,hoverColors}: Props){
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: values,
        backgroundColor: colors,
        hoverBackgroundColor: hoverColors,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1000,
    },
  };

  return (
    <Pie data={data} options={options} />
  );
};

export default PieGraph;
