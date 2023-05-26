import { Link } from "react-router-dom";
import "../css/login.css"

export function LogIn() {
  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

  var spotify_client_id = '21f42fbf5c894f99973b9ebeea4ea41c';
  var spotify_client_secret = '48bf04a0daa84b0683cce81fd7b194c2';

  const body = {
    grant_type: 'client_credentials',
    client_id: spotify_client_id,
    client_secret: spotify_client_secret,
  }
  
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  
  const redirectUri = 'http://localhost:5173';
  const scopesSpotify = ['streaming', 'user-read-email', 'user-read-private', 'user-read-playback-state', 'user-modify-playback-state', 'user-library-read', 'user-library-modify'];
  const endpoint = 'https://accounts.spotify.com/authorize';
  const loginUrl = `${endpoint}?client_id=${spotify_client_id}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true&scope=${scopesSpotify.join("%20")}`;
  


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
        <Link to="/homePage">
          <a href={loginUrl}>Acceder a Spotify</a>
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
          <div className="btn2 register">
          Register
          </div>
      </Link>
    </div>
    
  )
}
