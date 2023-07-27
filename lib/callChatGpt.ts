import { MessageType } from "@/types/MessageType";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

enum ChatCompletionRequestMessageRoleEnum {
  User = 'user',
  Assistant = 'assistant',
  System = 'system',
}

export default async function callChatGpt(resInfo: string, messageHistory: MessageType[]){
    const structuredHistory = messageHistory.map(message => {
      const { message: content, sender } = message 
      const role = sender == "bot" ? ChatCompletionRequestMessageRoleEnum.Assistant : ChatCompletionRequestMessageRoleEnum.User
      return {
        "role": role, 
        "content": content
      }
    })

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "You are a helpful chatbot that delivers confident answers about people's resumes. You only give answers, not cautions or warnings."}, 
            {"role": "user", "content": resInfo},
            ...structuredHistory
        ],
      });

    return completion.data.choices[0].message?.content
}