/*let nombre = prompt("¿Cómo te llamas?");

if(nombre){
    alert(` hola ${nombre} `);
}else{
    alert("Anonimo");
}*/

let lista = document.getElementById("log");

function registro(texto){
    let item = document.createElement("li");
    item.innerText = texto;
    return item;
}
console.log (lista);

lista.appendChild(registro("DOM LOADED!"));

let timer = setTimeout(() =>{

    lista.appendChild(registro("Timer ⌛ a los 3 segs"));
}, 3000);

let repetidor = setInterval(() => {
    lista.appendChild(registro("Cada 1.5 segundos"))
}, 1500);

let activaTimerBtn = document.getElementById("activatimer");
let stopBtm = document.getElementById("pararboton");

activaTimerBtn.addEventListener("click", function(){
    lista.appendChild(registro("Iniciar timer..."));
    
});

stopBtm.addEventListener("click", function(){
    lista.appendChild(registro("Parar repetidor..."));
    clearInterval(repetidor);
});

console.table(location);
let secure = document.getElementById("secure");
if(location.protocol.value == 'https'){
    secure.innerText = "Seguro";
    
}else{
    secure.innerText = "No seguro";
}

console.table(navigator);