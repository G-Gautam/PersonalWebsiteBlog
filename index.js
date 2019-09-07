var currentPage = 1;

function startToneArm() {
    var arm = document.getElementById('arm');
    arm.removeEventListener('animationend', originalPositionListen, false);
    arm.style.animation = 'none';
    arm.style.animation = 'arm-rotate 3s forwards';
    arm.addEventListener('animationend', AnimationListener, false);
}

function AnimationListener(){
    var arm = document.getElementById('arm');
    arm.removeEventListener('animationend', AnimationListener, false);
    arm.style.animation = 'none';
    void arm.offsetWidth;
    arm.style.animation = 'arm-return 2s linear';
    arm.addEventListener('animationend', originalPositionListen, false);
}
function originalPositionListen(){
    startToneArm();
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
        } else {
            loading = loading + 1;
            if (loading == 45) {
                preload.style.animation = 'fadeout 0.5s'
            }
        }
    }
})();
function switchView() {
    switch (currentPage) {
        case 1:
            //destroy page 1 and open page 2
            var page = document.getElementById('page1');
            page.style.opacity = 0;
            page.style.animation = 'rotate-out 1s';
            var next = document.getElementById('page2');
            next.style.animation = 'rotate-in 1s';
            next.style.opacity = 1;
            currentPage = 2;
            break;
        case 2:
            var page = document.getElementById('page2');
            page.style.opacity = 0;
            page.style.animation = 'rotate-out 1s';
            var next = document.getElementById('page3');
            next.style.animation = 'rotate-in 1s';
            next.style.opacity = 1;
            currentPage = 3;
            break;
        case 3:
            var page = document.getElementById('page3');
            page.style.opacity = 0;
            page.style.animation = 'rotate-out 1s';
            var next = document.getElementById('page4');
            next.style.animation = 'rotate-in 1s';
            next.style.opacity = 1;
            currentPage = 4;
            break;
        case 4:
            var page = document.getElementById('page4');
            page.style.opacity = 0;
            page.style.animation = 'rotate-out 1s';
            var next = document.getElementById('page1');
            next.style.animation = 'rotate-in 1s';
            next.style.opacity = 1;
            currentPage = 1;
            break;
    }
}