let personagem
let grama

let tamanho = 64

let andarX = 0
let andarY = 0

let velocidade = 64
let restart


function setup() {
  createCanvas(576, 576);
  
  personagem = loadImage('pixelart-octocat.gif')
  grama = loadImage('grama nova 3.avif')
    logo =  loadImage('github-logo.png')
  end = loadImage('629b7a8e7c5cd817694c322e.png')
}

function draw() {
  if(andarX < 0){
    andarX = 0
  }
  if(andarY < 0){
    andarY = 0
  }
  if(andarY > tamanho*8){
    andarY = tamanho*8
  }
  if(andarX > tamanho*8){
    andarX = tamanho*8}
    
  background(220);
  
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++) 
    image(grama, tamanho*i, tamanho*j, tamanho, tamanho)}
  
  image(personagem,andarX, andarY, tamanho, tamanho)
  image(logo,tamanho*8,tamanho*8,tamanho,tamanho)
  
  if(andarX === tamanho*8 && andarY === tamanho*8){
  
      image(end, tamanho*2, tamanho*2, tamanho*5, tamanho*5)
      textSize(25)
      text('Parabéns, você venceu!',165,150)

       restart = createButton('Reiniciar')
      restart.mousePressed(reset)
      noLoop()
    }
  
}
function reset(){
  andarX = 0 
  andarY = 0
  restart.remove()
  loop()
}

 function keyPressed () {
    if(keyIsDown(UP_ARROW)) {
      andarY -= velocidade
    }
    
    if(keyIsDown(DOWN_ARROW)) {
      andarY += velocidade
    }
    
    if(keyIsDown(LEFT_ARROW)) {
      andarX -= velocidade
    }
    
    if(keyIsDown(RIGHT_ARROW)) {
      andarX += velocidade
    }}