let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let ball = {
   x:0,
   y:0,

}
function drawBall(){
ctx.fillStyle = "white"
ctx.beginPath()
ctx.arc(ball.x,ball.y,5,0,2 * Math.PI)
ctx.stroke()
ctx.fill()
}

function moveBall(x,y){
   ball.x = x
   ball.y = y
}

function update(){
    drawBall();
    moveBall();
    requestAnimationFrame(update);
}

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    moveBall(x,y)

    console.log("Clicked at x: " + x + ", " + y);
});

update()