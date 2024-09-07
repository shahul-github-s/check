const ROUTES = {
  main: [
    {
      name: "Sales Analytics",
      icon: "objects-column",
      notifications: 2,
      links: [
        {
          path: "/",
          name: "Performance Overview",
        },
        {
          path: "/dashboard-b",
          name: "Dashboard B",
        },
        {
          path: "/dashboard-c",
          name: "Lead Status",
        },
        {
          path: "/dashboard-d",
          name: "Service Unit Report",
        },
      ],
    },
    // {
    //   name: "Products",
    //   icon: "bag-shopping",
    //   links: [
    //     {
    //       path: "/products",
    //       name: "Product List",
    //     },
    //     {
    //       path: "/product",
    //       name: "Product Page",
    //     },
    //     {
    //       path: "/create-product",
    //       name: "Create Product",
    //     },
    //   ],
    // },
    // {
    //   // name: "Orders",
    //   // icon: "square-list",
    //   // links: [
    //   //   {
    //   //     path: "/orders",
    //   //     name: "Orders Table",
    //   //   },
    //   //   {
    //   //     path: "/order-details",
    //   //     name: "Order Details",
    //   //   },
    //   //   {
    //   //     path: "/invoice",
    //   //     name: "Invoice",
    //   //   },
    //   // ],
    // },
    // {
    //   // path: "/sales",
    //   // name: "Sales",
    //   // icon: "badge-percent",
    // },
    // {
    //   // path: "/reviews",
    //   // name: "Reviews",
    //   // icon: "message-quote",
    // },
    // {
    //   // name: "Pages",
    //   // icon: "layer-group",
    //   // links: [
    //   //   {
    //   //     path: "/sign-in",
    //   //     name: "Sign In",
    //   //   },
    //   //   {
    //   //     path: "/sign-up",
    //   //     name: "Sign Up",
    //   //   },
    //   //   {
    //   //     path: "/404",
    //   //     name: "Page 404",
    //   //   },
    //   // ],
    // },
  ],
  secondary: [
    {
      path: "/settings",
      name: "Settings",
      icon: "gear",
    },
    {
      path: "/sign-in",
      name: "Logout",
      icon: "arrow-right-from-bracket",
    },
  ],
};

export default ROUTES;
