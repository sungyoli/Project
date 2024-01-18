import React, { useState, useRef, useEffect } from "react";
import "./styles.css"; // CSS 파일을 import합니다.

const ChatApp = () => {
  const [messages, setMessages] = useState([]); // 메시지들을 상태로 관리합니다.
  const [inputText, setInputText] = useState(""); // 입력된 텍스트를 상태로 관리합니다.
  const [username, setUsername] = useState(""); // 사용자 이름을 상태로 관리합니다.
  const [selectedUser, setSelectedUser] = useState(""); // 선택된 상대방을 상태로 관리합니다.
  const [showChat, setShowChat] = useState(false); // 채팅 화면 표시 여부를 상태로 관리합니다.
  const [chatAppWidth, setChatAppWidth] = useState(600); // 채팅 앱의 너비를 상태로 관리합니다.

  const messagesEndRef = useRef(null); // 스크롤이 아래로 이동하도록 참조를 생성합니다.

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); // 새 메시지가 추가될 때 화면을 자동으로 스크롤합니다.
    const lastMessage = messages[messages.length - 1]; // 마지막 메시지를 가져옵니다.

    if (
      lastMessage &&
      lastMessage.type === "sent" &&
      username !== "" &&
      selectedUser !== ""
    ) {
      // 마지막 메시지가 사용자가 보낸 것이고, 사용자 이름과 선택된 상대방이 설정된 경우
      setTimeout(() => {
        // 1초 후에 자동응답 메시지를 추가합니다.
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: `안녕하세요, ${username}님! "${lastMessage.text}" 라고 말씀주셨군요. 저도${lastMessage.text}입니다.`,
            sender: selectedUser,
            type: "received",
          },
        ]);
      }, 1000);
    }
  }, [messages, username, selectedUser]);

  const handleAppResize = (event) => {
    setChatAppWidth(event.target.value); // 채팅 앱의 너비를 변경합니다.
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value); // 입력된 텍스트를 업데이트합니다.
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      setMessages([
        ...messages,
        { text: inputText, sender: username || "사용자", type: "sent" }, // 사용자가 보낸 메시지를 추가합니다.
      ]);
      setInputText(""); // 입력 텍스트를 초기화합니다.
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSendMessage(event); // Enter 키 입력 시 메시지를 전송합니다.
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user); // 채팅 상대를 선택합니다.
    setShowChat(true); // 채팅 화면을 표시합니다.
  };

  const handleNameChange = (event) => {
    setUsername(event.target.value); // 사용자 이름을 변경합니다.
  };

  return (
    <div className="chat-app" style={{ width: chatAppWidth }}>
      <div className="user-selection">
        <h3>채팅 상대 선택</h3>
        <button onClick={() => handleUserSelect("김민정")}>김민정</button>
        <button onClick={() => handleUserSelect("김윤호")}>김윤호</button>
        {/* 추가적인 채팅 상대 선택 버튼을 만들 수 있습니다 */}
        <div>
          <input
            type="text"
            placeholder="사용자 이름을 입력하세요"
            value={username}
            onChange={handleNameChange}
          />
        </div>
      </div>
      {showChat && (
        <div className="chat-container">
          <h3>채팅 상대: {selectedUser}</h3>
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.type === "sent" ? "sent" : "received"
                }`}
              >
                {message.type === "received" && (
                  <div className="message-received">
                    <strong>{message.sender}:</strong>
                    <div className="received-bubble">{message.text}</div>
                  </div>
                )}
                {message.type === "sent" && (
                  <div className="message-sent">
                    <div className="sent-bubble">{message.text}</div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage}>
            <textarea
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요... (Ctrl+Enter: 줄 바꿈)"
              rows={3}
            />
            <button type="submit">보내기</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatApp;
