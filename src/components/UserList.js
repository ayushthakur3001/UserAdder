import Card from "./UI/Card"
import Newuser from "./Newuser"
const UserList = (props) => {
    return (
        <Card>
            {
                props.items.map((user) =>(
                    <Newuser 
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        age = {user.age}
                    />
                ))
            }
            
        </Card>
    )
}

export default UserList
