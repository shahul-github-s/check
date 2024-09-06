const sales_chart = {
  week: { data: [] },
  month: { data: [] },
  year: { data: [] },
};

// Fetch data from Google Apps Script
const fetchSalesData = async () => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzLK64lBUyInFxQPDX-_WbdR5lSd_KnAd98l9eFl3nGChy9aZI0Cb9AEnDWH_u-qUNYaQ/exec"
    ); // Replace with your actual Google Apps Script URL
    const data = await response.json();

    // Populate sales_chart with fetched data
    sales_chart.week.data = data.week;
    sales_chart.month.data = data.month;
    sales_chart.year.data = data.year;
  } catch (error) {
    console.error("Error fetching sales data:", error);
  }
};

// Call the function to fetch data
fetchSalesData();

export default sales_chart;
