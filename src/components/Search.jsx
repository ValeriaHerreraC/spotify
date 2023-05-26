import React, {useState}  from 'react'
import axios from "axios";
import { useData } from "../context/AuthContext";


const Search = () => {
  const {data, token} = useData()
  const [searched, setSearched] = useState(data || []);

  const onSearch = (e) =>{
    const {value} = e.target;
    debugger;
          if (value.lenght > 2) {
            debugger;
            axios.get(
           `https://api.spotify.com/v1/search?q=remaster%20track:${value}%20&type=track`,
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
            console.log(result)
          });
          }

    

    //const result = data?.filter((item)=> item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    //setSearched(result);
    
  }
  return (
    <>
      <img className="lupa" src="../public/lupa.png"/>
      <input onChange={onSearch} type="search" className="textmen" placeholder="Search"/>
      {searched && searched.map(song=> <div className="card">
            <img src={song?.album.images[1].url}  className="card-img-top imagen" alt={song?.name}/>
            <div className="card-body" onClick={() => setTrack(track)}>
              <h2 className="card-text titulosong">{song?.name}</h2>
              <p className='card-text artista'>{song?.artists[0].name}</p>
              <button className="botonPlay" onClick={() => setTrack(song)}>
                <img className="imagenPlay" src="./public/play2.png"/>
              </button>
            </div>
      </div>)}
    </>
  )
}

export default Search