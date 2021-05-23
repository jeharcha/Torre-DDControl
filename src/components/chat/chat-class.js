import React, { Component } from 'react';
import ChatInput from './chatInput';
import ChatMessage from './chatMessage';

const URL = 'ws://localhost:3030';

class ChatClass extends Component {
  state = {
    name: 'Bob',
    messages: [],
  };

  // const  socket = openSocket('wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl', {
  //   transports: ["websocket"],
  //   path: "/flights"
  // });

  ws = new WebSocket('wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/flights');

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };

    this.ws.onmessage = (evt) => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    // function subToFlights(cb) {
    //   socket.on('FLIGHTS', (flights) => cb(null, flights));
    //   socket.emit('FLIGHTS', {});
    // }
    // export { subToFlights };

    this.ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      });
    };
  }

  addMessage = (message) => this.setState((state) => ({ messages: [message, ...state.messages] }));

  submitMessage = (messageString) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  render() {
    return (
      <div>
        <label htmlFor="name">
          Name:&nbsp;
          <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </label>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={(messageString) => this.submitMessage(messageString)}
        />
        <div className="scrollable">
          {this.state.messages.map((message, index) => (
            <ChatMessage key={index} message={message.message} name={message.name} />
          ))}{' '}
        </div>
      </div>
    );
  }
}

export default ChatClass;
