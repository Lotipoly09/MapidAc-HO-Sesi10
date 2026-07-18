import { Popup } from 'maplibre-gl';

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



