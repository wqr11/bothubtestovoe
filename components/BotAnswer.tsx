import GeminiIcon from "@/public/gemini.svg";

import styles from "@/styles/DialogueWindow.module.css";

const BotAnswer = ({
  botResponseText,
}: {
  botResponseText: string | undefined;
}) => {
  return (
    <div className={`${styles.response} flex flex-col mx-[24px] mt-[18px]`}>
      <p className="w-full pl-[50px] pb-[8px]">Gemini</p>
      <div className="flex gap-[10px]">
        <div className="w-max mt-auto">
          <GeminiIcon />
        </div>
        <div className="px-[16px] py-[14px] bg-[#313E62] rounded-[10px] rounded-bl-none max-w-[85%]">
          <p className="text-[16px] font-normal break-words">
            {botResponseText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BotAnswer;
