import { IoMdPaperPlane } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="font-roboto">
      <div
        className="text-white  flex items-center justify-center"
        style={{
          backgroundImage: "url('/Footer_Image.jpeg')",
          backgroundColor: "#E2DFD2",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 py-18 gap-8 text-black">
            <div>
              <div className="flex justify-start items-center mb-2">
                {/* Brand Name */}
                <h1 className="text-2xl font-semibold">
                 NextShop
                </h1>
              </div>

              <div className="space-y-2">
                <p className="text-gray-600">
                  There seems to be a number of projects which we have been working on at the moment.
                </p>
                <div className="flex gap-8">
                  <a
                    href="https://www.pinterest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPinterestP size={20} className="text-[#E60023]" />
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={20} className="text-[#1DA1F2]" />
                  </a>
                  <a
                    href="https://www.facebook.com/saidebinsabid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={20} className="text-[#1877F2]" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} className="text-[#C13584]" />
                  </a>
                  <a
                    href="https://www.youtube.com/@ProgrammingHeroCommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={20} className="text-[#FF0000]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-gray-600">
              <h1 className="text-black mb-4">CONTACT US</h1>
              <div className="flex items-center gap-2">
                <CiPhone size={20} />
                <p>(480) 555-0103</p>
              </div>
              <div className="flex items-center gap-2">
                <CiMail size={20} />
                <p>M.Alyaqout@4house.Co</p>
              </div>
              <div className="flex items-center gap-2">
                <IoTimeOutline size={20} />
                <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="mb-4">SUBSCRIBE US</h1>
              <p className="text-gray-600 text-sm">
                Sign up and get a voucher of <br /> worth $0.00
              </p>
              <div className="join">
                <input type="text" className="input input-bordered join-item" />
                <button className="btn bg-[#954535] hover:bg-[#7B3F00] join-item text-white">
                  {" "}
                  <IoMdPaperPlane size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#F9F6EE] via-[#E9DCC9] to-[#F9F6EE] w-full py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-black">
          <h1 className="mb-2 md:mb-0">
            Copyright © 2025. All rights reserved
          </h1>
          <div className="flex gap-4">
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Term & Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
