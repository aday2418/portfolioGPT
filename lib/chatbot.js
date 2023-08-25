(function() {
    // Define parameters
    const apiKey = "{{api_key}}";
    const welcomeMessage = "{{welcome_message}}";
    const chatbotColor = "{{chatbot_color}}";
    const removeBranding = {{remove_branding}};
        
    // Create the container for the chatbot
    var chatbotContainer = document.createElement('div');
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = '30px';
    chatbotContainer.style.right = '30px';
    chatbotContainer.style.display = 'flex';
    chatbotContainer.style.flexDirection = 'column';
    chatbotContainer.style.gap = '20px';

    // Create Robot Icon
    var robot = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    robot.setAttributeNS(null, 'viewBox', '0 0 215 223.495');
    robot.style.marginBottom = '5px';
    robot.style.stroke = "white";
    robot.style.fill = "white";

    // Create Path Element
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttributeNS(null, 'd', 'M 179.5 47.751 L 111.5 47.751 L 111.5 11.751 C 111.5 8.672 108.166 6.747 105.5 8.287 C 104.262 9.001 103.5 10.322 103.5 11.751 L 103.5 47.751 L 35.5 47.751 C 20.043 47.768 7.517 60.294 7.5 75.751 L 7.5 187.751 C 7.517 203.208 20.043 215.734 35.5 215.751 L 179.5 215.751 C 194.956 215.734 207.482 203.208 207.5 187.751 L 207.5 75.751 C 207.482 60.294 194.956 47.768 179.5 47.751 Z M 199.5 187.751 C 199.487 198.792 190.54 207.739 179.5 207.751 L 35.5 207.751 C 24.459 207.739 15.512 198.792 15.5 187.751 L 15.5 75.751 C 15.512 64.71 24.459 55.763 35.5 55.751 L 179.5 55.751 C 190.54 55.763 199.487 64.71 199.5 75.751 L 199.5 187.751 Z M 143.5 135.751 L 71.5 135.751 C 53.024 135.751 41.477 155.751 50.715 171.751 C 55.002 179.177 62.925 183.751 71.5 183.751 L 143.5 183.751 C 161.975 183.751 173.522 163.751 164.284 147.751 C 159.997 140.325 152.074 135.751 143.5 135.751 Z M 123.5 143.751 L 123.5 175.751 L 91.5 175.751 L 91.5 143.751 L 123.5 143.751 Z M 55.5 159.751 C 55.51 150.919 62.667 143.761 71.5 143.751 L 83.5 143.751 L 83.5 175.751 L 71.5 175.751 C 62.667 175.741 55.51 168.583 55.5 159.751 Z M 143.5 175.751 L 131.5 175.751 L 131.5 143.751 L 143.5 143.751 C 155.816 143.751 163.514 157.084 157.356 167.751 C 154.498 172.701 149.216 175.751 143.5 175.751 Z M 55.5 103.751 C 55.5 97.593 62.166 93.744 67.5 96.823 C 72.833 99.902 72.833 107.6 67.5 110.679 C 66.283 111.381 64.904 111.751 63.5 111.751 C 59.081 111.751 55.5 108.169 55.5 103.751 Z M 143.5 103.751 C 143.5 97.593 150.166 93.744 155.5 96.823 C 160.833 99.902 160.833 107.6 155.5 110.679 C 154.283 111.381 152.904 111.751 151.5 111.751 C 147.081 111.751 143.5 108.169 143.5 103.751 Z');
    path.setAttributeNS(null, 'style', 'stroke-miterlimit: 3.66; stroke-width: 6px;');

    // Append Path to SVG
    robot.appendChild(path);

    // Create Arrow Icon
    var arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.setAttributeNS(null, 'viewBox', '0 0 15 7.5');
    arrow.style.stroke = "white";
    arrow.style.fill = "none";
    arrow.style.marginTop = "3px";

    // Create Path Element
    var arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrowPath.setAttributeNS(null, 'd', 'M 2.5 1.25 L 7.5 6.25 L 12.5 1.25');
    arrowPath.setAttributeNS(null, 'style', 'stroke-width: 1.5px;');
    arrowPath.setAttributeNS(null, 'stroke-linecap', 'round')

    // Append Path to SVG
    arrow.appendChild(arrowPath);

    // Create Controller
    var controller = document.createElement('button');
    controller.style.alignSelf = 'flex-end';
    controller.style.width = '60px';
    controller.style.height = '60px';
    controller.style.borderRadius = '100%';
    controller.style.backgroundColor = chatbotColor;
    controller.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';
    controller.style.padding = '13px';
    controller.style.display = 'flex';
    controller.style.alignItems = 'center';

    // Create chatbot
    var chatbot = document.createElement('div');
    chatbot.style.position = 'relative';
    chatbot.style.width = '370px';
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
    chatHistory.style.height = '475px';
    chatHistory.style.overflowY = 'auto';
    
    var chatHistoryMessageContainer = document.createElement('div');
    chatHistoryMessageContainer.style.position = "relative";
    chatHistoryMessageContainer.style.width = "100%";
    chatHistoryMessageContainer.style.display = "flex";
    chatHistoryMessageContainer.style.flexDirection = "column";
    chatHistoryMessageContainer.style.gap = "0.5rem";
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
        chatHistoryMessage.style.whiteSpace = "pre-wrap";
        chatHistoryMessage.style.opacity = ".8";
        chatHistoryMessage.style.fontSize = "0.9rem";

        if(sender == "user") {
            chatHistoryMessage.style.backgroundColor = chatbotColor;
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
   chatForm.style.height = "45px";
   chatForm.style.display = "flex";
   chatForm.style.borderTopWidth = "1px";
   chatForm.style.borderBottomWidth = "1px";
   chatForm.style.borderColor = "#d1d5db";
   chatForm.style.borderTopLeftRadius = "0.375rem";
   chatForm.style.borderTopRightRadius = "0.375rem";
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
   chatInput.style.fontSize = "0.9rem";

   
    var chatButton = document.createElement('button');
    chatButton.type = "submit";
    chatButton.innerHTML = "Submit";
    chatButton.style.height = "100%";
    chatButton.style.backgroundColor = chatbotColor;
    chatButton.style.color = "white";
    chatButton.style.fontWeight = "500";
    chatButton.style.letterSpacing = "0.05em";
    chatButton.style.paddingLeft = "10px";
    chatButton.style.paddingRight = "10px";
    chatButton.style.transitionProperty = "all";
    chatButton.style.transitionDuration = "200ms";
    chatButton.style.opacity = ".8";
    chatButton.style.fontSize = "0.9rem";

    chatButton.addEventListener('mouseover', function() {
        chatButton.style.opacity = "1";
    });
      
    chatButton.addEventListener('mouseout', function() {
        chatButton.style.opacity = ".8";
    });

    var branding = document.createElement('div');
    branding.style.position = "relative";
    branding.style.width = "100%";
    branding.style.paddingTop = "5px";
    branding.style.paddingBottom = "5px";
    branding.style.paddingLeft = "10px";
    branding.style.paddingRight = "10px";
    branding.style.display = "flex";
    branding.style.backgroundColor = "#f3f4f6";
    branding.style.justifyContent = "center";

    var brandingTitle = document.createElement('h1');
    brandingTitle.style.width = "fit-content";
    brandingTitle.style.fontWeight = "500";
    brandingTitle.style.color = "#6b7280";
    brandingTitle.style.letterSpacing = "0.025rem";
    brandingTitle.style.fontSize = "0.9rem";

    var brandLink = document.createElement('a');
    brandLink.href = "http://localhost:3000";
    brandLink.target = "_blank";
    brandLink.innerText = "Chatfolio";
    brandLink.style.color = "#4b5563";
    brandLink.style.textDecorationLine = "underline";
    
    brandingTitle.appendChild(document.createTextNode("Powered by "));
    brandingTitle.appendChild(brandLink);

    let chatHidden = true;
    const defaultMessage = welcomeMessage;
    const messageHistory = [];

    const showChat = () => {
        chatHidden = false;
        chatbot.style.opacity = "100";
        chatbot.style.visibility = "visible";

        // replace robot with arrow
        controller.removeChild(controller.firstChild);
        controller.appendChild(arrow);
    }

    const hideChat = () => {
        chatHidden = true;
        chatbot.style.opacity = "0";
        chatbot.style.visibility = "hidden";

        // replace arrow with robot
        controller.removeChild(controller.firstChild);
        controller.appendChild(robot);
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

    chatbot.appendChild(chatForm);

    if(!removeBranding) {
        branding.appendChild(brandingTitle);
        chatbot.appendChild(branding);
    }

    // Append Robot Icon to Controller
    controller.appendChild(robot);

    // Append chatbox to chatbot container
    chatbotContainer.appendChild(chatbot);
    chatbotContainer.appendChild(controller);

    // Append chatbot container to body of the page
    document.body.appendChild(chatbotContainer);
    })();
  