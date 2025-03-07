/* eslint-disable react/jsx-key */
import { LayoutCard } from "../../component/layout";
import { CardItems } from "../../component/molecul";
import { Header } from "../../component/organism";
import data from "../../utils/data/DashboardCard.json";

const DashboardPage = () => {
  return (
    <>
      <Header pageName={"Dashboard"} />
      <div className="grid grid-cols-4 gap-10">
        {data.map((item, index) => (
          <LayoutCard>
            <CardItems
              icon={item.icon}
              total={item.total}
              title={item.title}
              index={index}
            />
            {/* <CardItems data={data} /> */}
          </LayoutCard>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;

// import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import Chart from "react-apexcharts";
// import { optionsBarandGrafik } from "../utils";

// const DashboardPage = () => {

//   return (
//     // <div className="app">
//     //   <div className="row">
//     //     <div className="mixed-chart">
//     // <Chart
//     //   options={chartOptions.options}
//     //   series={chartOptions.series}
//     //   type="line"
//     //   width="500"
//     // />
//     //     </div>
//     //   </div>
//     // </div>
//     // <div className="donut">
//     //   <Chart
//     //     options={chartData.options}
//     //     series={chartData.series}
//     //     type="donut"
//     //     width="380"
//     //   />
//     // </div>
//     <ReactApexChart
//       options={optionsBarandGrafik}
//       series={state.series}
//       type="bar"
//       height={350}
//     />
//   );
// };

// export default DashboardPage;
