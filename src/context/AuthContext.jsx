import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

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



const AuthContext = createContext(); 
export const useData = () => {

  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useData must be used within a AuthProvider')
  } else {
    return context
  }
} 

 const AuthProvider = ({children}) => {

  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  useEffect(()=>{
    if(token.length > 0) {
      const getArtist = async (search) => {
        axios
          .get(
            "https://api.spotify.com/v1/tracks?market=CO&ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B",
            {
              headers: {
                authorization:
                  `Bearer ${token}`
              },
              referrer: "https://developer.spotify.com/",
              referrerPolicy: "strict-origin-when-cross-origin",
              body: null,
              method: "GET",
              mode: "cors",
              credentials: "include"
            }
          )
          .then((result) => {
            const data = result.data;
            setData(data.tracks);
          });
      };
      getArtist();    
    }
  }, [token])

  useEffect(() => {
    if (!token) {
      axios.post('https://accounts.spotify.com/api/token', body, { headers }).then(result => {
        setToken(result.data.access_token);
      });
    }

  }, [])


  return (
    <AuthContext.Provider  value={{ data, token, loginUrl}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider



