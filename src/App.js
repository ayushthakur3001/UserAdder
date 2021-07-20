import './App.css'
import {useState} from 'react'
import UserInput from "./components/UserInput"
import UserList from './components/UserList'
const dummy = [
  {
    id:"1",
    name: "Ayush Thakur",
    age: "18"
  },
  
]
const App = () => {
  const [details, setDetails] = useState(dummy);

  const onUserSend = (det)=>{
    setDetails((state) =>{ return [det,...state]})
  }
  
  
  return (
    <div className="app">
      <UserInput sendUser={onUserSend} />
      <UserList items={details}   /> 
    </div>
  )
}

export default App

