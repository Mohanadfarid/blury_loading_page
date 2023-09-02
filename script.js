const back_ground = document.querySelector(".bg");
const loading_number = document.querySelector(".loading_number");
let counter = 0
intervel=setInterval(blure, 40);

function blure() {
    counter++

    if(counter>99){
        clearInterval(intervel)
    }

    loading_number.innerHTML=`${counter}%`
    loading_number.style.opacity=1-(counter/100)
    back_ground.style.filter =`blur(${30-(counter/3)}px)`

}
