//Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

//Passa por cada encomenda, calculando o valor total
for(var count=0; count < clientes.length; count++){

    //Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".quantidade").textContent;
    var uni = clientes[count].querySelector(".valor-unitario").textContent;

    //Captura o valor unitário do produto
    var unitario = clientes[count].querySelector(".valor-unitario").textContent;

    //Valida a quantidade
    if(qtde<1 || isNaN(qtde) ){
        //Quantidade OK, avisa o usuário
        clientes[count].querySelector(".quantidade").textContent = "QTDE INVÁLIDA!";
        clientes[count].querySelector(".quantidade").style.color="red";
    }else{

    
    //Quantidade OK, prossegue
    //Calcula o valor total da encomenda
    clientes[count].querySelector(".total").textContent = calculaTotal(qtde, unitario);
    }

    //Valida o unitario
    if(uni<1 || isNaN(uni) ){
        //Quantidade OK, avisa o usuário
        
        clientes[count].style.backgroundColor="red";
    }else{

    
    //Quantidade OK, prossegue
    //Calcula o valor total da encomenda
    clientes[count].querySelector(".total").textContent = calculaTotal(qtde, unitario);
    }

} 
//função para calcular o valor total da encomenda
function calculaTotal(qtde, unitario){
    var total = 0;
    total=qtde*unitario;

    return total;
}