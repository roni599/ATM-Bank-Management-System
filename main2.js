let audio = new Audio('sounds/welcome.mp3');
let audio1 = new Audio('sounds/pin.mp3');
let audio2 = new Audio('sounds/wrongpin.mp3');
let audio3 = new Audio('sounds/button.wav')
let audio4 = new Audio('sounds/beep.mp3');
let audio5 = new Audio('sounds/transition.mp3');
let audio6 = new Audio('sounds/sucessful.mp3');
let audio7 = new Audio('sounds/thanks.mp3')
let audio8 = new Audio('sounds/dedline.mp3');
let audio9 = new Audio('sounds/login.mp3');



//startBtn function Element
let startBtn = document.getElementById("start");
startBtn.addEventListener("click", show1);

//startBtn function
function show1() {
    document.getElementById("h21").style.display = "block";
    startBtn.style.display = "none";
    audio.play();
    audio3.play();

    setTimeout(function () {
        audio1.play();
        pass.style.display = "block";
        form.style.display = "block";

    }, 3000);
}
function calculator(selectedElement) {
    form.result.value = form.result.value + selectedElement;
    audio4.play();
}

//passward & ok funtion Element
let form = document.getElementsByTagName("form")[0];
let pass = document.getElementById("pass");
let initialpass = "12345";

//passward & ok funtion
let okk = document.getElementById("passs");
okk.addEventListener('click', show2);

function show2() {
    if (initialpass == pass.value) {
        document.getElementById("login").style.display = "block";
        pass.style.display = "none";
        document.getElementsByClassName("phone")[0].style.display = "none";//class name & index number deyer ki dorkar id dele o to partam. 
        document.getElementById("main2").style.display = "inline-block";//button nele problem hosse otherwise problem hosse na.
        document.getElementById("h31").style.display = "block";
        audio3.play();
        audio9.play();
    }
    else {
        audio2.play();
    }
}

//checkBlance function Element
let mainBlance = document.getElementById("main");
mainBlance.addEventListener("click", show3);
let Total = 1000;

//checkBlance function
function show3() {
    document.getElementById("h31").style.display = "none";
    document.getElementById("mainb").style.display = "block";
    document.querySelector("#mainb h2").innerHTML = "Main Blance: " + Total + " TK";
    document.getElementById("back").style.display = "inline-block";
    audio3.play();
}

// let backbtn=document.getElementById("back");
// backbtn.addEventListener("click",show4);

//backbtn function & function Elements are inside in tag
function show4() {
    document.getElementById("h31").style.display = "block";
    document.getElementById("back").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("mainb").style.display = "none";
    document.getElementById("tk").style.display = "none";
    audio3.play();
}

//withbtn function Element
let withbtn = document.getElementById("main2");
withbtn.addEventListener("click", show5);

//withbtn function
function show5() {
    document.getElementById("tk").style.display = "block";
    document.getElementById("mainb").style.display = "none";
    document.getElementById("h31").style.display = "none";
    document.querySelector("#tk .logbtn2").style.display = "none";
    document.querySelector("#tk .logbtn1").style.display = "inline-block";
    document.getElementById("amount").style.display = "inline-block";
    document.getElementById("with").style.display = "inline-block";
    document.querySelector("#tk h3").style.display = "none";
    audio3.play();
}

//withbtn2 function Element
let withbtn2 = document.getElementById("with");
withbtn2.addEventListener("click", show6);

//withbtn2 function
function show6() {
    let Tlast = document.getElementById("amount").value;
    audio3.play();

    if (Total >= Tlast) {
        Total = Total - Tlast;
        document.querySelector("#tk h3").style.display = "block";
        document.querySelector("#tk h3").innerHTML = "your transaction is being processed...";
        document.querySelector("#tk .logbtn2").style.display = "inline-block";
        document.querySelector("#tk .logbtn1").style.display = "none";
        document.getElementById("amount").style.display = "none"
        document.getElementById("with").style.display = "none";
        audio5.play();
        setTimeout(function () {
            document.querySelector("#tk h3").innerHTML = "your transaction is sucessful...";
            audio6.play();

            setTimeout(function () {
                audio7.play();
                document.querySelector("#tk h3").innerHTML = "Thank you...";
            }, 2000);

        }, 3000);


    }
    else {
        document.querySelector("#tk h3").innerHTML = "your transaction is declined.";
        document.querySelector("#tk h3").style.display = "block";
        document.querySelector("#tk .logbtn2").style.display = "inline-block";
        document.querySelector("#tk .logbtn1").style.display = "none";
        document.getElementById("amount").style.display = "none";
        document.getElementById("with").style.display = "none";
        audio8.play();

    }

}