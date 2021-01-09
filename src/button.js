import React, {Component, useRef, useEffect} from 'react';
import Procedural from 'procedural-gl';
import imgMoon from './img/moon.jpg';
import imgPeak from './img/peak.jpg';
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

const overlayHeight = {
  "type": "FeatureCollection",
  "features": []
}
overlayHeight.features.push( path );

const overlayTime = {
  "type": "FeatureCollection",
  "features": []
}
overlayTime.features.push( path );

const overlayNote = {
  "type": "FeatureCollection",
  "features": []
}
overlayNote.features.push( path );

data['trkpt'].forEach( (data, i) => {
  if (i%100 == 0){
    const id = uuidv4();
    const obj1 = {
      "geometry": {
        "type": "Point",
        "coordinates": [data.lon, data.lat]
      },
      "type": "Feature",
      id,
      "properties": {
        "anchorOffset": {
          "y": 20,
          "x": 0
        },
        "borderRadius": 32,
        "color": "white",
        "anchor": "center",
        "icon": "bell"
      }
    }
    const obj2 = {
      "geometry": {
        "type": "Point",
        "coordinates": [data.lon, data.lat]
      },
      "type": "Feature",
      id,
      "properties": {
        "name": Math.floor(data.elev),
        "collapseDistance": 1500,
        "fadeDistance": 1500,
        "anchorOffset": {
          "y": 60,
          "x": 0
        },
        "borderRadius": 4,
        "padding": 8,
        "color": "lavender",
        "anchor": "center",
        "clipping": "object",
        "fontSize": 15,
      }
    }
    overlayHeight.features.push( obj1 );
    overlayHeight.features.push( obj2 );
  }
})

data['waypt'].forEach( (data, i) => {
  let id = uuidv4();
  const obj1 = {
    "geometry": {
      "type": "Point",
      "coordinates": [data.lon, data.lat]
    },
    "type": "Feature",
    id,
    "properties": {
      "anchorOffset": {
        "y": 20,
        "x": 0
      },
      "borderRadius": 32,
      "color": "white",
      "anchor": "center",
      "icon": "star"
    }
  }
  const obj2 = {
    "geometry": {
      "type": "Point",
      "coordinates": [data.lon, data.lat]
    },
    "type": "Feature",
    id,
    "properties": {
      "name": data.note,
      "collapseDistance": 1500,
      "fadeDistance": 1500,
      "anchorOffset": {
        "y": 60,
        "x": 0
      },
      "borderRadius": 4,
      "padding": 8,
      "color": "lavender",
      "anchor": "center",
      "clipping": "object",
      "fontSize": 15,
    }
  }
  overlayNote.features.push( obj1 );
  overlayNote.features.push( obj2 );

  id = uuidv4();
  const obj11 = {
    "geometry": {
      "type": "Point",
      "coordinates": [data.lon, data.lat]
    },
    "type": "Feature",
    id,
    "properties": {
      "anchorOffset": {
        "y": 20,
        "x": 0
      },
      "borderRadius": 32,
      "color": "white",
      "anchor": "center",
      "icon": "home"
    }
  }
  const obj22 = {
    "geometry": {
      "type": "Point",
      "coordinates": [data.lon, data.lat]
    },
    "type": "Feature",
    id,
    "properties": {
      "name": data.time,
      "collapseDistance": 1500,
      "fadeDistance": 1500,
      "anchorOffset": {
        "y": 60,
        "x": 0
      },
      "borderRadius": 4,
      "padding": 8,
      "color": "lavender",
      "anchor": "center",
      "clipping": "object",
      "fontSize": 15,
    }
  }
  overlayTime.features.push( obj11 );
  overlayTime.features.push( obj22 );
})

function Btn(props){
  return (
    <>
      <button className="btn btn-outline-dark " type="button" style={{position: 'absolute', margin: '5px'}} onClick={height}>Height</button>
      <button className="btn btn btn-outline-dark" type="button" style={{position: 'absolute', margin: '5px', left: '80px'}} onClick={time}>Time</button>
      <button className="btn btn btn-outline-dark" type="button" style={{position: 'absolute', margin: '5px', left: '150px'}} onClick={note}>Note</button>
    </>
  );
}

export function height(){
  console.log("HEIGHHEIGHHEIGHHEIGHHEIGHHEIGHHEIGHHEIGHHEIGHHEIGHHEIGHHEIGHHEIGHT")
  Procedural.addOverlay( overlayHeight );
}

function time(){
  console.log("TIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIME")
  Procedural.addOverlay( overlayTime );
}

function note(){
  console.log("TIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIMETIME")
  Procedural.addOverlay( overlayNote );
}

export default Btn;