import React from "react";
import Container from "../common/Container";
import CollectionSlider from "../common/CollectionSlider";

const collectionData = [
  { heading: "Hot Deals", prev: "prev-hot-deal-button", next: "next-hot-deal-button" },
  { heading: "Top Rated", prev: "prev-top-rated-button", next: "next-top-rated-button" },
  { heading: "New Arrivals", prev: "prev-new-arrivals-button", next: "next-new-arrivals-button" },
  { heading: "Best Sellers", prev: "prev-best-sellers-button", next: "next-best-sellers-button" },
  { heading: "Flash Sale", prev: "prev-flash-sale-button", next: "next-flash-sale-button" },
  { heading: "Editor's Pick", prev: "prev-editors-pick-button", next: "next-editors-pick-button" },
];

const CollectionComp = () => {
  return (
    <section className="mt-20 py-12 lg:py-24">
      <Container>
        <div className="text-center px-4 sm:px-6 lg:px-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-head leading-tight">
            Discover Timeless Elegance
          </h1>
          <p className="text-second mx-auto max-w-xl sm:max-w-2xl lg:max-w-3xl text-base sm:text-lg lg:text-xl mt-4 sm:mt-6">
            Explore our curated collection of premium menswear designed for
            the contemporary gentleman. From tailored classics to modern
            essentials, each piece is crafted with attention to detail and
            uncompromising quality. Elevate your style with uomo-ui.
          </p>
        </div>

        <div className="mt-12 lg:mt-24 space-y-10 lg:space-y-20">
          {collectionData.map(({ heading, prev, next }) => (
            <CollectionSlider
              key={heading}
              collectionHeading={heading}
              prevButton={prev}
              nextButton={next}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CollectionComp;