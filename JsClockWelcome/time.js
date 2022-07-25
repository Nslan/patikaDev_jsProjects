
let username = prompt("adınız nedir?")

let info = document.querySelector("#myName")

info.innerHTML = `${info.innerHTML} ${username}`


function showTime() {
    
    const today = new Date();
  
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    
    day = checkDay(day);
    minute = checkTime(minute);
    second = checkTime(second);



    document.getElementById('myClock').innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-alarm" viewBox="0 0 20 20">
    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
  </svg>  ${hour} : ${minute} : ${second} ${day}`;

    setTimeout(showTime, 1000);

}
 

function checkDay(i) {

    switch (i) {
        case 1: i = "Pazartesi"
            break
        case 2: i = "Salı"
            break
        case 3: i = "Carsamba"
            break
        case 4: i = "Persembe"
            break
        case 5: i = "Cuma"
            break
        case 6: i = "Cumartesi"
            break
        case 0: i = "Pazar"
            break
    }

    return i;
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  
    return i;
}
showTime()

