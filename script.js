let num1, num2, suma;
function Calcular() {
    num1= parseInt(document.getElementById('Numero 1').value)
    num2= parseInt(document.getElementById('Numero 2').value)
    suma= num1+num2
    Imprimir(suma)
} 


function Imprimir(suma) {
    document.write('El resultado de la suma es: ',suma)
}