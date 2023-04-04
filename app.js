

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

const imgproj = document.querySelectorAll(".img-proj");
const imgvidArray = document.querySelectorAll(".img-vid");
const videos = ["./assets/trail-vid.mov", "./assets/membersonly-vid.mov", "./assets/library-vid.mov", "./assets/memory-vid.mov", "./assets/modura-vid.mov", "./assets/etch-vid.mov"]


for (let i = 0; i < videos.length; i++) {
    const imgvid = imgvidArray[i]; 
    const card_img = imgproj[i] 
    const video = document.createElement('video');
    const source = document.createElement('source');
    imgvid.addEventListener('mouseenter', (() => {
        video.classList.add("video")
        video.classList.add("img-proj")
        source.src = videos[i]
        video.type = 'mov'
        video.muted = "true" 
        video.appendChild(source);
        imgvid.appendChild(video);
        video.play(); 
        card_img.remove(); 
        video.style.display = 'block';
    }))
    imgvid.addEventListener('mouseleave', (()=> {
        imgvid.removeChild(video);
        imgvid.append(card_img); 
    }))
}
