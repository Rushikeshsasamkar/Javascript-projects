const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

},1000)

// above code render the data from the clock every one second