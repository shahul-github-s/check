import React, { useState, useEffect } from "react";
import StatisticsCard from "@components/StatisticsCard";

const DashAnalytics = () => {
  const [googleSheetData, setGoogleSheetData] = useState({
    todayRevenue: { value: "", trend: "" },
    todayVisitors: { value: "", trend: "" },
    todayProfit: { value: "", trend: "" },
    totalExpenses: { value: "", trend: "" },
  });

  const fetchGoogleSheetData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwwv-ppJv0GZiUhff6xOZqUmU3rtmiLLgjhFuObx2w2VkPrrKYFbTXYVAIwRNpNvu-Qdg/exec"
      );
      const data = await response.json();
      setGoogleSheetData(data);
    } catch (error) {
      console.error("Error fetching Google Sheets data:", error);
    }
  };

  useEffect(() => {
    fetchGoogleSheetData();
  }, []);

  const data = [
    {
      title: "Today Revenue",
      iconClass: "wallet-solid",
      value: googleSheetData.todayRevenue.value,
      valuePrefix: "₹",
      trend: googleSheetData.todayRevenue.trend,
    },
    {
      title: "Today Visitors",
      iconClass: "user-plus-solid",
      value: googleSheetData.todayVisitors.value,
      valuePrefix: "",
      trend: googleSheetData.todayVisitors.trend,
    },
    {
      title: "Today Profit",
      iconClass: "arrow-down-to-line-solid",
      value: googleSheetData.todayProfit.value,
      valuePrefix: "₹",
      trend: googleSheetData.todayProfit.trend,
    },
    {
      title: "Total Expenses",
      iconClass: "bag-shopping-solid",
      value: googleSheetData.totalExpenses.value,
      valuePrefix: "₹",
      trend: googleSheetData.totalExpenses.trend,
    },
  ];

  return (
    <div className="grid grid-cols-1 h-full gap-6 md:grid-cols-2 xl:gap-8 3xl:grid-cols-4">
      {data.map((item, index) => (
        <StatisticsCard
          key={index}
          data={item}
          chartClass="xl:w-[250px] 3xl:hidden min-[1800px]:block min-[1800px]:w-[110px] 5xl:w-[130px]"
        />
      ))}
    </div>
  );
};

export default DashAnalytics;
