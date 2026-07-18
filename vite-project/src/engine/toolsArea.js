import { geojsonToWKT } from "@terraformer/wkt"

export function ambilGeometri(event) {
    const geometri = event.features[0].geometry // ambil geometri buat tau titik2nya
    const wkt = geojsonToWKT(geometri) // ngerubah ke wkt
    // defensive dulu, jadi cari dulu atribut nya yang ada geometry nya
    // aktifkan dulu klik-an biar pas diklik dapat info di console
    computeArea(wkt).then((value) => {
        console.log(value)
    })
}


async function computeArea(wkt){
    const response = await fetch("http://127.0.0.1:5000/spatial_computation/area", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ geometry: wkt })
    })

    const result = await response.json()

    return result
}