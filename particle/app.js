const canvas =document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let stageWidth = window.innerWidth;
let stageHeight = window.innerHeight;

canvas.width = stageWidth;
canvas.height =stageHeight;


window.addEventListener('mousemove',(e)=>{          
    console.log(e)
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.arc(e.clientX,e.clientY,50,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill()
})
