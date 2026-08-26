/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-link, .nav-contact").forEach(link => {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});


/* =========================================
   DESTINATION DETAILS
========================================= */

function showDestination(destinationName) {

    const detailsBox =
        document.getElementById("destinationDetails");

    const allDestinations =
        document.querySelectorAll(".destination-info");

    /* Hide every destination */

    allDestinations.forEach(destination => {

        destination.classList.remove("active");

    });


    /* Show selected destination */

    const selectedDestination =
        document.getElementById(destinationName);

    if (selectedDestination) {

        selectedDestination.classList.add("active");

        detailsBox.style.display = "block";

        /*
         * Smoothly move user to the details
         */

        setTimeout(() => {

            detailsBox.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }

}


/* =========================================
   CLOSE DESTINATION
========================================= */

function closeDestination() {

    const detailsBox =
        document.getElementById("destinationDetails");

    const allDestinations =
        document.querySelectorAll(".destination-info");

    allDestinations.forEach(destination => {

        destination.classList.remove("active");

    });

    detailsBox.style.display = "none";

}


/* =========================================
   NAVBAR ACTIVE LINK
========================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});