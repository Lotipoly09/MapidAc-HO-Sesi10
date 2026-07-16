import naturalEarthdata from "../data/titik_populatedplaces.geojson?url";
import arIndonesia from "../data/arIndo.geojson?url";



export function addtitikNE(map) {
    map.addSource('natural-earthdata', {
        type: 'geojson',
        data: naturalEarthdata,
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
}

export function addarIndo(map) {
    map.addSource('arIndo', {
      type: 'geojson',
      data: arIndonesia,
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
}
