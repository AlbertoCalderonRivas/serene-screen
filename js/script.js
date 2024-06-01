function animarPez() {
    anime({
        targets: ".pez",
        keyframes: [
            {translateY: function () {return anime.random(-300, 300)}},
            {translateX: function () {return anime.random(-500, 500)}},
            {translateY: function () {return anime.random(-300, 300)}},
            {translateX: function () {return anime.random(-500, 500)}},
            {translateY: function () {return anime.random(-300, 300)}},
        ],
        duration: function () {return anime.random(1800, 2800);},
        easing: "easeOutElastic(1, 1.8)",
        loop: true,
    });
}

animarPez();

n = 1


function animarPulpo() {
   
    anime({
        targets: ".pulpo",
        translateY: function () { return anime.random(-100, 100);},
        translateX: function () { return anime.random(-100, 100);},
        rotate: n*360 + 'deg',
        duration: 3000,
        easing: "easeOutElastic(1, 1.8)",
        loop: false,
    });
    n += 1
    SumarPuntos();
}

function animarCoral() {
    anime({
        targets: ".coral",
        skew: ["-12deg","12deg"],
        duration: function () {return anime.random(1000, 4000);},
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
}
animarCoral()

p=-1;

function SumarPuntos(){
    p+=1;
    span = document.getElementById("number");
    txt = document.createTextNode(p);
    span.textContent = p;
    


}

SumarPuntos()
