"use client"
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#D1FFF3] flex justify-center items-center text-[#0C134F] subpixel-antialiased border" id="home">
      <div className=" w-full max-w-7xl px-10 h-auto mx-auto">
        <div className="w-full min-h-screen flex items-center">
          <div className="w-[50%] flex flex-col gap-40">
            <div className="flex flex-col gap-10 ">
              <div className="flex flex-col  text-6xl">
                <h3>
                  Hi, I&apos;m <span className="text-[#C1AEFC]">Tejodeep!</span>
                </h3>
                <h3>Creative Coder</h3>
                <h3>Based in India</h3>
              </div>
              <span className=" max-w-[80%] w-full text-2xl">
                <p>
                  👋I&apos;m a India based Frontend & Backend Web App developer
                  with 1+ years of experience
                </p>
              </span>
              <div className="flex gap-4">
                <span className="px-10 py-3 rounded-lg bg-[#0C134F] hover:bg-transparent text-white text-lg hover:text-[#0C134F] border border-[#0C134F] transition duration-300 ease-in-out">
                  <p>Got a project?</p>
                </span>
                <span className="px-10 py-3 rounded-lg hover:bg-[#0C134F] bg-transparent  hover:text-white text-lg text-[#0C134F] border border-[#0C134F] transition-all duration-300 ease-in-out">
                  <p>Lets talk</p>
                </span>
              </div>
            </div>

            <div className="w-full h-auto ">
              <ul className=" relative px-3 py-2 font-semibold before:absolute before:w-1 before:bg-amber-500 before:top-0 before:bottom-0 text-lg ">
                <li className="px-3 ">
                  <a
                    href="tel:+91-9674128921"
                    className="hover:text-amber-500 transition duration-300 ease-in-out "
                  >
                    +91-9674128921{" "}
                  </a>
                </li>
                <li className="px-3 ">
                  <a
                    href="mailto:tejodeepmitraroy2002@gmail.com"
                    className="hover:text-amber-500 transition duration-300 ease-in-out "
                  >
                    tejodeepmitraroy2002@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[50%] pl-11">
            <Image src={"/img.png"} width={500} height={600} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
