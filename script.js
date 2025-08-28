
var contador = document.getElementById("count")
var Decrementar = document.getElementById("Decrementar")
var Resetar = document.getElementById("Resetar")
var Incrementar = document.getElementById("Incrementar")

var number = 0;

contador.innerText = number;

Decrementar.addEventListener("click", function(){
    number--;
    contador.innerText = number;
});

Resetar.addEventListener("click", function(){
    number= 0;
    contador.innerText = number;
});

Incrementar.addEventListener("click", function(){
    number++;
    contador.innerText = number;
});
