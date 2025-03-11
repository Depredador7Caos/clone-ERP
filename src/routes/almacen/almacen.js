const listName = document.querySelector("#list-name");


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
        name: "Consumibles",
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
    contenedor.appendChild(listaAlmacen);

    const li = document.createElement("li");
    const div = document.createElement("div");
    const icon = document.createElement("i");
    const text = document.createElement("a");

   icon.className = "bx bx-caret-right";
   listaAlmacen.appendChild(li);
   li.appendChild(div);
   div.appendChild(icon);
   div.appendChild(text);

   text.textContent = `${data}`;

   return data;
}

function getListInventario(){
    listaAlmacen.innerHTML = "";

    const opcInventarios = dataOptions.map((listInventario) => {
        if (listInventario.name === "Inventario") {
            const opc = listInventario.options;

            listName.textContent = `${listInventario.name}`;

            for (let i = 0; i < opc.length; i++) {
                structList(opc[i]); 
            }
        }
    });

    return opcInventarios;
}

function getListMRO() {
    listaAlmacen.innerHTML = "";

    const opcMRO = dataOptions.map((listMRO) => {
        if (listMRO.name === "MRO") {
            const opc = listMRO.options;

            listName.textContent = `${listMRO.name}`;

            for (let i = 0; i < opc.length; i++) {
                structList(opc[i]);
            }
        }
    });

    return opcMRO;
}

function getListComsumibles() {
    listaAlmacen.innerHTML = "";
    
    const opcConsumible = dataOptions.map((listConsumible) => {
        if (listConsumible.name === "Consumibles") {
            const opc = listConsumible.options;

            listName.textContent = `${listConsumible.name}`;

            for (let i = 0; i < opc.length; i++) {
                structList(opc[i]);
            }
        }
    });

    return opcConsumible;
}

function getListHerramientas() {
    listaAlmacen.innerHTML = "";
    
    const opcTools = dataOptions.map((listTool) => {
        if (listTool.name === "Herramientas") {
            const opc = listTool.options;

            listName.textContent = `${listTool.name}`;

            for (let i = 0; i < opc.length; i++) {
                structList(opc[i]);
            }
        }
    });

    return opcTools;
}

function getListOpciones() {
    listaAlmacen.innerHTML = "";

    const opcSettings = dataOptions.map((listSettings) => {
        if (listSettings.name === "Opciones") {
            const opc = listSettings.options;

            listName.textContent = `${listSettings.name}`;

            for (let i = 0; i < opc.length; i++) {
                structList(opc[i]);
            }
        }
    });

    return opcSettings;
}