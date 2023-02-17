const sections = document.querySelectorAll(".sections");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 55;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.nav-items')
    navLinks.forEach(function (link) {
        link.classList.remove("active");
        link.textContent = link.textContent.replace(/\W/g, "");
    })

    const currentLink = document.querySelector(`a[href="#${currentSection}"]`)
    currentLink.classList.add('active');
    let content = currentLink.textContent;
    currentLink.textContent = '</' + content + '>'
})
