var currentPage = 1;
var userScrolled;

function startToneArm() {
    var arm = document.getElementById('arm');
    arm.removeEventListener('animationend', originalPositionListen, false);
    arm.style.animation = 'none';
    arm.style.animation = 'arm-rotate 45s forwards';
    arm.addEventListener('animationend', AnimationListener, false);
}

function AnimationListener() {
    if (userScrolled) {
        return;
    }
    var arm = document.getElementById('arm');
    arm.removeEventListener('animationend', AnimationListener, false);
    arm.style.animation = 'none';
    void arm.offsetWidth;
    arm.style.animation = 'arm-return 2.5s linear';
    arm.addEventListener('animationend', originalPositionListen, false);
}
function originalPositionListen() {
    if (userScrolled) {
        return;
    }
    startToneArm();
}

function startScroll() {
    var content = document.getElementById('scroll');
    content.removeEventListener('animationend', originalPositionListenContent, false);
    content.style.animation = 'none';
    content.style.animation = 'slide 45s forwards';
    content.addEventListener('animationend', AnimationListenerContent, false);
}
function AnimationListenerContent() {
    if (userScrolled) {
        return;
    }
    var content = document.getElementById('scroll');
    content.removeEventListener('animationend', AnimationListenerContent, false);
    content.style.animation = 'none';
    void content.offsetWidth;
    content.style.animation = 'slide-return 2.5s linear';
    content.addEventListener('animationend', originalPositionListenContent, false);
}
function originalPositionListenContent() {
    if (userScrolled) {
        return;
    }
    startScroll();
}

function promptAnimation() {
    document.getElementById('prompt').style.animation = 'prompt 1s infinite';
}

(function () {
    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);

    function frame() {
        if (loading == 50) {
            clearInterval(id);
            document.body.removeChild(preload);
            startToneArm();
            AOS.init({
            });
            userScrolled = false;
            startScroll();
            promptAnimation();
        } else {
            loading = loading + 1;
            if (loading == 45) {
                preload.style.animation = 'fadeout 0.5s'
            }
        }
    }
})();

document.getElementById('scroll').onwheel = function () {
    
    var arm = document.getElementById('arm');
    var scroll = document.getElementById('scroll');
    var viewContainer = document.getElementById('viewContainer');

    arm.style.animationPlayState = 'paused';
    scroll.style.animationPlayState = 'paused';
    scroll.style.animation = 'none';

    if(userScrolled == false){
        var style = window.getComputedStyle(arm, null);
        var rotation = style.getPropertyValue("-webkit-transform") ||
        style.getPropertyValue("-moz-transform") ||
        style.getPropertyValue("-ms-transform") ||
        style.getPropertyValue("-o-transform") ||
        style.getPropertyValue("transform") ||
        "fail...";
    
        var values = rotation.split('(')[1];
          values = values.split(')')[0];
          values = values.split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];
    
        var radians = Math.atan2(b, a);
        var angle = Math.round( radians * (180/Math.PI));
        viewContainer.scrollTo(0,angle/155*1673);
        arm.style.animation = 'none';
        arm.style = 'transform: rotate('+ angle.toString() + 'deg); transform-origin: 38.7% 76.6%;';
    }
    userScrolled = true;
    var deg = viewContainer.scrollTop / 1673*155;
    arm.style = 'transform: rotate('+ deg.toString() + 'deg); transform-origin: 38.7% 76.6%;';
}

function StartAnimation() {
    userScrolled = false;
    var viewContainer = document.getElementById('viewContainer');
    console.log(viewContainer.scrollTop);
    if(viewContainer.scrollTop <= 500){
        startScroll();
        startToneArm();
    }
    else{
        AnimationListener();
        AnimationListenerContent();
    }
}