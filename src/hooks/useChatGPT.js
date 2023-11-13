import { useEffect, useRef } from 'react';
import OpenAI from 'openai';

export const useChatGPT = (messages, setMessages) => {
  const openai = useRef(new OpenAI(process.env.REACT_APP_OPENAI_API_KEY));
  const isLoading = useRef(false);

  const sendMessage = async (message) => {
    isLoading.current = true;
    const botMessage = { text: message, isBot: true };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    try {
      const response = await openai.current.Completion.create({
        engine: 'davinci',
        prompt: message,
        max_tokens: 150,
      });
      const userMessage = { text: response.data.choices[0].text.trim(), isBot: false };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
    } catch (error) {
      console.error('Error while fetching data from OpenAI:', error);
    }
    isLoading.current = false;
  };

  useEffect(() => {
    if (messages.length === 0) {
      sendMessage('Hello! How can I assist you today?');
    }
  }, [messages.length]);

  return { sendMessage, isLoading: isLoading.current };
};
