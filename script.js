var rTela = document.getElementById("valorconvertido");

function Converter(){
    var valorIns = document.getElementById("valorInserido").value;
    var primeiroS = document.getElementById("escolher1").value;
    var SegundoS = document.getElementById("escolher2").value;


    if(valorIns < 0 || valorIns == ""){
        alert("Valor inválido!");
    }
    else if((primeiroS != "Selecione" && SegundoS == "Selecione") || SegundoS != "Selecione" && primeiroS == "Selecione"){
        alert("Selecione a outra moeda!!")
    }
    else if((primeiroS == SegundoS)){
        alert("Você colocou a mesma moeda nas duas caixas de seleção!!");
    }
    else if(primeiroS == "💲 Dolar"){
        dolarselecet(valorIns,SegundoS);
        
    }
    else if(primeiroS == "💶 Euro"){
        euroSelect(valorIns,SegundoS);
    }
    else if(primeiroS == "💴 Iene"){
        ieneSelect(valorIns,SegundoS);
    }
    else if(primeiroS == "💷 Libra"){
        libraSelect(valorIns,SegundoS);
    }
    else if(primeiroS =="💸 Real"){
        realSelect(valorIns,SegundoS);
    }

}   

function dolarselecet(valorI,MoedaDs){
    var vConv = 0;

    if(MoedaDs == "💷 Libra"){
        vConv = (0.76 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "£"
    }
    else if(MoedaDs == "💴 Iene"){
        vConv = (119.14 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "¥";
    }
    else if(MoedaDs == "💶 Euro"){
        vConv = (0.91 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "€";
    }
    else if(MoedaDs ="💸 Real"){
        vConv = (5.02 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "R$";
    }
}

function euroSelect(valorI,MoedaDs){
    var vConv = 0;

    if(MoedaDs == "💷 Libra"){
        vConv = (0.84 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "£"
    }
    else if(MoedaDs == "💴 Iene"){
        vConv = (131.63 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "¥";
    }
    else if(MoedaDs == "💲 Dolar"){
        vConv = (1.10 * valorI).toFixed(2);
        rTela.innerHTML = vConv +"US$";
    }
    else if(MoedaDs ="💸 Real"){
        vConv = (5.54 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "R$";
    }
}

function ieneSelect(valorI,MoedaDs){
    var vConv = 0;

    if(MoedaDs == "💷 Libra"){
        vConv = (0.0064 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "£"
    }
    else if(MoedaDs == "💶 Euro"){
        vConv = (0.0076 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "€";
    }
    else if(MoedaDs == "💲 Dolar"){
        vConv = (0.0084 * valorI).toFixed(2);
        rTela.innerHTML = vConv +"US$";
    }
    else if(MoedaDs ="💸 Real"){
        vConv = (0.042 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "R$";
    }
}

function libraSelect(valorI,MoedaDs){
    var vConv = 0;

    if(MoedaDs == "💴 Iene"){
        vConv = (157.06 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "¥";
    }
    else if(MoedaDs == "💶 Euro"){
        vConv = (1.19 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "€";
    }
    else if(MoedaDs == "💲 Dolar"){
        vConv = (1.32 * valorI).toFixed(2);
        rTela.innerHTML = vConv +"US$";
    }
    else if(MoedaDs ="💸 Real"){
        vConv = (6.61 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "R$";
    }
}

function realSelect(valorI,MoedaDs){
    var vConv = 0;

    if(MoedaDs == "💴 Iene"){
        vConv = (23.75* valorI).toFixed(2);
        rTela.innerHTML = vConv + "¥";
    }
    else if(MoedaDs == "💶 Euro"){
        vConv = (0.18 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "€";
    }
    else if(MoedaDs == "💲 Dolar"){
        vConv = (0.20 * valorI).toFixed(2);
        rTela.innerHTML = vConv +"US$";
    }
    else if(MoedaDs == "💷 Libra"){
        vConv = (0.15 * valorI).toFixed(2);
        rTela.innerHTML = vConv + "£"
    }
}