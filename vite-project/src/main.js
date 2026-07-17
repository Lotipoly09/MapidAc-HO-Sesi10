import { Map, FullscreenControl, GlobeControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { addtitikNE, addarIndo } from './layers/vector.js';
import { addrasterMonas } from './layers/raster.js';
import { addAttribution } from './controls/basicControls.js';
import { LogoMonasControl } from './controls/logoCostume.js';


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [114, 0.2],
  zoom: 2.5,
  attributionControl: false, // Atribution itu citasi, penting banget
});

const data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "NAMOBJ": "Indonesia"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          112.7415576,
          -4.2901985
        ]
      }
    }
  ]
}

const data2 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "NAMOBJ": "Garis Ibukota Indonesia"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            106.8315391,
            -6.1873012
          ],
          [
            100.3747002,
            -0.9275219
          ],
          [
            116.6918698,
            -0.9807282
          ]
        ]
      }
    }
  ]
}



map.on('load', () => {

  addtitikNE(map);
  addarIndo(map);
  addrasterMonas(map);

  map.addSource('indonesia-source', {
      type: 'geojson',
      data: data,
    });


  map.addSource('garis-ibukota-source', {
      type: 'geojson',
      data: data2,
    });


  map.addLayer({
    id: 'titik-indonesia',
    type: 'circle',
    source: 'indonesia-source',
    paint: {
      'circle-radius': 5,
      'circle-color': '#FF0000',
      'circle-stroke-width': 2,
      'circle-stroke-color': '#000000',
    },
  });

  map.addLayer({
    id: 'garis-ibukota',
    type: 'line',
    source: 'garis-ibukota-source',
    paint: {
      'line-color': '#0000FF',
      'line-width': 2,
    },
  });

})

addAttribution(map);
map.addControl(new FullscreenControl());
map.addControl(new GlobeControl());
map.addControl(new LogoMonasControl(), "top-left");