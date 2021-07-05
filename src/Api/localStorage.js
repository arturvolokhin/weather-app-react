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

export { setElementInLocalStorage, getElementInLocalStorage };