"use server";

import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessage,
} from "openai-edge";

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
  basePath: "https://bothub.chat/api/v2/openai/v1",
});

const openai = new OpenAIApi(configuration);

const getChatCompletion = async (messages: ChatCompletionRequestMessage[]) => {
  const completion = await openai.createChatCompletion({
    messages: messages,
    model: "gemini-pro",
  });

  const message = (await completion.json())?.choices[0].message.content;

  return message;
};

export default getChatCompletion;
