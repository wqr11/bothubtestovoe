import GuestAvatar from "@/public/default-avatar.svg";

import styles from "@/styles/DialogueWindow.module.css";

const UserAnswer = ({
  userResponseText,
}: {
  userResponseText: string | undefined;
}) => {
  return (
    <div
      className={`${styles.response} flex gap-[10px] mx-[24px] mt-[18px] justify-end`}
    >
      <div className="px-[16px] py-[14px] bg-[#1C64F2] rounded-[10px] rounded-br-none max-w-[80%]">
        <p className="font-normal text-[16px] break-words">
          {userResponseText}
        </p>
      </div>
      <div className="mt-auto">
        <GuestAvatar />
      </div>
    </div>
  );
};

export default UserAnswer;
