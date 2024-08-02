import Link from "next/link";

// icons
import Logo from "@/public/logo.svg";

//
import styles from "@/styles/Navbar.module.css";
import MenuButton from "./MenuButton";
import Navlinks from "./Navlinks";
import LangButton from "./LangButton";

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
        <LangButton />
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
