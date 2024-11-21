function saludar() {
    let salida=document.getElementById("salida_boton");

    salida.innerText="hola desde la funcion saludar"
}

let otro_botton=document.getElementById("otro_boton");

otro_botton.addEventListener("click", function (){
    let salida=document.getElementById("salida_otro");
    salida.innerText="otro saludo 🤠"
});

otro_botton.addEventListener("mouseenter", function (){
    this.innerText="entro el mouse";
});

otro_botton.addEventListener("mouseleave", function(){
    this.innerText="salio el mouse";
});

otro_botton.addEventListener("mousemove", function(){
    this.innerText="🐢";
});

let nombreTxt=document.getElementById("nombre");
let salida_teclado=document.getElementById("salida_teclado");

nombreTxt.addEventListener("keydown", function(event){
    salida_teclado.innerHTML=`se presiono <hbd>${event.key}</hbd>`;
});

let miform = document.getElementById("miForm");

miform.addEventListener("submit", function(event){
    event.preventDefault();

    //alert("Se intento procesar el formulario");
    let aTxt=document.getElementById("a");
    let bTxt=document.getElementById("b");
    //console.log(a,b);

    let salida = document.getElementById("salida_suma");

    let a = parseInt(aTxt.value);
    let b = parseInt(bTxt.value);
    let resultado = a + b;
    salida.innerText= resultado;
});