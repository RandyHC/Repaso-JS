var name,anio,edad;
name=prompt("Ingrese su nombre:");
anio=parseInt(prompt("Ingrese su año de nacimiento:"));
edad=2024-anio;
if(edad >=18){
    document.write("estas habilitado/a para votar");
}
else{
    document.write("estas inhabilitado/a para votar");
}

dia=parseInt(prompt("Ingrese un dia de la semana entre 1 y 7:"));
switch(dia){
    case 1: alert("Lunes");
    break
    case 2: alert("Martes");
    break
    case 3: alert("Miercoles");
    break
    case 4: alert("Jueves");
    break
    case 5: alert("Viernes");
    break
    case 6: alert("Sabado");
    break
    case 7: alert("Domingo");
    break
    default:alert("Fuera de rango");
}