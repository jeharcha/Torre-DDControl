import '../../styles/index.css';
import '../../styles/chatRoom.css';
import React from 'react';
import useChat from './useChat';
import { useState } from 'react';

// const SOCKET_SERVER_URL = 'http://localhost:4000';
// const SOCKET_SERVER_URL = 'http://tarea-3-websocket.2021-1.tallerdeintegracion.cl';
// const NEW_CHAT_MESSAGE_EVENT = 'CHAT';

const ChatRoom = (props) => {
  const { messageObjects, sendMessageObject } = useChat(); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = useState(''); // Message to be sent
  const SENDER_NAME = 'Wassim ';

  const handleNewMessageChange = (event) => {
    // Checks wether the change was becouse of an Enter key press event,
    // so the newMessage Variable dos not update itsvalue
    if (event.key !== 'Enter' && event.keyCode !== 13) setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessageObject(SENDER_NAME, newMessage);
    setNewMessage('');
  };

  // const handleKeyPressEvent = (theEvent) => {
  //   if (theEvent.key === 'Enter') {
  //     if (newMessage) {
  //       handleSendMessage();
  //     }
  //   }
  // };

  return (
    <div className="chat-room-container">
      <h4 className="room-name">Control Tower Chat</h4>
      <div className="messages-container">
        <ol className="messages-list">
          {messageObjects.map((messageObject, i) => (
            <li
              key={i}
              className={`message-item ${
                messageObject.name === SENDER_NAME ? 'my-message' : 'received-message'
              }`}
            >
              ({new Date(messageObject.date).toUTCString()}){messageObject.name} {': '}
              {messageObject.message}
            </li>
          ))}
        </ol>
      </div>
      <div className="row-container">
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          className="new-message-input-field"
          // onKeyPress={handleKeyPressEvent}
        />
        <button onClick={handleSendMessage} className="send-message-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
