var titleArray = ['Hija ġejja.', 'Lei é per la strada.', 'Sie ist unterwegs.', 'Ella está en camino.', 'Ela está a caminho.', 'Kanojoga sugu kuru.', 'Elle est en route.', 'She is on the way.', ];
var paragraphArray = ['prepare-se não vá decepcioná-la','faça logo o que lhe inspira alegria encha-se de bom humor', 'escolha agora suas palavras componha versos de amor', 'abra já o mais lindo sorriso e prepare o melhor dos seus vinhos', 'vá além desse frio na barriga ao encará-la seja seguro', 'deixe para trás mágoas passadas exale seu novo perfume', 'vista suas mais caras memórias se crê em Deus talvez você ore', 'cante sem demora aquela música invente passos para bailarem', 'porque ela a todos terá mas será sua única']
var i = 0;

function nextTitle() {
    i = i + 2; // increase i by one
    i = i % titleArray.length; // if we've gone too high, start from `0` again
    return titleArray[i]; // give us back the item of where we are now
}
function nextParagraph() {
    i = i + 1; // increase i by one
    i = i % paragraphArray.length; // if we've gone too high, start from `0` again
    return paragraphArray[i]; // give us back the item of where we are now
}
function previousTitle() {
    if (i === 0) { // i would become 0
        i = titleArray.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return titleArray[i]; // give us back the item of where we are now
}
function previousParagraph() {
    if (i === 0) { // i would become 0
        i = paragraphArray.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return paragraphArray[i]; // give us back the item of where we are now
}

window.addEventListener('load', function () {
    document.querySelector('.title').textContent = titleArray[0];
    document.querySelector('.paragraph').textContent = paragraphArray[0]; // initial value
    document.getElementById('previous').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.querySelector('.title').textContent = previousTitle();
            document.querySelector('.paragraph').textContent = previousParagraph();
        }
    );
    
    document.getElementById('next').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.querySelector('.title').textContent = nextTitle();
            document.querySelector('.paragraph').textContent = nextParagraph();
        }
    );
});