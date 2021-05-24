// import '../../styles/index.css';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// function Map() {

// hcep
// const handlePositions = useCallback((pos) => {
//   // console.log(pos)
//   // for (let index = 0; index < len; index++) {
//   //   const flight = flightsList[index];
//   //   if (flight.code === pos.code){

//   //   }
//   // }
//   console.log(positionsDict);
//   if (positionsDict[pos.code]) {
//     setPositionsDict( (positionsDict) =>  positionsDict[pos.code].push([pos.position[0], pos.position[1]]));
//   }
//   else {
//     setPositionsDict( (positionsDict) =>  positionsDict[pos.code] = [[pos.position[0], pos.position[1]]]);
//   }
// }, []);

//   return (
//     <div>
//       <link
//         rel="stylesheet"
//         href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
//         integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
//         crossOrigin=""
//       />
//       <script
//         src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
//         integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
//         crossOrigin=""
//       ></script>
//       <div>Map</div>
//       <div id="mapid">
//         <MapContainer
//           className="leaflet-container"
//           center={[-33.45, -70.666667]}
//           zoom={6}
//           scrollWheelZoom={true}
//         >
//           <TileLayer
//             // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={[0, 0]}>
//             {/* <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup> */}
//           </Marker>
//         </MapContainer>
//       </div>
//     </div>
//   );
// }
// export default Map;

import 'C:/Users/Imagemaker/Documents/Ing UC/Taller de Integración/t4/control-tower/src/styles/index.css';
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, ImageOverlay } from 'react-leaflet';
import { LatLngBounds, Icon, L } from 'leaflet';
import { SocketContext } from '../../socketFile.js';
import plane from './Aircraft.png';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
// import MyIcon from './MyIcon.jsx';

function Map() {
  const plane_url = 'https://cdn-0.emojis.wiki/emoji-pics/facebook/airplane-facebook.png';
  // var myicon = new L.icon({iconUrl: plane, iconAnchor: new L.Point(16, 16)});
  const bounds = new LatLngBounds([-34.82264, -58.533321], [-33.382761, -70.803203]);

  const greenOptions = { color: 'green' };
  const orangeOptions = { color: 'coral' };
  const blueOptions = { color: 'blue' };
  const redOptions = { color: 'crimson' };
  const violetOptions = { color: 'violet' };
  const blackOptions = { color: 'black' };
  const colorOptions = [greenOptions, orangeOptions, blueOptions, redOptions, violetOptions];
  const socket = useContext(SocketContext);
  const socketForPositions = useContext(SocketContext);

  const [flights, setFlights] = useState([]);
  const [positions, setPositions] = useState([]);
  const [numberOfFlights, setNumberOfFlights] = useState(0);
  const [polylinesList, setPolylinesList] = useState([]);
  const [polylinesColors, setPolylinesColors] = useState([]);

  const handleFlights = useCallback((incomingFlights) => {
    incomingFlights.map((flight) =>
      setPolylinesList((polylinesList) => [...polylinesList, [flight.origin, flight.destination]]),
    );
    // incomingFlights.map((flight) =>
    //   setFlights((flights) => [...flights, [flight.origin, flight.destination]]),
    // );
    setNumberOfFlights(incomingFlights.length);
    setFlights(incomingFlights);
  }, []);

  useEffect(() => {
    // as soon as the component is mounted, do the following tasks:
    // subscribe to socket events
    socket.emit('FLIGHTS', {});
    //receive events
    socket.on('FLIGHTS', (flights) => handleFlights(flights));

    return () => {};
  }, [socket, handleFlights]);

  const handlePositions = useCallback((position) => {
    setPositions((positions) => [
      ...positions,
      [
        [position.position[0], position.position[1]],
        [position.position[0] + 0.000001, position.position[1] + 0.000001],
      ],
    ]);
  }, []);

  useEffect(() => {
    // as soon as the component is mounted, do the following tasks:
    // subscribe to socket events
    socketForPositions.emit('POSITION', {});
    //receive events
    socketForPositions.on('POSITION', (positions) => handlePositions(positions));
    return () => {};
  }, [socketForPositions, handlePositions]);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""
      ></script>
      <div>Real Time Map</div>
      <div id="mapid">
        <MapContainer
          center={[-38.45, -70.666667]}
          zoom={3}
          scrollWheelZoom={true}
          className="leaflet-container"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {polylinesList.map((position, i) => (
            <Marker
              position={position[0]}
              icon={new Icon({ iconUrl: markerIconPng, iconSize: [12, 20], iconAnchor: [6, 20] })}
            >
              {/* <Popup>
                <br> {flights[i].code}</br>
              </Popup> */}
            </Marker>
          ))}
          {/* <Marker position={[0, 0]}></Marker> */}
          {polylinesList.map((polyline, i) => (
            <Polyline pathOptions={colorOptions[i % numberOfFlights]} positions={polyline} />
          ))}
          {positions.map((position, i) => (
            <Polyline pathOptions={blackOptions} positions={position} />
          ))}
        </MapContainer>
      </div>
      {/* <script>var map = L.map('map').setView([50.84673, 4.35247], 12);</script> */}
    </div>
  );
}
export default Map;
