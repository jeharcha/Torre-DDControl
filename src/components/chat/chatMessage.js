import React from 'react';
// import Chat from './chat';

function ChatMessage({ name, message }) {
  return (
    <p>
      <strong>{name}</strong> <em>{message}</em>
    </p>
  );
}
export default ChatMessage;
