function showtime(){
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let session="AM";
    if (hours>12){
        session="PM";
        hours-=12;
    }

    hours=hours<10 ? "0" + hours:hours;
    minutes=minutes<10 ? "0" + minutes:minutes;
    seconds=seconds<10 ? "0" + seconds:seconds;

    let time= hours+":"+minutes+":"+seconds+":"+session
    document.getElementById("clock").innerText=time;
    // setTimeout(showtime,1000)
}
showtime();
// setInterval(()=>{//runs multiple times with given interval

// },1000); 
setInterval(showtime,1000);
// setTimeout(()=>{//runs only once, but after given delay

// },1000);