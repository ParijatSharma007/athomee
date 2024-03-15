import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface TrafficgraphProps {
  categories: string[];
  seriesData: number[];
  GraphUsertype: string;
}

const Trafficgraph: React.FC<TrafficgraphProps> = ({
  categories,
  seriesData,
  GraphUsertype,
}) => {
  // Sort the categories array based on the user selection
  if (GraphUsertype === "30min") {
    // Sorting for month
    categories.sort((a, b) => parseInt(a) - parseInt(b));
  } else if (GraphUsertype === "month") {
    // Sorting for day or 30min
    categories.sort((a, b) => parseInt(a) - parseInt(b));
  } else {
    categories.sort((a, b) => parseInt(a) - parseInt(b));
  }

  const maxSeriesData = Math.max(...seriesData);
  const yAxisOptions: ApexYAxis = {
    labels: {
      formatter: function (val: number) {
        return Math.round(val).toString();
      },
      style: { fontSize: "10", colors: ["black"] },
    },
    title: {
      style: { color: "black", fontSize: "10" },
    },
    // tickAmount: Math.min(categories.length, 5),
    tickAmount:
      maxSeriesData <= 1
        ? 1
        : maxSeriesData <= 2
        ? 2
        : maxSeriesData <= 3
        ? 3
        : maxSeriesData <= 4
        ? 4
        : 5,
  };
  return (
    <>
      <Chart
        type="area"
        width={"100%"}
        height={200}
        series={[
          {
            name: "Total Traffic",
            data: seriesData,
          },
        ]}
        options={{
          chart: {
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
            stacked: false,
          },
          colors: ["black"],
          theme: { mode: "light" },
          xaxis: {
            labels: {
              rotate: -90,
              style: {
                fontSize: "10",
              },
            },
            categories: categories,
            tickPlacement: "on",
          },
          yaxis: yAxisOptions,
          // yaxis: {
          //   labels: {
          //     formatter: (val) => {
          //       return val.toFixed(2);
          //     },
          //     style: { fontSize: "12", colors: ["#333"] },
          //   },
          //   title: {
          //     style: { color: "#333", fontSize: "14" },
          //   },
          // },
          legend: {
            show: true,
            position: "top",
            offsetY: -10,
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.3,
              stops: [0, 90, 100],
            },
          },
          stroke: {
            curve: "smooth", // Using a smooth curve for the area
            width: 2,
          },
        }}
      />
    </>
  );
};

export default Trafficgraph;
