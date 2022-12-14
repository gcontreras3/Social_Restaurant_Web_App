import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';


const Map = ({ setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAXnEqSl2niWZadItWOjU-N8VaBxu9yHR8' }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          option={''}
          onChange={(e) => {
            
              setCoordinates({ lat: e.center.lat, lng: e.center.lng });
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={''}
      >

      </GoogleMapReact>
     
    </div>
  );
};

export default Map;