import AbilityCards from "@/components/AbilityCards";
import LandingText from "@/components/LandingText";
import Dialogue from "@/components/Dialogue";

import styles from "@/styles/HomePage.module.css";
import MidjourneySection from "@/components/MidjourneySection";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className={`${styles.landing} lg:flex lg:w-[70%] m-auto gap-[30px]`}>
        <LandingText />
        <Dialogue />
      </div>
      <AbilityCards />
      <MidjourneySection />
    </div>
  );
};

export default Home;
