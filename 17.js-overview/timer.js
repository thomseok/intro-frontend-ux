let digits = document.getElementById("digits");

let b_play = document.getElementById("b_play");
let b_flag = document.getElementById("b_flag");
let b_pause = document.getElementById("b_pause");
let b_reset = document.getElementById("b_reset");

let flagList = document.getElementById("flagList");

// Estados Cronometro

let running = false;
let time = {
    miliseconds: 0,
    seconds: 0,
    minutes: 0
}

// Darle formato a los números en el cronómetro

function formato(num){
    if(num < 10){
        return "0" + num;
    }
    else{
        return num;
    }
    }

// Se cambian los números de min, sec & mili, se actualiza cada 100 milisec

function update(){
    time.miliseconds++;
    if(time.miliseconds == 10){
        time.miliseconds = 0;
        time.seconds++;
    }
    if(time.seconds == 60){
        time.seconds = 0;
        time.minutes++;
    }
    digits.innerHTML = `${formato(time.minutes)}:${formato(time.seconds)}:${time.miliseconds}`
    if(running == true){
        setTimeout(update,100); // Actualizar el cronómetro cada 100 milisegundos
    }
}

// Funciones Botones

function play(){
    if(running == false){
        running = true;
        update();
    }
}
function pause(){
    running = false;
}
function reset(){
    time.miliseconds = 0;
    time.seconds = 0;
    time.minutes = 0;
    digits.innerHTML = `${formato(time.minutes)}:${formato(time.seconds)}:${time.miliseconds}`
    flagList.innerHTML = "";
}

function flag() {
    const currentTime = `${formato(time.minutes)}:${formato(time.seconds)}:${time.miliseconds}`;
    const li = document.createElement("li");
    li.textContent = `${currentTime}`;
    flagList.appendChild(li);
}

// Escuchar Eventos
b_play.addEventListener('click', play);
b_pause.addEventListener('click', pause);
b_reset.addEventListener('click', reset);
b_flag.addEventListener('click', flag);