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
    
    
    MY_SCREEN.innerHTML = parseFloat(myResult.toFixed(2)) 
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

function onClickButtonBack(){
    const MY_SCREEN = document.getElementById('screen');

    if (myOp == "") {
        myNum = myNum.slice(0, -1);
        MY_SCREEN.innerHTML = myNum;
    } if(myNum == ""){
        MY_SCREEN.innerHTML = "0";

    }
    else{
        myNum2 = myNum2.slice(0, -1);
        MY_SCREEN.innerHTML = myNum;
    }
 

};

/*    console.log(myNum + " Este es mi numero");
    console.log(myNum2+ " Este en mi numero2");
    console.log(myOp +" Este es mi operador");
    console.log(myResult + " Este es mi resultado"); */


 