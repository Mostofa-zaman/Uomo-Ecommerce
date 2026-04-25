import React, { useState, useCallback, useEffect } from "react";
import Product from "./Product";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Progress } from "@/components/ui/progress";

const ShopAllProdVirtual = ({ allProductItems }) => {
  const [showItems, setShowItems] = useState(4);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [screenSize, setScreenSize] = useState("lg");
  const parentRef = React.useRef(null);

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
    return 2000; // lg
  }, [screenSize]);

  const getEstimatedRowHeight = () => {
    if (screenSize === "sm") return 380;
    if (screenSize === "md") return 380;
    return 400;
  };

  const handleScroll = useCallback(() => {
    if (!parentRef.current || !allProductItems?.length) return;

    const scrollTop = parentRef.current.scrollTop;
    const scrollHeight = parentRef.current.scrollHeight;
    const clientHeight = parentRef.current.clientHeight;

    const estimatedRowHeight = getEstimatedRowHeight();
    const visibleRows = Math.ceil(clientHeight / estimatedRowHeight) + 1;

    const calculatedItems = Math.min(
      Math.ceil(scrollTop / estimatedRowHeight) * itemsPerRow +
        visibleRows * itemsPerRow,
      allProductItems.length,
    );

    setShowItems(calculatedItems);

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setShowItems(allProductItems.length);
    }
  }, [itemsPerRow, allProductItems?.length, screenSize]);

  useEffect(() => {
    calculateItemsPerRow();

    window.addEventListener("resize", calculateItemsPerRow);
    return () => window.removeEventListener("resize", calculateItemsPerRow);
  }, [calculateItemsPerRow]);

  useEffect(() => {
    setShowItems(itemsPerRow);
  }, [itemsPerRow]);

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(allProductItems?.length / itemsPerRow),
    getScrollElement: () => parentRef.current,
    estimateSize: () => getEstimatedRowHeight(),
    overscan: 5,
  });

  const getGridClassName = () => {
    if (screenSize === "sm") {
      return "grid grid-cols-1 gap-4 px-4";
    }

    if (screenSize === "md") {
      return "grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 px-4 sm:px-0";
    }

    return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7.5 px-4 sm:px-0";
  };

  return (
    <div>
      <div
        ref={parentRef}
        style={{
          height: `${getContainerHeight()}px`,
          overflow: "auto",
        }}
        onScroll={handleScroll}
        className="w-full"
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
            const end = Math.min(start + itemsPerRow, allProductItems?.length);
            const products = allProductItems?.slice(start, end) || [];

            return (
              <div
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
                className={getGridClassName()}
              >
                {products.map((items, index) => {
                  return (
                    <Product
                      key={`${virtualItem.key}-${index}`}
                      imgAlt={items?.title}
                      catagory={items?.catagory}
                      itemName={items?.title}
                      itemPrice={items?.price}
                      discountPrice={items?.discount}
                      imgSrc={items?.thumbnail}
                      id={items?.id}
                      product={items}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[50px] flex flex-col items-center w-full max-w-full sm:max-w-[90%] md:max-w-75 mx-auto uppercase px-4 sm:px-0">
        <p className="texts_14_medium text-black pb-1.25">
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
          className="h-full w-full bg-[#E4E4E4] [&>div]:bg-black transition-all duration-500 items-center rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default ShopAllProdVirtual;
