const Button = (props) => {
    const {classes, text, searchCity, getMyGeolocation, toggleModal, clearModalContent} = props;

    const handleClick = (target) => {
        if (target.classList.contains('button-search')) {
            searchCity(target);
        }

        if (target.classList.contains('button-history')) {
            toggleModal();
        }

        if (target.classList.contains('button-geolocation')) {
            getMyGeolocation();
        }

        if(target.classList.contains('modal__delete')) {
            clearModalContent();
        }
    }

    return(
        <button className={'button ' + classes} onClick={(e) => handleClick(e.target)}>{text}</button>
    )
}

export default Button;