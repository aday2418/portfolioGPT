// render.js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Chatbot from './components/Chatbot.tsx';
const htmlString = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(Chatbot, null));

// You can now use the htmlString variable, which contains the HTML representation of your component
console.log(htmlString); // Outputs the HTML string to the console
