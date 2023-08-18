const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
    rootMargin: "-500px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry=> {
        if (!entry.isIntersecting) {
            header.classList.add('nav_scrolled');
        } else {
            header.classList.remove("nav_scrolled");
        }
    });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);