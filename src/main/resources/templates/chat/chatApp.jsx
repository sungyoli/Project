// ChatApp.js

import React, { useState } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
    }
  };

  return (
    <div className="chat-app">
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>보내기</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
