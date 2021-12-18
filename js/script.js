// Creo una funzione per stampare il numero all'interno di ogni box che andrò a creare
function boxNumber(newSquare, num){
    newSquare.innerHTML = num;
};

// Creo una funzione per creare un box e la colorazione del box al click
function createNewBox (output, num) {
    let newSquare = document.createElement('div');
    newSquare.className ='box';
    output.append(newSquare);
    boxNumber(newSquare, num);
    newSquare.addEventListener('click', function(){
    this.classList.toggle('blue');   
    })
}

// Creo la funzione di un ciclo for per la creazione di n box
function buildGrid(output, maxNum, width){
    output.innerHTML = '';
    output.className = width;
    for (let i = 0; i < maxNum; i++) {
        createNewBox(output, i+1); 
    }
}

// Assegno le variabili per i 3 button
const levelOne = document.getElementById("level-1");
const levelTwo = document.getElementById("level-2");
const levelThree = document.getElementById("level-3");

// Assegno la variabile per stampare in HTML
const containerHtml = document.getElementById("container");

// Creo un evento al click per ogni button e assegno il numero di box da creare richiamando la funzione
levelOne.addEventListener('click', function (){
    buildGrid(containerHtml, 100, 'width-level-1');  
});

levelTwo.addEventListener('click', function (){
    buildGrid(containerHtml, 81, 'width-level-2');
});

levelThree.addEventListener('click', function (){
    buildGrid(containerHtml, 49, 'width-level-3');
});