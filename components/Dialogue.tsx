import Avatar from "@/public/avatar.svg";
import Checkmark from "@/public/checkmark.svg";

import styles from "@/styles/HomePage.module.css";

const Dialogue = () => {
  return (
    <div
      className={`${styles.dialogue} lg:w-[60%] max-w-[80%] lg:ml-[30px] mt-[48px] mx-auto`}
    >
      <div className="w-full border-[#374151] border-b-[1px] flex px-[24px] py-[16px] items-center flex-wrap gap-[16px] justify-between">
        <div className="flex gap-[12px]">
          <Avatar />
          <div>
            <h5 className="font-normal text-[16px]">
              BotHub: ChatGPT & Midjourney
            </h5>
            <h6 className="font-normal text-[14px] text-[#616D8D]">bot</h6>
          </div>
        </div>
        <div className="">
          <label className="font-normal text-[12px] gap-[12px] flex">
            Сохранить контекст
            <div className="relative">
              <input type="checkbox" className={`${styles.checkbox}`}></input>
              <span
                className={`${styles.checkmark} absolute top-[calc(50%-6px)] left-[calc(50%-5px)] z-10`}
              >
                <Checkmark />
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
