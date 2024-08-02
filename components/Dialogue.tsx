"use client";

import { useState, useRef, useEffect } from "react";

import getChatCompletion from "@/actions/getChatCompletion";
import { ChatCompletionRequestMessage } from "openai-edge";

import Avatar from "@/public/avatar.svg";
import Checkmark from "@/public/checkmark.svg";
import Send from "@/public/send.svg";

import styles from "@/styles/HomePage.module.css";

import BotAnswer from "./BotAnswer";
import UserAnswer from "./UserAnswer";

const Dialogue = () => {
  const initialMessages: ChatCompletionRequestMessage[] = [
    { role: "assistant", content: "Привет! Чем я могу помочь?" },
    {
      role: "user",
      content: "Привет, бот!",
    },
  ];

  const [prompt, setPrompt] = useState<string>("");
  const [considerContext, setConsiderContext] = useState<boolean>(true);

  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const scrollRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < initialMessages.length; i++) {
      setTimeout(() => {
        setMessages((messages) => [...messages, initialMessages[i]]);
      }, i * 1000); // RUNS TWICE IN DEV MODE, BEFORE CHECKING FOR BUGS SET reactStrictMode : false IN next.config.mjs !!!
    }
  }, []);

  if (typeof window !== "undefined") {
    document
      .getElementById("text-area-input")
      ?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          document.getElementById("send-button")?.click();
        }
      });
  }

  return (
    <div
      className={`${styles.dialogue} lg:w-[60%] max-w-[80%] lg:ml-[30px] mt-[48px] mx-auto`}
    >
      <div className="w-full border-[#374151] border-b-[1px] flex px-[24px] py-[16px] items-center flex-wrap gap-[16px] justify-between">
        <div className="flex gap-[12px]">
          <span className="size-max">
            <Avatar />
          </span>
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
              <input
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.preventDefault();
                  setConsiderContext(!considerContext);
                }}
                type="checkbox"
                className={`${styles.checkbox}`}
                defaultChecked
              ></input>
              <span
                className={`${styles.checkmark} absolute top-[calc(50%-6px)] left-[calc(50%-5px)] z-10`}
              >
                <Checkmark />
              </span>
            </div>
          </label>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="overflow-y-scroll max-h-[380px] pb-[30px] relative z-20"
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
      <div className="absolute w-full sm:bottom-[24px] left-0 bottom-[18px] z-20">
        <div className="mx-[24px] relative mt-auto min-w-max min-h-max">
          <form
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              if (prompt.length > 0) {
                setMessages(messages.concat({ role: "user", content: prompt }));

                scrollRef !== null
                  ? setTimeout(() => {
                      // @ts-ignore // Ignores because there's already a check for scrollRef not being equal to null
                      scrollRef.current.scrollTo(
                        0,
                        // @ts-ignore
                        scrollRef.current.scrollHeight
                      );
                    }, 200)
                  : null;

                setPrompt("");

                const data = await getChatCompletion(
                  considerContext
                    ? messages.concat({ role: "user", content: prompt })
                    : [{ role: "user", content: prompt }]
                );

                setMessages(
                  messages.concat(
                    { role: "user", content: prompt },
                    { role: "assistant", content: data }
                  )
                );

                scrollRef !== null
                  ? setTimeout(() => {
                      // @ts-ignore
                      scrollRef.current.scrollTo(
                        0,
                        // @ts-ignore
                        scrollRef.current.scrollHeight
                      );
                    }, 200)
                  : null;
              }
            }}
          >
            <textarea
              id="text-area-input"
              value={prompt}
              onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setPrompt(e.target.value);
              }}
              rows={1}
              className={`${styles.dialogue_input} size-full resize-none bg-[#121825] outline-none rounded-[10px] pl-[20px] pr-[80px] py-[24px] border-[1px] border-[#313E62] font-medium xl:text-[14px] text-[12px]`}
              placeholder="Спроси о чем-нибудь..."
            ></textarea>
            <button
              id="send-button"
              type="submit"
              className="p-[11px] bg-[#1C64F2] rounded-[8px] absolute right-[20px] top-[14px] active:bg-[#073ca4]"
              style={{ boxShadow: "0px 1px 1px 0px #FFFFFF66 inset" }}
            >
              <Send />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
