function draw() {
    var canvas = document.getElementById("landing-page-background-2-canvas");
    var ctx = canvas.getContext("2d");

    ctx.moveTo(0,0);
    ctx.lineTo(0,0);
    ctx.lineTo(1000,0);
    ctx.lineTo(1000,1000);
    ctx.lineTo(500,1000);
    ctx.lineTo(0,0);
    ctx.fillStyle = "rgb(30,28,49)";
    ctx.fill();
    ctx.strokeStyle = "rgb(30,28,49)";
    ctx.stroke();
}

draw();