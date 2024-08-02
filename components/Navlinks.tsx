import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

import TgColored from "@/public/tg-colored.svg";

import ArrowDown from "@/public/arrow-down.svg";
import ProductsDropdown from "./ProductsDropdown";

const Navlinks = () => {
  return (
    <>
      <div
        className={`${styles.products_wrapper} ${styles.navlink} ${styles.icon}`}
      >
        <button className={`flex gap-[8px] items-center`}>
          Продукты
          <span className={styles.arrow_down}>
            <ArrowDown />
          </span>
        </button>
        <ProductsDropdown />
      </div>
      <Link href="" className={styles.navlink}>
        Пакеты
      </Link>
      <Link href="" className={styles.navlink}>
        Модели
      </Link>
      <Link href="" className={styles.navlink}>
        API
      </Link>
      <Link href="" className={styles.navlink}>
        Блог
      </Link>
    </>
  );
};

export default Navlinks;
