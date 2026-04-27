import React from "react";
import { Link } from "react-router-dom";

const DashboardAccount = () => {
  return (
    <>
      <section className="mt-6 lg:mt-25 px-2 sm:px-6 lg:ml-8 lg:px-0">
        <div className="container">
          <div className="w-full lg:w-[727px]">
            <p className="mb-7 font-normal text-sm leading-6 text-[rgb(34,34,34)] tracking-[0%]">
              Hello <span className="font-bold">alitfn58 </span>(not{" "}
              <span className="font-bold">alitfn58?</span>{" "}
              <Link to="/dashboard/logout">Log out</Link> )
            </p>
            <p className="mb-7 font-normal text-sm leading-6 text-[rgb(34,34,34)] tracking-[0%]">
              From your account dashboard you can view your{" "}
              <Link to="/dashboard/order" className="underline">
                recent orders
              </Link>
              , manage your{" "}
              <Link to="/dashboard/address" className="underline">
                shipping and billing addresses
              </Link>
              , and{" "}
              <a href="" className="underline">
                edit{" "}
              </a>{" "}
              <Link to="/dashboard/account-details" className="underline">
                your password and account details.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardAccount;