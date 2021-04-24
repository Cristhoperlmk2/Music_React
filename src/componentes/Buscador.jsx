import search from "../imagenes/search (3).svg";
import user from "../imagenes/user-solid-24 (1).png";
import React, { useState ,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Buscador(){
    const dispactch = useDispatch();
    const [title, setTitle] = useState("");
    const [musica, setMusica] = useState("sugar");
    const artista = useSelector((state) => state.artista);
    
    console.log()
  
  
    function handleChange(e){
      setTitle(e.target.value);
      console.log(title)
    }
    function handleSubmit(e) {
      setMusica(title);
      console.log(musica);
     e.preventDefault();
    }
   useEffect(()=>{
      if(artista.length >= 1){
                    fetch(`${artista[0].artist.tracklist}`)
                      .then((data) => data.json())
                      .then((respuesta) => {
                        dispactch({
                          type: "GET_MUSICA",
                          payload: respuesta.data,
                        });
                      });
                   
                  }
          
     
   },[artista,dispactch])
    useEffect(() => {
      if (musica.length > 3) {
        fetch(`https://api.deezer.com/search?q=${musica}`)
          .then((data) => data.json())
          .then((respuesta) => {
            dispactch({
              type: "GET_ARTISTA",
              payload: respuesta.data,
            });
          })
          .catch(() => {
            console.log("ERROR ");
          });
      }
    }, [dispactch, musica]);

    return (
      <div className="header">
        <div className="reproductor">
          <div className="buscardor">
            <form value="formulario" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="  Buscar"
                value={title}
                onChange={handleChange}
              />
              <input type="submit" className="enviar" value="" />
              <img src={search} alt="buscador" />
            </form>
          </div>
          <div className="usuario">
            <img className="user" src={user} alt="user" />
            <p>Fransico M.</p>
          </div>
        </div>
      </div>
    );
}