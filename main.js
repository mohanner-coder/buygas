const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('menu');

navToggle.addEventListener('click', () => {
    if(navLinks.classList.contains("hide")){
        navLinks.classList.remove("hide")
        navLinks.classList.add("show")
    }else{
        navLinks.classList.remove("show")
        navLinks.classList.add("hide")

    }

});
