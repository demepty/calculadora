var acu="";
var acumulador=0;
var sumar=false;

function inicio()
{
document.getElementById("display").value=0;
}

function valor (num)
{
    document.getElementById("display").value=acu=acu+num;

}

function suma ()
{
    acumulador=acumulador+parseInt(acu);
    acumulador=parseInt(acumulador);
    acu="";
    document.getElementById("display").value=acumulador;
    sumar=true;
}

function igual() {
    if (sumar=true) {
         
         document.getElementById("display").value=acumulador+parseInt(acu);
    }
   
}