
// Creo una funzione per la creazione dei button per ogni livello del gioco
function levels (buttonOutput, buttonClass, textButton){
    const levels = document.createElement('button')
    levels.className = 'button', buttonClass;
    levels.innerHTML = textButton;
    buttonOutput.append(levels);
    levels.addEventListener('click', function(){
        buildGrid();
    })
}

// Creo una funzione per creare un box e la colorazione del box al click
function createNewBox(output){
    const newSquare = document.createElement('div');
    newSquare.className = 'box', 'show';
    output.append(newSquare);
    newSquare.addEventListener('click', function () {
        this.classList.toggle('blue');
    })
}

function buildGrid() {
    outputHtml.innerHTML = '';
    for (i = 1; i <= max; i++) {
        createNewBox(output);
    }
}

const outputHtml = document.getElementById('output');


levels(outputHtml, 'button-1', 'Level 1');
levels(outputHtml, 'button-2', 'Level 2');
levels(outputHtml, 'button-3', 'Level 3');
