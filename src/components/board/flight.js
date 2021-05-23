import React from 'react';
import { Card } from 'react-bootstrap';
import '../../styles/index.css';

const Flight = ({ thisFlight }) => {
  return (
    <Card>
      <Card.Body>
        <h5> Flight N°: {thisFlight.code}</h5>
        <Card.Text>
          <p> Airline: {thisFlight.airline} </p>
          <p> Origin: {thisFlight.origin}</p>
          <p> Destionation: {thisFlight.destination}</p>
          <p> Plane: {thisFlight.plane}</p>
          <strong> Passengers:</strong>
          {thisFlight.passengers.map((passenger) => (
            <div>
              <li>Name: {'\n' + passenger.name}</li>
              <li>Age: {passenger.age}</li>
            </div>
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>

    // <div className="flight-card">
    //   <p> Flight N°: {thisFlight.code}</p>
    //   <p> Airline: {thisFlight.airline} </p>
    //   <p> Origin: {thisFlight.origin}</p>
    //   <p> Destionation: {thisFlight.destination}</p>
    //   <p> Plane: {thisFlight.plane}</p>
    //   <p> Pasangers:</p>
    //   {thisFlight.passengers.map((passanger) => (
    //     <div>
    //       <li>Name: {passanger.name}</li>
    //       <li>Age: {passanger.age}</li>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Flight;
