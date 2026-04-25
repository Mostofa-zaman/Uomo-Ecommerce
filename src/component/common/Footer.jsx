import React from "react";
import Container from "./Container";
import allImages from "@/helper/imagesProvider";
import { footerData } from "@/helper/projectArrayObj";
import allIcons from "@/helper/iconProvider";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Images from "./Images";

/* ─────────── Reusable Title ─────────── */
const FooterTitle = ({ children }) => (
  <h4 className="texts_18_medium text-head mb-[10px] lg:mb-[27px] tracking-[0.08em] font-semibold">
    {children}
  </h4>
);

/* ─────────── Nav Column ─────────── */
const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col">
    <FooterTitle>{title}</FooterTitle>

    <ul className="flex flex-col">
      {links.map((item) => (
        <li key={item.id} className="w-fit">
          <Link
            to={item.link}
            className="texts_20_regular text-head leading-[40px]"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* ─────────── Main Footer ─────────── */
const Footer = () => {
  const { navLogo, footerPaymenetImg } = allImages;
  const { socialIcons } = allIcons;

  return (
    <footer className="bg-footer">
      <Container>
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-y-[50px] py-[50px] lg:grid-cols-7 lg:gap-x-5 lg:pt-[100px] lg:pb-[88px]">
          
          {/* BRAND */}
          <div className="col-span-2 md:flex md:items-start md:justify-between lg:flex-col">
            
            <Images
              imgSrc={navLogo}
              imgAlt="footer logo"
              className="h-[27px] w-[111px] object-contain object-left"
            />

            <div className="py-7 md:py-0 lg:py-[44px]">
              <p className="texts_14_regular text-head">
                1418 River Drive, Suite 35 Cottonhall, CA 9622
              </p>
              <p className="texts_14_regular text-head">United States</p>

              <div className="mt-4">
                <a
                  href="mailto:sale@uomo.com"
                  className="texts_14_medium text-head"
                >
                  sale@uomo.com
                </a>
                <a
                  href="tel:+12463450695"
                  className="block texts_14_medium text-head"
                >
                  +1 246-345-0695
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-x-9">
              {socialIcons.map(({ id, icon: Icon, link, name }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="text-second transition-colors duration-200 hover:text-head"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* NAV */}
          <div className="col-span-3 grid grid-cols-2 gap-[34px]  sm:grid-cols-3 sm:gap-0">
            {footerData.columns.map((col, i) => (
              <FooterColumn key={i} title={col.title} links={col.links} />
            ))}
          </div>

          {/* SUBSCRIBE */}
          <div className="col-span-2 flex flex-col">
            <FooterTitle>SUBSCRIBE</FooterTitle>

            <div className="md:flex md:gap-x-8 lg:block">
              <p className="texts_14_regular text-head mb-[15px] max-w-[270px]">
                Be the first to get the latest news about trends, promotions,
                and much more!
              </p>

              <div className="mb-[41px] flex items-stretch border border-[#CFCDCD] bg-white">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-transparent px-[21px] pt-[17px] pb-[14px] texts_14_regular text-head placeholder:text-second"
                />

                <button className="pr-3 texts_13_regular text-head tracking-[0.08em] font-semibold">
                  JOIN
                </button>
              </div>
            </div>

            <p className="texts_14_regular text-head mb-[11px] font-medium">
              Secure payments
            </p>

            <img
              src={footerPaymenetImg}
              alt="Payment methods"
              className="max-w-full h-auto object-contain object-left"
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#CFCDCD] py-[28px] md:pt-[34px] sm:flex sm:items-center sm:justify-between">
          
          <p className="texts_13_regular text-head">©2020 Uomo</p>

          <div className="mt-4 sm:mt-0 sm:flex sm:items-center gap-[48px]">
            
            <div className="flex items-center gap-[10px]">
              <span className="texts_13_regular text-second">Language</span>
              <button className="flex items-center gap-[4px] texts_13_regular text-head transition hover:text-second">
                United Kingdom | English
                <RiArrowUpSLine size={15} />
              </button>
            </div>

            <div className="flex items-center gap-[10px]">
              <span className="texts_13_regular text-second">Currency</span>
              <button className="flex items-center gap-[4px] texts_13_regular text-head transition hover:text-second">
                $ USD
                <RiArrowUpSLine size={15} />
              </button>
            </div>

          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;