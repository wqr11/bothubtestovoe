// icons
import ArrowDown from "@/public/arrow-down.svg";
import Lang from "@/public/lang.svg";

//
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      className={`${styles.navbar} flex text-white items-center h-[80px] bg-[#121825] justify-center`}
    >
      <div className={`${styles.logo_wrapper} font-bold text-3xl`}>
        <h4 className="flex gap-1">
          Bot
          <span
            className="bg-[#1C64F2]"
            style={{ borderRadius: "4px", paddingInline: "5px" }}
          >
            hub
          </span>
        </h4>
      </div>
      <div className={`${styles.navlinks} flex font-semibold items-center`}>
        <div className={`${styles.icon} flex gap-[8px] items-center`}>
          <h6 className="hover:text-[#1C64F2] hover:cursor-pointer">
            Продукты
          </h6>
          <span className={`${styles.arrow_down}`}>
            <ArrowDown />
          </span>
        </div>
        <h6 className="hover:text-[#1C64F2] hover:cursor-pointer">Пакеты</h6>
        <h6 className="hover:text-[#1C64F2] hover:cursor-pointer">API</h6>
        <h6 className="hover:text-[#1C64F2] hover:cursor-pointer">Блог</h6>
      </div>

      <div className="flex">
        <div
          className={`${styles.icon} ${styles.lang_icon} flex gap-[6px] items-center`}
        >
          <span className={`${styles.lang_button} lang-button`}>
            <Lang />
          </span>
          <h6 className="hover:cursor-pointer font-bold">RU</h6>
          <span className={`${styles.arrow_down}`}>
            <ArrowDown />
          </span>
        </div>
        <button
          className={`${styles.login_button} font-medium py-[10px] px-[18px] hover:bg-[#073CA4] transition-colors duration-300 ease-in-out`}
        >
          Авторизация
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
