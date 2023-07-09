

const sections = document.querySelectorAll(".sections");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 85;
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
const videos = ["./assets/gymsocial-vid.mov","./assets/trail-vid.mov", "./assets/membersonly-vid.mov", "./assets/library-vid.mov", "./assets/memory-vid.mov", "./assets/etch-vid.mov"]


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
    imgvid.addEventListener('mouseleave', (() => {
        imgvid.removeChild(video);
        imgvid.append(card_img);
    }))
}


(function () {
    emailjs.init("_GmYj6RU5gGejs_s3");
})();

// const form = document.querySelector("#contact-form-email")
const form = document.getElementById("contact-form-email")
const btn = document.getElementById("email-btn")
btn.addEventListener("click", () => {
    console.log("Blicked")
})
// console.log(btn)
var myModal = document.getElementById('messageModal');
console.log(form)
console.log(document.querySelectorAll(".skills-icon"))

form.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.checkValidity()) {
        console.log("invalid")
        e.preventDefault();
        form.classList.add('was-validated')
    }
    else {
        e.preventDefault();
        myModal.classList.add("show");
        myModal.style.display = "block";
        sendEmail();
        console.log('display');
        form.classList.remove('was-validated')
    }
})

// const feedback = document.querySelector(".feedback");

var myInput = document.getElementById('myInput')
// console.log(feedback)
console.log(myModal);

function sendEmail() {
    console.log("sent email")
    let params = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    console.log(params.name, params.email, params.message)

    emailjs.send("service_r8cfv3a", "template_fx0iiyv", params)
        .then(function (response) {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "",
                document.getElementById("message").value = "";
            console.log('SUCCESS!', response.status, response.text);
            
        }, function (error) {
            console.log('FAILED...', error);
        });
}
