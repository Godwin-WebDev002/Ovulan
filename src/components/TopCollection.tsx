import { motion } from "framer-motion";
import Aureum from "../assets/images/HeadW.png";
import Midnight from "../assets/images/HeadW.png";
import Argentum from "../assets/images/HeadW.png";

export const TopCollection = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 overflow-none">
      <h1 className="text-xl font-bold border-b-2 pb-1">Top Collection</h1>

      <div className="mt-15 flex flex-wrap justify-center gap-x-3 gap-y-8">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-90 px-10 sm:px-0 flex flex-col items-center"
        >
          <div className="h-40 sm:h-70 w-[70%] sm:w-[100%] bg-gray-300 rounded flex justify-center ">
            <img src={Aureum} alt="Aureum" className="h-[100%]" />
          </div>
          <h1 className="font-bold mt-5 ">Aureum classics</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            With a stainless-steel finish, minmaist markers and refined
            craftsmanship the Horaogo Steel honors Ovulans commitment to
            achiving style and relialbility.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-90 px-10 sm:px-0 flex flex-col items-center"
        >
          <div className=" h-40 sm:h-70 w-[70%] sm:w-[100%] bg-gray-300 rounded flex justify-center ">
            <img src={Midnight} alt="Midnight" className="h-[100%]" />
          </div>
          <h1 className="font-bold mt-5 ">Midnight Chronograph</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            Featuring deep navy detailing and Chronograph functionality, the
            Midnight brands contemporary elegance with advanced performance for
            the modern professional.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-90 px-10 sm:px-0 flex flex-col items-center"
        >
          <div className="h-40 sm:h-70 w-[70%] sm:w-[100%] bg-gray-300 rounded flex justify-center ">
            <img src={Argentum} alt="Argentum" className="h-[100%]" />
          </div>
          <h1 className="font-bold mt-5 ">Ovulan Argentum</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            The Ovulan Argentum is a masterpiece of understanding luxury, it's
            full stainless-steel design-from polished brush to final brushing
            bracelet-radiates modern elegance.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
