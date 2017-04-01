// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x= x;
    this.y= y;
    this.speed=Math.floor((Math.random() * 100) + 50);
    this.width=101;
this.height=50;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
if (this.x > 505){
    this.x=0;
}


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
 this.sprite = 'images/char-boy.png';
 this.x = 200;
 this.y = 380;
this.width=50;
this.height=60;
};


Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
if (this.y<-20 ){
player.reset();
}
if (this.y > 380){
    this.y = 380;
}
if (this.x>402){
this.x=402;
}
if (this.x < -2){
    this.x=-2;
}
// call checkCollisions method to check if there any collision every update
allEnemies.forEach(function(enemy) {
            enemy.checkCollisions();
        });
};
//collision method to detect if there any collides between the enemy and the player

Enemy.prototype.checkCollisions = function(){


if (this.x < player.x + player.width &&
   this.x + this.width > player.x &&
   this.y < player.y + player.height &&
   this.height + this.y > player.y) {
 player.reset();

}
};

Player.prototype.handleInput = function(key) {

switch (key) {
        case 'left':
            this.x -= 101;
            break;
        case 'up':
            this.y -=   80;
            break;
        case 'right':
            this.x +=  101;
            break;
        case 'down':
            this.y +=  80;
            break;
    }
};



// Draw the player on the screen, required method for game
Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.reset = function()
{
   this.x=200;
   this.y=380;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies =[];

var enemy1 = new Enemy (10,60);
var enemy2 = new Enemy (20,140);
var enemy3 = new Enemy (30,225);

 allEnemies.push(enemy1,enemy2,enemy3);

var player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
