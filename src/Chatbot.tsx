import React, { useState } from "react";
import styled from "@emotion/styled"; // Import styled from Emotion
import googleLogo from "./assets/google-logo.png";

const ChatbotContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const ChatbotMessages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f9f9f9;
`;

const ChatbotMessage = styled.div`
  margin: 5px 0;
  padding: 8px;
  border-radius: 4px;
  background-color: #e1f5fe;
`;

const ChatbotInput = styled.div`
  display: flex;
  padding: 10px;
  background-color: #fff;
`;

const InputField = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SendButton = styled.button`
  margin-left: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
      // Here you can add logic to send the message to the backend or chatbot API
    }
  };

  return (
    <ChatbotContainer>
      <ChatbotMessages>
        {messages.map((msg, index) => (
          <ChatbotMessage key={index}>{msg}</ChatbotMessage>
        ))}
      </ChatbotMessages>
      <ChatbotInput>
        <InputField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </ChatbotInput>
    </ChatbotContainer>
  );
};

export default Chatbot;
