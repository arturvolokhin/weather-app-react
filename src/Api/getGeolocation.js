import { setElementInLocalStorage } from "./localStorage";

const getGeolocation = (setCity) => {
    navigator.geolocation.getCurrentPosition(position => {
        const geo = `${position.coords.latitude.toFixed(4)},
            ${position.coords.longitude.toFixed(4,)}`;
        setElementInLocalStorage('enteredCityName', geo);
        setCity(geo)
    });
}

export default getGeolocation;