import React, { useEffect, useState, useCallback, useContext } from 'react';
import Flight from './flight.js';
import '../../styles/index.css';
import { Card, CardGroup } from 'react-bootstrap';
// import { SocketContext } from '../dashboard';
import { SocketContext } from '../../socketFile.js';

const Board = ({}) => {
  const boardSocket = useContext(SocketContext);
  const [flightObjects, setFlightObjects] = useState([
    {
      code: '',
      airline: '',
      origin: [0, 0],
      destination: [0, 0],
      plane: '',
      seats: 0,
      passengers: [{ name: '', age: 0 }],
    },
  ]);
  const handleFlights = useCallback((currentFlights) => {
    setFlightObjects(currentFlights);
  }, []);
  useEffect(() => {
    boardSocket.emit('FLIGHTS', {});
    // Listen to Flights Events, passes the list of them to the FlightHandle function.
    boardSocket.on('FLIGHTS', (flights) => handleFlights(flights));
    console.log(flightObjects);

    return () => {};
  }, [flightObjects, boardSocket, handleFlights]);

  return (
    // <div> Hola</div>
    <div>
      <p>Flights Board</p>
      <div className="row-container">
        {flightObjects.map((flightObject) => (
          <Flight thisFlight={flightObject} />
        ))}
      </div>
    </div>
  );
};

export default Board;
