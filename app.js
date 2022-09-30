// Escribe tu código aquí.
const arreglo = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
var palabra = document.getElementById("campotxt").value;
var boton = document.getElementById("btnEnviar");
let arr = new Array();

boton.addEventListener("click", function (e){
//---------- PARTE 1 -------------------//
  e.preventDefault();
  //console.log(palabra, typeof(palabra), palabra.length);
  //console.log(arreglo);
  arreglo.forEach(elemento => {
    if (elemento.length > palabra.length) {
      console.log(elemento, typeof(elemento), elemento.length);
      arr.push(elemento);
    }
  })
  //console.log(arr);
//---------- PARTE 2 -------------------//
  let ul = document.getElementsByClassName("listaInicio")[0];
  let li = document.createElement("li");
  li.className = "listas"
  //console.log(ul);
  arr.forEach(element => {
    ul.prepend(li.cloneNode(true));
    li.innerText = element;
  });
});