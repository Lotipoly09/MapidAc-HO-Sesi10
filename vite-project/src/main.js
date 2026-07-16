import { Map } from 'maplibre-gl';
import naturalEarthdata from "./data/titik_populatedplaces.geojson?url";
import arIndonesia from "./data/arIndo.geojson?url";

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
  map.addSource('natural-earthdata', {
      type: 'geojson',
      data: naturalEarthdata,
    });

  map.addSource('indonesia-source', {
      type: 'geojson',
      data: data,
    });

  map.addSource('arIndo', {
      type: 'geojson',
      data: arIndonesia,
    });

  map.addSource('garis-ibukota-source', {
      type: 'geojson',
      data: data2,
    });

  map.addSource("rasterMonas", {
    type: "image",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Monumen_Nasional_%28Monas_Jakarta%29.jpg",
    coordinates: [
      [120.813, 2.189],
      [136.813, 2.189],
      [136.813, -8.185],
      [120.813, -8.189]
    ]
  });

  map.addLayer({
    id: 'natural-earthdata-layer',
    type: 'circle',
    source: 'natural-earthdata',
    paint: {
      'circle-radius': 3,
      'circle-color': '#edf73e',
      'circle-stroke-width': 1,
      'circle-stroke-color': '#000000',
    },
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

  map.addLayer({
    id: 'arIndo-layer',
    type: 'fill',
    source: 'arIndo',
    paint: {
      'fill-color': 'orange',
      'fill-opacity': 0.4,
      'fill-outline-color': 'red',
    },
  });

  map.addLayer({
    id: "rasterMonas-layer",
    type: "raster",
    source: "rasterMonas",
  });

})
