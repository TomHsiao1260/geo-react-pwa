import React, {Component, useRef, useEffect} from 'react';
import * as THREE from "three";
import logo from './logo.svg';
import './App.css';
import Btn from './button';

import Procedural from 'procedural-gl';
import imgMoon from './img/moon.jpg';
import imgPeak from './img/peak.jpg';

import balloon from './textures/balloon.png';

import data from './data.json';
const arr = [];
const height = [];

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

        // var target = { latitude: 24.21090, longitude: 121.37088 };
        // Procedural.displayLocation( target );
        var target = {
          latitude: 24.20590, longitude: 121.37088,
          angle: 20, bearing: 0, distance: 1000,
          animationDuration: 0.5
        };
        Procedural.focusOnLocation( target );

        Procedural.onUserInteraction = function () {
          console.log(props);
        }

        Procedural.onLocationFocused = function () {
            console.log( 'Location focused' );
        };

        data['trkpt'].forEach( (data, i) => {
          arr.push( [data.lon, data.lat] );

          if (i%100 == 0){
            const objHeight = {
              "geometry": {
                "type": "Point",
                "coordinates": [data.lon, data.lat]
              },
              "type": "Feature",
              "id": 1,
              "properties": {
                "collapseDistance": 1000,
                "fadeDistance": 5000,
                "name": Math.floor(data.elev),
                "background": "blue",
            
                "clipping": "object",
                "color": "white",
                "padding": 10,
                "borderRadius": 10,
                "borderWidth": 1,
                "anchor": "left",
                "icon": "eye"
              }
            };
            overlay.features.push( objHeight );
          }
        })

        overlay.features.push( path );

        Procedural.addOverlay( overlay );

  }, [props.card])

  return (
    <>
    <div ref={containerRef} style={{position: 'absolute', width: '100%', height: '100%'}} ></div>
    {/* <Btn/> */}
    </>
  )

}

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

export default App;
