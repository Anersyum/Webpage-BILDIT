function sendMail() {

    let mailText = document.querySelector("#textToSend");
    let name = document.querySelector("#nameText");
    let subjectText = `Contact from ${name}`;

    window.location.href = `mailto:amorosmic@gmx.com?subject=${subjectText}?;body=${mailText}`;
}