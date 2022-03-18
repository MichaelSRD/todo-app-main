//Variables globales

const inputUI = document.querySelector('#tarea');
const actividadesUI = document.querySelector('#listas');
const contador = document.querySelector('#cont');
const borrR = document.querySelector(".borrar")
const tema = document.querySelector('#sol');
const temaL = document.querySelector('#luna');
const Lfinal = document.querySelector(".ultima"); 
const paginador = document.querySelector(".paginador"); 
const todod = document.querySelector(".activado");
const actived = document.querySelector(".active");
const terminadot = document.querySelector(".terminadot");
const cuerpo = document.body;
const cabeza = document.querySelector('header');


let arrayActividades = [];
let paginacion = "";
let modo = "";
// drag and Drop librery
Sortable.create(actividadesUI, {
    animation: 150,
    chosenClass: "select",
    dragClass: "drag",
    group: 'list-1',

   
    sort: true,
    chosenClass: 'active',

    onSort: function (/**Event*/evt) {
        orderList(evt.oldIndex, evt.newIndex);
      },

});


// Funciones

function active(e){
   paginacion = e;
   pintarDB();
   hover(paginacion);
}

function hover(e){
  switch (e) {
    case 'all':
      todod.classList.add("activado");
      actived.classList.remove("activado");
      terminadot.classList.remove("activado");
      break;
    case 'activados':
      actived.classList.add("activado");
      todod.classList.remove("activado");
      terminadot.classList.remove("activado");
    break
    case 'complete':
      terminadot.classList.add("activado");
      actived.classList.remove("activado");
      todod.classList.remove("activado");
    break
    default:
      break;
  }
}

function swapArrayElements(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  };
  
  function orderList(oldIndex, newIndex) {
    swapArrayElements(arrayActividades, oldIndex, newIndex)
  
    localStorage.setItem("rutina", JSON.stringify(arrayActividades));
  }




const crearItem = (actividad) =>{

    let item = {
        actividad: actividad,
        estado: false,
       
    }
     
    arrayActividades.push(item);

    return item;
}

const  guardarDB = () => {
   
   localStorage.setItem('rutina',JSON.stringify(arrayActividades ) );
   pintarDB();
}

const pintarDB = () =>{

    actividadesUI.innerHTML='';
   
    arrayActividades = JSON.parse(localStorage.getItem('rutina'))|| [
        {
         
            actividad: 'Complete online JavaScript course',
          estado: true,
        },
        {
          
            actividad: 'Jog around the park 3x',
          estado: false,
        },
        {
         
            actividad: '10 minutes meditation',
          estado: false,
        },
        {
         
            actividad: 'Read for 1 hour',
          estado: false,
        },
        {
         
            actividad: 'Pick up groceries',
          estado: false,
        },
        {
          
            actividad: 'Complete Todo App on Frontend Mentor',
          estado: false,
        },
      ];

    if(arrayActividades === null){
        arrayActividades = [];
    }else{
        if(paginacion == "activados"){
            
            let ola = arrayActividades.filter(element => element.estado === false);
            id = 0 ;
            contador.innerHTML = ola.length;
            if(modo == "negro"){

              ola.forEach(element => {
                           
                actividadesUI.innerHTML +=`<div class="lista  listaN" data-id="${id= id+1}">
                <input type="checkbox" name="" id="chulo" class="${element.estado}">
      
                <b id="tareas ">${element.actividad}</b>
      
                <img src="images/icon-cross.svg" alt="" id="delete" srcset=""></div>
              `;

            
              });
           }else{
            ola.forEach(element => {
                           
              actividadesUI.innerHTML +=`<div class="lista " data-id="${id= id+1}">
              <input type="checkbox" name="" id="chulo" class="${element.estado}">
    
              <b id="tareas ">${element.actividad}</b>
    
              <img src="images/icon-cross.svg" alt="" id="delete" srcset=""></div>
            `;

          
            });
           }
            }
            
        if(paginacion == "complete"){
            let ola = arrayActividades.filter(element => element.estado === true);
            id = 0;
            contador.innerHTML = ola.length;
            if(modo == "negro"){
              ola.forEach(element => {
                           
                actividadesUI.innerHTML +=`<div class="lista terminado listaN" data-id="${id= id+1}">
                <input type="checkbox" name="" id="chulo" class="${element.estado}">
      
                <b id="tareas ">${element.actividad}</b>
      
                <img src="images/icon-cross.svg" alt="" id="delete" srcset=""></div>
              `;

            
                 });
            }else{
              ola.forEach(element => {
                           
                actividadesUI.innerHTML +=`<div class="lista terminado" data-id="${id= id+1}">
                <input type="checkbox" name="" id="chulo" class="${element.estado}">
      
                <b id="tareas ">${element.actividad}</b>
      
                <img src="images/icon-cross.svg" alt="" id="delete" srcset=""></div>
              `;

            
                 });
            }
            
        }
        if(paginacion == "all" || paginacion == ""){
            
            id = 0;
            contador.innerHTML = arrayActividades.length;
            arrayActividades.forEach(element => {
                 if(modo == "negro"){
                  if(element.estado == true){
                    actividadesUI.innerHTML +=`<div class="lista terminado listaN  " data-id="${id= id+1}">
                    <input type="checkbox" name="" id="chulo" class="${element.estado}">
          
                    <b id="tareas ">${element.actividad}</b>
          
                    <img src="images/icon-cross.svg" alt="" id="delete" srcset=""></div>
                  `;
                   }else{
                    actividadesUI.innerHTML +=`<div class="lista listaN " data-id="${id= id+1}">
                    <input type="checkbox" name="" id="chulo" class="${element.estado}">
          
                    <b id="tareas ">${element.actividad}</b>
          
                    <img src="images/icon-cross.svg" alt="" id="delete" srcset=""></div>
                  `;
            }
                  
                 } else{
                  if(element.estado == true){
                    actividadesUI.innerHTML +=`<div class="lista terminado " data-id="${id= id+1}">
                    <input type="checkbox" name="" id="chulo" class="${element.estado}">
          
                    <b id="tareas ">${element.actividad}</b>
          
                    <img src="images/icon-cross.svg" alt="" id="delete" srcset=""></div>
                  `;
                   }else{
                    actividadesUI.innerHTML +=`<div class="lista" data-id="${id= id+1}">
                    <input type="checkbox" name="" id="chulo" class="${element.estado}">
          
                    <b id="tareas ">${element.actividad}</b>
          
                    <img src="images/icon-cross.svg" alt="" id="delete" srcset=""></div>
                  `;
            }
                 }
                 
                           
    
                        
            });
        }
        
       
    }

}

