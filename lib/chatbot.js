(function() {
    // Define parameters
    const removeBranding = {{removeBranding}};
    const apiKey = "{{apiKey}}";

    // Create the container for the chatbot
    var chatbotContainer = document.createElement('div');
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = '30px';
    chatbotContainer.style.right = '30px';
    chatbotContainer.style.display = 'flex';
    chatbotContainer.style.flexDirection = 'column';
    chatbotContainer.style.gap = '20px';

    // Create Controller
    var controller = document.createElement('button');
    controller.style.alignSelf = 'flex-end';
    controller.style.width = '60px';
    controller.style.height = '60px';
    controller.style.borderRadius = '100%';
    controller.style.backgroundColor = '#3b82f6';
    controller.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';

    // Create chatbot
    var chatbot = document.createElement('div');
    chatbot.style.position = 'relative';
    chatbot.style.width = '350px';
    chatbot.style.backgroundColor = '#e5e7eb';
    chatbot.style.borderRadius = "0.375rem";
    chatbot.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    chatbot.style.opacity = "0";
    chatbot.style.visibility = "hidden";
    chatbot.style.transitionProperty = "all";
    chatbot.style.transitionDuration = "200ms";

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
    chatHistoryMessageContainer.style.paddingTop = "20px";
    chatHistoryMessageContainer.style.paddingBottom = "20px";
    chatHistoryMessageContainer.style.paddingLeft = "10px";
    chatHistoryMessageContainer.style.paddingRight = "10px";


    const createMessage = (sender, message, loading=false) => {
        var chatHistoryMessage = document.createElement('h1');
        chatHistoryMessage.style.position = "relative";
        chatHistoryMessage.style.width = "fit-content";
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

        if(sender == "user") {
            chatHistoryMessage.style.backgroundColor = "#60a5fa";
            chatHistoryMessage.style.color = "white";
            chatHistoryMessage.style.alignSelf = "flex-end";   
        } else {
            chatHistoryMessage.style.backgroundColor = "white";
            chatHistoryMessage.style.color = "#1f2937";
            chatHistoryMessage.style.alignSelf = "flex-start";
        }

        if(loading) {
            chatHistoryMessage.setAttribute('data-messageType', 'loading');
        }

        chatHistoryMessage.innerHTML = message;

        return chatHistoryMessage;
    }

   var chatForm = document.createElement('form');
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

    chatButton.addEventListener('mouseover', function() {
        chatButton.style.backgroundColor = "#3b82f6";
    });
      
    chatButton.addEventListener('mouseout', function() {
        chatButton.style.backgroundColor = "#60a5fa";
    });

    var branding = document.createElement('div');
    branding.style.position = "relative";
    branding.style.width = "100%";
    branding.style.padding = "10px";
    branding.style.display = "flex";
    branding.style.justifyContent = "center";

    var brandingTitle = document.createElement('h1');
    brandingTitle.style.width = "fit-content";
    brandingTitle.style.fontWeight = "500";
    brandingTitle.style.color = "#6b7280";
    brandingTitle.style.letterSpacing = "0.025rem";

    var brandLink = document.createElement('a');
    brandLink.href = "http://localhost:3000";
    brandLink.target = "_blank";
    brandLink.innerText = "Chatfolio";
    brandLink.style.color = "#4b5563";
    brandLink.style.textDecorationLine = "underline";
    
    brandingTitle.appendChild(document.createTextNode("Powered by "));
    brandingTitle.appendChild(brandLink);

    let chatHidden = true;
    const defaultMessage = "Hello! How can I help you?";
    const messageHistory = [];

    const showChat = () => {
        chatHidden = false;
        chatbot.style.opacity = "100";
        chatbot.style.visibility = "visible";
    }

    const hideChat = () => {
        chatHidden = true;
        chatbot.style.opacity = "0";
        chatbot.style.visibility = "hidden";
    }

    const handleControllerClick = () => {
        if(chatHidden) {
            showChat();
        } else {
            hideChat();
        }
    }

    controller.onclick = handleControllerClick;

    const addMessageToHistory = (sender, message) => {
        messageHistory.push({ sender, message});
        const newMessage = createMessage(sender, message);
        chatHistoryMessageContainer.appendChild(newMessage);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    };

    const addLoading = () => {
        const newMessage = createMessage("bot", "...", true);
        chatHistoryMessageContainer.appendChild(newMessage)
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    const removeLoading = () => {
        const loadingMessage = Array.from(chatHistoryMessageContainer.children).find(
            (messageElement) => {
                return messageElement.getAttribute('data-messageType') === 'loading'                       
            }
        );
    
        if (loadingMessage) {
            chatHistoryMessageContainer.removeChild(loadingMessage);
        }
    }
 
    const callChatbot = async (messageHistory) => {
        const fetchPath = `/api/bot?id=${apiKey}`;
        const res = await fetch(fetchPath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ messageHistory })
        })
        const response = await res.json();
        return response.data;
    }

    const sendMessage = async (e) => {
        e.preventDefault();

        addMessageToHistory('user', chatInput.value);
        chatInput.value = '';

        try {
            addLoading();
            const response = await callChatbot(messageHistory); // Adjust as needed for your chatbot function
            addMessageToHistory('bot', response);
        } finally {
            removeLoading();
        }
    };

    // Initialize chat with default message
    if (defaultMessage) {
        addMessageToHistory('bot', defaultMessage);
    }

    chatForm.addEventListener('submit', sendMessage);


    // Append elements to chat history
    chatHistory.append(chatHistoryMessageContainer);

    // Append elements to chat form
    chatForm.append(chatInput);
    chatForm.append(chatButton);

    // Append elements to chatbox
    chatbot.appendChild(chatHistory);

    if(!removeBranding) {
        branding.appendChild(brandingTitle);
        chatbot.appendChild(branding);
    }

    chatbot.appendChild(chatForm);

    // Append chatbox to chatbot container
    chatbotContainer.appendChild(chatbot);
    chatbotContainer.appendChild(controller);

    // Append chatbot container to body of the page
    document.body.appendChild(chatbotContainer);
    })();
  