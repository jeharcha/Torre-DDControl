import React from 'react';
import '../../styles/index.css';

const Flight = ({ thisFlight }) => {
  return (
    <div className="flight-card">
      <p> Flight N°: {thisFlight.code}</p>
      <p> Airline: {thisFlight.airline} </p>
      <p> Origin: {thisFlight.origin}</p>
      <p> Destionation: {thisFlight.destination}</p>
      <p> Plane: {thisFlight.plane}</p>
      <p> Pasangers:</p>
      {thisFlight.passengers.map((passanger) => (
        <div>
          <li>Name: {passanger.name}</li>
          <li>Age: {passanger.age}</li>
        </div>
      ))}
    </div>
  );
};

export default Flight;
