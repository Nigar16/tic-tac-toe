let player1,
    player2;

let point1 = 0,
    point2 = 0;

let x = "X",
    o = "O";


let array = [];

let count = 1;



Start();

function Start() {
    player1 =  player1 == undefined ? prompt("Enter Player 1 ", "X"):player1;
    player2 = player2 == undefined ? prompt("Enter Player 2 ", "O") : player2;   
    document.getElementById("p1").innerHTML = player1 + " : " + point1;
    document.getElementById("p2").innerHTML = player2 + " : " + point2;
    Arr();
    Table();
}


function Table() {
    let tr = '';
    for (let i = 0; i < 3; i++) {
        tr += `<tr>`;
        for (let j = 0; j < 3; j++) {
            tr += `<td id="${i+j}" onclick="Click(${i},${j})"> ${array[i][j] == undefined ? ' ' : array[i][j]}  </td>`;
        }
        tr += `</tr>`;
    }
    document.getElementById("tbl").innerHTML = tr;

}


function Arr() {
    for (let i = 0; i < 3; i++) {
        array[i] = [];
    }
}

function Click(i, j) {
    if (array[i][j] == undefined) {
        if (count % 2 == 0) {
            array[i][j] = o;
        } else {
            array[i][j] = x;
        }
        count++;
        Table();
        setInterval(Check, 250);
    }
}

function Check() {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] != undefined && array[i][0] == array[i][1] && array[i][1] == array[i][2]) {
            alert(array[i][0] == x ? `${player1} is winner` : `${player2} is winner`);
            array[i][0] == x ? point1++ : point2++;
            count=1;
            Start();
        }
        if(array[0][i] != undefined && array[0][i] == array[1][i] && array[1][i] == array[2][i]) {
            alert(array[0][i] == x ? `${player1} is winner` : `${player2} is winner`);
            array[0][i] == x ? point1++ : point2++;
            count=1;
            Start();
        }
        if((array[i][i] != undefined && array[0][0] == array[1][1] && array[1][1] == array[2][2])||
                (array[i][2-i] != undefined && array[0][2] == array[1][1] && array[1][1] == array[2][0])){
                    alert(array[1][1] == x ? `${player1} is winner` : `${player2} is winner`);
                    array[1][1] == x ? point1++ : point2++;
                    count=1;
                    Start();
                }
        else if(count==10){
            alert("Draw");
            count=1;
            Start();
        }

    }
    

}
