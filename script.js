const canvas = document.getElementById("jogo");

const ctx = canvas.getContext("2d")


let bolaX = 300;
let bolaY = 200;

let dx = 3;
let dy = -3;

let raio = 8;

function desenharBola(){
    ctx.beginPath();
    ctx.arc(bolaX, bolaY, raio, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
function moverBola(){
 if (bolaX + dx > canvas.width - raio || bolaX + dx < raio) {
    dx = -dx;
 }
 if (bolaY + dy > canvas.height - raio || bolaY + dy < raio) {
    dy = -dy;
 }

 bolaX = bolaX + dx;
 bolaY = bolaY + dy;
 
}

function loop(){

    ctx.clearRect (0,0, canvas.width, canvas.height);
    
    moverBola();
    desenharBola();

    requestAnimationFrame(loop);

}

loop();

