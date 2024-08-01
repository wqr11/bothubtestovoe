import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/HomePage.module.css";

import midJourneyImage from "@/public/midjourney-image.png";

const MidjourneySection = () => {
  return (
    <div className="mt-[86px] w-[70%] m-auto flex xl:justify-between flex-col xl:flex-row items-center gap-[30px]">
      <Image
        className={styles.midjourney_image}
        src={midJourneyImage}
        alt="Midjourney-images"
      />
      <div className="xl:ml-[40px] xl:w-[45%] xl:text-start text-center">
        <h2 className="font-semibold text-[34px]">
          Генерация Изображений Через Midjourney
        </h2>
        <h5 className="font-normal text-[16px] mt-[20px]">
          MidJourney - инструмент для создания уникальных изображений. Наши
          алгоритмы помогут вам воплотить в жизнь вашу идею. Начните
          генерировать изображения с MidJourney прямо сейчас! Кликните на кнопку
          ниже, чтобы начать творить.
        </h5>
        <div className="mt-[42px]">
          <Link className={styles.try_midjourney} href="">
            Попробовать Midjourney
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MidjourneySection;
