alert("Script desde archivo externo JS");
document.write("<h1><font color='blue'>Aqui por el navegador</font></h1>");

var name,a,b,suma;
name=prompt("ingrese su nombre:");
document.write("Hola "+name);

a=parseInt(prompt("a:"))/*Convertir dato a entero*/
b=parseInt(prompt("b:"))
suma=a+b
alert("La suma es "+suma)