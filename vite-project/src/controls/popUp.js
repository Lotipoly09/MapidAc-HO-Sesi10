import { Popup } from 'maplibre-gl';

const popup = new Popup();

// popup layer NE
export function addPopupNE(map, event) {
    const namaKota =  (event.features[0].properties.NAME);
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


    // const popup1 = new Popup();
    //   popup1.on('open', () => {
    //     console.log('popup was opened');
    //   });
    //   popup1.on('close', () => {
    //     console.log('popup was closed');
    //   });
 
