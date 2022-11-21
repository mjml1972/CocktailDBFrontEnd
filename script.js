const btnBuscar = document.getElementById("btnBuscar");

let container = document.getElementById("containerInfo");
let divCocktail = document.createElement("div");
divCocktail.classList.add("divCocktail");
container.appendChild(divCocktail);
let numero = document.createElement('p');
numero.classList.add("p1");
divCocktail.appendChild(numero);
let nombre = document.createElement('p');
nombre.classList.add("p2");
divCocktail.appendChild(nombre);
let receta = document.createElement('p');
receta.classList.add("p3");
divCocktail.appendChild(receta);
let imagen = document.createElement('img');
imagen.classList.add("image");
divCocktail.appendChild(imagen);

btnBuscar.addEventListener("click", requestData);

async function requestData(){
    let name = document.getElementById("name").value;
    if(name == ""){
        return;
    }
    
    let response = await fetch("http://www.cocktailAPImjml.somee.com/api/cocktail/buscar/" + name);
    let data = await response.json();
    
    mostrarData(data);
}

function mostrarData(data){
    console.log(data);
    numero.innerHTML = "Número: "+data.id;
    nombre.innerHTML = "Nombre: "+ data.nombre;
    receta.innerHTML = "Receta: "+ data.receta;
    imagen.src = data.fotoSrc;


}

