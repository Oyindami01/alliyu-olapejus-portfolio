// =========================
// MOBILE MENU TOGGLE
// =========================


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}





// =========================
// CLOSE MENU AFTER CLICKING LINK
// =========================


const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});






// =========================
// CURRENT YEAR IN FOOTER
// =========================


const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");



// =========================
// EMAILJS CONTACT FORM
// =========================


(function(){

    emailjs.init("Kt0Gy7UCKVsPpp-It");

})();



const contactForm = document.getElementById("contactForm");


if(contactForm){

contactForm.addEventListener("submit", function(event){

    event.preventDefault();



    emailjs.sendForm(
        "service_sn3e1co",
        "template_xwpz9us",
        this
    )

    .then(function(){

        alert("Message sent successfully! Thank you for reaching out.");

        contactForm.reset();

    })

    .catch(function(error){

        alert("Message failed. Please try again.");

        console.log(error);

    });


});

}