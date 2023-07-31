(function() {
    // Define the container where the chatbot will be placed
    var container = document.getElementById('chatbot-container');
    if (!container) return;
  
    // Create chatbot elements
    var chatbox = document.createElement('div');
    chatbox.style.width = '300px';
    chatbox.style.height = '400px';
    chatbox.style.border = '1px solid #ccc';
    chatbox.style.position = 'relative';
  
    var chatArea = document.createElement('div');
    chatArea.style.height = '340px';
    chatArea.style.overflowY = 'scroll';
  
    var inputArea = document.createElement('div');
    inputArea.style.position = 'absolute';
    inputArea.style.bottom = '0';
    inputArea.style.width = '100%';
  
    var userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.style.width = '80%';
  
    var sendButton = document.createElement('button');
    sendButton.innerHTML = 'Send';
    sendButton.onclick = function() {
      // Logic to handle sending message
      var message = userInput.value;
      // Add logic to handle the message, such as sending it to your server
      userInput.value = '';
    };
  
    // Assemble elements
    inputArea.appendChild(userInput);
    inputArea.appendChild(sendButton);
    chatbox.appendChild(chatArea);
    chatbox.appendChild(inputArea);
    container.appendChild(chatbox);
  
    // Additional logic to handle receiving messages, updating chatArea, etc.
  })();
  