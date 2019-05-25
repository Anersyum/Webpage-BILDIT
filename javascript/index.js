//ajax try 1
let isMusicPlayerPaused;
const mainPagePart = document.querySelector("#mainPagePart");
const button = `<button id="goBack" onclick="goBack()">${"\u2b05"}</button>`;
const gamesPageHtml = `
    <link href="./css/games.css" type="text/css" rel="stylesheet" />
    <header>
        <h1>Games</h1>
        <hr />
    </header>
    <section id="descriptionText">
        <h2 class="personaHeader">Persona 4 Golden</h2>
        <h2 class="chronoHeader">Chrono Trigger</h2>
        <h2 class="finalHeader">Final Fantasy 6</h2>
        <p>
            <p class="personaDesc">
                When it comes to games I love RPGs, JRPGs in particular. My favourite game to date is Persona 4
                Golden
                because it resembles an anime, and I love anime. You're a student by day and fight demons by night,
                how cool is that?
            </p>
            <p class="chronoDesc">
                Chrono Trigger is my second favourite game. Time travel is done so good in this game as well as
                the combat system. The story is also really good and the fact that it has multiple endings gets
                you to play through it multiple times.
            </p>
            <p class="finalDesc">
                Also one of my favourites is Final Fantasy 6. In fact, I love the whole Final Fantasy franchise.
                Final Fantasy 6 has a memorable villian named Kefka. Without giving anything away in the story,
                I'll just say that the story is great, as are the characters!
            </p>
        </p>
    </section>
    <iframe class="persona" src="https://www.youtube.com/embed/FNnCby2_B6s" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe class="chronoTrigger" src="https://www.youtube.com/embed/vVl6Ue9r-Oo" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe class="finalFantasy" src="https://www.youtube.com/embed/j_lr12kgGeU" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

const bioPageHtml = `
    <link href="./css/bio.css" type="text/css" rel="stylesheet" />
    <img srcset="./img/profile.jpg" class="ProfileIcon" alt="ProfilePic" />
        <header>
            <h1 id="mainHeader">ᙖIOᘜᖇᗩᑭᕼY</h1>
        </header>
        <p>
            <img src="./img/programming.jpg" class="bioImage" id="bioImageRight" alt="programming" rel="internal" />
            <section class="alignText">
                Amor Osmić, born 18.12.1995 in Leonberg, Germany, is a 23 year old who loves computers,
                games, anime and programming. Went to Peta osnovna škola Brčko, he was a good student.
                In highschool he went to Elektrotehnika i Računarstvo class and finished that. His *maturski rad*
                was a program that would let people take driving tests and note their success in a sql database.
            </section>
        </p>
        <p>
            <img src="./img/anime.jpeg" class="bioImage" id="bioImageLeft" alt="anime" rel="internal" />
            <section class="alignText">
                The program was programed in Visual Basic 6.0. After highschool
                he enrolled in Univerzitet u Tuzli, taking up Tehnički odgoj i informatika classes.
                Now in his fourth and final year at the Univerzitet u Tuzli, he has two exams left and
                is enrolled at BILD-IT, a free course about programming. He hopes of being a software developer one
                day.
            </section>
        </p>
        <script src="./javascript/index.js" type="text/javascript" rel="javascript"></script>`;

const indexPageHtml = `
    <header id="mainHeader">
        <hr />
    </header>
            
    <nav id="navigation">
        <ul>
            <li>
                Projects
            </li>
            <li>
                Music
            </li>
            <li>
                <a href="#" rel="internal" onclick="loadGames()">Games</a>
            </li>
            <li>
                Hobbies
            </li>
            <li>
                <a href="#" rel="internal" onclick="loadBio()">Bio</a>
            </li>
            <li>
                <a href="#" rel="internal" onclick="loadContact()">Contact</a>
            </li>
        </ul>
    </nav>
    <footer id="mainFooter">
        <hr />
        <div class="instagram">
            <a href="https://www.instagram.com/anersyum/" rel="external" referrerpolicy="no-referer"
                target="_blank">
                <i class="fab fa-instagram"></i>
                Instagram
            </a>
        </div>
        <div class="facebook">
            <a href="https://www.facebook.com/idolalexi" rel="external" referrerpolicy="no-referer" target="_blank">
                <i class="fab fa-facebook-square"></i>
                Facebook
            </a>
        </div>
    </footer>`;

const contactPageHtml = button + `
    <link href="./css/contact.css" type="text/css" rel="stylesheet" />
    <header id="mainHeader">
        <h1>Contact me via E-mail</h1>
    </header>

    <section id="inputSection">
        <label>Name</label>
        <input type="text" placeholder="Enter your full name" />
        <label>E-mail</label>
        <input type="text" placeholder="Enter your E-mail" />
        <label>Message</label>
        <textarea placeholder="Write your message here"></textarea>
        <input type="button" value="Send" class="button">
    </section>
    <script src="./javascript/index.js" type="text/javascript" rel="javascript"></script>`;
            
function loadBio() {
    mainPagePart.innerHTML = button + bioPageHtml;
}

function goBack() {
    
    mainPagePart.innerHTML = indexPageHtml;

    const musicPlayer = document.querySelector("#musicPlayer");

    if (musicPlayer.style.display == "none") {

        musicPlayer.style.display = "block";

        if (!isMusicPlayerPaused) {
            musicPlayer.childNodes[1].play();
        }
    }
}

function loadContact() {

        mainPagePart.innerHTML = contactPageHtml;
}

function loadGames() {

    const musicPlayer = document.querySelector("#musicPlayer");

    isMusicPlayerPaused = musicPlayer.childNodes[1].paused;
    musicPlayer.style.display = "none";
    musicPlayer.childNodes[1].pause();

    mainPagePart.innerHTML = button + gamesPageHtml;
}


