import React, { useEffect, useState } from "react";
import { ResponsiveContainer, Tooltip, Pie, PieChart, Cell } from "recharts";
import Spring from "@components/Spring";
import Select from "@ui/Select";
import { useWindowSize } from "react-use";
import { PERIODS } from "@constants/options";
import { commaFormatter, numFormatter } from "@utils/helpers";

// Default data to show when API data hasn't loaded yet
const defaultData = [
  {
    name: "General Service",
    data: {
      week: { profit: 0, products: 0 },
      month: { profit: 0, products: 0 },
      year: { profit: 0, products: 0 },
    },
    color: "turquoise",
    darkAura: "#1B3838",
    lightAura: "#F4FFFF",
  },
  {
    name: "E-Sevai",
    data: {
      week: { profit: 0, products: 0 },
      month: { profit: 0, products: 0 },
      year: { profit: 0, products: 0 },
    },
    color: "blue",
    darkAura: "#14344A",
    lightAura: "#F1F7FF",
  },
  {
    name: "Job Application Support",
    data: {
      week: { profit: 0, products: 0 },
      month: { profit: 0, products: 0 },
      year: { profit: 0, products: 0 },
    },
    color: "yellow",
    darkAura: "#3B300A",
    lightAura: "#FFFBF0",
  },
  {
    name: "Travel Services",
    data: {
      week: { profit: 0, products: 0 },
      month: { profit: 0, products: 0 },
      year: { profit: 0, products: 0 },
    },
    color: "peach",
    darkAura: "#3B300A",
    lightAura: "#FFFBF0",
  },
];

const SalesByCategory = () => {
  const { width } = useWindowSize();
  const [period, setPeriod] = useState(PERIODS[0]); // Default to the first period option
  const [data, setData] = useState(defaultData); // Start with default data

  // Define the fetchData function inside the component
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw4h3m4YxuFvbg0eD9A0oTM1mtvGbVsQdsGw_erIG9ZB66V_wnK9Chmz8eiuaXzTOvJvw/exec"
      );
      const jsonData = await response.json();

      // Set the data from the API response into the same structure
      setData([
        {
          name: "General Service",
          data: jsonData.generalService,
          color: "turquoise",
          darkAura: "#1B3838",
          lightAura: "#F4FFFF",
        },
        {
          name: "E-Sevai",
          data: jsonData.eSevai,
          color: "blue",
          darkAura: "#14344A",
          lightAura: "#F1F7FF",
        },
        {
          name: "Job Application Support",
          data: jsonData.jobApplicationSupport,
          color: "yellow",
          darkAura: "#3B300A",
          lightAura: "#FFFBF0",
        },
        {
          name: "Travel Services",
          data: jsonData.travelServices,
          color: "peach",
          darkAura: "#3B300A",
          lightAura: "#FFFBF0",
        },
      ]);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data immediately

    // Set up polling to fetch data every second
    const interval = setInterval(() => {
      fetchData();
    }, 1000); // 1000ms = 1 second

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Calculate the total profit for the selected period
  const getTotal = () => {
    return data.reduce((acc, curr) => acc + curr.data[period.value].profit, 0);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="basic-tooltip">
          {numFormatter(payload[0].value, 0, "₹")}
        </div>
      );
    }
    return null;
  };

  const LegendItem = ({ item, period }) => {
    const total = data.reduce(
      (acc, curr) => acc + curr.data[period].products,
      0
    );
    const percentage = (item.data[period].products / total) * 100;
    return (
      <div className="flex gap-2.5">
        <span
          className="flex items-center justify-center w-[15px] h-[15px] rounded-full mt-1 shrink-0"
          style={{ backgroundColor: item.lightAura }}
        >
          <span className={`w-[7px] h-[7px] rounded-full bg-${item.color}`} />
        </span>
        <div className="flex flex-col flex-1 gap-1">
          <p className="flex justify-between font-medium text-[15px] text-header">
            {item.name} ({percentage.toFixed(2)}%)
            <span>₹{commaFormatter(item.data[period].profit)}</span>
          </p>
          <p className="uppercase text-xs text-label">
            {commaFormatter(item.data[period].products)} Lead Count
          </p>
        </div>
      </div>
    );
  };

  return (
    <Spring className="card flex flex-col gap-4 p-5 h-full xs:p-6">
      <div className="flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between">
        <h2>Sales By Category</h2>
        <div className="min-w-[105px]">
          <Select options={PERIODS} value={period} onChange={setPeriod} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 flex-1 md:flex-row md:items-center md:gap-[65px]">
        <div
          className="relative overflow-hidden min-h-[240px] min-w-[240px] xs:min-w-[294px]
                     xs:min-h-[294px] m-auto md:m-0 md:w-[294px] md:h-[294px]"
        >
          <ResponsiveContainer width="99%" height="99%">
            <PieChart>
              <Pie
                data={data}
                dataKey={`data.${period.value}.profit`}
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={width < 414 ? 118 : 140}
                innerRadius={95}
                strokeWidth={0}
                fill="#8884d8"
              >
                {data.map((item, index) => (
                  <Cell key={index} fill={`var(--${item.color})`} />
                ))}
              </Pie>
              <Tooltip cursor={false} content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <span className="counter absolute-center">
            {numFormatter(getTotal(), 0, "₹")}
          </span>
        </div>
        <div className="flex flex-col flex-1 w-full gap-4">
          {data.map((item, index) => (
            <LegendItem key={index} item={item} period={period.value} />
          ))}
        </div>
      </div>
    </Spring>
  );
};

export default SalesByCategory;
