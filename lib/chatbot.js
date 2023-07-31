(function() {
    // Create the container for the chatbot
    var chatbotContainer = document.createElement('div');
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = '15px';
    chatbotContainer.style.right = '15px';
  
    // Create chatbot
    var chatbot = document.createElement('div');
    chatbot.style.position = 'relative';
    chatbot.style.width = '600px';
    chatbot.style.backgroundColor = '#e5e7eb';
    chatbot.style.borderRadius = "0.375rem";
  
    // Create chat history
    var chatHistory = document.createElement('div');
    chatHistory.style.position = 'relative';
    chatHistory.style.width = '100%';
    chatHistory.style.height = '400px';
    chatHistory.style.overflowY = 'auto';
    
    var chatHistoryMessageContainer = document.createElement('div');
    chatHistoryMessageContainer.style.position = "relative";
    chatHistoryMessageContainer.style.width = "100%";
    chatHistoryMessageContainer.style.display = "flex";
    chatHistoryMessageContainer.style.flexDirection = "column";
    chatHistoryMessageContainer.style.gap = "0.25rem";
    chatHistoryMessageContainer.style.padding = "20px";

    var chatHistoryMessage = document.createElement('h1');
    chatHistoryMessage.style.position = "relative";
    chatHistoryMessage.style.width = "fith";
    chatHistoryMessage.style.display = "flex";
    chatHistoryMessage.style.maxWidth = "70%";
    chatHistoryMessage.style.paddingLeft = "10px";
    chatHistoryMessage.style.paddingRight = "10px";
    chatHistoryMessage.style.paddingTop = "5px";
    chatHistoryMessage.style.paddingBottom = "5px";
    chatHistoryMessage.style.letterSpacing = "0.025rem";
    chatHistoryMessage.style.borderRadius = "0.75rem";
    chatHistoryMessage.style.fontWeight = "500";
    chatHistoryMessage.style.overflowWrap = "break-words";
    chatHistoryMessage.style.overflow = "hidden";
    chatHistoryMessage.style.backgroundColor = "white";
    chatHistoryMessage.style.color = "black";
    chatHistoryMessage.style.alignSelf = "flex-start";

   var chatForm = document.createElement('form');
   "relative w-full gap-2 h-[50px] flex border border-gray-300 rounded-md overflow-hidden smoothe shadow-md hover:shadow-lg bg-white"
   chatForm.style.position = "relative";
   chatForm.style.width = "100%";
   chatForm.style.gap = "0.5rem";
   chatForm.style.height = "50px";
   chatForm.style.display = "flex";
   chatForm.style.borderWidth = "1px";
   chatForm.style.borderColor = "#d1d5db";
   chatForm.style.borderRadius = "0.375rem";
   chatForm.style.overflow = "hidden";
   chatForm.style.transitionProperty = "all";
   chatForm.style.transitionDuration = "200ms";
   chatForm.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
   chatForm.style.backgroundColor = "white";

   var chatInput = document.createElement('input');
   chatInput.type = "text";
   chatInput.placeholder = "Ask me anything...";
   chatInput.style.width = "100%";
   chatInput.style.padding = "10px";
   chatInput.style.outline = "2px solid transparent";
   chatInput.style.outlineOffset = "2px";
   
    var chatButton = document.createElement('button');
    chatButton.type = "submit";
    chatButton.innerHTML = "Submit";
    chatButton.style.height = "100%";
    chatButton.style.backgroundColor = "#60a5fa";
    chatButton.style.color = "white";
    chatButton.style.fontWeight = "500";
    chatButton.style.letterSpacing = "0.05em";
    chatButton.style.paddingLeft = "10px";
    chatButton.style.paddingRight = "10px";
    chatButton.style.transitionProperty = "all";
    chatButton.style.transitionDuration = "200ms";

    // Append elements to chat history
    chatHistory.append(chatHistoryMessageContainer);

    // Append elements to chat form
    chatForm.append(chatInput);
    chatForm.append(chatButton);

    // Append elements to chatbox
    chatbot.appendChild(chatHistory);
    chatbot.appendChild(chatForm);

    // Append chatbox to chatbot container
    chatbotContainer.appendChild(chatbot);

    // Append chatbot container to body of the page
    document.body.appendChild(chatbotContainer);
    })();
  