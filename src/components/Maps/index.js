import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { MapContainer } from './style';

const Map = ({ data }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });

  return (
    <MapContainer style={{ height: '50vh' }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat: -30.03306,
            lng: -51.23,
          }}
          zoom={11}
        >
          {data.map((hotel, index) => {
            return (
              <Marker
                key={index}
                position={hotel.location}
                options={{
                  label: {
                    text: hotel.name,
                    className: 'marker-label',
                  },
                }}
              ></Marker>
            );
          })}
        </GoogleMap>
      ) : (
        <></>
      )}
    </MapContainer>
  );
};

export default Map;
