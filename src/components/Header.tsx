"use client";

import { FaCheck } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import logo from "@/app/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useAuth, UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const user = useAuth();

  const { state } = useCart();

  return (
    <header>
      <div className="text-white">
        <div className="text-[13px] font-normal bg-primary">
          <div className="flex max-w-screen-xl py-2 md:px-20 px-4 m-auto justify-between opacity-70 items-center">
            <div>
              <p className="flex items-center gap-2">
                <span>
                  <FaCheck />
                </span>
                Free Shipping On All Orders Over $50
              </p>
            </div>
            <span className="sm:hidden inline" onClick={handleMenu}>
              <IoMenu />
            </span>
            <div className="gap-4 sm:flex hidden">
              {user ? (
                <>
                  <Link href="/sign-in">
                    <p className="flex items-center gap-1">Sign In</p>
                  </Link>
                  <Link href="/sign-up">
                    <p className="flex items-center gap-1">Signup</p>
                  </Link>
                </>
              ) : (
                <>
                  <UserButton />
                </>
              )}
              <Link href="/faq">
                <p className="justify-self-end">Faqs</p>
              </Link>
              <Link href="/contact">
                <p className="flex items-center gap-1">
                  <span>
                    <IoMdInformationCircleOutline />
                  </span>
                  Need Help
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-xl md:px-20 flex justify-between px-4 py-6 m-auto font-semibold">
          <Link href="/">
            <div className="flex gap-2 text-[26px] cursor-pointer">
              <span>
                <Image height={40} width={40} src={logo} alt="Logo" />
              </span>
              <p>Comforty</p>
            </div>
          </Link>
          <Link href="/cart">
            <div className="flex gap-2 items-center cursor-pointer">
              <span>
                <IoCartOutline />
              </span>
              <p className="text-[12px]">Cart</p>
              <span className="text-[10px] bg-secondary rounded-full h-[20px] w-[20px] text-white grid place-items-center">
                {state.items.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className={`text-[14px] ${menu ? "max-md:block" : "max-md:hidden"}`}>
        <div className="max-w-screen-xl md:px-20 flex justify-between max-md:bg-slate-200 px-4 py-2 m-auto font-semibold max-sm:flex-col max-sm:gap-4 max-sm:bg-gray-200 max-sm:items-center max-sm:absolute max-sm:w-full">
          <nav>
            <ul className="flex gap-4 text-gray max-sm:flex-col">
              <li className="text-secondary">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/product">Shop</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>Pages</li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
          <p
            title="Click to copy"
            style={{ cursor: "default" }}
            onClick={() => {
              navigator.clipboard.writeText("808-555-0111");
              alert("Contact no. copied");
            }}
          >
            <span className="text-gray">Contact:</span> (808) 555-0111
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
