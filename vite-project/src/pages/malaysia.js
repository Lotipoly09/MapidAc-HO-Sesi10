import { Map } from 'maplibre-gl';
import { addtitikNE, addarMal} from '../layers/vector.js';
import { addAttribution } from '../controls/basicControls.js';

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

addAttribution(map);

const data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "NAMOBJ": "Malaysia"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          101.68577219876342,
          3.1601061315634977
        ]
      }
    }
  ]
}



map.on('load', () => {

  addtitikNE(map);
  addarMal(map);

  map.addSource('malaysia-source', {
      type: 'geojson',
      data: data,
    });

  map.addLayer({
    id: 'titik-malaysia',
    type: 'circle',
    source: 'indonesia-source',
    paint: {
      'circle-radius': 5,
      'circle-color': '#FF0000',
      'circle-stroke-width': 2,
      'circle-stroke-color': '#000000',
    },
  });

})
