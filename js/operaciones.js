
// Función para calcular la suma
function suma(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}


function resta(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 - num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}


function multi(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 * num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}


function division(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 / num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}


function potencia(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1^num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function raiz(num1) {
    var num1 = parseFloat(document.getElementById('num1').value);
   
    var resultado = Math.sqrt(num1);
    resultado = Math.trunc(resultado);
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}


function General() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var discriminante = Math.pow(b, 2) - (4 * a * c);
    
    if (discriminante < 0) {
        document.getElementById('resultado').textContent = 'No hay soluciones reales';
    } else {
        var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById('resultado').textContent = 'Soluciones: x1 = ' + x1 + ', x2 = ' + x2;
    }
}
