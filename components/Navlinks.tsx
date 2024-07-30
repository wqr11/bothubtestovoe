import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

import ArrowDown from "@/public/arrow-down.svg";

const Navlinks = () => {
  return (
    <>
      <Link
        href=""
        className={`${styles.icon} ${styles.products_wrapper} flex gap-[8px] items-center`}
      >
        <span className={styles.navlink}>Продукты</span>
        <span className={`${styles.arrow_down}`}>
          <ArrowDown />
        </span>
      </Link>
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
