import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { ChartData, ChartItem } from "chart.js";

export interface ChartDashboardProps {
    data1: ChartData;
    data2: ChartData;
}

const ChartDashboard = ({ data1, data2 }: ChartDashboardProps) => {
    const [ch1, setChart1] = useState<Chart | null>(null);
    const [ch2, setChart2] = useState<Chart | null>(null);
    useEffect(() => {
        if (ch1 || ch2) {
            ch1?.destroy();
            ch2?.destroy();
        }
        const ctx1 = document.getElementById("chartDashboard1") as ChartItem;
        const ctx2 = document.getElementById("chartDashboard2") as ChartItem;
        const chart1 = new Chart(ctx1, {
            type: "bar",
            data: data1,
            options: {
                responsive: true,
            },
        });
        const chart2 = new Chart(ctx2, {
            type: "pie",
            data: data2,
            options: {
                responsive: true,
            },
        });
        setChart1(chart1);
        setChart2(chart2);
    }, []);

    return (
        <div className="flex w-full mt-10 gap-16 max-w-1150 m-auto">
            <div className="w-3/5 m-auto">
                <canvas id="chartDashboard1"></canvas>
            </div>
            <div className="w-2/5">
                <canvas id="chartDashboard2"></canvas>
            </div>
        </div>
    );
};

export default ChartDashboard;
