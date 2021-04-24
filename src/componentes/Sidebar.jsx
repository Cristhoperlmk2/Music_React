import logo from "../imagenes/foxbel-music.png";



export default function Sidebar(){
    return (<div className="containerNav" >
        <nav>
            <div className="Title"
            ><img src={logo} alt="titulo" />
                </div>
                <div className="libreria">
                    <ul>
                        <h2>Mi Libreria</h2>
                        <li>Recientes</li>
                        <li>Artistas</li>
                        <li>Albunes</li>
                        <li>Canciones</li>
                        <li>Estaciones</li>
                    </ul>
                    <ul>
                        <h2>Playlist</h2>
                        <li>Metal</li>
                        <li>Para bailar</li>
                        <li>Rock 90s</li>
                        <li>Baladas</li>

                    </ul>
                </div>
            </nav>
        </div>)
}