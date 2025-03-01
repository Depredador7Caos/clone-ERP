const viewInventory = document.querySelector('#view-inventario');
const vieMRO = document.querySelector('#view-mro');
const viewConsumibles = document.querySelector('#view-consumibles');
const viewHerramientas = document.querySelector('#view-herramientas');
const viewOpciones = document.querySelector('#view-opciones');

const contenedor = document.querySelector("#contenedor");
const listaAlmacen = document.createElement('ul');
listaAlmacen.className = "ul-almacen";


viewInventory.onclick = getListInventario;
vieMRO.onclick = getListMRO;
viewConsumibles.onclick = getListComsumibles;
viewHerramientas.onclick = getListHerramientas;
viewOpciones.onclick = getListOpciones;
// Generar funciones de los eventos anteriores de almacen

const dataOptions = [
    {
        name: "Inventario",
        "options": ["inventario General","Productos", "Servicios", "Catalogos", "Listas", "Reportes", "Catalogos SAT"]
    },
    {
        name: "MRO",
        "options": ["Inventario"]

    },    
    {
        name: "Comsumibles",
        "options": ["Inventario"]
    },
    {
        name: "Herramientas",
        "options": ["Herramientas","Herramientas"]
    },    
    {
        name: "Opciones",
        "options": ["null"]
    }
]

function structList(data) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const icon = document.createElement("i");
    const text = document.createElement("a");

   icon.className = "bx bx-caret-right";
   listaCatalogo.appendChild(li);
   li.appendChild(div);
   div.appendChild(icon);
   div.appendChild(text);

   text.textContent = `${data}`;

   return data;
}

function getListInventario(){
    alert("inventario");
}

function getListMRO() {
    alert("inventario");
    
}

function getListComsumibles() {
    alert("inventario");
    
}

function getListHerramientas() {
    alert("inventario");
    
}

function getListOpciones(params) {
    alert("inventario");
    
}