import React from 'react'
import { Link } from "react-router-dom";
import "../css/menu.css"

export const Menu = ({children}) => {
  return (
    <div className='mainContainer'>
      <div className='leftside'></div>
      <nav className="lateralbar">
                <img className="spotHP" src="./public/spotifyWhite.png"/>
                <div>
                    <Link className="as" to="/">
                        <div className="menu">
                            <img className="casa" src="./public/casa.webp"/>
                            <h5 className="textmen">Home</h5>
                        </div>
                    </Link>
                    <Link className="as" to="/search">
                        <div className="menu">
                            <img className="search" src="./public/search.webp"/>
                            <h5 className='textmen'>Search</h5>
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="favmen">
                       <img className="favourites" src="./public/favoritos.jpg"/> 
                       <h5 className="textmen">Your favourites</h5>
                    </div>
                    <img className="lineamen" src="./public/linea.png"/>
                </div>
                <div className="downloadmen">
                    <a className="as" href="https://www.spotify.com/co-es/download/windows/"  target="_blank" >
                        <div className="down" >
                        <img className="flechamen" src="./public/flechaabajo.webp"/>
                        <h5 className="textmen">Download the app</h5>
                        </div>
                    </a>
                </div>
            </nav>
            <div className='pageContainer'>{children}</div>
    </div>
            
  )
}
