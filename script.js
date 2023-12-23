const about = document.querySelector(".nav-link");

const getLink = () => {
    about.outerHTML = about.html;
}
about.addEventListener("click", getLink);