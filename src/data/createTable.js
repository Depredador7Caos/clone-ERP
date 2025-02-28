//function for create table

function init(){
    const contenedor = document.getElementById("#");
    //create element table
    const table = document.createElement("table");

    let tr = document.createElement("tr");
    let th = document.createElement("th")
    
    let insertTestTh = document.createTextNode("text here");

    //El hijo "insert text" va dentro del padre "th"
    th.appendChild(insertTestTh);

    //El hijo "th" va dentro del padre "tr"
    tr.appendChild(th);
}


//inicializando llamada de funcion init
window.onload = init;
