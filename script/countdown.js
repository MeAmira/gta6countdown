    // set interval to run every second
    const intervalid = setInterval(displayTimer, 1000);
    
    // function to launch funni stuff
    function launchConfetti(){
        const jsConfetti = new JSConfetti()

        // Trigger colorful confetti
        jsConfetti.addConfetti({
            confettiColors: ['#b914de', '#e50ed7', '#0bc7ec'],
            confettiNumber: 100
            })  
    }

    // function to make the timer
    function displayTimer() {

        // set release date & get current date in miliseconds
        var gtaDayOfRelease = new Date("2026-11-19T00:00:00");
        var todayDateMiliseconds = Date.now();

        // calculate diffrence between dates using miliseconds
        var finalCountDown = gtaDayOfRelease - todayDateMiliseconds;

        // get each item & store it then remainder to get it all
        var day = Math.floor(finalCountDown / (1000 * 60 * 60 * 24));
        var hour = Math.floor(finalCountDown / (1000 * 60 * 60));
        var minute = Math.floor(finalCountDown / (1000 * 60));
        var second = Math.floor(finalCountDown / 1000);

        var h = hour%24;
        var m = minute%60;
        var s = second%60;

        document.getElementById("day").innerHTML = day;
        document.getElementById("hour").innerHTML = h;
        document.getElementById("minute").innerHTML = m;
        document.getElementById("second").innerHTML = s;

        // once it hits 0 set all items to 0 &
        if (finalCountDown <= 0) {
            document.getElementById("day").innerHTML = "0";
            document.getElementById("hour").innerHTML = "0";
            document.getElementById("minute").innerHTML = "0";
            document.getElementById("second").innerHTML = "0";

            launchConfetti();

            clearInterval(intervalid);
        }
    };
