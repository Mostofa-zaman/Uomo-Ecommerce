import React, { useState, useCallback, useEffect, useRef } from "react";
import Product from "./Product";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Progress } from "@/components/ui/progress";

const ShopAllProdVirtual = ({ allProductItems }) => {
  const [showItems, setShowItems] = useState(4);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [screenSize, setScreenSize] = useState("lg");

  const parentRef = useRef(null);

  /* -------------------- Responsive Logic -------------------- */
  const calculateItemsPerRow = useCallback(() => {
    const width = window.innerWidth;

    if (width < 640) {
      setScreenSize("sm");
      setItemsPerRow(1);
    } else if (width < 1024) {
      setScreenSize("md");
      setItemsPerRow(3);
    } else {
      setScreenSize("lg");
      setItemsPerRow(4);
    }
  }, []);

  const getContainerHeight = useCallback(() => {
    if (screenSize === "sm") return 800;
    if (screenSize === "md") return 800;
    return 2000;
  }, [screenSize]);

  const getEstimatedRowHeight = () => {
    if (screenSize === "sm") return 500;
    if (screenSize === "md") return 450;
    return 500;
  };

  /* -------------------- Scroll Handler -------------------- */
  const handleScroll = useCallback(() => {
    if (!parentRef.current || !allProductItems?.length) return;

    const { scrollTop, scrollHeight, clientHeight } = parentRef.current;

    const estimatedRowHeight = getEstimatedRowHeight();
    const visibleRows = Math.ceil(clientHeight / estimatedRowHeight) + 1;

    const calculatedItems = Math.min(
      Math.ceil(scrollTop / estimatedRowHeight) * itemsPerRow +
        visibleRows * itemsPerRow,
      allProductItems.length
    );

    setShowItems(calculatedItems);

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setShowItems(allProductItems.length);
    }
  }, [itemsPerRow, allProductItems?.length, screenSize]);

  /* -------------------- Effects -------------------- */
  useEffect(() => {
    calculateItemsPerRow();

    window.addEventListener("resize", calculateItemsPerRow);
    return () =>
      window.removeEventListener("resize", calculateItemsPerRow);
  }, [calculateItemsPerRow]);

  useEffect(() => {
    setShowItems(itemsPerRow);
  }, [itemsPerRow]);

  /* -------------------- Virtualizer -------------------- */
  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(allProductItems?.length / itemsPerRow),
    getScrollElement: () => parentRef.current,
    estimateSize: getEstimatedRowHeight,
    overscan: 5,
  });

  /* -------------------- Grid Class -------------------- */
  const getGridClassName = () => {
    if (screenSize === "sm") {
      return "grid grid-cols-1 gap-4 px-4";
    }

    if (screenSize === "md") {
      return "grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 px-4 sm:px-0";
    }

    return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7.5 px-4 sm:px-0";
  };

  /* -------------------- Render -------------------- */
  return (
    <div>
      {/* Scroll Container */}
      <div
        ref={parentRef}
        onScroll={handleScroll}
        className="w-full"
        style={{
          height: `${getContainerHeight()}px`,
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => {
            const start = virtualItem.index * itemsPerRow;
            const end = Math.min(
              start + itemsPerRow,
              allProductItems?.length
            );

            const products =
              allProductItems?.slice(start, end) || [];

            return (
              <div
                key={virtualItem.key}
                className={getGridClassName()}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                {products.map((items, index) => (
                  <Product
                    key={`${virtualItem.key}-${index}`}
                    imgAlt={items.title}
                    catagory={items.catagory}
                    itemName={items.title}
                    itemPrice={items.price}
                    discountPrice={items.discount}
                    imgSrc={items.thumbnail}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Section */}
      <div className="mt-[50px] mx-auto flex w-full max-w-full flex-col items-center px-4 uppercase sm:max-w-[90%] sm:px-0 md:max-w-75">
        <p className="texts_14_medium pb-1.25 text-black">
          Showing {Math.min(showItems, allProductItems?.length || 0)} of{" "}
          {allProductItems?.length} Items
        </p>

        <Progress
          value={
            allProductItems?.length
              ? (Math.min(showItems, allProductItems.length) /
                  allProductItems.length) *
                100
              : 0
          }
          className="h-full w-full items-center rounded-[10px] bg-[#E4E4E4] transition-all duration-500 [&>div]:bg-black"
        />
      </div>
    </div>
  );
};

export default ShopAllProdVirtual;