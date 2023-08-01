import fs from 'fs';
import path from 'path';

export default function getChatbot(key: string, userInfo: any) {
    const { removeBranding } = userInfo;

    const filePath = path.join(__dirname, '../../../../lib/chatbot.js');
    let script = fs.readFileSync(filePath, 'utf-8');

    // Define the parameters you want to insert
    const params = {
        apiKey: key,
        removeBranding
    };
    
    // Replace each placeholder with the corresponding value
    for (const [key, value] of Object.entries(params)) {
        const placeholder = `{{${key}}}`;
        script = script.replace(new RegExp(placeholder, 'g'), value);
    }
    
    return script;
}
  