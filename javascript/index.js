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
        <h1 id="mainHeader">Biography</h1>
    </header>
    <p>
        <img src="./img/programming.jpg" class="bioImage" id="bioImageRight" alt="programming" rel="internal" />
        <section class="alignText">
            My name is Amor Osmić, I was born 18.12.1995 in Leonberg, Germany. I'm a 23 year old who loves computers,
            games, anime and programming. The music I like is rock and roll. I went to Fifth elementary school, Brčko,
             where I had my first experience with programming. After elementary school, I enrolled at Technical school,
              IT technician. My graduation work was a program that would let people take driving tests and note their success. 
        </section>
    </p>
    <p>
        <img src="./img/anime.jpeg" class="bioImage" id="bioImageLeft" alt="anime" rel="internal" />
        <section class="alignText">
            The program was made in Visual Basic 6.0, using SQL as a database. After highschool
            I enrolled at University of Tuzla, Technical education and informatics. As part of 
            Technical education and informatics, I did some small programming projects. Playing guitar
            was also something I enjoyed but gave up playing it after a few years. Now in my fourth and final
             year at the University of Tuzla, I have two exams left. I was an intern at BILD-IT for six months.
            My love for programming and computers gives me hope that one day I will work as a software developer. 
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
                <a href="#" rel="internal" onclick="loadPage(projectsHtml)">Projects</a>
            </li>
            <li>
                <a href="#" rel="internal" onclick="loadGames()">Games</a>
            </li>
            <li>
                <a href="#" rel="internal" onclick="loadPage(bioPageHtml)">Bio</a>
            </li>
            <li>
                <a href="#" rel="internal" onclick="loadPage(contactPageHtml)">Contact</a>
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
        <div class="github">
                <a href="https://github.com/Anersyum" rel="external" referrerpolicy="no-referer" target="_blank">
                    <i class="fab fa-github-square"></i>
                    Github
                </a>
            </div>
    </footer>`;

const contactPageHtml = button + `
    <link href="./css/contact.css" type="text/css" rel="stylesheet" />
    <header id="mainHeader">
        <h1>Contact me via E-mail</h1>
    </header>

    <section id="inputSection">
        <label>First name</label>
        <input id="firstName" type="text" placeholder="Enter your first name" />
        <label>Last name</label>
        <input type="text" id="lastName" placeholder="Enter your last name" />
        <label>Message</label>
        <textarea id="textToSend" placeholder="Write your message here"></textarea>
        <input type="button" value="Send" class="button" onclick="sendMail()">
    </section>
    <script src="./javascript/index.js" type="text/javascript" rel="javascript"></script>
    `;

const projectsHtml = `
    <link href="./css/projects.css" type="text/css" rel="stylesheet" />
    <header>
        <h1>Projects</h1>
        <hr />
    </header>

    <main>
        <section id="intro">
            Most projects that I made started more as something I wanted to experiment with.
            I tried to experiment with different technologies using them in different projects. For example,
            I learned Ruby beacuse I wanted to try RPG Maker VX Ace. Learned basic C# so I could do unity.
            Ofcourse there are projects that I've done as part of BILD-IT. Those were written in Java.
            Here is a list of some projects (as well as their description and how far I've gotten with them):
        </section>
        <section id="projects">
            <ul>
                <li>
                    Driving school (made with Visual Basic 6 and SQL, completed) - this project was done while I was in
                    highschool
                </li>
                <li>
                    Some game mechanics in RPG Maker VX Ace (made in Ruby, completed but lost when my HDD crashed)
                </li>
                <li>
                    No Name (made with Unity using C#, working on it) - in this game you fly a ship through the galaxy
                    and
                    fight other ships
                    and creatures as you fly. The other part of the game is a 2D platformer/shooter where you
                    collect
                    parts for your ship,
                    so that you can make your ship stronger.
                </li>
                <li>
                    <a href="https://github.com/Anersyum/30DaysJSChallange" rel="external" referrerpolicy="no-referer" target="_blank">
                        30 days of Javascript (made with Javascript, working on it) - done two projects thus far
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Anersyum/TicTacToe" rel="external" referrerpolicy="no-referer" target="_blank">
                        Tic Tac Toe (made with Javascript, HTML and CSS, working on it) - a basic tic tac toe game.
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Anersyum/ATM-LibraryBILDIT" rel="external" referrerpolicy="no-referer" target="_blank">
                        ATM and library projects (made with java, simple stuff completed) - learned the hard way why
                        you shouldn't put two projects into one repository
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Anersyum/To-do_list" rel="external" referrerpolicy="no-referer" target="_blank">
                        To do list (made with Java, completed) - a simple to do list console app. Done as part of BILD-IT homework.
                    </a>
                </li>
            </ul>
        </section>
    </main>`;

            
function loadPage(page) {
    mainPagePart.innerHTML = button + page;
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

function loadGames() {

    const musicPlayer = document.querySelector("#musicPlayer");

    isMusicPlayerPaused = musicPlayer.childNodes[1].paused;
    musicPlayer.style.display = "none";
    musicPlayer.childNodes[1].pause();

    mainPagePart.innerHTML = button + gamesPageHtml;
}

function sendMail() {

    let mailText = document.querySelector("#textToSend").value;
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let name = firstName + " " + lastName;
    let subjectText = `Contact from ${name}`;

    window.location.href = `mailto:amorosmic@gmx.com?subject=${subjectText}&body=${mailText}`;
}
