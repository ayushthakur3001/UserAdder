import Card from "./Card"
import Button from "./Button"
import './ErrorModal.css'
const ErrorModal = (props) => {
    const handleClick = ()=>{
        props.onCancelError();
    }
    return (
        <>
        <div onClick={handleClick} className="backdrop"></div>
        <div className="mod">
        <header className= "header">
            <h2> {props.title} </h2>
        </header>
        <div className= "content">
            <p> {props.message} </p>
        </div>
        <footer className= 'actions'>
            <Button onClick={handleClick}  text={"Okay"} ></Button>
        </footer>
        </div>
        </>
    )
}

export default ErrorModal
