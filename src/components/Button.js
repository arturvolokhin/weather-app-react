const Button = (props) => {
    const {classes, text, onClick} = props;

    return(
        <button className={'button ' + classes} onClick={onClick}>{text}</button>
    )
}

export default Button;