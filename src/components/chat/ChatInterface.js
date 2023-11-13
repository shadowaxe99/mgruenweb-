import React, { useState } from 'react';
import ChatGPT from 'react-chatgpt';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    // Logic to send message to ChatGPT and receive response
    setMessages([...messages, newMessage]);
  };

  return (
    <div className='chat-interface'>
      <ChatGPT
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatInterface;
