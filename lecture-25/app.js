// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// ctx.fillStyle = "orange";
// ctx.fillRect(100,100,50,50);

// ctx.strokeStyle = "white";            //border
// ctx.strokeRect(100,100,50,50)

// ctx.beginPath();

// ctx.moveTo(200,200);
// ctx.lineTo(400,400);
// ctx.lineTo(0,400);
// ctx.lineTo(200,200);
// // ctx.stroke();
// ctx.fill();


// ctx.font = "24px sans-serif"
// ctx.fillStyle = "blue";
// ctx.fillText('sammu',400,100)


// ctx.closePath();



//SNAKE GAME
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let cellsize = 50;
let snakesize = [[0,0]];
let boardHeight = 600;
let boardWidth = 1000;
let direction = 'right';
let gameOver = false;
let foodCell = foodGen();
let score = 0;
var snakeBody = [];

document.addEventListener('keydown',function(e){
    // console.log(e);
    if(e.key === "ArrowDown"){direction = 'down'}
    else if(e.key === "ArrowUp"){direction = 'up'}
    else if(e.key === "ArrowLeft"){direction = 'left'}
    else{direction = 'right'}
})

function draw(){

    if(gameOver === true){
        clearInterval(clearSnake);
        ctx.font = "50px sans-serif"
        ctx.fillText('GAME OVER' , 100,100);
        return;
    }

    ctx.clearRect(0,0,boardWidth,boardHeight);

    for(let cell of snakesize){
        ctx.fillStyle = 'red'
        ctx.fillRect(cell[0],cell[1],cellsize,cellsize)
    }

    //draw food
    ctx.fillStyle = "blue"
    ctx.fillRect(foodCell[0],foodCell[1],cellsize,cellsize);

    //draw score
    ctx.font = "35px sans-serif";
    ctx.fillStyle = "red"
    ctx.fillText(`score: ${score}` , 50, 50);

}

function update(){
    if(gameOver){
        return;
    }
    let headX = snakesize[snakesize.length - 1][0];
    let headY = snakesize[snakesize.length - 1][1];

    // let newHeadX = headX + cellsize;
    // let newHeadY = headY;
    let newHeadX ;
    let newHeadY;

    if(direction === 'down'){
         newHeadX = headX ;
         newHeadY = headY + cellsize;

         if(newHeadY ===boardHeight){
            gameOver = true;
         }
    }
    else if(direction === 'up'){
        newHeadX = headX ;
         newHeadY = headY - cellsize;

         if(newHeadY < 0){
            gameOver = true;
         }
    }
    else if(direction === 'left'){
        newHeadX = headX - cellsize ;
        newHeadY = headY;

        if(newHeadX < 0){
            gameOver = true;
        }
    }
    else{
        newHeadX = headX + cellsize ;
        newHeadY = headY;

        if(newHeadX === boardWidth){
            gameOver = true;
        }
    }


    snakesize.push([newHeadX , newHeadY]);

    if(newHeadX === foodCell[0] && newHeadY == foodCell[1]){
        foodCell = foodGen();
        score++;
    }
    else{

        snakesize.shift();
    }

    
    for(let i =0 ; i < snakeBody.length ; i++){
        if(newHeadX == snakeBody[i][0] && newHeadY == snakeBody[i][1]){
        gameOver = true;
        }
    }

   

}

function foodGen(){
    return [
        Math.round((Math.random()*(boardWidth - cellsize))/cellsize) * cellsize,
        Math.round((Math.random()*(boardHeight - cellsize))/cellsize) * cellsize
    ]
}

let clearSnake = setInterval(function(){
    update();
    draw();

},100)