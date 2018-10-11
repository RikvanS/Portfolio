var user = 0;
var computer = 0;

function runGame(c) {
    var rand = Math.floor((Math.random() * 3));
        var arr = ['r', 'p', 's'];
    switch(c + arr[rand]) {
        case 'rr':
        case 'pp':
        case 'ss':
            draw();
            break;
        case 'rs':
        case 'sp':
        case 'pr':
            win();
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose();
            break;
    }
    
    function win() {
        ++user;
        document.getElementById("score").innerHTML = user + ":" + computer;
        document.getElementById("status").innerHTML = "You won!";
        
    }
    
    function lose() {
        ++computer;
        document.getElementById("score").innerHTML = user + " : " + computer;
        document.getElementById("status").innerHTML = "You lose!";
    }
    
    function draw() {
        document.getElementById("status").innerHTML = "It's a draw!"
    }

}
function reset() {
    document.getElementById("score").innerHTML = 0 + " : " + 0;
    user = 0;
    computer = 0;
} 