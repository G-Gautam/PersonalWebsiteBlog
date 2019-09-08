var currentPage = 1;

function startToneArm() {

    var arm = document.getElementById('arm');
    arm.removeEventListener('animationend', originalPositionListen, false);
    arm.style.animation = 'none';
    arm.style.animation = 'arm-rotate 6s forwards';
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
    content.style.animation = 'slide 6s forwards';
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
        } else {
            loading = loading + 1;
            if (loading == 45) {
                preload.style.animation = 'fadeout 0.5s'
            }
        }
    }
})();