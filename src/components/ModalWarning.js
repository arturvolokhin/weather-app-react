import Button from './Button';

const ModalWarning = ({text, closeWarning}) => {
    return(
        <div className="warning">
            <p className="warning__text">{text}</p>
            <Button 
                onClick={closeWarning}
                classes={'warning__close'}
                text={'Close'}
            />
        </div>
    )
}

export default ModalWarning;