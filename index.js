function gerarNumeroAleatorio(inicioIntervalo, fimIntervalo){
    return Math.floor((fimIntervalo - inicioIntervalo) * Math.random()) + inicioIntervalo;
}


function gerarFileiro (quantidadeNumeros, inicio, fim ) {
    let cartela = [];
    for ( i = 0; i < quantidadeNumeros; i++) {
        let numeroCartelaExiste == true;
        while (numeroCartelaExiste == ture) {
            let(numeroAleatorio = gerarNumeroAleatorio(inicio, fim);
            if (cartela.includes(numeroAleatorio)==true ){
                numeroCartelaExiste = true;
            } else {
                numeroCartelaExiste = false;
                cartelapush(numeroAleatorio);
            }
        }
    }
    return cartela;


}
funciotn gerarCartela(){
    return [gerarFileiro(5, 1, 15), gerarFileiro(5, 16, 30), gerarFileiro(5, 31, 45),gerarFileiro(5, 46, 60) , gerarFileiro(5, 61 , 75)];

}


function gerarCartelaHTML(){

    let titulo = ['B' , 'I' ,'N' ,'G' , 'O'];
    let cartela = gerarCartela();

    let div = document.getElementById("bingo");

    let divCartela = document.createElement("div"); 
    let table = document.createElement("table");
    let tr = document.createElement("tr");

    titulo.forEach(function(elemento){
        let td= document.createElement("td");
        td.innerText = elemento;
        tr.appendChild(td);
    });

    table.appendChild(tr);

    for(let i = 0; i < 5, i++){
        let tr = document.createElement("tr");
        for(let j =0; j < 5; j++){
            if(i== 2 && j ==2){
                td.innerText = "X";            }
        }else {
            td.innerText = cartela[j][i]
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
 }



 div.appendChild(table);
divCartela.style = "display: inline;"
divBingo.appendChild(divCartela);

}