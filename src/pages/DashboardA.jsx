import AppBar from "@components/AppBar";
import AppGrid from "@components/AppGrid";
import Statistics from "@widgets/Statistics";
import SalesAnalyticsArea from "@widgets/SalesAnalyticsArea";
import SalesByCategory from "@widgets/SalesByCategory";
import TopSelling from "@widgets/TopSelling";
import TrendingProduct from "@widgets/TrendingProduct";
// import DataTable from "@components/DataTable";

import OrderStatuses from "@widgets/OrderStatuses";
import FailedOrders from "@widgets/FailedOrders";
import OrdersTable from "@widgets/OrdersTable";

const widgets = {
  statistics: <Statistics />,
  sales_analytics: <SalesAnalyticsArea />,
  sales_by_category: <SalesByCategory />,
  top_selling: <TopSelling />,
  trending_product: <TrendingProduct />,
};

const DashboardA = () => {
  return (
    <>
      <AppBar title="AIMS Sales Dashboard" />
      <AppGrid
        id="dashboard_a"
        widgets={widgets}
        cols={{ xl: 4, lg: 3, md: 2 }}
      />
      {/* <DataTable /> */}

      <div className="layout-wrapper flex flex-col flex-1 gap-6 md:gap-8">
        <div className="grid grid-cols-1 gap-6 md:gap-8 3xl:grid-cols-2">
          <OrderStatuses />
          <FailedOrders />
        </div>
        <OrdersTable />
      </div>
    </>
  );
};

export default DashboardA;
