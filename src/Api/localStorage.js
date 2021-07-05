const setElementInLocalStorage = (key, element) => {
    return localStorage.setItem(key, JSON.stringify(element));
}

const getElementInLocalStorage = (key) => {
    if (!localStorage.historyList) {
        const historyList = [];
        setElementInLocalStorage('historyList', historyList);
    }
    return JSON.parse(localStorage.getItem(key));
}

const updateLocalStorage = () => {
    const enteredCity = getElementInLocalStorage('enteredCity');
    const historyList = getElementInLocalStorage('historyList');

    const arr = historyList.filter(city => city.location.name !== enteredCity.location.name)
    arr.push(enteredCity);

    setElementInLocalStorage('historyList', arr.reverse());
}

export { setElementInLocalStorage, getElementInLocalStorage, updateLocalStorage };