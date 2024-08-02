import Link from "next/link";

// icons
import ArrowDown from "@/public/arrow-down.svg";
import Lang from "@/public/lang.svg";
import Logo from "@/public/logo.svg";

//
import styles from "@/styles/Navbar.module.css";
import MenuButton from "./MenuButton";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <header
      className={`${styles.navbar} flex text-white items-center h-[80px] w-full lg:justify-evenly sticky top-0 left-0`}
    >
      <div className="flex h-full">
        <div className={`${styles.logo_wrapper} font-bold text-3xl`}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div
          className={`${styles.navlinks} hidden font-semibold items-center lg:flex relative h-full`}
        >
          <Navlinks />
        </div>
      </div>
      <div className="flex mr-[40px] items-center ml-auto lg:m-0">
        <div
          className={`${styles.icon} ${styles.lang_icon} flex gap-[6px] items-center hover:cursor-pointer `}
        >
          <span className={`${styles.lang_button} lang-button`}>
            <Lang />
          </span>
          <h6 className="font-bold">RU</h6>
          <span className={`${styles.arrow_down}`}>
            <ArrowDown />
          </span>
        </div>
        <button
          className={`${styles.login_button} ml-[34px] font-medium py-[10px] px-[18px] sm:block hidden`}
        >
          Авторизация
        </button>
        <MenuButton />
      </div>
    </header>
  );
};

export default Navbar;
