import naturalEarthdata from "../data/titik_populatedplaces.geojson?url";
import arIndonesia from "../data/arIndo.geojson?url";
import arMalaysia from "../data/arMal.geojson?url";


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


export function addarMal(map) {
    map.addSource('arMal', {
      type: 'geojson',
      data: arMalaysia,
    });

    map.addLayer({
      id: 'arMal-layer',
      type: 'fill',
      source: 'arMal',
      paint: {
        'fill-color': 'red',
        'fill-opacity': 0.4,
        'fill-outline-color': 'red',
      },
    });
}

export function bikinLayerBuffer(map, data) {
    const sourceId = 'buffer-source';
    const layerId = 'buffer-layer';

    if (!data) {
        console.warn('No buffer geometry received.');
        return;
    }

    if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
    }

    if (map.getSource(sourceId)) {
        map.removeSource(sourceId);
    }

    map.addSource(sourceId, {
      type: 'geojson',
      data: data,
    });

    map.addLayer({
      id: layerId,
      type: 'fill',
      source: sourceId,
      paint: {
        'fill-color': 'red',
        'fill-opacity': 0.35,
        'fill-outline-color': 'black',
      },
    });
}
