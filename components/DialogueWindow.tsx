import { ChatCompletionRequestMessage } from "openai-edge";

import BotAnswer from "./BotAnswer";
import UserAnswer from "./UserAnswer";

import styles from "@/styles/HomePage.module.css";

const DialogueWindow = ({
  messages,
}: {
  messages: ChatCompletionRequestMessage[];
}) => {
  return (
    <div
      className={`${styles.dialogue_window} overflow-y-scroll max-h-[370px] relative z-20`}
    >
      {messages.map((message, idx) =>
        message.role === "user" ? (
          <UserAnswer
            userResponseText={message.content}
            key={`user-answer-${idx}`}
          />
        ) : (
          <BotAnswer
            botResponseText={message.content}
            key={`bot-answer-${idx}`}
          />
        )
      )}
    </div>
  );
};

export default DialogueWindow;
