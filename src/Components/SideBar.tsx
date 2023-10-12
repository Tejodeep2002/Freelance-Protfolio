"use client";
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import db from "@/DB/db";
interface Props {}

const SideBar: FC = (props: Props) => {
  const [navReveal, setNavReveal] = useState<boolean>(false);
  return (
    <aside>
      <div className="lg:w-[25%] 2xl:w-[20%]  hidden h-screen border-r lg:flex flex-col p-8 xl:p-14 items-center justify-between font-Karla antialiased">
        <div className="flex flex-col gap-7 items-center">
          <Image
            src={"/img.png"}
            width={110}
            height={110}
            alt=""
            className="w-25 h-25 border-2 border-[#a5a6ff] rounded-full"
          />
          <div className="flex flex-col items-center justify-center ">
            <span className="font-Inter font-bold text-xl 2xl:text-2xl z-10 mt-3">
              {db.name}
            </span>
            <h1 className="fixed font-Pacifico text-3xl 2xl:text-4xl opacity-10 z-0 text">
              {db.name}
            </h1>
          </div>
        </div>

        <nav className="">
          <ul className="flex flex-col items-center gap-3 2xl:gap-5 text-[#534f80] text-base 2xl:text-lg cursor-pointer">
            <li>
              <a href="#home" className="hover:text-[#a5a6ff] cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#a5a6ff] cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Projects
              </a>
            </li>
            {/* <li>
              <a
                href="#services"
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Services
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-6 items-center text-[#534f80]  font-medium ">
          <span className="w-fit h-12 flex gap-2 items-center">
            {/* <Link
              href={db.socialLinks.facebook}
              target="_blank"
              className="w-9 h-9 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-2" />
            </Link>
            <Link
              href={db.socialLinks.twitter}
              target="_blank"
              className="w-9 h-9 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-4" />
            </Link> */}
            <Link
              href={db.socialLinks.linkedIn}
              target="_blank"
              className="w-9 h-9 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-4" />
            </Link>
            <Link
              href={db.socialLinks.github}
              target="_blank"
              className="w-9 h-9 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6" />
            </Link>
          </span>

          <span>
            <p>All Copyrights 2023, Tejodeep Mitra Roy. All rights reserved.</p>
          </span>
        </div>
      </div>

      <div className="fixed z-10 lg:hidden w-full h-12 px-6 bg-white flex justify-between items-center">
        <span className=" font-Inter text-3xl font-extrabold text-[#C1AEFC]">
          T.M.Roy
        </span>
        <div className=" flex flex-wrap items-center justify-between ">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            title=" button"
            onClick={() => setNavReveal(!navReveal)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`fixed ${
          navReveal ? "" : "hidden"
        } top-12 right-0 w-full h-screen z-50 `}
      >
        <div
          className="absolute w-full h-full opacity-0 bg-black"
          onClick={() => setNavReveal(!navReveal)}
        ></div>
        <div className="fixed top-12 right-0 w-52 h-full bg-white text-right flex flex-col gap-6 pt-12 pb-5 px-5 font-Karla antialiased">
          <div className="flex flex-col items-end">
            <Image
              src={"/img.png"}
              width={90}
              height={90}
              alt=""
              className=" border-2 border-[#a5a6ff] rounded-full"
            />
            <div className="flex flex-col items-center justify-center ">
              <span className="font-Inter font-bold text-base z-10 mt-7">
                Tejodeep Mitra Roy
              </span>
              <span className="fixed font-Pacifico text-xl opacity-10 z-0 ">
                Tejodeep Mitra Roy
              </span>
            </div>
          </div>

          <div className="">
            <ul className="flex flex-col items-end gap-3 2xl:gap-5 text-[#534f80] text-base 2xl:text-lg cursor-pointer">
              <li>
                <a href="#home" className="hover:text-[#a5a6ff] cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 items-end text-[#534f80]  font-medium ">
            <span className="flex gap-2">
              {/* <span className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full">
              <FontAwesomeIcon icon={faFacebookF} className="w-2" />
            </span>
            <span className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full">
              {" "}
              <FontAwesomeIcon icon={faXTwitter} className="w-4" />
            </span> */}
              <Link
                href={"https://www.linkedin.com/in/tejodeep-mitra-roy"}
                target="_blank"
                className="w-7 h-7 bg-gray-100 flex justify-center items-center  rounded-full"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-3" />
              </Link>
              <Link
                href={"https://github.com/Tejodeep2002"}
                target="_blank"
                className="w-7 h-7 bg-gray-100 flex justify-center items-center  rounded-full"
              >
                <FontAwesomeIcon icon={faGithub} className="w-4" />
              </Link>
            </span>

            <span className="text-sm">
              <p>
                All Copyrights 2023 Tejodeep Mitra Roy. All rights reserved.
              </p>
            </span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
