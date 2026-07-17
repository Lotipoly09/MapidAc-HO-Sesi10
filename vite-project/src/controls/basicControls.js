import { AttributionControl } from 'maplibre-gl';


export function addAttribution(map) {
    map.addControl(new AttributionControl({
        compact: true,
        customAttribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | <a href="https://maplibre.org/">MapLibre</a>, Natural Earth'
}));
}
