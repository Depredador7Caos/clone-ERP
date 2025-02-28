const catalogo = document.getElementById('catalogo');
const listName = document.querySelector('#list-name');
const viewcatalogo = document.querySelector('#view-cliente');
const viewProvedores = document.querySelector('#view-provedores');
const viewSucursales = document.querySelector('#view-sucursales');
const viewPersonal = document.querySelector('#view-personal');
const viewOpciones = document.querySelector('#view-opciones');

const contenedor = document.querySelector('#contenedor');
const listaCatalogo = document.createElement("ul");
listaCatalogo.className = "ul-catalogo";


// ESCUCHADOR DE EVENTOS
viewcatalogo.onclick = getListcatalogo;
viewProvedores.onclick = getListProvedores;
viewSucursales.onclick = getListSucursales;
viewPersonal.onclick = getListPersonal;
viewOpciones.onclick = getListOpciones;


const dataOpcion = [
   {
      name: "Clientes",
      "options": ["clientes","vendedores","reportes"]
   },
   {
      name: "Provedores",
      "options": ["provedores", "prospectos", "catalogos", "reportes"],
   },
   { name: "Sucursales",
      "options": ["Listado", "Sucursales"],
   },
   { name: "Personal",
      "options": ["Interno", "Externo", "Produccion", "Mantenimiento", "Consumibles", "Almacenes"],
   },
   { name: "Opciones",
      "options": ["Configuracion", "Indicadores", "Reportes", "Catalogos SAT"],
   } 
];

//GENERATOR STRUCTURE LIST IN CONTAINER
function structList(data) {
   contenedor.appendChild(listaCatalogo);

   const li = document.createElement("li");
   const div = document.createElement("div");
   const icono = document.createElement("i");
   const text = document.createElement("a");

   //li.className = "";
   icono.className = "bx bx-caret-right";
   listaCatalogo.appendChild(li);
   li.appendChild(div);
   div.appendChild(icono);
   div.appendChild(text);

   text.textContent = data;

   return data;
}
function getListcatalogo () {
   listaCatalogo.innerHTML = "";
   
   const opcClientes = dataOpcion.map((optionsCliente ) => {
      if (optionsCliente.name === "Clientes") {
         const opc = optionsCliente.options;
         listName.textContent = optionsCliente.name;

         for(let i = 0; i < opc.length; i++) {
               structList(opc[i]);
            //console.log(opc[i]);
         }
      }
   });

   return opcClientes;
}

function getListProvedores() {
   listaCatalogo.innerHTML = "";

   const opcProveedores = dataOpcion.map((optionsProveedor)=>{
      if(optionsProveedor.name === "Provedores"){
         const opc = optionsProveedor.options;
         listName.textContent = optionsProveedor.name;

         for(let i = 0; i < opc.length; i++){
            structList(opc[i]);
         }
      }
   });

   return opcProveedores;
}

function getListSucursales() {
   listaCatalogo.innerHTML = "";

   const opcSucursales = dataOpcion.map((optionSucursal) => {
      if (optionSucursal.name === "Sucursales") {
         const opc = optionSucursal.options;
         listName.textContent = optionSucursal.name;

         for (let i = 0; i < opc.length; i++) {
            structList(opc[i])         
         }
      }
   });

   return opcSucursales;
}

function getListPersonal() {
   listaCatalogo.innerHTML = "";

   const opcPersonal = dataOpcion.map((optionsPersonal) => {
      if (optionsPersonal.name === "Personal") {
         const opc = optionsPersonal.options;
         listName.textContent = optionsPersonal.name;

         for (let i = 0; i < opc.length; i++) {
            structList(opc[i])         
         }
      }
   });

   return opcPersonal;
}

function getListOpciones() {
   listaCatalogo.innerHTML = "";

   const opcOpciones = dataOpcion.map((optionsSettings) => {
      if (optionsSettings.name === "Opciones") {
         const opc = optionsSettings.options;
         listName.textContent =optionsSettings.name;

         for (let i = 0; i < opc.length; i++) {
            structList(opc[i]);
            console.log(opc[i]);
            
         }
      }
   });

   return opcOpciones;;
}




