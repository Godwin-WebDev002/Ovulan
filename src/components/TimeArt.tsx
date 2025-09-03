import { motion } from "framer-motion";
import ArtS from "../assets/images/HeadW.png";
import ArtP from "../assets/images/HeadW.png";

export const TimeArt = () => {
  return (
    <div className="bg-black text-white flex flex-wrap justify-evenly gap-x-2 gap-y-10 py-25 px-10 overflow-none ">
      <motion.img
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: -10 }}
        transition={{ duration: 1, delay: 0.5 }}
        src={ArtS}
        alt="ArtF"
        className=" size-50 md:size-70 rounded-md "
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-110 flex flex-col items-center px-10 md:px-0 "
      >
        <h1 className=" text-4xl sm:text-5xl mb-3">
          Where Time <br /> Becomes Art
        </h1>
        <p className=" text-[0.8rem] md:text-[1rem] text-center">
          At Ovulan, we believe a watch is more than a way to tell time- it's a
          reflection of character, heritage, and aspiration. Our timepieces are
          crafted with meticulous attentions to detail, binding timeless designs
          with modern precision from boardroom to evening, Ovulan watches embody
          sophistication for those who value elegance in every second.
        </p>

        <button className=" mt-8 px-5 py-2 bg-white text-black font-semibold rounded cursor-pointer hover:bg-gray-100">
          Order Now
        </button>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        src={ArtP}
        alt="ArtS"
        className="size-50 md:size-70 rounded-md"
      />
    </div>
  );
};
