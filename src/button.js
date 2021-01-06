import React, {Component, useRef, useEffect} from 'react';
import Procedural from 'procedural-gl';
import imgMoon from './img/moon.jpg';
import imgPeak from './img/peak.jpg';

function Btn(){
  return (
    <>
      <button className="btn btn-outline-light " type="button" style={{position: 'absolute', margin: '5px'}} onClick={() => Procedural.addOverlay( overlay )}>Mark 1</button>
      <button className="btn btn btn-outline-light" type="button" style={{position: 'absolute', margin: '5px', left: '80px'}} onClick={() => Procedural.addOverlay( overlay_ )}>Mark 2</button>
    </>
  );
}


const overlay = {
  "type": "FeatureCollection",
  "features": [ 
    {
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [ 121.56, 25.19 ],
          [ 121.55, 25.20 ]
        ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "color": "#0000ff"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 121.56, 25.19 ]
      },
      "type": "Feature",
      "id": 1,
      "properties": {
        "borderRadius": 0,
        "background": "black",
        "padding": 10,
        "icon": "bus"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 121.55, 25.20 ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "color": "white",
        "padding": 10,
        "name": "Finish ~",
        "background": "black"
      }
    }
  ]
}

const overlay_ = {
  "type": "FeatureCollection",
  "features": [ 
    {
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [ 121.56, 25.19 ],
          [ 121.55, 25.20 ]
        ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "color": "#0000ff"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 121.56, 25.19 ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "anchorOffset": {
          "y": 70,
          "x": 0
        },
        "borderRadius": 32,
        "image": imgMoon,
        "height": 60,
        "width": 60,
        "borderWidth": 2,
        "background": "#ccc"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 121.56, 25.19 ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "fontSize": 20,
        "anchorOffset": {
          "y": 45,
          "x": 0
        },
        "icon": "caret-down"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 121.56, 25.19 ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "name": "3",
        "borderRadius": 23,
        "padding": 5,
        "fontSize": 13,
        "background": "#44b6f7",
        "anchor": "bottom"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 121.55, 25.20 ]
      },
      "type": "Feature",
      "id": 1,
      "properties": {
        "anchorOffset": {
          "y": 70,
          "x": 0
        },
        "borderRadius": 32,
        "image": imgPeak,
        "height": 60,
        "width": 60,
        "borderWidth": 2,
        "background": "#ccc"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 121.55, 25.20 ]
      },
      "type": "Feature",
      "id": 1,
      "properties": {
        "fontSize": 20,
        "anchorOffset": {
          "y": 45,
          "x": 0
        },
        "icon": "caret-down"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 121.55, 25.20 ]
      },
      "type": "Feature",
      "id": 1,
      "properties": {
        "name": "5",
        "borderRadius": 23,
        "padding": 5,
        "fontSize": 13,
        "background": "#44b6f7",
        "anchor": "bottom"
      }
    }
  ]
}

export default Btn;