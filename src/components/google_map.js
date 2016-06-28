import React from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

export default (props) => {
    return (
        <section style={{height:'100%'}}>
            <GoogleMapLoader 
                containerElement={
                    <div
                        style={{height:'100%'}} />
                }
                googleMapElement={
                    <GoogleMap
                        defaultZoom={8}
                        defaultCenter={{lat: props.lat, lng: props.lon}}
                        />
                } />
        </section>
    );
}