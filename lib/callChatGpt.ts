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

    const systemMessage = landingPage ? `You will be provided with information about a business delimited by triple quotes. Answer any questions asked about this business in 3 sentences or less. Give helpful concise responses in your own  words, do not copy the information's words. If the question is not related to this business then simply write: "I'm sorry, I can only answer questions about Chatfolio". Whenever you are providing a list, write the response in bullet point format.` : `You will be provided with a somebody's career resume delimited by triple quotes. Answer any questions asked about this person's resume in 3rd person in 3 sentences or less. Give helpful concise responses in your own  words, do not copy the resume's words. If the question is not related to this person then simply write: "I'm sorry, I can only answer questions about this person's resume". Whenever you are providing a list, write the response in bullet point format.`
  
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": systemMessage}, 
            {"role": "user", "content": `"${info}"`},
            ...structuredHistory
        ],
      });

    return completion.data.choices[0].message?.content
}