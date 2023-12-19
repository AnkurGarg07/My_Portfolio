function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
function SendEmail(){
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ankurgarg89p@gmail.com",
    Password : "30A5AD235034D74176C4B781148705FE9DAE",
    To : 'ankurgarg89p@gmail.com',
    From : "ankurgarg89p@gmail.com",
    Subject : "New Mail from \"Portfolio ~ Ankur Garg\"",
    Body : document.getElementById("email").value+"<br>"+document.getElementById("message").value
}).then(
  message => alert(message)
);
}