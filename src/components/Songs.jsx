import { useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useData } from "../context/AuthContext";

export const Songs = () => {
  //const [data, setData] = useState([]);

  /* useEffect(() => {
    fetch('https://discoveryprovider.audius.co/v1/tracks/trending?app_name=ExampleApp')
    .then(async(response) => {
      const result = await response.json()
      setData(result.data)
      console.log( "data", result.data)
    })
  }, []);   */
  const { data, token } = useData();
  const [current_track, setTrack] = useState();
  const tokenPlayer = window.location.hash
    .replace("#", "")
    .split("&")[0]
    .replace("access_token=", "");
  localStorage.setItem("tokenPlayer", tokenPlayer);

  return (
    <div className="cardPadre">
      {data?.map((song) => (
        <div key={song.id} className="card">
          <img
            src={song.album.images[1].url}
            className="card-img-top imagen"
            alt={song.name}
          />
          <div className="card-body" onClick={() => setTrack(track)}>
            <h2 className="card-text titulosong">{song.name}</h2>
            <p className="card-text artista">{song.artists[0].name}</p>
            <button className="botonPlay" onClick={() => setTrack(song)}>
              <img className="imagenPlay" src="./public/play2.png" />
            </button>
          </div>
        </div>
      ))}
      <div className="reproductor">
        {token && current_track && (
          <SpotifyPlayer
            token={tokenPlayer}
            uris={[`${current_track.album.uri}`]}
          />
        )}
      </div>
    </div>
  );
};
