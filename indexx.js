var images = ['Images/1.png', 'Images/2.png', 'Images/3.png', 'Images/4.png', 'Images/5.png', 'Images/6.png'];
var i = 6;
var score = 0;
var currentNumb = 0;
var result = 0;
function compare(x, y) {
    if (x == y) {
        score += 1;
    }
    else {
        score += 0;
    }
    return score;
}
function restart() {
    location.reload();
}
function START() {
    function start1() {
        document.getElementById('showing').innerHTML = "Dice will change in " + i + " seconds";
        i = i - 1;
        if (i < 0) {
            j = Math.floor(Math.random() * images.length)
            document.getElementById('dice').src = images[j];
            i = 6;
            result = compare(j + 1, currentNumb);
            if (j + 1 == currentNumb) {
                document.getElementById('winMessage').innerHTML = "<h3>You guessed it Correct :D<h3>";
            }
            else {
                document.getElementById('winMessage').innerHTML = "<h3>You guessed it Wrong :(<h3>";
            }
            document.getElementById('currentScore').innerHTML = "Score : " + result;
        }
    }
    setInterval(start1, 1000);
}
function numbb() {
    currentNumb = 1;
    document.getElementById('cv').innerHTML = "Chosen Value : " + currentNumb;
}
function numbb1() {
    currentNumb = 2;
    document.getElementById('cv').innerHTML = "Chosen Value : " + currentNumb;
}
function numbb2() {
    currentNumb = 3;
    document.getElementById('cv').innerHTML = "Chosen Value : " + currentNumb;
}
function numbb3() {
    currentNumb = 4;
    document.getElementById('cv').innerHTML = "Chosen Value : " + currentNumb;
}
function numbb4() {
    currentNumb = 5;
    document.getElementById('cv').innerHTML = "Chosen Value : " + currentNumb;
}
function numbb5() {
    currentNumb = 6;
    document.getElementById('cv').innerHTML = "Chosen Value : " + currentNumb;
}




