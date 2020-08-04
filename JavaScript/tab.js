function showdiv(n){
    for(var j = 1;j <= 5;j++){
        var obj = document.getElementById("tabd"+j);
        obj.style.display="none";
    }
    var obj = document.getElementById("tabd"+n);
    obj.style.display="block";
}

function scr() {
    alert(screen.availWidth+","+screen.availHeight);
}