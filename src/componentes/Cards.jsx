import play from "../imagenes/play.svg";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Cards(){

  const dispactch=useDispatch()
  const musica = useSelector((state) => state.musicas);
 
  const array =[]
  for(let i =0 ; i < 10 ; i++){
    array.push(musica[i])
  }
 function indice(preview) {
   dispactch({
     type: "GET_INDICE",
     payload: preview,
   });
   
 }
  

    return (
      <div className="container">
        <h2>Resultados</h2>

        <div className="cards">
          {array[9] ? (
            array.map(({ id, title, contributors, album, preview }) => {
              return (
                <div key={id}>
                  <div
                    className="musicas"
                    style={{
                      backgroundImage: `url(${album ? album.cover_big : ""})`,
                    }}
                  >
                    <img
                      src={play}
                      alt="play"
                      onClick={() => indice(preview)}
                    />
                  </div>
                  <p className="nombre">{title ? title : ""}</p>
                  <p>{contributors[0].name ? contributors[0].name : ""}</p>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
}