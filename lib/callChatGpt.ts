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

export default async function callChatGpt(info: string, messageHistory: MessageType[], landingPage: boolean = false){
    const structuredHistory = messageHistory.map(message => {
      const { message: content, sender } = message 
      const role = sender == "bot" ? ChatCompletionRequestMessageRoleEnum.Assistant : ChatCompletionRequestMessageRoleEnum.User
      return {
        "role": role, 
        "content": content
      }
    })

    const systemMessage = landingPage ? "You are a helpful chatbot that delivers confident answers about chatfolio, a site that offers users a personalized chatbot for their portfolio website. Your answers are no longer than two sentences." : "You are a helpful chatbot that delivers confident answers about people's resumes. You only give answers, not cautions or warnings."

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": systemMessage}, 
            {"role": "user", "content": info},
            ...structuredHistory
        ],
      });

    return completion.data.choices[0].message?.content
}