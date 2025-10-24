---
title: "Vișinella"
---

<img src="/logo.png" alt="Vișinella" style="max-width:120px;">

# VIȘINELLA

<div class="countdown-container">
    <div id="countdown">
        <div class="countdown-block">
            <span class="days"></span>
            <div class="smalltext">Days</div>
        </div>
        <div class="countdown-block">
            <span class="hours"></span>
            <div class="smalltext">Hours</div>
        </div>
        <div class="countdown-block">
            <span class="minutes"></span>
            <div class="smalltext">Minutes</div>
        </div>
        <div class="countdown-block">
            <span class="seconds"></span>
            <div class="smalltext">Seconds</div>
        </div>
    </div>
</div>

<style>
.countdown-container {
    text-align: center;
    background: #00000010;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin: 20px 0;
}

#countdown {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.countdown-block {
    padding: 10px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    min-width: 80px;
}

.countdown-block span {
    font-size: 30px;
    font-weight: bold;
    color: #333;
}

.smalltext {
    padding-top: 5px;
    font-size: 16px;
    color: #666;
}
</style>

<script>
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Add leading zeros
    days = String(days).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    
    document.querySelector(".days").textContent = days;
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<div class='expired'>EXPIRED</div>";
    }
}, 1000);
</script>
