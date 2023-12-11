function mouseUp(){
    document.getElementById("myP").style.color = "green";
}

function mouseDown(){
    document.getElementById("myP").style.color = "red";
}

function coordenadasFigura(e){
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordenadas: (" + x + ", " + y + ")";
    document.getElementById("demo3").innerHTML = coor;
}

function clearCoor(){
    document.getElementById("demo3").innerHTML = "";
}