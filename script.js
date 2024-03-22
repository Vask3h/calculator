// variables

let myNum = ""; // primera cadena de numeros
let myNum2 = ""; // segunda cadena de numeros
let myOp =""; // operador a usar
let myResult = ""; // resultado a mostrar

// funciones de los botones principales
function onClickButton(param1 ) { //pasar parametro a la funcion
    const MY_SCREEN = document.getElementById('screen'); // constante para obtener el id de la pantalla
   
    if(param1 == "+") { //comprobar si parm es +
        myOp = "+" //si si variable myOp = +
        MY_SCREEN.innerHTML = myOp //muestro en pantalla variable myOp
    } else if(param1 == "-") { //no entonces compruebo si parm es - 
        myOp ="-" // si si variable myOp = -
        MY_SCREEN.innerHTML = myOp //muestro en pantalla variable myOp
    } else if(param1 == "*") { //no entonces compruebo si parm es *
        myOp = "*" //si si variable myOp = *
        MY_SCREEN.innerHTML = myOp //muestro en pantalla variable myOp
    } else if(param1 == "/") { //no enctonces compruebo si parm es /
        myOp = "/" // si si variable myOp = /
        MY_SCREEN.innerHTML = myOp //muestro en pantalla variable myOp
    }else {
        if(myOp == "") { //comprobar si op esta vacio
        myNum = myNum + param1 // si si mi numero sera mi numero + el parametro
        MY_SCREEN.innerHTML = myNum // enseño en mi pantalla mi numero
        }
        else{
        myNum2 = myNum2 +param1
        MY_SCREEN.innerHTML = myNum2
        }
}
    
    
    /*if (myOp != "") { //si variable op no esta vacia
        myNum2 = myNum2 + param1 // num2 = num2 +parm
        MY_SCREEN.innerHTML = myNum2 
    }*/
 
};



function equalButton(){
    const MY_SCREEN = document.getElementById('screen');

    if(myOp == "+") {
        myResult = parseFloat(myNum) + parseFloat(myNum2)
    } else if(myOp == "-"){
        myResult = myNum - myNum2
    } else if (myOp == "*") {
        myResult = myNum * myNum2
    } else if (myOp == "/") {
        myResult = myNum / myNum2
    }
    
    
    MY_SCREEN.innerHTML = myResult 
}





function clearScreen(){ /* limpia pantalla */
    console.log("screen & lets cleared");
    const MY_SCREEN = document.getElementById('screen');
    MY_SCREEN.innerHTML = "0";
    myNum = "";
    myNum2 = "";
    myOp = "";
    myResult = "";
};



/*    console.log(myNum + " Este es mi numero");
    console.log(myNum2+ " Este en mi numero2");
    console.log(myOp +" Este es mi operador");
    console.log(myResult + " Este es mi resultado"); */


 