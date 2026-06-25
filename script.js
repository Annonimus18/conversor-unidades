console.log("Version Develop");
console.log("Version Distancia");
function convertirDistancia(valor, origen, destino){

    if(origen==="Metros" && destino==="Kilometros")
        return valor / 1000;

    if(origen==="Kilometros" && destino==="Metros")
        return valor * 1000;

    if(origen==="Metros" && destino==="Millas")
        return valor / 1609.34;

    if(origen==="Millas" && destino==="Metros")
        return valor * 1609.34;

    if(origen==="Kilometros" && destino==="Millas")
        return valor / 1.60934;

    if(origen==="Millas" && destino==="Kilometros")
        return valor * 1.60934;

    return valor;
}

function convertirPeso(valor, origen, destino){

    if(origen==="Gramos" && destino==="Kilogramos")
        return valor / 1000;

    if(origen==="Kilogramos" && destino==="Gramos")
        return valor * 1000;

    if(origen==="Kilogramos" && destino==="Libras")
        return valor * 2.20462;

    if(origen==="Libras" && destino==="Kilogramos")
        return valor / 2.20462;

    if(origen==="Gramos" && destino==="Libras")
        return valor / 453.592;

    if(origen==="Libras" && destino==="Gramos")
        return valor * 453.592;

    return valor;
}

function convertirDistancia(valor, origen, destino){

    if(origen==="Metros" && destino==="Kilometros")
        return valor / 1000;

    if(origen==="Kilometros" && destino==="Metros")
        return valor * 1000;

    return valor;
}

function convertirPeso(valor, origen, destino){

    if(origen==="Gramos" && destino==="Kilogramos")
        return valor / 1000;

    if(origen==="Kilogramos" && destino==="Gramos")
        return valor * 1000;

    return valor;
}

