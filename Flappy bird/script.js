var myGamePiece;
var myObstacles = [];
var myScore;
var isGameOver = false;

var birdImage = new Image();
birdImage.src = 'img/flappy.jpeg'; 

var myGameArea = {
    canvas: document.getElementById("gameCanvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    }
};

function startGame() {
    myGamePiece = new component(30, 30, birdImage, 10, 120,birdImage);
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}

function component(width, height, color, x, y, type) {
    this.type = type; 
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.image = null;
    if (this.type === "image") {
        this.image = type;
    }

    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else if (this.type == "image" && this.image) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };

    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    };

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    };
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i++) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            gameOver();
            return;
        }
    }

    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new component(10, height, "green", x, 0, "block"));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap, "block"));
    }

    for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].speedX = -1;
        myObstacles[i].newPos();
        myObstacles[i].update();
    }
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

function moveup() {
    if (!isGameOver) myGamePiece.speedY = -1;
}

function movedown() {
    if (!isGameOver) myGamePiece.speedY = 1;
}

function moveleft() {
    if (!isGameOver) myGamePiece.speedX = -1;
}

function moveright() {
    if (!isGameOver) myGamePiece.speedX = 1;
}

function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}

function gameOver() {
    isGameOver = true;
    myGameArea.stop();
    document.getElementById("score").innerHTML = "<span class='game-over'>GAME OVER! Final Score: " + myGameArea.frameNo + "</span>";
    let restartButton = document.createElement("button");
    restartButton.innerHTML = "Restart Game";
    restartButton.onclick = function () {
        location.reload();
    };
    document.body.appendChild(restartButton);
}