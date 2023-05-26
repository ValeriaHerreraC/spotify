import axios from "axios";
import { useState, useEffect } from "react";
import SpotifyPlayer from 'react-spotify-web-playback';


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


export default function App() {
  const [tracks, setTracks] = useState([]);
  const [token, setToken] = useState('');
  const [current_track, setTrack] = useState();
  const tokenPlayer = window.location.hash.replace("#","").split('&')[0].replace("access_token=", "");
  console.log('current_track', current_track);
  const getArtist = async (algo) => {
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
        setTracks(data.tracks);
      });
  };
  const handleOnchange = (e) => {
    const { value } = e.target;

    if (value.length > 3) {
      getArtist(value);
    }
  };

  useEffect(() => {
    if (!token) {
      axios.post('https://accounts.spotify.com/api/token', body, { headers }).then(result => {
        setToken(result.data.access_token);
      });
    }
  }, [])

  return (
    <div>
      <a href={loginUrl}>Acceder a Spotify</a>
      <input name="search" onChange={handleOnchange} />
      <div>
        {tracks.map((track, index) => (
          <div key={`algo-${index}`}>
            <div>{track.artists[0].name}</div>
            <div>{track.name}</div>
            <div>{track.duration_ms}</div>
            <div>{track.popularity}</div>
            <button onClick={() => setTrack(track)}>play</button>
          </div>
        ))}
      </div>
      <div>
        {current_track && (
          <div className="main-wrapper">
            <img
              src={current_track.album.images[0].url}
              className="now-playing__cover"
              alt=""
            />

            <div className="now-playing__side">
              <div className="now-playing__name">{current_track.name}</div>

              <div className="now-playing__artist">
                {current_track.artists[0].name}
              </div>
            </div>
          </div>
        )}
        { token && current_track &&
        <SpotifyPlayer
          token={tokenPlayer}
          uris={[`${current_track.album.uri}`]}
        /> }
      </div>
    </div>
  );
}