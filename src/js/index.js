function press1() {
    document.getElementById("ex1").style.display = "none";
    document.getElementById("chall1").style.display = "block";
    document.getElementById('tut_pro').style.width = "25%";
}

function press2() {
    document.getElementById("ex-comp").style.display = "none";
    document.getElementById("chall1").style.display = "none";
    document.getElementById('ex-invoke').style.display = "block";
    document.getElementById("ex2").style.display = "block";
    window.location.href = '#intro';
    document.getElementById('tut_pro').style.width = "50%";
}

function press3() {
    document.getElementById("ex2").style.display = "none";
    document.getElementById("chall2").style.display = "block";
    document.getElementById('tut_pro').style.width = "75%";
}

function press4() {
    document.getElementById("ex-invoke").style.display = "none";
    document.getElementById("chall2").style.display = "none";
    document.getElementById('complete').style.display = "block";
    document.getElementById('tut_pro').style.width = "100%";
}