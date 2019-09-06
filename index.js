window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled);
    document.getElementById("bar").style.height = scrolled + "%";
}

(function () {
    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);

    function frame() {
        if (loading == 50) {
            clearInterval(id);
            document.body.removeChild(preload);
        } else {
            loading = loading + 1;
            if(loading == 45){
                preload.style.animation = 'fadeout 0.5s ease'
            }
        }
    }
})();