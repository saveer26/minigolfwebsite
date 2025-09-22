let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let ball = {
   x:100,
   y:100,
   nextX:100,
   nextY:100
}
function drawBall(){
ctx.fillStyle = "white"
ctx.beginPath()
ctx.arc(ball.x,ball.y,10,0,2 * Math.PI)
ctx.stroke()
ctx.fill()
}

function moveBall(){
   if(ball.x != ball.nextX && ball.y != ball.nextY){
    ball.x += 1
    ball.y -= 1

   }
}
function background(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
function update(){
    background();
    drawBall();
    moveBall();
    requestAnimationFrame(update);
}

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ball.nextX = x;
    ball.nextY = y;
    console.log("Clicked at x: " + x + ", " + y);
});

update()