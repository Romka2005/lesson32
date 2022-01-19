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
    console.log("ok");
    sign.style.display = "none";
    registr.style.display = "block";
});
signin1.addEventListener("click", function() {
    console.log("ok");
    sign.style.display = "block";
    registr.style.display = "none";
});
signup2.addEventListener("click", function() {
    console.log("ok");
    sign.style.display = "none";
    registr.style.display = "block";
});
signin2.addEventListener("click", function() {
    console.log("ok");
    sign.style.display = "block";
    registr.style.display = "none";
});


//навигации инфо и формы
info.addEventListener("click", function() {
    if(informat.style.display == "block"){
        informat.style.display  = "none";
    }
    else if(informat.style.display == "none" || registr.style.display == "block" || sign.style.display == "block"){
        registr.style.display = "none";
        sign.style.display = "none";
        informat.style.display = "block";
    }
    else{
        informat.style.display = "block";
    }
});
form.addEventListener("click", function() {
    
    if(registr.style.display == "block"){
        registr.style.display  = "none";
    }
    else if(registr.style.display == "none" || informat.style.display == "block" || sign.style.display == "block"){
        sign.style.display = "none";
        informat.style.display = "none";
        registr.style.display = "block";
    }
    else{
        registr.style.display = "block";
    }
})