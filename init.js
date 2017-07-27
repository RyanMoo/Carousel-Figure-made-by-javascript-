(function ($, root) {
    var timer;
    function autoMove() {
        timer = setInterval(function () {
            root.move.leftMove();
        }, 2000)
    }

    function init() {
        autoMove()
        $('.wrapper').addEventListener('mouseenter', function () {
            clearInterval(timer);
        }, false);

        $('.wrapper').addEventListener('mouseleave', function () {
            autoMove();
        })

        $('.btnR').addEventListener('click', function () {
            root.move.leftMove();
        }, false)

        $('.btnL').addEventListener('click', function () {
            root.move.rightMove();
        }, false)
    }

    root.init = init;
})($, window.move || (window.move = {}))