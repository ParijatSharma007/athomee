import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ReservationGraphProps {
  categories: string[];
  seriesData: number[];
  GraphUsertype: string;
}

const ReservationGraph: React.FC<ReservationGraphProps> = ({
  categories,
  seriesData,
  GraphUsertype,
}) => {
  const yearIndexMap: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  // If it's the day or month graph, reverse the order of categories
  const isDayOrMonthGraph =
    GraphUsertype === "day" || GraphUsertype === "month";

  // Create data objects with category and value
  const data = categories.map((category, index) => ({
    category,
    value: seriesData[index],
  }));

  // Sort data based on month index if it's the year graph
  if (GraphUsertype === "year") {
    data.sort((a, b) => yearIndexMap[a.category] - yearIndexMap[b.category]);
  }

  // Reverse the order of categories if it's the day or month graph
  if (isDayOrMonthGraph) {
    data.reverse();
  }

  // Extract sorted categories and series data
  // const sortedCategories = data.map((item) => item.category);

  const sortedCategories = data.map((item) => item.category);
  const sortedSeriesData = data.map((item) => item.value);
  const maxSeriesData = Math.max(...sortedSeriesData);
  // Y Axis Point Define
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
    // tickAmount: Math.min(sortedCategories.length, 5),
    // tickAmount:
    //   maxSeriesData < 1 ? 1 : maxSeriesData < 2 ? 2 : maxSeriesData < 3 ? 3 : 5,
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
        type="bar"
        width={"100%"}
        height={200}
        series={[
          {
            name: "Total Reservations",
            data: sortedSeriesData,
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
          },
          colors: ["black"],
          theme: { mode: "light" },
          xaxis: {
            labels: {
              rotate: -90,
              style: {
                fontSize: "9",
              },
            },
            categories: sortedCategories,
            tickPlacement: "on",
          },
          yaxis: yAxisOptions,
          legend: {
            show: true,
            position: "right",
          },
          dataLabels: {
            formatter: (val) => {
              return `${val}`;
            },
            offsetY: -20,

            style: {
              colors: ["black"],
              fontSize: "10",
            },
            textAnchor: "middle",
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "9px",
              borderRadius: 5,
              dataLabels: {
                position: "top",
              },
            },
          },
        }}
      />
    </>
  );
};

export default ReservationGraph;
