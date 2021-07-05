import Button from "./Button";

const ModalHistory = ({toggle, toggleModal}) => {

    const handleClick = () => {
        toggleModal();
    }


    return(
        <div className={toggle ? 'modal visible' : 'modal'}>
            <div className="modal__icons">
                <Button 
                    classes={'modal__delete'}
                    text={'Clear'}
                />
                <div className="modal__close" onClick={() => handleClick()}></div>
            </div>
            <div className="modal__content"></div>
        </div>
    )
}

export default ModalHistory;