import './Newuser.css'

const Newuser = (props) => {
    return ( 
        <div className='newuser'>
            <h2>{props.name} </h2>
            <h3>{props.age} </h3>

        </div>
    )
}

export default Newuser
