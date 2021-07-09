import Button from "./Button";
import ModalHistoryItem from "./ModalHistoryItem";

const ModalHistory = ({toggle, toggleModal, clearModalContent, data}) => {

    return(
        <div className={toggle ? 'modal visible' : 'modal'}>
            <div className="modal__icons">
                <Button 
                    classes={'modal__delete'}
                    text={'Clear'}
                    onClick={clearModalContent}
                />
                <div className="modal__close" onClick={toggleModal}></div>
            </div>
            <div className="modal__content">
                {data.map((city, index) => {
                    return (
                        <ModalHistoryItem data={city} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ModalHistory;