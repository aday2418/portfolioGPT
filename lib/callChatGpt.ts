import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



export default async function callChatGpt(resInfo: string, question: string){
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "You are a helpful chatbot that delivers confident answers about people's resumes. You only give answers, not cautions or warnings."}, 
            {"role": "user", "content": resInfo},
            {"role": "user", "content": question}
        ],
      });

    return completion.data.choices[0].message?.content
}