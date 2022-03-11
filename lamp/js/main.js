const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

// Quando o indexOf NÃO encontra a string ele retorno o -1
function isBroken(){
    return lamp.src.indexOf( 'broken' ) > -1
}

//LIGAR A LAMPADA
function lampOn(){  
    if(!isBroken()){
        lamp.src = "/lamp/img/sample/turnOn.jpg" 
    } 
}

//DESLIGAR A LAMPADA
function lampOff(){  
    if(!isBroken()){
        lamp.src = "/lamp/img/sample/turnOff.jpg" 
    }   
}

//LAMPADA QUEBRADA
function lampBroken(){    
    lamp.src = "/lamp/img/sample/broken.jpg" 
}

turnOn.addEventListener( 'click', lampOn);
turnOff.addEventListener( 'click', lampOff);
lamp.addEventListener( 'dblclick', lampBroken);
// lamp.addEventListener( 'mouseover', lampOn);
// lamp.addEventListener( 'mouseleave', lampOff);


