var i = 1;
function lunbo() {
    var obj = document.getElementById("img1");
    i++;
    if(i===4){
        i=1;
    }
    var n = document.getElementById("lunbtn"+i);
    for(var j = 1;j <= 3;j++){
        var clear = document.getElementById("lunbtn"+j);
        clear.style.background="rgba(102, 102, 102, 0.5)";
    }
    n.style.background="rgba(177,59,59,0.5)";
    obj.src="img/"+i+".jpg";
}
function stoplunbo() {
    window.clearInterval(lunboT);
}

function startlunbo() {
    lunboT = window.setInterval("lunbo()",2000);
}

function tintu(k,n) {
    var obj = document.getElementById("img1");
    var m = n.innerHTML;
    for(var j = 1;j <= 3;j++){
        var clear = document.getElementById("lunbtn"+j);
        clear.style.background="rgba(102, 102, 102, 0.5)";
    }
    n.style.background="rgba(177,59,59,0.5)";
    i=k;
    obj.src="img/"+m+".jpg";
    window.clearInterval(lunboT);
}