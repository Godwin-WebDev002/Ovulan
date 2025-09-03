import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";

export const WhatPeopleSay = () => {
  return (
    <div className="px-10 py-15 overflow-none">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex mb-5 md:mb-0">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="px-10 md:px-0 h-45 w-100 bg-gray-50/70 rounded-xl p-4 z-3"
        >
          <p> (02) </p>
          <p className="sm:text-sm text-[0.8rem]">
            "My Ovulan Aureum Classic is everything I wanted in a luxury watch.
            The two-line design turns head wherever I go and it feels as if it
            was mand just for me. From packaging to customer service, the
            experience was pure luxury from start to finish"
          </p>
          <p className="font-semibold ml-[79%]"> -Daniel </p>
        </motion.div>
      </div>

      <div className=" flex justify-center md:my-[-8vh] ">
        <h1 className="text-7xl italic text-center">
          What Our People <br /> Have To Say...
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="px-10 md:px-0 h-45 w-100 bg-gray-50/70 rounded-xl p-4"
        >
          <p> (01) </p>
          <p className="sm:text-sm text-[0.8rem]">
            I purchased the Ovulan Midnight Chronograph and was blown away by
            the craftsmanship. The weight, the precision, and the attention to
            detail make some of the finest Swiss brands I've owned, it's not
            just a watch-it's statement piece i'm proud to wear daily.
          </p>
          <p className="font-semibold ml-[79%]"> -Tommy </p>
        </motion.div>

        <div className="flex gap-10">
          <div>
            <h1 className="font-semibold text-4xl">1200+</h1>
            <p className="text-xs font-semibold">Reviews</p>
          </div>
          <div>
            <h1 className="font-semibold text-4xl">10,000+</h1>
            <p className="text-xs font-semibold">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};
