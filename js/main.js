// var timera = document.getElementById('ma');
let cronometro = 0;
var s = document.getElementById("segundos");
var m = document.getElementById("minutos");
var contador_s = 00;
var contador_m = 00;


// timera.addEventListener('load', cargar);

function detener() {
    clearInterval(cronometro);
}

function cargar(){
    cronometro = setInterval(function(){
        if (contador_s == 60) {
            contador_s = 0;
            contador_m++;
            m.innerHTML = contador_m;
    
            if (contador_m == 60) {
                contador_m = 0;                
            }
        }
        s.innerHTML = contador_s;
        contador_s+=1;
        
    },1000);
}




const num = []

    
        
while (num.length<9) {
    var myNumeroAleatorios = Math.floor(Math.random()*(10-1))+1
    if (num.includes(myNumeroAleatorios)) {
        continue
    }else{
        num.push(myNumeroAleatorios)
        document.write('<div id="padre3" draggable="true" ><img id='+ myNumeroAleatorios +' src="img/foto'+myNumeroAleatorios+'.png" alt=""></div>');
        var nogara = document.getElementById(myNumeroAleatorios);
        nogara.draggable = true;
        nogara.addEventListener('dragstart', drag);
        
    }
    

    console.log(myNumeroAleatorios)
        
    }

    function allowDrop(event){
        event.preventDefault();
        // console.log(event)
    }
    
    function drop(event){
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        
        console.log(data);
    }
    
    function drag(event){
        event.dataTransfer.setData("text", event.target.id)
        console.log(event.target.id)
    }

    // var container = document.getElementById('contenedor1');
    
    // container.addEventListener('dragover', allowDrop);
    // container.addEventListener('drop', drop);
    
    
    
    




// solo la primer imagen toma el id por lo tanto solo la primera imagen puede ser arrastrada y depositada en el primer container 
// solucionar el problema de colocar id distinta a cada imagen

  