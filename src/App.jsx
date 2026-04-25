import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "@/rootlayout/Rootlayout";
import Home from "@/page/Home";
import Shop from "@/page/Shop";
import Cart from "./component/shopMain/shopPage/cart/Cart";
import CollectionPg from "./component/collection/CollectionComp";
import Journal from "./page/Journal";
import NotFound from "./page/NotFound";
import ShopSinglePg from "./page/ShopSinglePg";
import OrderTracking from "./component/shopMain/shopPage/orderTracking/OrderTracking";
import ShopCheckout from "./component/shopMain/shopPage/shopCheckout/ShopCheckout";
import ShopInfo from "./component/shopMain/shopPage/shopInfo/ShopInfo";
import DashboardLayout from "./component/mainDashboard/rootDashboard/DashboardLayout";
import DashboardAccount from "./component/mainDashboard/dashborarAllComponent/DashboardAccount";
import DashboardOrder from "./component/mainDashboard/dashborarAllComponent/DashboardOrder";
import DashboardAddress from "./component/mainDashboard/dashborarAllComponent/DashboardAddress";
import DashboardAccDetails from "./component/mainDashboard/dashborarAllComponent/DashboardAccDetails";
import DashboardWishlist from "./component/mainDashboard/dashborarAllComponent/DashboardWishlist";
import DashboardDownload from "./component/mainDashboard/dashborarAllComponent/DashboardDownload";
import LogOut from "./component/mainDashboard/dashborarAllComponent/LogOut";
import CartLayout from "./component/shopMain/shopPage/cartLayout/CartLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Faq from "./page/Faq";
import Terms from "./page/Terms";
import ComingSoonPg from "./page/ComingSoonPg";
import RegiLog from "./component/auth/regiLog/RegiLog";
import SingleBlog from "./component/common/SingleBlog";
import LookBookPg from "./page/LookBookPg";
import AboutPg from "./page/AboutPg";
import ContactUsPg from "./page/ContactUsPg";
import StoreLocatorPg from "./page/StoreLocatorPg";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      // for home route
      { index: true, element: <Home /> },

      // for collection route
      { path: "collection", element: <CollectionPg /> },

      // for journal route
      { path: "journal", element: <Journal /> },

      //for lookbook route
      { path: "lookbook", element: <LookBookPg /> },

      // for shop page route
      { path: "shop", element: <Shop /> },
      { path: "shop-single", element: <ShopSinglePg /> },
      { path: "contact", element: <ContactUsPg /> },
      { path: "store-locator", element: <StoreLocatorPg /> },

      // for shopping cart route
      {
        path: "cart",
        element: <CartLayout />,
        children: [
          { index: true, element: <Cart /> },
          { path: "/cart/shoping-and-checkout", element: <ShopCheckout /> },
          { path: "/cart/order-recived", element: <ShopInfo /> },
          { path: "/cart/order-tracking", element: <OrderTracking /> },
        ],
      },

      //  for dashboard route
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardAccount /> },
          { path: "/dashboard/order", element: <DashboardOrder /> },
          { path: "/dashboard/address", element: <DashboardAddress /> },
          {
            path: "/dashboard/account-details",
            element: <DashboardAccDetails />,
          },
          { path: "/dashboard/wishlist", element: <DashboardWishlist /> },
          { path: "/dashboard/downloads", element: <DashboardDownload /> },
        ],
      },
      // for Faq
      { path: "faq", element: <Faq /> },
      // for Faq
      { path: "/about", element: <AboutPg /> },

      //for logout
      { path: "/logout", element: <LogOut /> },

      // for blog-post
      { path: "/elements/blog-posts", element: <Journal /> },
      { path: "/elements/blog", element: <SingleBlog /> },
      // for terms and condition
      { path: "/elements/terms", element: <Terms /> },

      // for comming soon pages route
      { path: "coming-soon", element: <ComingSoonPg /> },

      //Regilogin page
      { path: "login-register", element: <RegiLog /> },

      // 404 not found
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
