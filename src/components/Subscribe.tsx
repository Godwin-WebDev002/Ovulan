import { BiCalendar, BiEnvelope } from "react-icons/bi";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";
import SubN from "../assets/images/SubN.png";

export const Subscribe = () => {
  return (
    <div className="bg-black text-white px-10 overflow-none ">
      <div className=" py-20 flex justify-between items-center flex-col md:flex-row ">
        <div className="w-[100%] md:w-[40%] mb-10 md:mb-0">
          <h1 className="text-5xl">Subscribe To Our Newsletter</h1>
          <p className="my-6">
            Join our circle of timekeepers and be the first to discover new
            Collections, exclusive and release and refined insights from the
            world of Ovulan.
          </p>

          <div className="bg-white w-[100%] flex justify-between p-1 pl-3 rounded ">
            <input
              type="text"
              placeholder="Enter your email here"
              className=" w-[70%] text-black font-semibold"
            />
            <button className=" px-5 py-1 bg-black text-white font-semibold rounded cursor-pointer hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
        <img
          src={SubN}
          alt="SubN"
          className=" w-[100%] md:w-[55%] h-80 rounded-md"
        />
      </div>

      <div className="border-b-2 border-white w-[100%] rounded-full" />

      <footer className="py-10 flex justify-between ">
        <div className="w-[65%] flex flex-col lg:flex-row justify-between  ">
          <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
            <h1 className="font-bold mb-3">Shop</h1>

            <p>New Arrivals</p>
            <p>Best Sellers</p>
            <p>Collection</p>
          </div>

          <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
            <h1 className="font-bold mb-3">Company</h1>

            <p>About Us</p>
            <p>Our Story</p>
            <p>Blogs</p>
          </div>

          <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
            <h1 className="font-bold mb-3">Customer Care</h1>

            <p>Shopping & Delivery</p>
            <p>Return Policy</p>
            <p>FAQ</p>
          </div>

          <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
            <h1 className="font-bold mb-3">Services</h1>

            <p>Contact</p>
            <p>Track Order</p>
          </div>

          <div>
            <h1 className="font-bold mb-3">Social Media</h1>

            <div className="flex gap-2">
              <BsTwitter /> <BsYoutube />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mb-3">Ovulan</h1>

          <p className="flex items-center gap-1">
            <PiPhoneCall /> +1234567890
          </p>
          <p className="flex items-center gap-1">
            {" "}
            <BiEnvelope /> Ovulan@support.com
          </p>
          <p className="flex items-center gap-1">
            <BiCalendar /> <span>Mon-Sat 8am-7am GMT</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
