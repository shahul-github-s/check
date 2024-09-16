import React, { useState, useEffect } from "react";
import Spring from "@components/Spring";
import Select from "@ui/Select";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@contexts/themeContext";
import { useWindowSize } from "react-use";
import { generateGridPoints, numFormatter } from "@utils/helpers";
import { PERIODS } from "@constants/options";
import sales_chart from "@db/sales_chart"; // Import sales_chart

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="bg-peach p-2.5 rounded-md dark:shadow-md">
        <p className="text-[18px] font-semibold !text-white mb-1">{label}</p>
        <p className="text-[15px] font-semibold text-white">
          Sales: ₹{payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};

// Default data for the chart
const defaultData = {
  week: [
    { name: "Mon", b: 0 },
    { name: "Tues", b: 0 },
    { name: "Wednes", b: 0 },
    { name: "Thurs", b: 0 },
    { name: "Fri", b: 0 },
    { name: "Satur", b: 0 },
    { name: "Sun", b: 0 },
  ],
  month: [
    { name: "01-05", b: 0 },
    { name: "06-10", b: 0 },
    { name: "11-15", b: 0 },
    { name: "16-20", b: 0 },
    { name: "21-25", b: 0 },
    { name: "26-31", b: 0 },
  ],
  year: [
    { name: "Jan-Mar", b: 0 },
    { name: "Apr-Jun", b: 0 },
    { name: "Jul-Sep", b: 0 },
    { name: "Oct-Dec", b: 0 },
  ],
};

// Fetch data from Google Apps Script
const fetchSalesData = async () => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwEg7PSNzrZmd8AVxl-_pGrijyazyhbDVJ29wEI3IibLcqZg9bySaTuVtUxaghkERtnZw/exec"
    );
    const data = await response.json();

    // Update the sales_chart object
    sales_chart.week.data = data.week;
    sales_chart.month.data = data.month;
    sales_chart.year.data = data.year;
  } catch (error) {
    console.error("Error fetching sales data:", error);
  }
};
const SalesAnalyticsArea = () => {
  const { width } = useWindowSize();
  const { theme } = useTheme();
  const [period, setPeriod] = useState(PERIODS[0]);
  const [chartData, setChartData] = useState([]);
  const points = generateGridPoints("salesAnalytics", 50, "x");

  useEffect(() => {
    // Fetch data immediately
    fetchSalesData();

    // Set up polling to fetch data every second
    const interval = setInterval(() => {
      fetchSalesData();
      // Update chart data with the latest data
      setChartData(sales_chart[period.value].data);
    }, 100); // 1000ms = 1 second

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [period]);

  useEffect(() => {
    // Update chart data whenever the period changes
    setChartData(sales_chart[period.value].data);
  }, [period]);

  if (!chartData || chartData.length === 0) {
    const data = defaultData;
    // Update the sales_chart object
    sales_chart.week.data = data.week;
    sales_chart.month.data = data.month;
    sales_chart.year.data = data.year;
    // return <div>Sales Analytics Loading...</div>; // Display loading state
  }

  return (
    <Spring className="card flex flex-col gap-[22px] h-[392px] xs:h-[315px] p-5 xs:p-6 md:h-full">
      <div className="flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between xs:gap-5">
        <h2>Sales Analytics</h2>
        <div className="min-w-[105px]">
          <Select
            value={period}
            variant="minimal"
            onChange={setPeriod}
            options={PERIODS}
          />
        </div>
      </div>
      <div className="flex-1 overflow-hidden -mr-2 md:-ml-11 md:-mr-4">
        <ResponsiveContainer width="99%" height="100%" id="salesAnalytics">
          <AreaChart
            data={chartData}
            margin={{ top: 0, right: 7, left: 7, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="salesAnalyticsFill"
                x1="-124.434"
                y1="-94.766"
                x2="-124.434"
                y2="227.785"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--peach)" />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "white" : "transparent"}
                  stopOpacity="0.01"
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              horizontalPoints={points}
              strokeWidth={1}
              stroke="var(--cartesian-grid)"
              strokeDasharray="8 8"
            />
            <XAxis
              dataKey="name"
              dy={10}
              axisLine={false}
              tickLine={false}
              hide={width < 768}
            />
            <YAxis
              tickCount={7}
              tickFormatter={(value) => numFormatter(value, 0)}
              axisLine={false}
              tickLine={false}
              hide={width < 768}
            />
            <Tooltip
              cursor={{ strokeDasharray: "8 8", stroke: "var(--peach)" }}
              content={<CustomTooltip />}
            />
            <Area
              type="monotone"
              dataKey="b"
              stroke="var(--peach)"
              strokeWidth={3}
              strokeLinecap="round"
              fill="url(#salesAnalyticsFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Spring>
  );
};

export default SalesAnalyticsArea;
