let currentOpe = '';
let previousOpe = '';
let operation = undefined;
let calcul = undefined;

function updateDisplay() {
    const display = document.getElementById("display");

    if(previousOpe !=='' && operation !== undefined){
        display.innerText = previousOpe + operation + currentOpe;
    } else {
        display.innerText = currentOpe || previousOpe || "0";
    }
}

function clearDisplay(){
    currentOpe ="";
    previousOpe = "";
    operation = undefined;
    updateDisplay();
}

function delLast(){
   currentOpe = currentOpe.slice(0, -1);
   updateDisplay();
}

function appendNum(num) {
    currentOpe = currentOpe.toString() + num.toString();
    updateDisplay();
}

function appendOpe(ope) {
    //aucun nb entré
    if(currentOpe ===''){
        return;
    }

    //si une opération existe - calcule 1 puis 2

    if(previousOpe !==' ' && operation !== undefined){
        result();
    }
    
    previousOpe= currentOpe;
    currentOpe ='';
    operation = ope;
    updateDisplay();
}

function appendDot(){
    if(!currentOpe.includes('.')){
        currentOpe += '.';
    }
    updateDisplay()
}

function result(){
    const prev = parseFloat(previousOpe); //parseFloat connvertit chaine cara en num à virgule
    const current =parseFloat(currentOpe);

    if(isNaN(prev) || isNaN(current)){ //isNaN vérifie si une val est NaN (Not a Number)
        return;
    }

    if(operation ==='+'){
        calcul =prev +current;
    }else if(operation ==='-'){
        calcul =prev -current;
    }else if(operation ==='*'){
        calcul =prev *current;
    }else if(operation ==='/'){
        calcul =prev /current;
    }else{
        return;
    }

    currentOpe = calcul.toString(); //res en chaine cara
    previousOpe = '';
    operation = undefined;
    updateDisplay();
}

/* OU met dans le HTML onclick = "fonction" ou écrit query selector 


document.querySelectorAll('[data-num]').forEach(btn => {
    btn.addEventListener('click', () => appendNum(btn.dataset.num));
});

document.querySelectorAll("[data-op]").forEach(btn => {
    btn.addEventListener("click", () => appendOpe(btn.dataset.op));
});

document.getElementById("btn-ac").addEventListener("click", clear);
document.getElementById("btn-del").addEventListener("click", delLast);
document.getElementById("btn-equal").addEventListenier("click", result);

*/