const paintDataHistoryItem = ({data}) => {
    return (`<ul class="modal__list">
                <li class="modal__item">${data.geolocation}</li>
                <li class="modal__item">${data.temperature}</li>
                <li class="modal__item">${data.time}</li>
                <li class="modal__item">${data.wind}</li>
                <li class="modal__item">${data.windSpeed}</li>
                <li class="modal__item">${data.cloudcover}</li>
            </ul>`)
}