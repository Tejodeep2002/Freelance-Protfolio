import React, { FC } from "react";
import db from "@/DB/db";

const Services: FC = () => {
  return (
    <section className="relative w-full h-auto" id="services">
      <div className="w-full my-28 ">
        <section className="w-full max-w-7xl px-5 lg:px-10  mx-auto  flex flex-col gap-5">
          <span className="font-medium text-lg">- SERVICES</span>
          <section className=" flex flex-col gap-10 md:flex-row justify-between">
            <span className="font-extrabold text-4xl font-Inter">
              My Freelance Services
            </span>
            <span className=" text-base md:text-xl font-medium">
              <a
                href=""
                className="w-full relative font-Inter font-semibold hover:no-underline before:absolute before:h-[2px] before:bottom-0 before:bg-black before:w-full  hover:before:w-0 before:transition before:duration-700 before:ease-in"
              >
                {db.mail}
              </a>
            </span>
          </section>
          <ul className="w-full flex flex-col md:flex-row flex-wrap md:-ml-2 lg:-ml-8 mt-7">
            {db.services.map((item, index) => (
              <li
                key={index}
                className="w-full md:w-1/3 mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out"
              >
                <div className="w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                  <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                    {item.id}
                  </span>
                  <h3 className="w-full mb-3 text-xl font-bold font-Inter leading-5">
                    {item.title}
                  </h3>
                  <span className="w-full mb-6 opacity-[0.7] text-[#55527c]">
                    {item.description[0]}
                  </span>
                  {/* <div className="flex items-center gap-6">
                    <a>Read More</a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        className="svg replaced-svg"
                      >
                        <path
                          d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
                          fill="#130F49"
                        ></path>
                      </svg>
                    </span>
                  </div> */}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Services;
