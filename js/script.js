(function () {

    var projectPage = (function () {

        const btnsProjects = document.querySelectorAll('.project--show');

        let dataProject = [{
                title: "Dashboard",
                image: "dist/img/work/dashboard.jpg",
                description: "Dashboard project",
                techs: ['HTML', 'CSS', 'jQuery', 'Chart.js', 'AJAX', 'SASS'],
                link: 'https://dragosbus.github.io/webdash/',
                github: 'https://github.com/dragosbus/webdash'
            },
            {
                title: "Meteo",
                image: "dist/img/work/meteo.jpg",
                description: "Meteo project",
                techs: ['HTML', 'CSS', 'JavaScript', 'AJAX'],
                link: 'https://dragosbus.github.io/freecodecamp/intermediate_projects/weather/',
                github: 'https://github.com/dragosbus/freecodecamp/tree/master/intermediate_projects/weather'
            },
            {
                title: "The Pig Game",
                image: "dist/img/work/pig.jpg",
                description: "The Pig Game project",
                techs: ['HTML', 'CSS', 'JavaScript'],
                link: 'https://dragosbus.github.io/pig-game/',
                github: 'https://github.com/dragosbus/pig-game'
            },
            {
                title: "Random Quote",
                image: "dist/img/work/quote.jpg",
                description: "Random Quote project",
                techs: ['HTML', 'CSS', 'JavaScript', 'AJAX'],
                link: 'https://dragosbus.github.io/freecodecamp/intermediate_projects/random_quote/',
                github: 'https://github.com/dragosbus/freecodecamp/tree/master/intermediate_projects/random_quote'
            },
            {
                title: "Restaurant Review",
                image: "dist/img/work/restaurant.jpg",
                description: "Restaurant Review project",
                techs: ['HTML', 'CSS', 'JavaScript', 'Fetch API', 'IndexDB'],
                link: 'https://dragosbus.github.io/restaurant_review/',
                github: 'https://github.com/dragosbus/restaurant_review'
            },
            {
                title: "Tic Tac Toe",
                image: "dist/img/work/xo.jpg",
                description: "Tic Tac Toe project",
                techs: ['HTML', 'CSS', 'JavaScript'],
                link: 'https://dragosbus.github.io/freecodecamp/advanced_projects/tic-tac-toe/',
                github: 'https://github.com/dragosbus/freecodecamp/tree/master/advanced_projects/tic-tac-toe'
            }
        ];

        function createDiv(title, src, content, techs, github, liveUrl) {

            let overlay = document.createElement('div');
            overlay.classList.add('overlay');

            let divProject = document.createElement('div');
            divProject.classList.add('project-page');

            //image
            let image = document.createElement('img');
            image.src = src;
            image.setAttribute('alt', `${title} photo`);
            //title
            let titlePage = document.createElement('h4');
            titlePage.textContent = title;
            //description
            let description = document.createElement('p');
            description.textContent = content;
            //technologies
            let techUl = document.createElement('ul');
            techs.forEach(tech => {
                let li = document.createElement('li');
                li.textContent = tech;
                techUl.appendChild(li);
            });
            //close page
            let closeBtn = document.createElement('button');
            closeBtn.classList.add('btn');
            closeBtn.textContent = 'X';
            //links
            let divLinks = document.createElement('div');
            divLinks.classList.add('links');
            //link github
            let git = document.createElement('a');
            git.setAttribute('href', github);
            //image for github
            let imageGit = document.createElement('img');
            imageGit.src = 'dist/img/vectors/social/github.svg';
            git.appendChild(imageGit);
            //link live
            let live = document.createElement('a');
            live.setAttribute('href', liveUrl);
            //image for github
            let imageLive = document.createElement('img');
            imageLive.src = 'dist/img/vectors/eye.svg';
            live.appendChild(imageLive);

            divLinks.appendChild(git);
            divLinks.appendChild(live);
            
            divProject.appendChild(image);
            divProject.appendChild(titlePage);
            divProject.appendChild(description);
            divProject.appendChild(techUl);
            divProject.appendChild(closeBtn);
            divProject.appendChild(divLinks);
            

            overlay.appendChild(divProject);

            return overlay;
        }

        for (let i = 0; i < btnsProjects.length; i++) {
            btnsProjects[i].addEventListener('click', e => {
                let data = dataProject[i];
                let divPage = createDiv(data.title, data.image, data.description, data.techs,data.github,data.link);
                //remove class 'hide-page' if exist
                if (divPage.classList.contains('hide-page')) {
                    divPage.classList.remove('hide-page');
                }

                document.querySelector('main').appendChild(divPage);

                document.body.style.overflow = 'hidden';
                divPage.querySelector('.btn').addEventListener('click', () => {
                    //for animation taking place,project page should be removed after the animation is finished
                    setTimeout(() => {
                        document.querySelector('main').removeChild(divPage);
                        document.body.style.overflow = 'auto';
                    }, 550);
                    divPage.classList.add('hide-page');
                });
            });
        }

    }());

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

}());