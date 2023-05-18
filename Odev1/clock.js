let userName=prompt("Lütfen isminizi giriniz:");
let myName=document.querySelector("#myName");
myName.innerHTML = ` ${userName}`;

function time(){
    
    const date=new Date;

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    
    let day =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    let dayName = day[date.getDay()]
    
    let clock=document.querySelector("#myClock");
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`;
}

setInterval(time,1000);
