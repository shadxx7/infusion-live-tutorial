// Function for 1st click
function press1() {
    document.getElementById("ex1").style.display = "none";
    document.getElementById('pre_').style.display = "none";
    document.getElementById("chall1").style.display = "block";
    document.getElementById('tut_pro').style.height = "25%";
}

// Function for 2nd click
function press2() {
    document.getElementById("ex-comp").style.display = "none";
    document.getElementById("chall1").style.display = "none";
    document.getElementById('ex-invoke').style.display = "block";
    document.getElementById("ex2").style.display = "block";
    document.getElementById('tut_pro').style.height = "50%";
}

// Function for 3rd click
function press3() {
    document.getElementById("ex2").style.display = "none";
    document.getElementById("chall2").style.display = "block";
    document.getElementById('tut_pro').style.height = "75%";
}

// Function for 4th click
function press4() {
    document.getElementById("ex-invoke").style.display = "none";
    document.getElementById("chall2").style.display = "none";
    document.getElementById('intro').style.display = "none";
    document.getElementById('complete').style.display = "block";
    document.getElementById('tut_pro').style.height = "100%";
}