import { Map } from 'maplibre-gl';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [114, 0.2],
  zoom: 2.5,
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

map.on('load', () => {
map.addSource('indonesia-source', {
    type: 'geojson',
    data: data,
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
} )
  
  