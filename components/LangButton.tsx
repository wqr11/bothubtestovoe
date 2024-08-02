"use client";
import { useState } from "react";

import Link from "next/link";

import ArrowDown from "@/public/arrow-down.svg";
import Lang from "@/public/lang.svg";

import styles from "@/styles/Navbar.module.css";

const LangButton = () => {
  const [menuHidden, setMenuHidden] = useState<boolean>(true);

  if (typeof window !== "undefined") {
    const langButton = document.getElementById("lang-button");
    addEventListener("click", (e) => {
      // @ts-ignore
      const outsideClick = !langButton?.contains(e.target);
      outsideClick ? setMenuHidden(true) : null;
    });
  }

  return (
    <button
      id="lang-button"
      onClick={(e) => {
        e.preventDefault();
        setMenuHidden(!menuHidden);
      }}
      className={`${styles.lang_icon} flex gap-[6px] items-center hover:cursor-pointer relative`}
    >
      <span className={`${styles.lang_button}`}>
        <Lang />
      </span>
      <h6 className="font-bold">RU</h6>
      <span
        className={`${styles.arrow_down} ${
          !menuHidden ? "rotate-180" : "rotate-0"
        }`}
      >
        <ArrowDown />
      </span>
      {!menuHidden && (
        <div
          className={`${styles.lang_dropdown} absolute top-[40px] left-0 flex flex-col gap-[12px] py-[16px] px-[28px] font-semibold text-[16px] bg-[#222B44] border-[1px] border-[#313E62] rounded-[8px]`}
        >
          <Link href="" className={styles.lang_dropdown_link}>
            RU
          </Link>
          <Link href="" className={styles.lang_dropdown_link}>
            EN
          </Link>
          <Link href="" className={styles.lang_dropdown_link}>
            ES
          </Link>
          <Link href="" className={styles.lang_dropdown_link}>
            DE
          </Link>
        </div>
      )}
    </button>
  );
};

export default LangButton;
