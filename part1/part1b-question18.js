function timer() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var interval = setInterval(timer, 1000);