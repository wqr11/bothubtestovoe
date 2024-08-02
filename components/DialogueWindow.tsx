import { ChatCompletionRequestMessage } from "openai-edge";

import BotAnswer from "./BotAnswer";
import UserAnswer from "./UserAnswer";

const DialogueWindow = ({
  messages,
}: {
  messages: ChatCompletionRequestMessage[];
}) => {
  return (
    <div className="overflow-y-scroll max-h-[420px] pb-[50px] relative z-20">
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
