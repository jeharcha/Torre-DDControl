import React from 'react';
import Board from './components/board/board.js';
import ChatRoom from './components/chat/chatRoom.js';
import Map from './components/map/map.jsx';
// import { socketio } from 'socket.io-client';
import { SocketContext, socket } from './socketFile';

// const socket = socketio.connect('wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl', {
//   transports: ['websocket'],
//   path: '/flights',
// });

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className="container">
        <div className="up-left-box">
          <Map />
        </div>
        <div className="right-column">
          <ChatRoom />
        </div>
        <div className="bottom-left-box">
          <Board />
        </div>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
// export const SocketContext = React.createContext();
