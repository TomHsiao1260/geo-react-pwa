import React, {Component, useRef, useEffect} from 'react';
import * as THREE from "three";
import logo from './logo.svg';
import './App.css';
import Btn from './button';

import Procedural from 'procedural-gl';
import imgMoon from './img/moon.jpg';
import imgPeak from './img/peak.jpg';

import balloon from './textures/balloon.png';

function App(props){
  const containerRef = useRef(null);

  useEffect(() => {

    Procedural.init( {
        container: containerRef.current,
        datasource: {
            elevation: {
                apiKey: '16ea12ec8a8274c24b72283cf340d3779'
            },
            imagery: {
                urlFormat: 'https://wmts.nlsc.gov.tw/wmts/PHOTO2/default/EPSG:3857/{z}/{y}/{x}.jpg',
                attribution: 'Tiles &copy; <a href="https://www.basemap.at/">basemap.at</a>'
            }
        }
    } );

    Procedural.setCameraModeControlVisible( true );
    Procedural.setCompassVisible( false );
    Procedural.setRotationControlVisible( true );
    Procedural.setZoomControlVisible( true );


  }, []);

  useEffect(() => {

        var target = { latitude: 25.194226767501995, longitude: 121.56090411096234 };
        Procedural.displayLocation( target );

        Procedural.onUserInteraction = function () {
          console.log(props);
        }

        Procedural.onLocationFocused = function () {
            console.log( 'Location focused' );
        };

  }, [props.card])

  return (
    <>
    <div ref={containerRef} style={{position: 'absolute', width: '100%', height: '100%'}} ></div>
    <Btn/>
    </>
  )

}

export default App;
