import { Popup } from 'maplibre-gl';
import { ambilGeometri } from '../engine/toolsArea.js';
import { computeArea } from '../engine/toolsArea.js';

const popup = new Popup();

// popup layer NE
export function addPopupNE(map, event) {
    const namaKota = (event.features[0].properties.NAME);
    console.log(namaKota);

    return popup
        .setLngLat(event.lngLat)
        .setHTML(`
            <div>
            <h3>${namaKota}</h3><p>Latitude: ${event.lngLat.lat.toFixed(2)}<br>Longitude: ${event.lngLat.lng.toFixed(2)}</p>
            </div>
        `)
        .addTo(map);
}


// popup layer arIndo
const popuparIndo = new Popup();

export function addPopuparIndo(map, event) {
    const luasArIndo = ambilGeometri(event)
    return popuparIndo
        .setLngLat(event.lngLat)
        .setHTML(`
            <div>
            luasArIndo
            </div>
        `)
        .addTo(map);
}