const eliminarDB = (actividad) =>{
   let indexarray;
    arrayActividades.forEach((elemento, index) =>{
        
        if(elemento.actividad === actividad){
            indexarray = index;
        }
    });

    arrayActividades.splice(indexarray,1);
    guardarDB();
}

const ediatrDB = (actividad) =>{
    let indexarray = arrayActividades.findIndex((elelmento)=>elelmento.actividad === actividad
    )
    if (arrayActividades[indexarray].estado === false) {
        arrayActividades[indexarray].estado = true;
        
    } else {
        arrayActividades[indexarray].estado = false;
    }
 
  guardarDB();
}



//Evenlistener

ord = 0;
inputUI.addEventListener('keydown', (e) =>{

   
   if(e.keyCode === 13 && inputUI.value !== ""){

     
    let actividadUI = document.querySelector('#tarea').value;
     ord = ord + 1;
     console.log(ord);
    crearItem(actividadUI,ord);
    guardarDB();
    inputUI.value = "";
   }
   
})

document.addEventListener('DOMContentLoaded', pintarDB);
document.addEventListener('DOMContentLoaded', guardarDB);
document.addEventListener('DOMContentLoaded', temas);

actividadesUI.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.id === 'chulo' || e.target.id === 'delete'){
    let texto = e.path[1].childNodes[3].innerHTML;

     if(e.target.id === 'delete'){
        eliminarDB(texto);
     }
     if(e.target.id === 'chulo'){
        ediatrDB(texto); 
       
     }
    }
    
});

borrR.addEventListener("click", (evtn)=>{
  evtn.preventDefault();
  const clearCompleted = arrayActividades.filter(tsl => !tsl.estado);
  arrayActividades = clearCompleted;
  guardarDB();
});


const listaN = document.querySelectorAll('.lista'); 
function temasD(e){
  switch (e) {
    case "sol":
      localStorage.setItem('tema', 'luna');
      temas();
      break;
      case "luna":
        localStorage.setItem('tema', 'sol');
        temas();
        break;
    default:
      break;
  }
}

function temas() { 
  
  theme = localStorage.getItem('tema');

  if(theme == 'luna'){
    temaL.classList.add("lunaD");
    tema.classList.add("solD");
    cuerpo.classList.add("negro");
     modo = "negro";
     cabeza.classList.add("fondoD");
     inputUI.classList.add("tareaD");
     Lfinal.classList.add("ultimaD");
     paginador.classList.add("paginadorD");
    
    pintarDB();
  }else{
    temaL.classList.remove("lunaD");
    tema.classList.remove("solD");
    cuerpo.classList.remove("negro");
    modo = "blanco";
    cabeza.classList.remove("fondoD");
    inputUI.classList.remove("tareaD");
    Lfinal.classList.remove("ultimaD");
    paginador.classList.remove("paginadorD");
     pintarDB();
  }
/*  switch (theme) {
    case 'sol':
      temaL.classList.add("lunaD");
      tema.classList.add("solD");
      cuerpo.classList.add("negro");
       modo = "negro";
       cabeza.classList.add("fondoD");
       inputUI.classList.add("tareaD");
       Lfinal.classList.add("ultimaD");
       paginador.classList.add("paginadorD");
       localStorage.setItem('tema', "luna");
       pintarDB();
      break;
    case 'luna':
      temaL.classList.remove("lunaD");
      tema.classList.remove("solD");
      cuerpo.classList.remove("negro");
      modo = "blanco";
      cabeza.classList.remove("fondoD");
      inputUI.classList.remove("tareaD");
      Lfinal.classList.remove("ultimaD");
      paginador.classList.remove("paginadorD");
      localStorage.setItem('tema', "sol");
      pintarDB();
       break
    default:
      break;
  }  */
}


