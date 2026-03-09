const canvas = document.getElementById("jogo");

const ctx = canvas.getContext("2d");

// blocos

let linhas = 3;
let colunas = 6;
let larguraBloco = 80
let alturaBloco = 20;
let padding= 10;

let blocos = [];

for (let c = 0; c < colunas; c++) {
blocos[c] = [];
for (let r = 0; r < linhas; r++) {
blocos[c][r] = {x: 0, y: 0, ativo: true};

 } 
}

function desenharBlocos(){

for (let c = 0; c < colunas; c++){
    for (let r = 0; r < linhas; r++) {

if (blocos[c][r].ativo) {

let blocoX = c (larguraBloco + padding) + 30;
let blocoY = r (alturaBloco + padding) + 30;

blocos[c][r].x = blocoX;

blocos[c][r].y= blocoY;

ctx.fillStyle "orange";
ctx.fillRect(blocoX, blocoY, larguraBloco,alturaBloco);

}

