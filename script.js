document.addEventListener("DOMContentLoaded", function() {
    // Inicjalizacja baterii
    let batteryLevel = 100; // Początkowy poziom baterii
    let charging = false; // Czy telefon jest aktualnie ładowany

    updateBatteryDisplay();

    // Nasłuchiwanie przycisku ładowania
    const chargeButton = document.getElementById('charge-button');
    chargeButton.addEventListener('click', toggleCharging);

    // Symulacja rozładowywania baterii co 5 sekund
    setInterval(function() {
        if (!charging) {
            batteryLevel -= 1;
            if (batteryLevel < 0) {
                batteryLevel = 0;
                // Wyłącz ekran po rozładowaniu baterii
                document.getElementById('screen').style.backgroundColor = '#000000';
            }
            updateBatteryDisplay();
        }
    }, 5000);

    function toggleCharging() {
        charging = !charging;
        if (charging) {
            chargeButton.style.backgroundColor = '#ffcc00';
            chargeButton.style.boxShadow = '0 0 10px rgba(255, 204, 0, 0.8)';
            chargeButton.style.animation = 'charge-pulse 1s infinite';
            chargePhone();
        } else {
            chargeButton.style.backgroundColor = '#ffffff';
            chargeButton.style.boxShadow = 'none';
            chargeButton.style.animation = 'none';
        }
    }

    function chargePhone() {
        // Symulacja ładowania baterii co 2 sekundy
        setInterval(function() {
            if (charging && batteryLevel < 100) {
                batteryLevel += 1;
                updateBatteryDisplay();
            }
        }, 2000);
    }

    function updateBatteryDisplay() {
        const batteryInner = document.getElementById('battery-inner');
        const batteryText = document.getElementById('battery-text');
        batteryInner.style.width = batteryLevel + '%';
        batteryText.textContent = batteryLevel + '%';
    }
});
// Zmodyfikowany skrypt JavaScript

function showAppContent(appId) {
    document.querySelectorAll('.app-content').forEach(app => {
        app.style.display = 'none';
    });
    document.getElementById(appId).style.display = 'block';
}

$('.chat-header .menu .menu-ico').click(function(){
    $('.chat-header .menu ul.list').slideToggle('fast');
});
$(document).click(function(){
    $(".chat-header .menu ul.list").slideUp('fast');
});
$(".chat-header .menu ul.list,.chat-header .menu .menu-ico").click(function(e){
    e.stopPropagation();
});
$('.chat-inp .emoji').click(function(){
    $('.emoji-dashboard').slideToggle('fast');
});
$(document).click(function(){
    $(".emoji-dashboard").slideUp('fast');
});
$(".chat-header .menu ul.list,.chat-inp .emoji").click(function(e){
    e.stopPropagation();
});
$('.emoji-dashboard li .em').click(function(){
    var emo = $(this).css('background-image').split('"')[1];
    $('.chat-inp .input').find('div').remove();
    $('.chat-inp .input').append('<img src="'+emo+'">');
    $(".emoji-dashboard").slideUp('fast');

});
$('.chat-inp .opts .send').click(function(){
    var val = $('.chat-inp .input').html();
    if (val.length > 0){
        $('.chat-body .chats-text-cont').append('<p class="chat-text"><span>'+val+'</span></p>')
    }
    $('.chat-inp .input').html('');
    $('.chats-text-cont div').remove();
});
$('input,.input').each(function(){
    tmpval = $(this).text().length;
    if(tmpval != '') {
        $(this).prev().addClass('trans');
        $(this).parent().addClass('lined');
    }
});
$('input,.input').focus(function() {
    $(this).prev().addClass('trans');
    $(this).parent().addClass('lined');
    $(document).keypress(function(e) {
        if(e.which == 13) {
            $('.chat-inp .opts .send').click();
        }
    });
}).blur(function() {
    if ($(this).text().length == ''){
        $(this).prev().removeClass('trans');
        $(this).parent().removeClass('lined');
    }
});
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock(); 

