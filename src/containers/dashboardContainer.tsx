import { ChartData } from "chart.js";
import React, { useEffect } from "react";
import { IconInbox, IconItems, IconPdf } from "../components/icons";
import ChartDashboard from "../components/molecules/chartDashboard";

const data: ChartData<"bar"> = {
    labels: ["Red", "Red", "Testing", "Yellow", "Green"],

    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3, 3, 1, 9],
            backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};
const data2: ChartData<"pie"> = {
    labels: ["1", "2"],
    datasets: [
        {
            label: "Label 1",
            data: [30, 12, 12],
            backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 0.2)"],
        },
        {
            label: "Label 1",
            data: [300, 125, 38],
            backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 0.2)"],
        },
        {
            label: "Label 1",
            data: [30, 12, 12],
            backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 0.2)"],
        },
        {
            label: "Label 1",
            data: [30, 12, 12],
            backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 0.2)"],
        },
    ],
};
const DashboardContainer = () => {
    useEffect(() => {}, []);
    return (
        <div className="py-10 m-auto w-full px-20 2xl:px-36 max-w-1500">
            <h1 className="font-roboto text-5xl font-bold">DASHBOARD</h1>
            <div className="mt-16 flex justify-between">
                <div className="bg-primary text-white py-5 px-14 cursor-pointer transition-all hover:shadow-sm hover:text-primary hover:bg-white rounded-2xl font-robotoMono font-bold text-base grid grid-cols-2">
                    <h2 className="col-start-1 col-end-3 text-center">PROJECTS NUMBER</h2>
                    <IconItems className=" stroke-current w-10 my-auto " />
                    <span className="text-7xl">25</span>
                </div>
                <div className="bg-primary text-white py-5 px-14 cursor-pointer transition-all hover:shadow-sm hover:text-primary hover:bg-white rounded-2xl font-robotoMono font-bold text-base grid grid-cols-2">
                    <h2 className="col-start-1 col-end-3 text-center">INBOX MESSAGES</h2>
                    <IconInbox className="fill-current w-10 my-auto " />
                    <span className="text-7xl">21</span>
                </div>
                <div className="bg-primary text-white py-5 px-14 rounded-2xl cursor-pointer transition-all hover:shadow-sm hover:text-primary hover:bg-white font-robotoMono font-bold text-base grid grid-cols-2">
                    <h2 className="col-start-1 col-end-3 text-center">DOWNLOADS CV</h2>
                    <IconPdf className="fill-current w-12 my-auto " />
                    <span className="text-7xl">37</span>
                </div>
            </div>
            <ChartDashboard data1={data} data2={data2} />
        </div>
    );
};

export default DashboardContainer;
