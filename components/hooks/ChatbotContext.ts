import { createContext } from "react";

export default createContext({
    welcomeMessage: "",
    changeWelcomeMessage: (value: string) => {},
    chatbotColor: "",
    changeChatbotColor: (value: string) => {},
    removeBranding: false,
    changeRemoveBranding: (value: boolean) => {}
});
