import Image from "next/image";

import Logo from "@/public/logo.svg";
import Alri from "@/public/alri.svg";
import TgCircle from "@/public/tg-circle.svg";
import Bot from "@/public/bot.svg";
import EmailCircle from "@/public/email-circle.svg";
import Habr2 from "@/public/habr-2.svg";
import Blog from "@/public/blog.svg";

import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-[#121825]`}>
      <div
        className={`${styles.footer_wrapper} text-white flex justify-center py-[64px] lg:gap-[73px] mx-[40px] lg:mx-auto size-fit`}
      >
        <div className="font-medium">
          <Logo />
          <div className="flex flex-col gap-[12px] mb-[46px]">
            <h6>ООО «Ботхаб» ОГРН 1236300016259</h6>
            <h6>@BotHub 2023</h6>
            <h6>Пользовательское соглашение</h6>
            <Alri className={styles.icon} />
          </div>
        </div>
        <div className={`${styles.section_wrapper} flex gap-[73px]`}>
          <div className={styles.footer_section_one}>
            <div className="text-white font-normal flex flex-col gap-[20px]">
              <h5 className={styles.footer_header}>Информация</h5>
              <a className={styles.footer_link} href="">
                Главная страница
              </a>
              <a className={styles.footer_link} href="">
                Тарифы
              </a>
              <a className={styles.footer_link} href="">
                Контакты
              </a>
              <a className={styles.footer_link} href="">
                Наши возможности
              </a>
              <a className={styles.footer_link} href="">
                Модели нейросети
              </a>
              <a className={styles.footer_link} href="">
                О Нас
              </a>
              <a className={styles.footer_link} href="">
                Для инвесторов
              </a>
            </div>
            <div className="text-white font-normal flex flex-col gap-[20px]">
              <h5 className={styles.footer_header}>Наши продукты</h5>
              <a className={styles.footer_link} href="">
                ChatGPT для бизнеса
              </a>
              <a className={styles.footer_link} href="">
                Агрегатор нейросетей
              </a>
              <a className={styles.footer_link} href="">
                ChatGPT в Telegram
              </a>
            </div>
          </div>
          <div className={styles.footer_section_two}>
            <div className="text-white font-normal flex flex-col gap-[20px]">
              <h5 className={styles.footer_header}>Ссылки</h5>
              <a
                className={`${styles.footer_link} ${styles.icon} flex gap-2 items-center flex-shrink-0`}
                href=""
              >
                <TgCircle />
                Сообщество в телеграм
              </a>
              <a
                className={`${styles.footer_link} ${styles.icon} flex gap-2 items-center`}
                href=""
              >
                <Bot />
                Телеграм бот
              </a>
              <a
                className={`${styles.footer_link} ${styles.icon} flex gap-2 items-center`}
                href=""
              >
                <EmailCircle />
                email@bothub.chat
              </a>
            </div>
            <div className="text-white font-normal flex flex-col gap-[20px]">
              <h5 className={styles.footer_header}>Блог</h5>
              <a
                className={`${styles.footer_link} ${styles.blog_icon} flex gap-2 items-center`}
                href=""
              >
                <Blog />
                Наш блог
              </a>
              <a
                className={`${styles.footer_link} ${styles.icon_white} ${styles.icon} flex gap-2 items-center`}
                href=""
              >
                <Habr2 />
                Habr
              </a>
              <a
                className={`${styles.footer_link} ${styles.icon} flex gap-2 items-center`}
                href=""
              >
                <TgCircle />
                Телеграм
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
