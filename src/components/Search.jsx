import React, { useState } from "react";
import axios from "axios";
import { useData } from "../context/AuthContext";
import SpotifyPlayer from "react-spotify-web-playback";

import "../css/search.css";

const Search = () => {
  const { data, token } = useData();
  const [searched, setSearched] = useState(data || []);
  const [current_track, setTrack] = useState();

  const onSearch = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      axios
        .get(
          `https://api.spotify.com/v1/search?q=remaster%20track:${value}%20&type=track`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          setSearched(result.data.tracks.items);
        });
    }
  };

  const tokenPlayer = localStorage.getItem("tokenPlayer");

  return (
    <div>
      <div className="seeker">
        <img className="lupa2" src="../public/lupa.png" />
        <input
          onChange={onSearch}
          type="search"
          className="inputSearch"
          placeholder="Search"
        />
      </div>
      <div className="songsContainer">
        {searched.length > 0 &&
          searched.map((song) => (
            <div className="card">
              <img
                src={song?.album.images[1].url}
                className="card-img-top imagen"
                alt={song?.name}
              />
              <div className="card-body" onClick={() => setTrack(song)}>
                <h2 className="card-text titulosong">{song?.name}</h2>
                <p className="card-text artista">{song?.artists[0].name}</p>
                <button className="botonPlay" onClick={() => setTrack(song)}>
                  <img className="imagenPlay" src="./public/play2.png" />
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="reproductor">
        {current_track && (
          <SpotifyPlayer
            token={tokenPlayer}
            uris={[`${current_track.album.uri}`]}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
