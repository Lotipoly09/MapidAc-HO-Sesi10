import { geojsonToWKT } from "@terraformer/wkt"

export async function ambilLuasArea(event) {
    const geometryArea = event.features[0].geometry // ambil geometri buat tau titik2nya
    const geometry2Wkt = geojsonToWKT(geometryArea) // ngerubah ke wkt
    // defensive dulu, jadi cari dulu atribut nya yang ada geometry nya
    // aktifkan dulu klik-an biar pas diklik dapat info di console
    const hasilGeometry = await hitungArea(geometry2Wkt);
    return hasilGeometry;
}

export async function hitungArea(hasilGeometry){
    const response = await fetch("http://127.0.0.1:5000/spatial_computation/area", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ geometry: hasilGeometry })
    })

    const hasilhitungArea = await response.json()

    return hasilhitungArea
}