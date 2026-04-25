import { useState } from "react";
import allImages from "@/helper/imagesProvider";
import Images from "./Images";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");

  const { rithik } = allImages;

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setIsOpen(false);
  };

  return (
    <div className="hidden lg:block">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-3 sm:px-6 md:px-8">
        
        <div className="relative flex w-full flex-col shadow-2xl
          max-w-[calc(100vw-24px)]
          sm:max-w-[540px]
          md:max-w-[720px] md:flex-row
          lg:max-w-[860px]
          xl:max-w-[900px]"
        >

          {/* LEFT IMAGE */}
          <div className="relative hidden shrink-0 overflow-hidden
            md:flex md:w-[260px]
            lg:w-[340px]
            xl:w-[400px]
            md:min-h-[450px]
            lg:min-h-[500px]
            xl:min-h-[550px]"
          >
            <Images
              imgSrc={rithik}
              imgAlt="newsletter"
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex flex-1 flex-col justify-center bg-white
            px-5 py-10
            sm:px-8 sm:py-12
            md:px-8 md:py-10
            lg:px-10 lg:py-12
            xl:px-12 xl:py-14"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center text-head transition-opacity hover:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* TITLE */}
            <h2 className="head_26_medium text-head">
              Sign Up to Our Newsletter
            </h2>

            {/* DESCRIPTION */}
            <p className="texts_14_regular text-second my-3 sm:my-4">
              Be the first to get the latest news about trends, promotions,
              and much more!
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full items-stretch border border-footer"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 bg-transparent px-3 py-3 text-head outline-none
                  sm:px-4 sm:py-3.5 texts_14_regular placeholder:text-second"
              />

              <button
                type="submit"
                className="shrink-0 cursor-pointer px-3 py-3 text-head tracking-widest
                  sm:px-5 sm:py-3.5 texts_13_regular transition-opacity hover:opacity-80"
              >
                JOIN
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}