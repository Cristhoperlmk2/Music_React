import play from "../imagenes/play_arrow_white_48dp.svg";
import React from "react";
import { useSelector } from "react-redux";



export default function Header() {

  const artistas = useSelector((state) => state.musicas);

  
 
    return (
      <div className="card">
        <div
          className="imagen"
          style={{
            backgroundImage: `url(${
              artistas[0] ? artistas[0].album.cover_big : ""
            })`,
          }}
        >
          <img src={play} alt="play"   />
        </div>
        <div
          className="descripcion"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url(${
              artistas[0] ? artistas[0].album.cover_big : ""
            })`,
          }}
        >
          <h3>
            {artistas[0] ? artistas[0].artist.name : ""}
            {artistas[0] ? artistas[0].title : ""}
          </h3>
          <div className="artista">
            <p>Lo mejor de {artistas[0] ? artistas[0].artist.name : ""}</p>
            <p className="seguidores">331,322 seguidores</p>
          </div>
          <p className="parrafo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            veritatis pariatur eius est .
          </p>
          <div className="botones">
            <button className="reproducir">Reproducir</button>
            <div className="seguir">
              <p>Seguir</p>
            </div>
            <span> ...</span>
          </div>
        </div>
      </div>
    );
}
