let ingressoPistaQte = 100;
let ingressoCadeiraSuperiorQte = 200;
let ingressoCadeiraInferiorQte = 400;
let quantidade;
let ingressoPista;
let ingressoCadeiraSuperior;
let ingressoCadeiraInferior;

function limpaCampo(){
    campo = document.querySelector("input");
    campo.value = "";
}
function comprar(){
    ingresso = document.getElementById("tipo-ingresso").value;
    quantidade = document.getElementById("qtd").value
    
    if(ingresso == "pista"){
        ingressoPistaQte = Number(ingressoPistaQte) - Number(quantidade);
        if(ingressoPistaQte < 0){
            alert("Erro!");
            ingressoPistaQte = Number(ingressoPistaQte) + Number(quantidade);
        }else{
            ingressoPista = document.getElementById("qtd-pista");
            ingressoPista.innerHTML = Number(ingressoPistaQte);

        }
    }else if(ingresso == "superior"){
        ingressoCadeiraSuperiorQte = Number(ingressoCadeiraSuperiorQte) - Number(quantidade);
        if(ingressoCadeiraSuperiorQte < 0){
            alert("Erro!");
            ingressoCadeiraSuperiorQte = Number(ingressoCadeiraSuperiorQte) + Number(quantidade);
        }else{
            ingressoCadeiraSuperior = document.getElementById("qtd-superior");
            ingressoCadeiraSuperior.innerHTML = Number(ingressoCadeiraSuperiorQte);
        }    
    }else{
        ingressoCadeiraInferiorQte = Number(ingressoCadeiraInferiorQte) - Number(quantidade);
        if(ingressoCadeiraInferiorQte < 0){
            alert("Erro!");
            ingressoCadeiraInferiorQte = Number(ingressoCadeiraInferiorQte) + Number(quantidade);
        }else{
            ingressoCadeiraInferior = document.getElementById("qtd-inferior");
            ingressoCadeiraInferior.innerHTML = Number(ingressoCadeiraInferiorQte);
        }
    }
    console.log(ingressoCadeiraSuperiorQte);
    limpaCampo();
}