import fs from 'fs';
import path from 'path';

export default function getChatbot() {
    const filePath = path.join(__dirname, '../../../../lib/chatbot.js');
    return fs.readFileSync(filePath, 'utf-8');
}
  