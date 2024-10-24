$(window).ready(function () {
    var cssFile = $.ajax({ type:'GET', url:'https://gu-web-dev-2024.github.io/homework-6-rblazer03/style.css', dataType:'text' });

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

    // Load the CSS file using AJAX (doesn't work, needs CORS)
    // $.ajax({
    //     url: "style.css",
    //     dataType: "text",
    //     success: function(data) {
    //         $("<style>").text(data).appendTo("head");
    //     },
    //     error: function() {
    //         console.error("Could not load CSS file.");
    //     }
    // });

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

    // css section
    $("body").css({
        fontFamily: "Homemade Apple",
        fontWeight: "400",
        fontStyle: "normal",
        color: "white",
        backgroundColor: "#FAD793"
    });
    
    $(".wrapper").css({
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "20px",
        backgroundColor: "#263F3B",
        borderRadius: "50px",
        border: "10px solid #F9974E"
    });

    $("h1").css({
        fontSize: "35px",
        marginLeft: "65px"
    });


    // add css to timer
    $("#timer").css({
        padding: "10px",
        paddingLeft: "200px",
        paddingRight: "200px",
        borderRadius: "20px",
        marginTop: "10px",
        textAlign: "center",
        fontSize: "30px",
        color: "white",
        backgroundColor: "#F9974E"
        
    });
    
    // style buttons/add class name
    $("#button-start").addClass("controls");
    $("#button-stop").addClass("controls");
    $("#button-reset").addClass("controls");

    $(".controls").css({
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        marginBottom: "20px",
        borderRadius: "50%",
        fontFamily: "Homemade Apple",
        fontWeight: "400",
        fontStyle: "normal",
        marginLeft: "65px",
        border: "5px solid #F9974E"
    });
});
