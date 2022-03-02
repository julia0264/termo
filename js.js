document.getElementById("calcular").onclick=tempCalcular;
document.getElementById("redefinir").onclick=formRedefinir;

function tempCalcular(){
    let valor = document.getElementById("numero").value;
    valor=parseFloat(valor);
    let opcoes = document.getElementById("sele").value;
    let c=0; let f=0; let k=0; let r=0;
    let resposta=document.getElementById("resultado");
    if(isNaN(valor)){
        alert("Digite um valor em números!");
        return
    }else if(opcoes == "c"){
        f=valor*1.8+32;
        k=valor+273;
        r=(valor+273.15)*1.8
        resultado.innerHTML="<h2>"+f+"°F</h2>"+"<h2>"+k+"K</h2>"+"<h2>"+r+"°R</h2>"
    }else if(opcoes == "f"){
        c=(valor-32)/1.8;
        k=(valor-32)*1.8+273;
        r=valor+459.67;
        resultado.innerHTML="<h2>"+c+"°C</h2>"+"<h2>"+k+"K</h2>"+"<h2>"+r+"°R</h2>"
    }else if(opcoes == "k"){
        c=valor-273;
        f=(valor-273)*1.8+32;
        r=valor*1.8;
        resultado.innerHTML="<h2>"+c+"°C</h2>"+"<h2>"+f+"°F</h2>"+"<h2>"+r+"°R</h2>"
    }else if(opcoes == "r"){
        c=(valor/8)-273.15;
        f=valor-459.67;
        k=valor/1.8;
        resultado.innerHTML="<h2>"+c+"°C</h2>"+"<h2>"+f+"°F</h2>"+"<h2>"+k+"°K</h2>"
    }
}

function formRedefinir(){
    document.getElementById("numero").value="";
    document.getElementById("sele").value="c";
    document.getElementById("resultado").innerHTML="";
}

