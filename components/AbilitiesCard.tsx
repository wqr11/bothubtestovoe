import styles from "@/styles/AbilitiesCard.module.css";

const AbilitiesCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      className={`${styles.card_wrapper} max-w-[410px] px-[24px] py-[28px] min-h-full`}
    >
      <h4 className="font-semibold text-[22px]">{title}</h4>
      <h6 className="font-medium text-[16px] mt-[16px]">{desc}</h6>
    </div>
  );
};

export default AbilitiesCard;
