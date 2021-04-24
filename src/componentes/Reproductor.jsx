
import next from "../imagenes/skip_next_white_18dp.svg";
import prev from "../imagenes/skip_previous_white_18dp.svg";
import vol from "../imagenes/volume_up_white_24dp.svg";
import React  from "react";
import { useSelector } from "react-redux";
export default function Reproductor(){ 
    let volumen = document.querySelector("#volumen");
    let num_rango = document.querySelector("#rango");
    let play = document.querySelector("#play");
    let imagen = document.querySelector("#imagen");
    const musica = useSelector((state) => state.musicas);
    let track = document.createElement("audio");
    let tracks =[]
    let estado = false;
    let index=0 
    let rango=90
      musica.forEach((element) => {
        tracks.push(element.preview);
      });
      track.volume = 1
    track.src=tracks[index];
    if(musica[0]){
      imagen.src =musica[0].album.cover;
    } 
    function handleChange() {
        num_rango.innerHTML=volumen.value
        track.volume = volumen.value /100 ;
    }
    

    function nextMusic(){
      
      index++;
      track.src = tracks[index]
      
      if(estado === true){
        playMusic()
      }
       imagen.src = musica[index].album.cover;
    }
    function prevMusic() {

      index--;
      if(index <= 0){  
        track.src = tracks[0];
        index=0;
      }
      if(index > 0){
        track.src = tracks[index];
      }
      if (estado === true) {
        playMusic();
      }
      imagen.src = musica[index].album.cover;
    }
 function music_play() {
   
   if(estado === false){
     playMusic();
     
    }else{
      pauseMusic();   
    }
   
 }
 function playMusic(){
   track.play()
   estado=true;
  play.innerHTML = '<i class="fa fa-pause-circle-o" aria-hidden="true"></i>';   
 }
 function pauseMusic() {
   
   track.pause();
   estado = false;
   play.innerHTML = '<i class="fa fa-play-circle-o" aria-hidden="true"></i>';
 }
    return (
      <div className="musica">
        <div className="albun">
          <img id="imagen" alt="imagen" />
          <p>
            <strong>{musica[0] ? musica[0].contributors[0].name : ""}</strong>
            <br />
            Album
          </p>
        </div>
        <div className="controladores">
          <img className="prev" src={prev} alt="prev" onClick={prevMusic} />
          <div id="play" onClick={music_play}>
            <i className="fa fa-play-circle-o " aria-hidden="true"></i>
          </div>
          <img className="next" src={next} alt="next" onClick={nextMusic} />
        </div>
        <div className="sonido">
          <input
            type="range"
            min="0"
            max="100"
            value={rango}
            onChange={handleChange}
            id="volumen"
          />
          <img className="volumen" src={vol} alt="" />
          <span id="rango" className="hola">
            90
          </span>
        </div>
      </div>
    );
}