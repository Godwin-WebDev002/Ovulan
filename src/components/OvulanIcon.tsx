import { motion } from "framer-motion";
import ArtF from "../assets/images/ArtF.png";
import Midnight from "../assets/images/Midnight.png";

export const OvulanIcon = () => {
  return (
    <div className=" min-h-[100vh] px-5 sm:px-10 py-10 md:py-18 flex flex-col relative overflow-none">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={ArtF}
          alt=""
          className=" size-[100%] md:size-[50%] rounded"
        />

        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="flex h-fit lg:ml-10"
        >
          <img
            src={Midnight}
            alt="Midnight"
            className=" w-40 h-75 rounded-md mr-5 "
          />

          <div className="w-70 content-center ">
            <h1 className="font-semibold text-xl">Midnight Chronograph</h1>
            <p className="text-[0.8rem] sm:text-[1rem]">
              Featuring deep navy detailing and Chronograph functionality, the
              Midnight brands contemporary elegance with advanced performance
              for the modern professional
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-[100%] md:w-140 bg-gray-200 rounded-md md:absolute bottom-12 right-35 px-5 py-7 "
      >
        <h1 className="font-semibold text-2xl sm:text-4xl mb-2">
          The Icon of Ovulan
        </h1>
        <p className="text-[0.8rem] sm:text-[1rem]">
          The Midnight Chronograph stands as our most sourght-after timepiece,
          admired by collectors and professionals aline With it's deep navy
          detailing, precision chronograph movement and bold yet refined
          presence, it has become a symbol of prestige for those who demand both
          style and performance
        </p>
      </motion.div>
    </div>
  );
};
