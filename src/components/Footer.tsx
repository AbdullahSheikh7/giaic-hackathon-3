"use client";

import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="grid sm:grid-cols-[1fr] md:grid-cols-[2fr_1fr_1fr] md:justify-items-center xl:justify-items-start xl:grid-cols-[2fr_1fr_1fr_2fr] max-w-screen-xl px-2 md:px-20 m-auto gap-8 py-24">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 text-[26px] cursor-pointer">
            <span>
              <Image height={40} width={40} src={logo} alt="Logo" />
            </span>
            <p>Comforty</p>
          </div>
          <div className="text-gray text-[16px] font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis adipisci quam obcaecati dolor neque quas.
          </div>
          <div className="flex gap-2">
            <span className="p-2 border-[1px] text-secondary border-secondary rounded-full">
              <FaFacebook />
            </span>
            <span className="p-2 border-[1px] text-secondary border-secondary rounded-full">
              <FaTwitter />
            </span>
            <span className="p-2 border-[1px] text-secondary border-secondary rounded-full">
              <FaInstagram />
            </span>
            <span className="p-2 border-[1px] text-secondary border-secondary rounded-full">
              <FaPinterest />
            </span>
            <span className="p-2 border-[1px] text-secondary border-secondary rounded-full">
              <FaYoutube />
            </span>
          </div>
        </div>
        <div>
          <p className="text-gray uppercase mb-2 text-[14px] font-semibold">
            Category
          </p>
          <ul className="flex flex-col gap-2 text-[16px] font-semibold text-primary">
            <li>Sofa</li>
            <li>Arm Chair</li>
            <li>Wing Chair</li>
            <li className="underline text-secondary">Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>
        <div>
          <p className="text-gray uppercase mb-2 text-[14px] font-semibold">
            Support
          </p>
          <ul className="flex flex-col gap-2 text-[16px] font-semibold text-primary">
            <li>Help & Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-gray uppercase text-[14px] font-semibold">
            Newsletter
          </p>
          <form className="relative">
            <input
              type="text"
              placeholder="Your email"
              name="email"
              className="p-2 w-3/5 focus:outline focus:outline-1 focus:outline-secondary rounded-l-md outline outline-1 outline-gray"
            />
            <button className="bg-secondary w-2/5 text-white p-2 rounded-r-md outline-none border-[1px] border-secondary">
              Subscribe
            </button>
            <input type="hidden" name="newsletter" />
          </form>
          <p className="text-gray text-[16px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            rem.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto flex md:justify-between items-center max-md:gap-2 py-6 text-[14px] max-md:flex-col px-2 md:px-20">
        <p>
          <span className="text-gray">
            @2021 - Blogy - Designed and Develop by
          </span>{" "}
          Zakirsoft
        </p>
        <div className="pay-opts">
          <Image
            src="/images/payment-options.jpeg"
            alt=""
            className="paypal"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
