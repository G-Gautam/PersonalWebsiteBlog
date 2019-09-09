var currentPage = 1;

function startToneArm() {
    var arm = document.getElementById('arm');
    arm.removeEventListener('animationend', originalPositionListen, false);
    arm.style.animation = 'none';
    arm.style.animation = 'arm-rotate 60s forwards';
    arm.addEventListener('animationend', AnimationListener, false);
}

function AnimationListener() {
    var arm = document.getElementById('arm');
    arm.removeEventListener('animationend', AnimationListener, false);
    arm.style.animation = 'none';
    void arm.offsetWidth;
    arm.style.animation = 'arm-return 1s linear';
    arm.addEventListener('animationend', originalPositionListen, false);
}
function originalPositionListen() {
    startToneArm();
}

function startScroll(){
    var content = document.getElementById('scroll');
    content.removeEventListener('animationend', originalPositionListenContent, false);
    content.style.animation = 'none';
    content.style.animation = 'slide 60s forwards';
    content.addEventListener('animationend', AnimationListenerContent, false);
}
function AnimationListenerContent() {
    var content = document.getElementById('scroll');
    content.removeEventListener('animationend', AnimationListenerContent, false);
    content.style.animation = 'none';
    void content.offsetWidth;
    content.style.animation = 'slide-return 1s linear';
    content.addEventListener('animationend', originalPositionListenContent, false);
}
function originalPositionListenContent() {
    startScroll();
}

function startLastScroll(){
    var last = document.getElementById('lastScroll');
    last.removeEventListener('animationend', originalPositionListenLast, false);
    last.style.animation ='none';
    last.style.animation = 'slide 60s forwards';
    last.addEventListener('animationend', AnimationListenerLast, false);
}

function AnimationListenerLast(){
    var last = document.getElementById('lastScroll');
    last.removeEventListener('animationend', AnimationListenerLast, false);
    last.style.animation ='none';
    void last.offsetWidth;
    last.style.animation = 'slide-return 1s linear';
    last.addEventListener('animationend', originalPositionListenLast, false);
}

function originalPositionListenLast() {
    startLastScroll();
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
            startScroll();
            AOS.init({
                debounceDelay: 50,
                once: false,
                mirror: true
            });
            startLastScroll();
        } else {
            loading = loading + 1;
            if (loading == 45) {
                preload.style.animation = 'fadeout 0.5s'
            }
        }
    }
})();

