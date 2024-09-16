import Spring from "@components/Spring";
import StatisticsNumber from "@components/StatisticsNumber2";
import { useState, useEffect, Fragment } from "react";

const FailedOrders = () => {
  const [data, setData] = useState([]); // Start with an empty array

  useEffect(() => {
    // Define the function to fetch data
    const fetchData = () => {
      fetch(
        "https://script.google.com/macros/s/AKfycbzyBeVO_V9BzoZiAYtbxeS_Q5Jazwg2jb_8ApieQXMik4d4Bj5ZLCXzPv4ndJFKSjV5jg/exec"
      )
        .then((response) => response.json())
        .then((sheetData) => {
          setData([
            {
              icon: "cart-circle-xmark",
              value: sheetData.order1.value,
              label: sheetData.order1.label,
            },
            {
              icon: "arrow-right-arrow-left",
              value: sheetData.order2.value,
              label: sheetData.order2.label,
            },
            {
              icon: "ban",
              value: sheetData.order3.value,
              label: sheetData.order3.label,
            },
            {
              icon: "square-fragile",
              value: sheetData.order4.value,
              label: sheetData.order4.label,
            },
          ]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    // Start polling every 100 milliseconds
    const intervalId = setInterval(fetchData, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Spring className="bg-blue md:h-[180px] rounded-[20px] p-5 xs:p-6">
      <p className="text-white text-[15px] font-semibold uppercase mb-2.5">
        Top Rank
      </p>
      <div
        className="grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4
                 md:items-center md:gap-0"
      >
        {/* Conditionally render data only when it's available */}
        {data.length > 0 &&
          data.map((item, index) => (
            <Fragment key={item.label}>
              <StatisticsNumber item={item} index={index} data={data} />
              {index !== data.length - 1 && (
                <div className="h-[1px] bg-border md:hidden" />
              )}
            </Fragment>
          ))}
      </div>
    </Spring>
  );
};

export default FailedOrders;
