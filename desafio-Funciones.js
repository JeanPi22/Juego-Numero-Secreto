/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/

function imc(altura, peso) {
    let resultadoIMC = parseInt(peso/Math.pow(altura, 2));
    console.log(`Su  índice de masa corporal (IMC) es: ${resultadoIMC}`);
}

imc(1.70, 80);

/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.*/

function dolarPeso(dolar) {
    let resultadoDolarPesos = parseInt(dolar*3957);
    console.log(`${dolar} ${(dolar === 1) ? 'dolar' : 'dolares'} equivale a $${resultadoDolarPesos} pesos Colombianos`)
}

dolarPeso(20);

/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.*/

let altura = 50;
let ancho = 100;

function areaRectangulo(altura, ancho) {
    let resultadoAreaRectangulo = parseInt(altura*ancho);
    console.log(`El área del rectangulo es: ${resultadoAreaRectangulo}`);
}

function perimetroRectangulo(altura, ancho) {
    let resultadoPerimetroRectangulo = parseInt((altura*2)+(ancho*2));
    console.log(`El perímetro del rectangulo es: ${resultadoPerimetroRectangulo}`);
}

areaRectangulo(altura, ancho);
perimetroRectangulo(altura, ancho);

/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/

let pi = 3.14;
let radio = 50;

function areaCirculo(radio) {
    let resultadoAreaCirculo = parseInt(pi*Math.pow(radio, 2));
    console.log(`El area del circulo es: ${resultadoAreaCirculo}`);
}

function perimetroCirculo(radio) {
    let resultadoPerimetroCirculo = parseInt(2*pi*radio);
    console.log(`El perimetro del ciculo es: ${resultadoPerimetroCirculo}`);
}

areaCirculo(radio);
perimetroCirculo(radio);

/*Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/

let numeroMultiplicar = 1;

function tablaMultiplicar (numeroMultiplo) {
    while(numeroMultiplicar <= 10) {
        let producto = parseInt(numeroMultiplo * numeroMultiplicar);
        console.log(`${numeroMultiplo} por ${numeroMultiplicar} es igual a: ${producto}`);
        numeroMultiplicar++;        
    }
}

tablaMultiplicar(5);

/*Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);