// alert('Analog Clock');

secondDegree = 0;
minuteDegree= 0;
hourDegree= 0;

d = new Date();


setInterval(
    function () {
        d = new Date();
        secondDegree = d.getSeconds() * 6;
        minuteDegree = d.getMinutes() * 6;
        hourDegree = d.getHours() * 30 + Math.round(minuteDegree/12);
        document.getElementById("second-hand-wrapper").style.transform = "rotate(" + secondDegree + "deg)";
        document.getElementById("minute-hand-wrapper").style.transform = "rotate(" + minuteDegree + "deg)";
        document.getElementById("hour-hand-wrapper").style.transform = "rotate(" + hourDegree + "deg)";
    },1000
);
