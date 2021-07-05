import Button from "./Button";
import PaintModalHistoryItem from "./PaintModalHistoryItem";

const ModalHistory = ({toggle, toggleModal, clearModalContent, data}) => {

    const handleClick = () => {
        toggleModal();
    }

    return(
        <div className={toggle ? 'modal visible' : 'modal'}>
            <div className="modal__icons">
                <Button 
                    classes={'modal__delete'}
                    text={'Clear'}
                    clearModalContent={() => clearModalContent()}
                />
                <div className="modal__close" onClick={() => handleClick()}></div>
            </div>
            <div className="modal__content">
                {data.map((city, index) => {
                    return (
                        <PaintModalHistoryItem data={city} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ModalHistory;