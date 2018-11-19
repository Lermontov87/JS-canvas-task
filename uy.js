var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class Ball {
    constructor(x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    circle(x, y, radius, fillCircle) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        if (fillCircle) {
            ctx.fill();
        }
    };

    draw() {
        this.circle(this.x, this.y, 3, true);
    };

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    };

    //collision
    checkCollision() {
        if (this.x < 0 || this.x > 200) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < 0 || this.y > 200) {
            this.ySpeed = -this.ySpeed;
        }
    };

    interval() {
        setInterval(() => {
            this.draw();
            this.move();
            this.checkCollision();
        }, 15);
    }
}

setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);
    ctx.strokeRect(0, 0, 200, 200);
}, 15);

var ball = new Ball(50, 100, -2, 3)
ball.interval();

var ball2 = new Ball(70, 150, 2, 3)
ball2.interval();

var ball3 = new Ball(80, 60, -1, 3)
ball3.interval();

var ball4 = new Ball(90, 100, -2, 3)
ball4.interval();

var ball5 = new Ball(140, 90, 2, 4)
ball5.interval();


