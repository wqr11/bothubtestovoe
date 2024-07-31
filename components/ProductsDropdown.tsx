import Link from "next/link";

import BotHubAgg from "@/public/bothub-agg.svg";
import Business from "@/public/business-colored.svg";
import TgColored from "@/public/tg-colored.svg";

import styles from "@/styles/Navbar.module.css";

const ProductsDropdown = () => {
  return (
    <div
      className={`${styles.products_dropdown} text-white lg:absolute top-[80px] left-0 bg-[#222B44] p-[20px] grid-cols-1 xl:grid-cols-2 gap-[28px] lg:w-max w-full lg:m-0 mt-[14px] lg:rounded-[17px]`}
    >
      <Link className="flex gap-[14px] items-center p-[14px]" href="">
        <BotHubAgg className={styles.icon_premium_gradient} />
        <div className="flex flex-col gap-1">
          <h5 className="font-semibold text-[16px]">
            Агрегатор нейросетей BotHub
          </h5>
          <p className="font-normal text-[12px]">
            ChatGPT на базе 3.5 и 4.0 версии OpenAI
          </p>
        </div>
      </Link>
      <Link className="flex gap-[14px] items-center p-[14px]" href="">
        <TgColored className={styles.icon_premium_gradient} />
        <div className="flex flex-col gap-1">
          <h5 className="font-semibold text-[16px]">Telegram бот</h5>
          <p className="font-normal text-[12px]">
            Удобный бот в Telegram который всегда под рукой
          </p>
        </div>
      </Link>
      <Link className="flex gap-[14px] items-center p-[14px]" href="">
        <Business className={styles.icon_premium_gradient} />
        <div className="flex flex-col gap-1">
          <h5 className="font-semibold text-[16px]">Бизнес бот</h5>
          <p className="font-normal text-[12px]">
            ChatGPT для эффективного решения бизнес задач
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductsDropdown;
