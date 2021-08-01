let cuenta ="0";
let cuenta2=0;
let operator="0";
let tado=0;
let redo=0;

// const nombre = 'Victor'
// const apellidoPaterno = 'Servin'
// const apellidoMaterno = 'Carrillo'
// const edad = 26;
// // 'Hola Victor Servin Carrillo, tienes 26 años!'
// const saludo = 'Hola ' + nombre + ' ' + apellidoPaterno + ' ' + apellidoMaterno + ', tienes ' + edad.toString() + ' años!';
// const saludo = `Hola ${nombre} ${apellidoPaterno} ${apellidoMaterno}, tienes ${edad} años!`;

function printValueToDisplay() {
    if (cuenta.startsWith("0.")) {
        document.getElementById("display").innerHTML=cuenta;
        return;
    }
    document.getElementById("display").innerHTML = cuenta.slice(1);
}

function addNumber(number) {
    if(redo === 0){
        // cuenta = `${ cuenta }${ number }`;
        // cuenta = cuenta + number; // 1 + 1 = 2, '1' + '1' = '11'
        cuenta += `${number}`; // cuenta = cuenta + `${number}` // 5 += 2 => 7
        printValueToDisplay();
        return;
    }  
    AC();
    cuenta += `${number}`;
    printValueToDisplay();
}

function AC(){
    cuenta="0";
    cuenta2=0;
    operator="0";
    tado=0;
    redo=0;
    document.getElementById("display").innerHTML="0";
}
function addzero(){
    if(cuenta != "0" && redo === 0){
        cuenta += "0";
        printValueToDisplay();
        return;
    }
    cuenta="0";
    redo =0;
    document.getElementById("display").innerHTML=0;
    }
    
function addpoint(){ 
    if(cuenta.includes(".") === false)
    {
        if (redo === 1){
            AC();
            cuenta = cuenta + ".";
            printValueToDisplay();
            return 0;
        }
        cuenta = cuenta + ".";
        printValueToDisplay();
        return;
    }
}
function operador(op){
    if(redo === 1){
        cuenta2=parseFloat(tado);
        cuenta="0";
        operator= op;
        document.getElementById("display").innerHTML="0";
        redo=0;
        return;
    }
    if(cuenta === "0"){
        return;
    }
    cuenta2=parseFloat(cuenta);
    cuenta="0";
    operator=op;
    document.getElementById("display").innerHTML="0";
}

function DEL(){
    if(cuenta.length>2 && redo === 0){
        cuenta=cuenta.slice(0,-1);
        printValueToDisplay();
        return;
    }
    AC();
}
function plusmin(){
    if(redo === 1){
        cuenta=-1 * parseFloat(tado);
        redo=0;
        document.getElementById("display").innerHTML=cuenta;
        return;
    }
    cuenta=-1 * cuenta;
    document.getElementById("display").innerHTML=cuenta;
}
function desition(opera){
    switch(opera){
        case "+" :
            tado= cuenta2 + parseFloat(cuenta); 
            document.getElementById("display").innerHTML=tado;
            break;
        case "-" :
            tado= cuenta2 - parseFloat(cuenta); 
            document.getElementById("display").innerHTML=tado;
            break;
        case "*" :
            tado= cuenta2 * parseFloat(cuenta); 
            document.getElementById("display").innerHTML=tado;
            break;
        case "/" :
            if(cuenta === '0'){
                document.getElementById("display").innerHTML='Math Error';
                break;   
            }
            tado= cuenta2 / parseFloat(cuenta); 
            document.getElementById("display").innerHTML=tado;
            break;
        default:
        }
}


function res(){
    if(redo != 1){
        redo=1;
        desition(operator);
        return;
    }
        cuenta2=tado;
        desition(operator);
        return;
}
// 30/07/21