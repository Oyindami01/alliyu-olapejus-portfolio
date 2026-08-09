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

(function () {

    emailjs.init("Kt0Gy7UCKVsPpp-It");

})();

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const formStatus = document.getElementById("form-status");

        // Clear previous status
        if (formStatus) {
            formStatus.textContent = "";
            formStatus.classList.remove("success", "error");
        }

        emailjs.sendForm(
            "service_sn3e1co",
            "template_xwpz9us",
            this
        )

        .then(function () {

    if (formStatus) {

        formStatus.textContent =
            "Message sent successfully! Thank you for reaching out.";

        formStatus.classList.remove("error");
        formStatus.classList.add("success");

    }

    contactForm.reset();

    // Clear success message after 5 seconds
    setTimeout(function () {

        if (formStatus) {
            formStatus.textContent = "";
            formStatus.classList.remove("success");
        }

    }, 5000);

})

        .catch(function (error) {

            if (formStatus) {

                formStatus.textContent =
                    "Message failed. Please try again.";

                formStatus.classList.add("error");

            }

            console.log(error);

        });

    });

}