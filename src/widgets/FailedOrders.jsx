import Spring from "@components/Spring";
import StatisticsNumber from "@components/StatisticsNumber2";
import { useState, useEffect, Fragment } from "react";

const FailedOrders = () => {
  const [data, setData] = useState([]); // Start with an empty array

  useEffect(() => {
    // Define the function to fetch data
    const fetchData = () => {
      fetch(
        "https://script.google.com/macros/s/AKfycbw2tc7af1ghd5RrVZAknKetGJgqZXItT5CnZZguIzKBSQgTSa-nUyra458Uvs2ksIwo0A/exec"
      )
        .then((response) => response.json())
        .then((sheetData) => {
          setData([
            {
              // icon: "cart-circle-xmark",
              icon: "arrow-right-arrow-left",
              value: sheetData.order1.value, // T18
              label: sheetData.order1.label, // S18
            },
            {
              icon: "arrow-right-arrow-left",
              value: sheetData.order2.value, // T19
              label: sheetData.order2.label, // S19
            },
            {
              // icon: "ban",
              icon: "square-list",

              value: sheetData.order3.value, // T20
              label: sheetData.order3.label, // S20
            },
            {
              // icon: "square-fragile",
              icon: "square-list",

              value: sheetData.order4.value, // T21
              label: sheetData.order4.label, // S21
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
