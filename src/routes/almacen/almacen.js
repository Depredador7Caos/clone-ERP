const almacen = document.querySelector("#almacen");
const listName = document.querySelector("#list-name");

const viewInventory = document.querySelector("#view-inventario");
const vieMRO = document.querySelector("#view-mro");
const viewConsumibles = document.querySelector("#view-consumibles");
const viewHerramientas = document.querySelector("#view-herramientas");
const viewOpciones = document.querySelector("#view-opciones");

const contenedor = document.querySelector("#contenedor");
const listaAlmacen = document.createElement("ul");

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
        options: ["Inventario General", "Productos", "Servicios", "Catalogos", "Listas", "Reportes", "Catalogos SAT", ],
        opcDisplay: ["opc - 1 ","opc - 2"]
    },
    {
        name: "MRO",
        options: ["Inventario"],
        opcDisplay: ["opc - 3 ","opc - 4"]
    },
    {
        name: "Consumibles",
        options: ["Inventario"],
        opcDisplay: ["opc - 5 ","opc - 6"]
    },
    {
        name: "Herramientas",
        options: ["Herramientas", "Herramientas"],
        opcDisplay: ["opc - 7 ","opc - 8"]
    },
    {
        name: "Opciones",
        options: ["null"],
        opcDisplay: ["opc - 9 ","opc - 10"]
    },
];


function structList(data) {
    contenedor.appendChild(listaAlmacen);
    const li = document.createElement("li");
    const div = document.createElement("div");
    const icono = document.createElement("i");
    const text = document.createElement("a");

    const ulDesplegable = document.createElement("ul");
    

    icono.className = "bx bx-caret-right";

    text.className = "item-list";

    text.onclick = rotateArrow;

    /*
        DAR FUNCIONALIDAD CORRECTA AL DESPLIGUE DE LISTA, DE TAL AMNERA CADA UNO TENGA SUS OPCIONES.
        DAR LIMPIEZA AL CODIGO, TRATAR DE AGRUPAR LAS FUNCIONES CON CADA UNO DE SUS EVENTOS.
        CORRECION DE ESTRUCTURA Y FORMLAIDAD A LA SINTAXIS DEL CODIGO.
        BUSCAR NUEVAS Y POSIBLES FUNCIONALIDADES AL MOMENTO DE REALIZAR UN EVNTO DE DESPLIGUE EN LA LISTAS.
    
    */

    function rotateArrow() {
        if (text.className === "item-list") {
            text.className = "rotate";
            icono.className = "bx bxs-down-arrow";
            despligueOpcion();

        } else {
            text.className = "item-list";
            icono.className = "bx bx-caret-right";
            ulDesplegable.remove();
            ulDesplegable.innerHTML = "";
        }
    }
    

    /* DISPLAY OPTIONS */
    function despligueOpcion() {
        const lista = document.createElement("li");
        const div = document.createElement("div");
        const icon = document.createElement("i");
        const text = document.createElement("a");


        lista.className = "item-list-display";
        div.className = "container-list-display";
        icon.className = "bx bx-caret-right"; 
        
        text.textContent = "Reparaciones";

        li.appendChild(ulDesplegable);

        ulDesplegable.appendChild(lista);
        lista.appendChild(div);
        div.appendChild(icon);
        div.appendChild(text);

        
    }

    listaAlmacen.appendChild(li);
    li.appendChild(div);
    div.appendChild(icono);
    div.appendChild(text);

    text.textContent = `${data}`;

    return data;
}



function getListInventario(dataDisplay) {
    listaAlmacen.innerHTML = "";

    opcInventarios = dataOptions.map((listInventario) => {
        if (listInventario.name === "Inventario") {
            const opc = listInventario.options;

            listName.textContent = `${listInventario.name}`;

            for (let i = 0; i < opc.length; i++) {
                structList(opc[i]);
            }

        }
    });

    return dataDisplay;
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

/* FUNCTION'S FROM VIEWS LIST'S DISPLAY'S */
function viewInventario() {
    
}
