import Link from "next/link";

import styles from "@/styles/HomePage.module.css";

const LandingText = () => {
  const mainText = {
    lg: {
      title: "ChatGPT: ваш умный помощник",
      desc: "Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN и абонентской платы. Создавайте контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!",
    },
    sm: {
      title: "ChatGPT и Midjourney: путь к эффективному решению ваших задач",
      desc: "Откройте потенциал нейросетей с нашим агрегатором для улучшения диалогов и роста бизнеса. Полная доступность без VPN и платных регистраций!",
    },
  };

  return (
    <div className="lg:w-[40%] flex flex-col gap-2 mx-[40px] lg:text-start text-center my-auto">
      <h1 className="font-bold lg:text-[46px] sm:text-[40px] text-[28px] lg:block hidden">
        {mainText.lg.title}
      </h1>
      <h1 className="font-bold lg:text-[46px] sm:text-[40px] text-[28px] lg:hidden">
        {mainText.sm.title}
      </h1>
      <h5 className="font-medium lg:text-[16px] text-[14px] lg:block hidden">
        {mainText.lg.desc}
      </h5>
      <h5 className="font-medium lg:text-[16px] text-[14px] lg:hidden">
        {mainText.sm.desc}
      </h5>
      <Link
        href=""
        className={`${styles.start_button} size-fit mx-auto lg:m-0 font-semibold`}
      >
        Начать работу
      </Link>
    </div>
  );
};

export default LandingText;
