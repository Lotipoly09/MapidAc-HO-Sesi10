


export function addrasterMonas(map) {
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
    id: "rasterMonas-layer",
    type: "raster",
    source: "rasterMonas",
  });
}

