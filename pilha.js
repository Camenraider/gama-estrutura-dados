var elementos = [];
var top = -1;
var tmp = 0;
const MAX = 10;


function push(num){
    
        if(topo < MAX){
            topo = topo +1;
            elementos[topo] = num;
        }   
        else{
            console.log("Pilha esta cheia");
        } 
}

function estaVazia(){
    return topo == -1;
}

function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo = -1;
        return num;
    }
    else {
        console.log("Pilha está vazia!")
    }
}

//----------- parte do código que usa a pilha -------------//
push(60);
push(20);
push(40);

console.log(elementos);
console.log(pop());
console.log(pop());
console.log(pop());
//-------------------------------------------------//

var numDecimal = 10;
var resto;

// converte para decimal e depois volta para inteiro
console.log("Hora de empilhar....");
while (numDecimal != 0){
    resto = parseInt(numDecimal % 2);
    push(resto);
    console.log(resto);
    numDecimal = parseInt(numDecimal / 2);
}

console.log("Densempilhando tudooooooo.............");
while (!estaVazia()){
    console.log(pop());
}

