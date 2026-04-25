import React from "react";
import about from '@/assets/images/about/about.png'
import about2 from '@/assets/images/about/about2.png'
import delivery from '@/assets/images/about/delivery.png'
import brand1 from '@/assets/images/about/mango.png'
import brand2 from '@/assets/images/about/zara.png'
import brand3 from '@/assets/images/about/reebok.png'
import brand4 from '@/assets/images/about/asos.png'
import brand5 from '@/assets/images/about/stradi.png'
import brand6 from '@/assets/images/about/adi.png'
import brand7 from '@/assets/images/about/bershka.png'

const features = [
  { title: "FAST AND FREE DELIVERY", desc: "Free delivery for all orders over $140" },
  { title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days" },
  { title: "EVERY SECURE PAYMENT", desc: "Your payment information is safe" },
];

const brands = [
  { src: brand1, alt: "Mango" },
  { src: brand2, alt: "Zara" },
  { src: brand3, alt: "Reebok" },
  { src: brand4, alt: "ASOS" },
  { src: brand5, alt: "Stradivarius" },
  { src: brand6, alt: "Adidas" },
  { src: brand7, alt: "Bershka" },
];

const About = () => {
  return (
    <section className="mt-20 sm:mt-24 lg:mt-32">
      <div className="max-w-[1413px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Page Title */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h1 className="head_35_bold text-2xl sm:text-3xl lg:text-[30px] xl:text-[35px]">ABOUT UOMO</h1>
        </div>

        {/* Hero Image */}
        <div className="w-full bg-[#d0d0d0] overflow-hidden rounded-lg">
          <img
            src={about}
            alt="About hero"
            className="w-full h-[180px] sm:h-[260px] md:h-[340px] lg:h-[420px] xl:h-[500px] object-cover"
          />
        </div>

        {/* Our Story */}
        <div className="max-w-[929px] mx-auto mt-6 sm:mt-8 lg:mt-12">
          <h2 className="head_26_medium text-xl sm:text-2xl lg:text-[24px] xl:text-[26px] mb-3 lg:mb-4">OUR STORY</h2>
          <p className="texts_16_medium text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-7 mb-4 lg:mb-5 xl:mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="texts_14_regular text-sm leading-7 mb-5 lg:mb-6 xl:mb-8">
            Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
          </p>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
            <div>
              <h3 className="texts_16_medium text-sm sm:text-base leading-[100%] mb-2 lg:mb-3 xl:mb-4">Our Mission</h3>
              <p className="texts_14_regular text-sm sm:text-base">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <h3 className="texts_16_medium text-sm sm:text-base leading-[100%] mb-2 lg:mb-3 xl:mb-4">Our Vision</h3>
              <p className="texts_14_regular text-sm sm:text-base">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>

        {/* Mid Section */}
        <div className="max-w-[1170px] mx-auto mt-8 sm:mt-10 lg:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Image */}
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src={about2}
                alt="Fashion"
                className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[440px] xl:h-[500px] object-cover"
              />
              <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[170px] border-l-transparent border-r-transparent border-b-[rgba(180,180,180,0.7)]"></div>
              <div className="absolute w-[160px] h-[160px] rounded-full bg-[rgba(160,160,160,0.6)] top-[90px] left-1/2 -translate-x-1/2"></div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[13px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-medium text-gray-500 mb-3 lg:mb-4 xl:mb-5">THE COMPANY</h3>
              <p className="texts_14_regular text-sm sm:text-base leading-7 mb-4 sm:mb-5 lg:mb-6 xl:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.
              </p>
              <p className="texts_14_regular text-sm sm:text-base leading-7">
                Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-16 mt-10 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 sm:gap-4 xl:gap-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 flex items-center justify-center shrink-0">
                <img src={delivery} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-sm sm:text-base lg:text-[15px] xl:text-[16px] font-medium text-[#141F46] mb-1">{feature.title}</p>
                <span className="text-xs sm:text-sm lg:text-[14px] xl:text-[15px] text-gray-500">{feature.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mt-6 mb-12 items-center justify-center">
          {brands.map((brand, i) => (
            <div key={i} className="flex items-center justify-center">
              <img
                src={brand.src}
                alt={brand.alt}
                className="max-h-[22px] sm:max-h-[26px] md:max-h-[28px] lg:max-h-[30px] xl:max-h-[35px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;