import "../css/register.css"
import { Link } from "react-router-dom";

export function Register() {
    const handleSubmit = (event)=>{
        event.preventDefault ()
    }
  return (
    <div className="registerc">
        <h2 className="title2">Register your new spotify account</h2>  
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3 input">
                <input type="text" className="form-control inputcolor" id="floatingInput" placeholder="name"/>
                <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating mb-3 input">
                <input type="text" className="form-control inputcolor" id="floatingInput" placeholder="username"/>
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3 input">
                <input type="email" className="form-control inputcolor" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email Address</label>
            </div>
            <div className="form-floating input">
                <input type="password" className="form-control inputcolor" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <Link to="/">
                <input className="btn22" type="submit" value="Submit"></input>
            </Link>
        </form>
    </div>
  )
}

