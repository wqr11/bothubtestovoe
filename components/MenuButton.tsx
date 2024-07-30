"use client";

import { useState } from "react";

import Link from "next/link";

import Menu from "@/public/menu.svg";
import Close from "@/public/close.svg";

import styles from "@/styles/Navbar.module.css";

import Navlinks from "./Navlinks";

const MenuButton = () => {
  const [menuHidden, setMenuHidden] = useState(true);

  return (
    <div className="lg:hidden">
      <button
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setMenuHidden(!menuHidden);
        }}
        className={`${styles.menu_button} ml-[34px] p-[10px] bg-[#1c64f2] lg:hidden`}
        style={{ borderRadius: "8px" }}
      >
        {menuHidden ? <Menu /> : <Close />}
      </button>
      {!menuHidden && (
        <div
          className={`${styles.menu_button_links} p-[40px] flex flex-col absolute w-full top-[80px] left-0 bg-[#121825] gap-[37px] text-[18px] font-semibold h-[100vh]`}
        >
          <Navlinks />
          <Link
            href=""
            className={`${styles.login_button} font-medium py-[10px] px-[18px] text-center sm:hidden block`}
          >
            Авторизация
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
