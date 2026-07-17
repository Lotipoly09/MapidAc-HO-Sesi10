import logoMonas from "../data/logoMonas.png";

export function addLogoMonas(map) {
    class LogoMonasControl {
        onAdd(map) {
            this._map = map;
            this._container = document.createElement('div');
            this._container.className = 'maplibregl-ctrl';
            this._container.innerHTML = `<img src="${logoMonas}" alt="Logo Monas" style="width: 50px; height: 50px;">`;
            return this._container;
        }

        onRemove() {
            this._container.remove();
            this._map = undefined;
        }
    }
}