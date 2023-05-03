import "../css/homepage.css"
import { Songs } from "./Songs";


export const HomePage = () => {

    
    
    return(
        
        <div className="divpage">
            <div className="leftside"></div>
            <nav className="lateralbar">
                <img className="spotHP" src="./public/spotifyWhite.png"/>
                <div>
                    <a className="as" href="#">
                        <div className="menu">
                            <img className="casa" src="./public/casa.webp"/>
                            <h5 className="textmen">Home</h5>
                        </div>
                    </a>
                    <a className="as" href="#">
                        <div className="menu">
                            <img className="lupa" src="./public/lupa.png"/>
                            <h5 className="textmen">Search</h5>
                        </div>
                    </a>
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
            <div className="principalPag">
                
                <div className="userName">
                    <img className="userPhoto" src="./public/user.png"/>
                    <h3 className="nombreUser">
                    </h3>
                </div>  
                <Songs/>  
            </div>

        </div>
    )
}
