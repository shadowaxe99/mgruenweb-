import React, { useState } from 'react';
import { useChatGPT } from '../hooks/useChatGPT';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const { sendMessage, isLoading } = useChatGPT(messages, setMessages);

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value.trim();
    if (message) {
      sendMessage(message);
      event.target.reset();
    }
  };

  return (
    <div className='chat-container'>
      <ul className='messages-list'>
        {messages.map((msg, index) => (
          <li key={index} className={msg.isBot ? 'bot-message' : 'user-message'}>
            {msg.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage} className='send-message-form'>
        <input type='text' name='message' placeholder='Type your message here...' />
        <button type='submit' disabled={isLoading}>Send</button>
      </form>
    </div>
  );
};

export default Chat;
