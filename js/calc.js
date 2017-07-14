var acu="";
var acumulador=0;
var sumar=false;
var restar=false;
var op=true;

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
    if (restar) {
        acumulador=acumulador+parseInt(acu);
    }

    else{
  acumulador=acumulador+parseInt(acu);
    document.getElementById("display").value=acumulador;
    }
  
    acu="";
    sumar=true;
    restar=false;
    op=false;
}

function resta ()
 
{   
    if (op==false) {
        
    
    if(sumar){
    acumulador=acumulador+parseInt(acu);
    document.getElementById("display").value=acumulador;
    
}
else{

    acumulador=acumulador-parseInt(acu);
    document.getElementById("display").value=acumulador;
}
    }
    else{
        acumulador=parseInt(acu);
        op=false;
    }
    acu="";
       sumar=false;
        restar=true;
    
}

function igual(){
    if (sumar==true) {
         
         document.getElementById("display").value=acumulador+parseInt(acu);
    }
   
else  if (restar==true) {
         
         document.getElementById("display").value=acumulador-parseInt(acu);
    }
    acumulador=parseInt(document.getElementById("display").value);
    cifra=0;
}

