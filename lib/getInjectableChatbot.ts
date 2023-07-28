import Chatbot from "@/components/Chatbot"

export default function getInjectableChatbot() {
    let root = document.createElement('div');
    root.id = 'my-unique-id';    
    document.body.appendChild(root);
    
    let script = document.createElement('script');
    script.src = 'https://your-server.com/path/to/your/app.js';  // Path to the main JavaScript file of your built application
    document.body.appendChild(script);
}