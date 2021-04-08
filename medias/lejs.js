(function () {
"use strict";
    
   document.addEventListener("DOMContentLoaded", initialiser);
    
   function initialiser(evt){
       var utilisateur = document.getElementById("phrase");
       utilisateur.addEventListener("mouseleave", load2);
       utilisateur.addEventListener("click", load2);
   }
    
   function load2(){
       console.log("je suis 2");
       var laudio = document.getElementById("maclasse");
       laudio.play();
       console.log("je suis 3");
       
       laudio.insertAdjacentHTML('afterend', '<audio id="maclasse" src="medias/je%20suis%20un%20ananas.mp3" loop autoplay></audio>');
   }
}());