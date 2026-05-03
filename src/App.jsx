import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ─── Lazy Imports ───────────────────────────────────────────────
const Home = lazy(() => import("@/page/Home"));
const Shop = lazy(() => import("@/page/Shop"));
const Journal = lazy(() => import("@/page/Journal"));
const NotFound = lazy(() => import("@/page/NotFound"));
const ShopSinglePg = lazy(() => import("@/page/ShopSinglePg"));
const Faq = lazy(() => import("@/page/Faq"));
const Terms = lazy(() => import("@/page/Terms"));
const ComingSoonPg = lazy(() => import("@/page/ComingSoonPg"));
const LookBookPg = lazy(() => import("@/page/LookBookPg"));
const AboutPg = lazy(() => import("@/page/AboutPg"));
const ContactUsPg = lazy(() => import("@/page/ContactUsPg"));
const StoreLocatorPg = lazy(() => import("@/page/StoreLocatorPg"));
const CollectionPg = lazy(() => import("@/component/collection/CollectionComp"));

const CartLayout = lazy(() => import("@/component/shopMain/shopPage/cartLayout/CartLayout"));
const Cart = lazy(() => import("@/component/shopMain/shopPage/cart/Cart"));
const ShopCheckout = lazy(() => import("@/component/shopMain/shopPage/shopCheckout/ShopCheckout"));
const ShopInfo = lazy(() => import("@/component/shopMain/shopPage/shopInfo/ShopInfo"));
const OrderTracking = lazy(() => import("@/component/shopMain/shopPage/orderTracking/OrderTracking"));

const DashboardLayout = lazy(() => import("@/component/mainDashboard/rootDashboard/DashboardLayout"));
const DashboardAccount = lazy(() => import("@/component/mainDashboard/dashborarAllComponent/DashboardAccount"));
const DashboardOrder = lazy(() => import("@/component/mainDashboard/dashborarAllComponent/DashboardOrder"));
const DashboardAddress = lazy(() => import("@/component/mainDashboard/dashborarAllComponent/DashboardAddress"));
const DashboardAccDetails = lazy(() => import("@/component/mainDashboard/dashborarAllComponent/DashboardAccDetails"));
const DashboardWishlist = lazy(() => import("@/component/mainDashboard/dashborarAllComponent/DashboardWishlist"));
const DashboardDownload = lazy(() => import("@/component/mainDashboard/dashborarAllComponent/DashboardDownload"));
const LogOut = lazy(() => import("@/component/mainDashboard/dashborarAllComponent/LogOut"));

const RegiLog = lazy(() => import("@/component/auth/regiLog/RegiLog"));
const SingleBlog = lazy(() => import("@/component/common/SingleBlog"));

// ─── Non-lazy ──────────────────────────────────────────────────
import Rootlayout from "@/rootlayout/Rootlayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SectionSkeleton from "./component/common/skeleton/SectionSkeleton";

// ─── Reusable Suspense Wrapper ──────────────────────────────────
const S = ({ children }) => (
  <Suspense fallback={<SectionSkeleton />}>{children}</Suspense>
);

// ─── Router ────────────────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true,                  element: <S><Home /></S> },
      { path: "collection",           element: <S><CollectionPg /></S> },
      { path: "journal",              element: <S><Journal /></S> },
      { path: "lookbook",             element: <S><LookBookPg /></S> },
      { path: "shop",                 element: <S><Shop /></S> },
      { path: "/shop-single/:id",     element: <S><ShopSinglePg /></S> },
      { path: "contact",              element: <S><ContactUsPg /></S> },
      { path: "store-locator",        element: <S><StoreLocatorPg /></S> },

      {
        path: "cart",
        element: <S><CartLayout /></S>,
        children: [
          { index: true,                          element: <S><Cart /></S> },
          { path: "/cart/shoping-and-checkout",   element: <S><ShopCheckout /></S> },
          { path: "/cart/order-recived",          element: <S><ShopInfo /></S> },
          { path: "/cart/order-tracking",         element: <S><OrderTracking /></S> },
        ],
      },

      {
        path: "/dashboard",
        element: <S><DashboardLayout /></S>,
        children: [
          { index: true,                          element: <S><DashboardAccount /></S> },
          { path: "/dashboard/order",             element: <S><DashboardOrder /></S> },
          { path: "/dashboard/address",           element: <S><DashboardAddress /></S> },
          { path: "/dashboard/account-details",   element: <S><DashboardAccDetails /></S> },
          { path: "/dashboard/wishlist",          element: <S><DashboardWishlist /></S> },
          { path: "/dashboard/downloads",         element: <S><DashboardDownload /></S> },
        ],
      },

      { path: "faq",                  element: <S><Faq /></S> },
      { path: "/about",               element: <S><AboutPg /></S> },
      { path: "/logout",              element: <S><LogOut /></S> },
      { path: "/elements/blog-posts", element: <S><Journal /></S> },
      { path: "/elements/blog",       element: <S><SingleBlog /></S> },
      { path: "/elements/terms",      element: <S><Terms /></S> },
      { path: "coming-soon",          element: <S><ComingSoonPg /></S> },
      { path: "login-register",       element: <S><RegiLog /></S> },
      { path: "*",                    element: <S><NotFound /></S> },
    ],
  },
]);

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