import React, {Component, useRef, useEffect} from 'react';
import * as THREE from "three";
import logo from './logo.svg';
import './App.css';
import Btn, {height} from './button';

import Procedural from 'procedural-gl';
import imgMoon from './img/moon.jpg';
import imgPeak from './img/peak.jpg';

import balloon from './textures/balloon.png';

import data from './data.json';
import { v4 as uuidv4 } from 'uuid';

const arr = [];

data['trkpt'].forEach( i => {
  arr.push( [i.lon, i.lat] );
})

const path = {
  "geometry": {
    "type": "LineString",
    "coordinates": arr
  },
  "type": "Feature",
  "id": 0,
  "properties": {
    "color": "#0000ff"
  }
}

const overlay = {
  "type": "FeatureCollection",
  "features": []
}

function App(){
  const containerRef = useRef(null);

  useEffect(async() => {

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

    var target = { latitude: 24.21090, longitude: 121.37088 };
    Procedural.displayLocation( target );

    height();

    await new Promise(resolve => setTimeout(resolve, 3000));

    var target = {
      latitude: 24.20650, longitude: 121.36888,
      bearing:280, distance: 1000,
      animationDuration: 2
    };
    Procedural.focusOnLocation ( target );

  }, []);

  return (
    <>
    <div ref={containerRef} style={{position: 'absolute', width: '100%', height: '100%'}} ></div>
    <Btn />
    </>
  )

}


export default App;
