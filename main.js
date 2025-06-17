var mouseEvent = "empty"; //variável vazia para armazenar os eventos do mouse (será atualizada ao longo 
//da execução)
var lastPositionX, lastPositionY; //variáveis para armazenar a última posição do eixo X e do eixo Y

canvas = document.getElementById('myCanvas'); //pega o canvas e faz sua referência
ctx = canvas.getContext("2d");

color = "black"; //variável que define a cor
    
widthLine = 1; //variável que define a largura/espessura

//evento mouseDown
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) //função myMouseDown
{
    color = document.getElementById("color").value; //permite ao usuário trocar a cor usada
    widthLine = document.getElementById("widthLine").value; //permite ao usuário trocar a espessura
    mouseEvent = "mouseDown"; //atualiza a variável mouseEvent com o valor mouseDown
}

//evento mouseMove (evento principal, onde será realizado o desenho)
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) //função myMouseMove
{
    PositionMouseX = e.clientX - canvas.offsetLeft; //obtém a posição atual da coordenada x 
    PositionMouseY = e.clientY - canvas.offsetTop; //obtém a posição atual da coordenada y
    //e.client dá a coordenada x do cursor no canvas quando é clicada
    //com esse comano e.clientY - canvas.offsetTop, obtemos a posição real

    //o código abaixo verifica se a variável mouseEvent é igual a mouseDown. Se sim, o desenho será feito:
    if (mouseEvent == "mouseDown") 
    {
        ctx.beginPath(); //inicia um caminho ou redefine o caminho atual para desenhar qualquer coisa (diz ao canvas para começar a desenhar)
        ctx.strokeStyle = color; //define a cor do desenho
        ctx.lineWidth = widthLine; //define a largura do desenho

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY); //move o ponto para um ponto especificado no canvas, sem criar uma linha

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY); //acrescenta um novo ponto e cria uma linha para esse ponto a partir do último
        ctx.stroke();
    }

    lastPositionX = PositionMouseX; 
    lastPositionY = PositionMouseY;
    }

//evento mouseUp
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent = "mouseUP";
}

//evento mouseLeave
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseleave";
}

//função para limpar toda a área do canvas:
function clearArea() 
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
