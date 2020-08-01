function bilibili(e) {
    let obj = document.createElement("img");
    let random = Math.floor(Math.random()*100+40);
    const x = e.clientX;
    const y = e.clientY;
    obj.src="./img/bilibili.png";
    obj.className="bili";
    obj.width = random;
    obj.style.position="absolute";
    obj.style.top=y+"px";
    obj.style.left=(x-obj.width/2)+"px";
    document.body.appendChild(obj);
}

function fn(e) {
    const obj = document.getElementById("d1");
    const x = e.clientX;
    const y = e.clientY;
    obj.innerHTML = "鼠标坐标"+x+","+y;
}