function diceroll() {
    return Math.floor(Math.random() * 6 + 1);
}
let ladders = { 1: 0, 2: 0, 3: 22, 4: 0, 5: 8, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 26, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 29, 21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0 };
let snakes = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 4, 18: 0, 19: 7, 20: 0, 21: 9, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 1, 28: 0, 29: 0, 30: 0 }
let player1Pos = 1;
let player2Pos = 1;
function dice1() {
    let p1 = document.getElementById("p1");
    let val = diceroll();
    console.log(val);
    let newPos = val + player1Pos;
    if(newPos>=30)
    {
        p1.innerHTML = "Player 1 wins";
    }
    // console.log(newPos);
    else if (ladders[newPos] != 0) {
        p1.innerHTML =  " Ladder found! " + ladders[newPos];
        player1Pos = ladders[newPos];
    }
    else if (snakes[newPos] != 0) {
        p1.innerHTML = " Snake found! " + snakes[newPos];
    }
    else {
        p1.innerHTML = newPos;
        player1Pos = newPos;
    }

}
function dice2() {
    let p2 = document.getElementById("p2");
    let val = diceroll();
    console.log(val);
    let newPos = val + player2Pos;
    if(newPos>=30)
    {
        p2.innerHTML = "Player 2 wins";
    }
    else if (ladders[newPos] != 0) {
        p2.innerHTML =  " Ladder found! " + ladders[newPos];
        player2Pos = ladders[newPos];
    }
    else if (snakes[newPos] != 0) {
        p2.innerHTML = " Snake found! " + snakes[newPos];
    }
    else {
        p2.innerHTML = newPos;
        player2Pos = newPos;
    }
}