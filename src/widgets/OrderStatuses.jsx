import Spring from "@components/Spring";
import StatisticsNumber from "@components/StatisticsNumber";
import StatisticsNumber2 from "@components/StatisticsNumber2";
import { useState, useEffect, Fragment } from "react";

const OrderStatuses = () => {
  const [excess, setExcess] = useState([
    {
      icon: "square-list",
      value: 0, // Default value
      label: "Lead Count",
    },
  ]);

  const [data, setData] = useState([
    {
      icon: "square-fragile",
      value: 0, // Default value
      label: "Unsettled Amount",
    },
    {
      icon: "box-check",
      value: 0, // Default value
      label: "In Hand Cash",
    },
    {
      icon: "bars-progress",
      value: 0, // Default value
      label: "UPI Transaction",
    },
  ]);

  useEffect(() => {
    // Function to fetch data from Google Apps Script
    const fetchData = () => {
      fetch(
        "https://script.google.com/macros/s/AKfycbz6Ii_J9oaFD7F_nxFaDwxsSdls-7mQwM4ogEHfgSzJAMVffRBvorjwdtFTcOfjFWGErA/exec"
      )
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the fetched data
          setExcess([
            {
              // icon: "square-list",
              icon: "cart-circle-xmark",
              value: data.excess.leadCount, // U13
              label: "Lead Count",
            },
          ]);

          setData([
            {
              icon: "square-fragile",
              value: data.data.unsettledAmount, // U15
              label: "Unsettled Amount",
            },
            {
              icon: "box-check",
              value: data.data.inHandCash, // T5
              label: "In Hand Cash",
            },
            {
              icon: "bars-progress",
              value: data.data.upiTransaction, // T6
              label: "UPI Transaction",
            },
          ]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    // Set up polling every 100 milliseconds
    const intervalId = setInterval(fetchData, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Spring className="bg-turquoise md:h-[180px] rounded-[20px] p-5 xs:p-6">
      <p className="text-white text-[15px] font-semibold uppercase mb-2.5">
        Profit Tracker
      </p>
      <div className="grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4 md:items-center md:gap-0">
        {excess.map((item, index) => (
          <Fragment key={item.label}>
            <StatisticsNumber2 index={index} data={excess} item={item} />
            {index !== excess.length - 1 && (
              <div className="h-[1px] bg-border md:hidden" />
            )}
          </Fragment>
        ))}
        {data.map((item, index) => (
          <Fragment key={item.label}>
            <StatisticsNumber index={index} data={data} item={item} />
            {index !== data.length - 1 && (
              <div className="h-[1px] bg-border md:hidden" />
            )}
          </Fragment>
        ))}
      </div>
    </Spring>
  );
};

export default OrderStatuses;
