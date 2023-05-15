$(window).load(function() { 
   alert("Make sure you are viewing on a desktop. Move the Mouse pointer After clicking Ok ");
    $('canvas').addClass('blackback')
});
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#177e89', '#FF7F66'];
addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});
function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = 4;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity =0.05;
    this.lastmouse={x:x,y:y};
    this.dist = randomIntFromRangea(50,150);
    this.update =() =>{
    var lastpoint = {X:this.x,Y:this.y};
    this.radians += this.velocity;
    this.lastmouse.x += (mouse.x-this.lastmouse.x)*0.09;
    this.lastmouse.y += (mouse.y-this.lastmouse.y)*0.09;
    this.x =this.lastmouse.x + Math.cos(this.radians)*this.dist;
    this.y =this.lastmouse.y + Math.sin(this.radians)*this.dist;
    this.draw(lastpoint);
    };

function randomIntFromRangea(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
this.draw =lastpoint => {
    c.beginPath();
    c.strokeStyle =this.color;
    c.lineWidth = this.radius;
    c.moveTo(lastpoint.X,lastpoint.Y);
    c.lineTo(this.x,this.y);
    c.stroke();
    c.closePath();
};
}
var particles = void 0;
function init() {
    particles = [];

    for (var i = 0; i < 90; i++) {
      const rad =(Math.random()*3)+3;
      function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}
         particles.push(new Particle(canvas.width/2,canvas.height/2,rad,randomColor(colors)))
    }
    console.log(particles);
}


function animate() {
    requestAnimationFrame(animate);
    c.fillStyle='rgba(255,255,255,0.05)';
    c.fillRect(0, 0, canvas.width, canvas.height);
particles.forEach(particle => {
     particle.update()
    })
}

init();
animate();
$(document).on({
    "contextmenu": function(e) {
        console.log("ctx menu button:", e.which); 

       e.preventDefault();
    },
    "mousedown": function(e) { 
        console.log("normal mouse down:", e.which); 
    },
    "mouseup": function(e) { 
        console.log("normal mouse up:", e.which); 
    }
});
$(document).keydown(function (event) {
    if (event.keyCode == 123) { 
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});
