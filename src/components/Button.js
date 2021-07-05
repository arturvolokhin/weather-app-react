const Button = (props) => {
    const {classes, text} = props; 
    return(
        <button className={'button ' + classes}>{text}</button>
    )
}

export default Button;