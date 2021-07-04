"use strict"
let tiempo = document.getElementById("timer");
let empezarBtn = document.getElementById("empezar");
let pararBtn = document.getElementById("parar");
let veinticinco =1000*60*25;
let circulo =document.getElementById("circle")
let intervalo;

const empezar = ()=>{
    circulo.setAttribute("class", "circle");
    empezarBtn.setAttribute("disabled", "true");
    intervalo= setInterval(()=>{
        if (veinticinco<=0) veinticinco=1000*60*25;
        veinticinco-=1000;
        let tiempoRes= new Date(veinticinco);
        let minutos =tiempoRes.getMinutes();
        let minutosf =(minutos>=10)? minutos:`0${minutos}`;
        let segundos =tiempoRes.getSeconds();
        let segundosf =(segundos>=10)? segundos:`0${segundos}`;
        tiempo.textContent = `${minutosf}:${segundosf}`;
    }, 1000);
    
    function parar (){
        clearInterval(intervalo)
        alert("Ya causa ya deja de estudiar");
        document.title = "Hora de descansar";
        
    }
    setTimeout(parar, veinticinco);  
}

const parar = ()=>{
    clearInterval(intervalo);
    empezarBtn.disabled = false;}

const reiniciar = ()=>{
    parar(); 
    veinticinco=1000*60*25; 
    tiempo.textContent="25:00";
    circulo.setAttribute("class", "")
    document.title = "Hora de descansar";
    
}




