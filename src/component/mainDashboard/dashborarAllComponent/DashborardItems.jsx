import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "MY ACCOUNT",      path: "/dashboard" },
  { label: "ORDERS",          path: "order" },
  { label: "DOWNLOADS",       path: "downloads" },
  { label: "ADDRESSES",       path: "address" },
  { label: "ACCOUNT DETAILS", path: "account-details" },
  { label: "WISHLIST",        path: "wishlist" },
  { label: "LOGOUT",          path: "/logout" },
];

const getHeading = (pathname) => {
  const matched = menuItems.find((item) => pathname.endsWith(item.path));
  return matched ? matched.label : "My Account";
};

const DashborardItems = ({ onClose }) => {
  const location = useLocation();
  const heading = getHeading(location.pathname);

  return (
    <div className="shrink-0">
      <h2 className="font-bold text-[28px] lg:text-[35px] text-[rgb(34,34,34)] mb-6 lg:mb-9">
        {heading}
      </h2>
      <ul className="flex flex-col gap-2 lg:gap-3.5">
        {menuItems.map((item) => {
          const isActive = location.pathname.endsWith(item.path);
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={onClose}
                className="block relative"
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "40px",
                  color: isActive ? "#C32929" : "#222",
                }}
              >
                {item.label}
                {/* Active underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#C32929]" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashborardItems;