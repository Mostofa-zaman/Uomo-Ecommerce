"use client";

import React, { useState } from "react";
import Container from "../common/Container";
import { IoSearchOutline, IoClose } from "react-icons/io5";

const storesData = [
  {
    id: 1,
    city: "London",
    address: "1418 River Drive, Suite 35 Cottonhall",
    country: "United Kingdom",
    phone: "+44 123-456-789",
    hours: "10 am - 10 pm",
    map: "https://www.google.com/maps?q=London&output=embed",
  },
  {
    id: 2,
    city: "Istanbul",
    address: "1418 River Drive, Suite 35 Cottonhall",
    country: "Turkey",
    phone: "+90 123-456-789",
    hours: "10 am - 10 pm",
    map: "https://www.google.com/maps?q=Istanbul&output=embed",
  },
  {
    id: 3,
    city: "New York",
    address: "1418 River Drive, Suite 35 Cottonhall",
    country: "USA",
    phone: "+1 246-345-0695",
    hours: "10 am - 10 pm",
    map: "https://www.google.com/maps?q=New+York&output=embed",
  },
];

const Store_location = () => {
  const [search, setSearch] = useState("");
  const [activeStore, setActiveStore] = useState(storesData[0]);

  const filteredStores = storesData.filter((store) =>
    store.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-20 lg:my-[96px] pt-[55px]">
      <Container>
        <h3 className="text-2xl lg:text-3xl font-bold uppercase">
          Store Locator
        </h3>

        <div className="mt-6 lg:mt-10 flex flex-col xl:flex-row gap-6">

          {/* LEFT SIDE */}
          <div className="w-full xl:w-[40%]">

            {/* SEARCH */}
            <div className="p-4 border flex items-center justify-between rounded-md">
              <input
                type="text"
                placeholder="Search city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none"
              />
              <IoSearchOutline />
            </div>

            {/* STORE LIST */}
            <div className="mt-6 space-y-4">
              {filteredStores.length > 0 ? (
                filteredStores.map((store) => (
                  <div
                    key={store.id}
                    onClick={() => setActiveStore(store)}
                    className={`p-4 border rounded cursor-pointer transition ${
                      activeStore.id === store.id
                        ? "bg-gray-100 border-black"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <h5 className="font-semibold text-lg">
                      Store in {store.city}
                    </h5>

                    <p className="text-sm mt-2">{store.address}</p>
                    <p className="text-sm">{store.country}</p>
                    <p className="text-sm">{store.phone}</p>
                    <p className="text-sm">{store.hours}</p>

                    <button className="text-sm mt-3 underline">
                      SEE ON MAP
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No store found</p>
              )}
            </div>
          </div>

          {/* RIGHT SIDE (MAP) */}
          <div className="w-full xl:w-[60%] relative">

            {/* MAP */}
            <iframe
              src={activeStore.map}
              className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-md"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

            {/* OVERLAY CARD */}
            <div className="mt-4 md:absolute md:top-1/2 md:left-10 md:-translate-y-1/2 bg-white p-6 shadow rounded w-full md:w-[350px]">

              <div className="flex justify-between items-center">
                <h5 className="font-semibold text-lg">
                  {activeStore.city}
                </h5>
                <button onClick={() => setActiveStore(null)}>
                  <IoClose />
                </button>
              </div>

              {activeStore && (
                <>
                  <p className="text-sm mt-2">{activeStore.address}</p>
                  <p className="text-sm">{activeStore.country}</p>
                  <p className="text-sm">{activeStore.phone}</p>
                  <p className="text-sm">{activeStore.hours}</p>
                </>
              )}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Store_location;