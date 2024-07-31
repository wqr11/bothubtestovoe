import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/HomePage.module.css";
import AbilitiesCard from "@/components/AbilitiesCard";

import midJourneyImage from "@/public/midjourney-image.png";

const Home = () => {
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

  const abilitiesData = [
    {
      title: "Создание увлекательного контента",
      desc: "Вы когда-нибудь мечтали написать интересную книгу или статью, но не знали, с чего начать? ChatGPT отлично справляется с генерацией текстов на любые темы. Опишите ему свою идею - и он создаст увлекательный контент, который захватит внимание читателей.",
    },
    {
      title: "Решение сложных задач",
      desc: "Задачи по математике или программированию иногда кажутся неразрешимыми головоломками. Но не для ChatGPT! Он проанализирует проблему и предложит пошаговое решение. Вы быстро разберетесь в сложных концепциях благодаря его доступным объяснениям.",
    },
    {
      title: "Разработка и отладка кода",
      desc: "ChatGPT может помочь в написании и исправлении кода. Он проанализирует ваш код, найдет ошибки и предложит способы их исправления. Также ChatGPT способен самостоятельно писать код по вашим указаниям - к примеру, для создания веб-сайта или приложения.",
    },
    {
      title: "Перевод текстов между языками",
      desc: "ChatGPT отлично справляется с переводом текстов на десятки языков. Теперь вам не нужно тратить время на поиск переводчика - просто попросите ChatGPT, и он мгновенно переведет любой текст на нужный вам язык.",
    },
    {
      title: "Помощь в написании резюме",
      desc: "Вы ищете новую работу и нуждаетесь в резюме, которое произведет впечатление на работодателя? ChatGPT поможет создать резюме, идеально подходящее под ваши навыки и опыт. Опишите ему желаемую вакансию - и получите готовое резюме в нужном формате.",
    },
    {
      title: "Виртуальный помощник в жизни",
      desc: "Не знаете, как приготовить новое блюдо или спланировать отпуск? Просто спросите ChatGPT! Он выступит в качестве виртуального помощника в повседневных задачах, предоставив полезную информацию и рекомендации в любой сфере жизни.",
    },
  ];

  return (
    <div className={styles.homepage}>
      <div className={`${styles.landing} lg:flex lg:w-[70%] m-auto gap-[30px]`}>
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
        <div
          className={`${styles.dialogue} lg:w-[60%] max-w-[80%] lg:ml-[30px] mt-[48px] mx-auto`}
        ></div>
      </div>
      <div className="ml-2">
        <h2 className="font-semibold text-center mt-[60px] mb-[42px]">
          Возможности ChatGPT
        </h2>
        <div className="grid gap-[30px] xl:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[70%] size-fit m-auto">
          {abilitiesData.map((ability, idx) => (
            <AbilitiesCard
              key={`ability-card-${idx}`}
              title={ability.title}
              desc={ability.desc}
            />
          ))}
        </div>
      </div>
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
            генерировать изображения с MidJourney прямо сейчас! Кликните на
            кнопку ниже, чтобы начать творить.
          </h5>
          <div className="mt-[42px]">
            <Link className={styles.try_midjourney} href="">
              Попробовать Midjourney
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
