// script.js
$(window).ready(function () {
    var seconds = "00";
    var tens = "00";
    var $appendTens = $('#tens');
    var $appendSeconds = $('#seconds');
    var $buttonStart = $('#button-start');
    var $buttonStop = $('#button-stop');
    var $buttonReset = $('#button-reset');
    var $timer = $('#timer');
    var interval;
    var animateTimer;

    $buttonStart.click(function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        
        // animate timer
        $timer.css("background-color", "#69C39C");
        clearInterval(animateTimer);
        $timer.animate({opacity: '0.5'}, 1000);
        $timer.animate({opacity: '1.0'}, 1000);
        animateTimer = setInterval(timerAnimation, 2000);
    });

    $buttonStop.click(function () {
        clearInterval(interval);
        if (!($("#tens").text() === "00" && $("#seconds").text() === "00")) {
            clearInterval(animateTimer);
            $timer.stop();
            $timer.css("opacity", '1.0');
            $timer.css("background-color", "#CC5144");
        }
    });

    $buttonReset.click(function () {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $appendTens.text(tens);
        $appendSeconds.text(seconds);

        clearInterval(animateTimer);
        $timer.stop();
        $timer.css("opacity", '1.0');
        $timer.css("background-color", "#F9974E");
    });

    function startTimer() {
        tens++;
        if (tens < 9) {
            $appendTens.text("0" + tens);
        }
        if (tens > 9) {
            $appendTens.text(tens);
        }
        if (tens > 99) {
            seconds++;
            $appendSeconds.text("0" + seconds);
            tens = 0;
            $appendTens.text("0" + 0);
        }
        if (seconds > 9) {
            $appendSeconds.text(seconds);
        }
    }

    function timerAnimation() {
        $timer.animate({opacity: '0.5'}, 1000);
        $timer.animate({opacity: '1.0'}, 1000);
    }
});
