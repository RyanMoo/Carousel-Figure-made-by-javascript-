(function ($, root, window) {
    var num = 0;
    var first = true;
    var data = {};
    var lock = true;
    function leftMove() {
        
        if(num === 6) {
            num = 0;
            $('.box').style.left = '0';
        }
        
        data = {
            left: '-500' * (num +1)
        }
        move($('.box'), data, function () {
            num++; 
            if(num !== 6) {
                active(num);
            }else {
                active(0)
            }
        });
    }

    function rightMove() {
        if(num === 0) {
            num = 6;
            $('.box').style.left = '-3000px';
        }
        data = {
            left: '-500' * (num-1)
        }
        move($('.box'), data, function () {
            num--;
            active(num);
        });
    }


    function active(num) {
        var navCol = document.getElementsByClassName('nav');
        var len = navCol.length;
        for(let i = 0; i < len; i++) {
            navCol[i].className = 'nav';
        }
        navCol[num].className += ' active';
    }

    function move(elem, changeData, func) {
        clearInterval(elem.timer);
        var curValue = 0;
        var speed = 0;
        elem.timer = setInterval(function () {
            var flag = false;
            for(name in changeData) {
                if(name === 'opacity') {
                    curValue = parseFloat(getStyle(elem, 'opacity')) * 100 ;
                }else {
                    curValue = parseInt(getStyle(elem, name));
                }
                
                speed = (changeData[name] - curValue) / 7;
                if(speed > 0) {
                    speed = Math.ceil(speed);
                }else {
                    speed = Math.floor(speed);
                }
                if(name === 'opacity') {
                    elem.style.opacity = curValue + speed / 100;
                }else {
                    elem.style[name] = curValue + speed + 'px';
                }

                if(curValue === changeData[name]) {
                    flag = true;
                }else {
                    flag = false;
                }
            }
            if(flag) {
                clearInterval(elem.timer);
                func();
            }
        }, 30)
    }

    function getStyle(elem, style) {
        if(elem.currentStyle) {
            return elem.currentStyle[style]
        }else {
            return window.getComputedStyle(elem, null)[style];
        }
    }
    root.move = {
        leftMove,
        rightMove
    }
})($, window.move || (window.move = {}), window)