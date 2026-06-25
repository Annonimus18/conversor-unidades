function convertirTemperatura(valor, origen, destino){

    if(origen==="Celsius" && destino==="Fahrenheit")
        return (valor * 9/5) + 32;

    if(origen==="Fahrenheit" && destino==="Celsius")
        return (valor - 32) * 5/9;

    if(origen==="Celsius" && destino==="Kelvin")
        return valor + 273.15;

    if(origen==="Kelvin" && destino==="Celsius")
        return valor - 273.15;

    if(origen==="Fahrenheit" && destino==="Kelvin")
        return (valor - 32) * 5/9 + 273.15;

    if(origen==="Kelvin" && destino==="Fahrenheit")
        return (valor - 273.15) * 9/5 + 32;

    return valor;
}