import { Link } from "react-router-dom";
import "../css/login.css"
import { useEffect } from "react";

//11dFghVXANMlKmJXsNCbNl
//21f42fbf5c894f99973b9ebeea4ea41c - client id
//48bf04a0daa84b0683cce81fd7b194c2 - client secret
//https://api.spotify.com/v1/tracks/{id}
//https://api.spotify.com.
export function LogIn() {
  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization




const handleSubmit = (event)=>{
  event.preventDefault ()
}


  return (

    <div className="logoc">
      <img className="logo" src="./public/spotify.png"/>
      <h2 className="title">Music for everyone</h2>  
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 input">
          <input type="text" className="form-control inputcolor" id="floatingInput" placeholder="username"/>
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating input">
          <input type="password" className="form-control inputcolor" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <Link to="/homepage">
          <input type="submit" href="" className="btn" value="Log In"></input>
        </Link>
      </form>
      <div className="orbox">
        <img className="line l1" src="./public/linea.png"/>
        <div className="or">
          <p>OR</p>  
        </div>
        <img className="line l2" src="./public/linea.png"/>
      </div>
      <Link to="/register">
        <a className="register" href="/register">
          <div className="btn2">
          Register
          </div>
        </a>
      </Link>
    </div>
    
  )
}