window.addEventListener('load', function(){
    var lettersEl = document.querySelectorAll('.letters');
    for (var i=0; i<lettersEl.length; i++){
        var text = lettersEl[i].innerText;
        lettersEl[i].innerText = "";
    for (var i2=0; i2<text.length; i2++){
        if (text[i2]!= " "){
            var spanEl = document.createElement('span');

            spanEl.classList.add('letter');
            spanEl.style.left = (Math.random()*90)+'vw';
            spanEl.style.animationDelay = i2+"s";
            spanEl.innerText = text[i2];
            lettersEl[i].appendChild(spanEl);
        }
    }
    }
});