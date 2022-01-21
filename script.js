let info = document.querySelector(".info");
let form = document.querySelector(".form");
let informat = document.querySelector(".information");
let registr = document.querySelector(".registration");
let sign = document.querySelector(".sign");
let signin1 = document.querySelector(".signin1");
let signup1 = document.querySelector(".signup1");
let signin2 = document.querySelector(".signin2");
let signup2 = document.querySelector(".signup2");
let back1 = document.querySelector(".back1");
let back2 = document.querySelector(".back2");

let tl = gsap.timeline();

tl.from('.nav', {opacity:0, display: "none", height: 0,opacity:1, duration:1});


let info2 = function(){
    tl.to('.information', {display:"block"});
    tl.to('.information', {width: 530, height: 300, padding: 15, opacity:1, duration:.1});

    tl.from('.information h2', {opacity:0, x:-50, duration:.5});
    tl.from('.information h1', {opacity:0, x:-50, duration:.5});
    tl.from('.information h3', {opacity:0, y:-50, duration:.5});
}
let infooff = function(){
    tl.to('.information', {opacity:1, width:0, height:0, duration:.3, opacity: 0});
    tl.to('.information', {display:"none", duration: 1});
}

let registr2 = function(){
    tl.to('.registration', {display:"block"});
    tl.to('.registration', {width: 530, height: 560, padding: 15, opacity:1, duration:.1});
    tl.from('.registration h2', {opacity:0, x:-400, duration:3});
}
let registroff = function(){
    tl.to('.registration h2', {opacity:0, x:-400, duration:.8});
    tl.to('.registration', {opacity:1, width:0, height:0, duration:.1, opacity: 0});
    tl.to('.registration', {display:"none", duration: 1.6});
    
}



back1.addEventListener("click", function(){
    switch(registr.style.background){
        case "blue":
            registr.style.background = "rgb(2,0,36)";
            registr.style.background = "linear-gradient(180deg, rgb(1, 0, 29) 0%, rgb(6, 6, 82) 35%, rgb(0, 110, 255) 100%)";
            break;
        default:
            registr.style.background = "blue";
            break;
    }
})
back2.addEventListener("click", function(){
    switch(informat.style.background){
        case "blue":
            informat.style.background = "rgb(2,0,36)";
            informat.style.background = "linear-gradient(180deg, rgb(1, 0, 29) 0%, rgb(6, 6, 82) 35%, rgb(0, 110, 255) 100%)";
            break;
        default:
            informat.style.background = "blue";
            break;
    }
})


//переход между регистр. и входом
signup1.addEventListener("click", function() {
    sign.style.display = "none";
    registr.style.display = "block";
});
signin1.addEventListener("click", function() {
    sign.style.display = "block";
    registr.style.display = "none";
});
signup2.addEventListener("click", function() {
    sign.style.display = "none";
    registr.style.display = "block";
});
signin2.addEventListener("click", function() {
    sign.style.display = "block";
    registr.style.display = "none";
});


//навигации инфо и формы
info.addEventListener("click", function() {
    if(informat.style.display == "block"){
        infooff();
    }
    else if(informat.style.display == "none" || registr.style.display == "block" || sign.style.display == "block"){
        sign.style.display = "none";
        registroff();
        info2();
    }
    else{
        info2();
    }
    
});
form.addEventListener("click", function() {
    
    if(registr.style.display == "block"){
        registroff();
    }
    else if(registr.style.display == "none" || informat.style.display == "block" || sign.style.display == "block"){
        sign.style.display = "none";
        infooff();
        registr2();
    }
    else{
        registr2();
    }
    
})