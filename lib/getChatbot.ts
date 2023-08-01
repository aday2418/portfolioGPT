import fs from 'fs';
import path from 'path';

export default function getChatbot(key: string, tier: string) {
    const filePath = path.join(__dirname, '../../../../lib/chatbot.js');
    let script = fs.readFileSync(filePath, 'utf-8');

    // Define the parameters you want to insert
    const params = {
        apiKey: key,
        tier
    };
    
    // Replace each placeholder with the corresponding value
    for (const [key, value] of Object.entries(params)) {
        const placeholder = `{{${key}}}`;
        script = script.replace(new RegExp(placeholder, 'g'), value);
    }
    
    return script;
}
  