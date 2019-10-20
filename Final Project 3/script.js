let varkyan = 0;

function setup() {
    var socket = io();
    var side = 10;
    var matrix = [];
    
    //! Getting DOM objects (HTML elements)
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let huntCountElement = document.getElementById('huntCount');
    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);
    function plus() {
        varkyan++
    }
    setInterval(plus, 1000)
    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.eatCounter;
        huntCountElement.innerText = data.huntCounter;
  
        //! Every time it creates new Canvas with new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "գարուն"){
                        fill("#009900");
                    }
                    else if (data.weather == "ամառ"){
                        fill("#bfd132");
                    }
                    else if (data.weather == "աշուն"){
                        fill("#F8C30E ");
                    }
                    else if (data.weather == "ձմեռ"){
                        fill("#D7F3FC ");
                    }
                    rect(j * side, i * side, side, side);
                }                 
                else if (matrix[i][j] == 0) {
                    fill("#B3672B");
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 2) {
                    fill("#D9DDDC");
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 3) {
                    fill("#003399");
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 4) {
                    fill("#00ccff");
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 5) {
                    fill("#ffcc00");
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}