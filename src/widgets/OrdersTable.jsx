import React, { useState, useEffect } from "react";
import axios from "axios";
import BasicTable from "@components/BasicTable";
import Pagination from "@ui/Pagination";
import Search from "@ui/Search";
import { useWindowSize } from "react-use";

const OrdersTable = () => {
  const { width } = useWindowSize();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    itemsPerPage: 10,
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbwimtycCca8PsR_HJgYupB1CdPLbF5_s5LN7K6ZeSBQf6i0ADwKgxmhG9hjkNZAJcZ2Iw/exec"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const { currentPage, itemsPerPage } = pagination;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const fixedValues = [
    "Ration Card",
    "Voter Id",
    "Aadhar Card",
    "Pan Card",
    "College Application",
    "License and RTO Services",
    "Money Transfer Services",
    "Counselling Apply",
    "TN Police",
    "TNEB",
    "Online Payments",
    "Dharisanam Bookings",
    "Typing Services",
    "MSME",
    "UDAY Scheme",
    "Income Certificate",
    "Community Certificate",
    "Nativity Certificate",
    "Intercaste Marriage Certificate",
    "Obc Certificate",
    "No Male Child Certificate",
    "First Graduate Certificate",
    "Small/Marginal Farmer Certificate",
    "Widow Certificate",
    "Deserted Women Certificate",
    "Disability Pension Scheme",
    "Widow Pension Scheme",
    "Deserted Women Pension Scheme",
    "Unmarried Women Pension Scheme",
    "Old Age Pension Scheme",
    "TN Employment Registration",
    "Government Job Application",
    "Passport",
    "Flight Ticket",
    "Visa",
    "Certificate Attestation",
    "Bus Booking",
    "Visa Stamping",
    "Cruise Booking",
    "Hotel Booking",
    "Medical Appointment",
    "Tour Services",
    "Outline",
  ];

  const filteredData = data.filter((item) => {
    const serviceUnit = item["Service Unit Report "]; // Note the extra space in the key
    return (
      serviceUnit &&
      fixedValues.includes(serviceUnit.trim()) &&
      serviceUnit.toLowerCase().includes(query.toLowerCase())
    );
  });

  const paginatedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setPagination({ ...pagination, currentPage: page });
    }
  };

  const columns = [
    {
      title: "Service Unit Report",
      dataIndex: "Service Unit Report ",
      key: "Service Unit Report ",
      fixed: "left",
      render: (text) => (text ? text : null), // Render text if it exists
    },
    ...Object.keys(data[0] || {})
      .filter((key) => key !== "Service Unit Report ") // Exclude the fixed column from this mapping
      .map((key) => ({
        title: key.trim(),
        dataIndex: key.trim(),
        key: key.trim(),
      })),
  ];

  const handleExport = async () => {
    const exportUrl =
      "https://script.google.com/macros/s/AKfycbxxXOD5B6DNDRQ1uaABOAqc_et_286dw__ZOxXpIfpquN2wbyhaARGmn5BpfYbEDUkx2g/exec"; // Replace with your Web App URL
    try {
      const response = await axios.get(exportUrl);
      const { url } = response.data;
      window.open(url, "_blank"); // Open the download link in a new tab
    } catch (error) {
      console.error("Error exporting file:", error);
    }
  };

  return (
    <div className="orders-table">
      <div className="flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <Search
            wrapperClass="flex-1"
            value={query}
            onChange={setQuery}
            placeholder="Search for Service..."
          />
          <button
            className="btn btn--base h-[50px] px-5 gap-2"
            onClick={handleExport}
          >
            <i className="icon-arrow-down-to-line-regular text-[16px]" />
            Export
          </button>
        </div>

        <BasicTable
          columns={columns}
          dataSource={paginatedData}
          rowKey="Service Unit Report " // Ensure this key is correct with the space
          pagination={false}
          scroll={{ x: "max-content" }}
        />

        <Pagination
          currentPage={currentPage}
          totalItems={filteredData.length} // Use filteredData for pagination
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default OrdersTable;
