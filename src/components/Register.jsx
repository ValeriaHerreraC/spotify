import { useState } from "react";
import { dataBase} from "../firebase";
import { ref, onValue } from 'firebase/database'

import { useNavigate } from "react-router-dom";

import "../css/register.css"

export function Register() {
    const [state, setState] = useState({})
    const navigate = useNavigate()

    const algo = onValue(ref(dataBase, 'users'), (snapshot) => {
      const data = snapshot.val()
      console.log(data)
    })

    
    const handleSubmit = (event)=> {
      event.preventDefault()
      try {
        addUser(state)
        if (addUser(state)) {
          alert("Registro exitoso!")
          navigate("/")                                                                                                                                                                         
        } else {
          alert("ha ocurrido un error")
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    
    const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
    }
  return (
    <div className="registerc">
        <h2 className="title2">Register your new spotify account</h2>  
        <form id="register" onSubmit={handleSubmit}>
            <div className="form-floating mb-3 input">
                <input required type="text" className="form-control inputcolor"  placeholder="name" name="name" onChange={handleChange}/>
                <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-floating mb-3 input">
                <input required type="text" className="form-control inputcolor"  placeholder="username" name="username" onChange={handleChange}/>
                <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating mb-3 input">
                <input required type="email" className="form-control inputcolor"  placeholder="name@example.com" name="email" onChange={handleChange}/>
                <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-floating input">
                <input required type="password" className="form-control inputcolor" placeholder="Password" name="password" minLength={5} onChange={handleChange}/>
                <label htmlFor="password">Password</label>
            </div>
            <input className="btn22" type="submit" value="Submit" />
        </form>
    </div>
  )
}

