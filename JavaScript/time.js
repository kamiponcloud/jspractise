window.onload=init();

var lunboT;

function init() {
    window.setInterval("time()",100);
    lunboT = window.setInterval("lunbo()",2000);
}
function time() {
    var n = new Date();
    var time = document.getElementById("Time");
    var M = document.getElementById("M");
    var T = document.getElementById("T");
    time.innerHTML=n.toLocaleString();
    var m = n.getMinutes();
    var t = n.getHours();
    m=m*6;
    M.style.transform = "rotateZ("+m+"deg)";
    m=m/6/2+t*30;
    T.style.transform = "rotateZ("+m+"deg)";
}

