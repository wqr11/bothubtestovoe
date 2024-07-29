import Image from "next/image";

// icons
import arrowDown from "@/public/arrow-down.svg";
import lang from "@/public/lang.svg";

//
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
	return (
		<div className="flex text-white items-center h-[80px] bg-[#222B44]">
			<div className={`${styles.logo_wrapper} font-bold text-3xl`}>
				<h4 className="flex gap-1">
					Bot
					<span
						className="bg-[#1C64F2]"
						style={{ borderRadius: "4px", paddingInline: "5px" }}>
						hub
					</span>
				</h4>
			</div>
			<div className={`${styles.navlinks} flex font-semibold items-center`}>
				<div className="flex gap-[8px]">
					<h5>Продукты</h5>
					<Image src={arrowDown} width={16} height={16} alt="arrow-down" />
				</div>
				<h5>Пакеты</h5>
				<h5>API</h5>
				<h5>Блог</h5>
			</div>

			<div className="flex">
				<div className="flex gap-[6px] items-center">
					<Image src={lang} width={18} height={18} alt="Language" />
					<h5 className="font-bold">RU</h5>
					<Image src={arrowDown} width={16} height={16} alt="arrow-down" />
				</div>
				<button
					className={`${styles.login_button} font-medium py-[10px] px-[18px]`}>
					Авторизация
				</button>
			</div>
		</div>
	);
};

export default Navbar;
