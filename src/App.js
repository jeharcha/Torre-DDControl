import './styles/App.css';
import Board from './components/board.js';
import Chat from './components/chat.js';
import Map from './components/map.js';

function App() {
  return (
    <div className="My New App">
      <Board />
      <Chat> Hola </Chat>
      <Map />
    </div>
  );
}

export default App;
