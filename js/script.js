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
                ul.style.backgroundColor = 'rgb(26, 32, 47)';
            } else {
                headerTop.classList.remove('top-black');
                ul.style.backgroundColor = 'transparent';
            }
        });

        //hide navigation when a link is clicked
        ul.addEventListener('click', e => {
            if (e.target.tagName = 'A') {
                ul.classList.toggle('toggle-on');
           } 
        });

    }(window));

    var smothScroll = (function () {
        var sections = Array.from(document.querySelectorAll('section'));
        var sectionProps = sections.map(function (section) {
            return {
                id: section.attributes[0].value,
                yPos: section.getBoundingClientRect().top - (document.querySelector('nav').offsetHeight - 1)
            }
        })

        var anchorLinks = Array.from(document.querySelectorAll('a'));

        anchorLinks.forEach(function (link) {

            link.addEventListener('click', function () {
                console.log(link);
                var linkNoHash = link.getAttribute('data-scroll-to').replace('#', '');
                for (var i = 0; i < sectionProps.length; i++) {

                    if (linkNoHash === sectionProps[i].id) {
                        var yPos = sectionProps[i].yPos
                        window.scrollTo({
                            top: yPos,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }
                }
            })
        })

    }());

}());