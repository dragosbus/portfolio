(function () {

    var hamburger = (function () {
        var btn = document.querySelector('.btn__hamburger');
        var nav = document.querySelector('.nav');

        var toggle = function () {
            nav.classList.toggle('toggle-on');
            console.log('on');
        }

        return {
            btn,
            toggle
        };
    }());

    hamburger.btn.addEventListener('click', hamburger.toggle);

    var scrollNav = (function (window) {
        var headerTop = document.querySelector('.header__top');
        var ul = document.querySelector('.nav');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= 420) {
                headerTop.classList.add('top-black');
                ul.style.backgroundColor = 'rgb(34, 33, 33)';
            } else {
                headerTop.classList.remove('top-black');
                ul.style.backgroundColor = 'transparent';
            }
        });

    }(window));

}());