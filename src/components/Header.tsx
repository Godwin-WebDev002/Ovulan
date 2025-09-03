import { motion } from "framer-motion";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import HeadW from '../assets/images/HeadW.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white h-[100vh] md:h-190 w-[100%] flex flex-col relative overflow-none ">
      <motion.nav
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className=" p-5 sm:px-18 py-1 fixed w-[100%] flex justify-between items-center bg-[#00000080] backdrop-blur-md mt-2 z-20 "
      >
        <h1 className="text-3xl ">Ovulan</h1>
        <div className="hidden lg:flex w-[60%] justify-between">
          <ul className="flex w-[82%] justify-evenly items-center font-semibold">
            <li>
              <a href="#" className="hover:underline">
                Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Manufacturing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Collection
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <button className="flex justify-center w-30 py-2 bg-white text-black font-semibold rounded cursor-pointer hover:bg-gray-100">
            Order Now
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-1 rounded-lg hover:ring-2 hover:ring-white"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
          className="lg:hidden fixed h-screen right-0 top-0 w-64 bg-black bg-opacity-90 backdrop-blur-lg z-30 flex flex-col items-start p-8 space-y-6"
        >
          <button
            onClick={toggleMenu}
            className="self-end p-1 rounded-lg hover:ring-2 "
          >
            <BiX size={38} />
          </button>

          <ul className="flex flex-col space-y-6 text-xl">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Manufacturing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Collection
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="w-full mt-8 px-5 py-3 bg-white text-black font-semibold rounded cursor-pointer hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Order Now
          </button>
        </motion.div>
      </motion.nav>

      <main className="sm:px-15 px-5 mt-12 w-[100%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute flex flex-col w-[70%] text-[clamp(0.5rem,18vw,12rem)] leading-[0.9] font-bold text-gray-50/20"
        >
          <h1>Timeless</h1>
          <h1 className="ml-[-1vw]">Elegance</h1>
          <h1 className="ml-[-1vw]">Me</h1>
          <h1 className="ml-[-1vw]">Precision</h1>
        </motion.div>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" md:w-150 w-[80%] h-content md:pb-40 pb-10 bg-gradient-to-b from-[#00000080] to-[] backdrop-blur-xs absolute bottom-0 rounded-md z-10"
        >
          <h1 className=" text-5xl md:text-7xl font-semibold">
            Luxury That <br /> Lasts a Lifetime.
          </h1>
          <p>
            Ovulan redefines luxury timelooping with precision craftsmanship and
            timeless design. Our watches blend elegance and performance, created
            for those who demand sophistication in every details.
          </p>

          <div className="flex justify-between mt-10">
            <div>
              <h1 className=" font-semibold sm:text-4xl text-3xl ">5-Year</h1>
              <p className=" leading-4 text-[0.8rem] sm:text-sm">
                Internatinal Warrenty
              </p>
            </div>

            <div>
              <h1 className=" font-semibold sm:text-4xl text-3xl">4.9</h1>
              <p className=" leading-4 text-[0.8rem] sm:text-sm">
                4,300 ratings
              </p>
            </div>

            <div>
              <h1 className=" font-semibold sm:text-4xl text-3xl">250+</h1>
              <p className=" leading-4 text-[0.8rem] sm:text-sm">
                Hours of Craftsmanship
              </p>
            </div>
          </div>
        </motion.div>

        <motion.img
          initial={{ x: 60 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          src={HeadW}
          alt=""
          className="absolute top-[15%] sm:top-[8%] right-[2%] sm:right-25 sm:h-140 h-90 lg:flex sm:hidden flex"
        />
      </main>
    </header>
  );
};
