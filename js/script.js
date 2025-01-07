// DOM ELEMENTS 

const carouselElm = document.getElementById("carousel")
const arrowLeftElm = document.getElementById("arrow-left")
const arrowRightElm = document.getElementById("arrow-right")
const autoPlayBtnElm = document.getElementById("auto-play-btn")
const imagesListElm = document.getElementById("images-list")
const selectorImagesElm = document.getElementById("selector-images")
const showFormAddImagesElm = document.getElementById("show-form-add-images")
const submitAddImagesElm = document.getElementById("submit-add-images")
const formNewImages = document.getElementById("form-new-images")
const imgNameElm = document.getElementById("img-name")
const imgUrlElm = document.getElementById("img-url")


// VARIABLES 

const images = [
    {
        nome: "Fontana Piazza Garibaldi",
        img: "img/fontana piazza garibaldi.jpeg"
    },
    {
        nome: "Piazza Garibaldi durante Giostra Cavalleresca",
        img: "img/piazza garibaldi giostra cavalleresca.jpeg"
    },
    {
        nome: "Piazza Garibaldi vista grande",
        img: "img/piazza garibaldi vista grande.jpg"
    },{
        nome: "Giostra Cavalleresca vista dall'alto",
        img: "img/giostra cavalleresca vista dall'alto.jpg"
    },{
        nome: "Madonna che scappa in piazza",
        img: "img/madonna-che-scappa-7ellb5.jpeg"
    },{
        nome: "Acquedotto Svevo Sulmona",
        img: "img/Acquedotto-Svevo-di-Sulmona-di-sera.jpg"
    },{
        nome: "Fontana Del Vecchio",
        img: "img/fontana del vecchio.jpeg"
    },{
        nome: "Chiesa Santissima Annunziata",
        img: "img/chiesa santissima annunziata.jpg"
    },{
        nome: "Piazza XX Settembre",
        img: "img/piazza XX settembre.jpg"
    },{
        nome: "Villa Comunale Sulmona",
        img: "img/villa comunale sulmona.jpg"
    }
]


// FUNCTIONS

function updateImage() {
    const { nome, img } = images[currentIndex];
    carouselElm.innerHTML = `
        <img class="current-image--image" src="${img}" alt="${nome}">
        <p>"${nome}"</p>
    `;
}

// LOGIC 

let currentIndex = 0;


// click arrows

arrowRightElm.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length
    updateImage()
});

arrowLeftElm.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    updateImage()
});

// autoplay

autoPlayBtnElm.addEventListener("change", (event) => {
    if (event.target.checked) {
        isAutoPlayOn = true;
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage()
        }, 3000);
    } else {
        isAutoPlayOn = false;
        clearInterval(autoPlayInterval)
    }
});

// show form add new image

showFormAddImagesElm.addEventListener("click", function() {
    showFormAddImagesElm.classList.add("d-none")
    formNewImages.classList.remove("d-none")
})

// submit new image

submitAddImagesElm.addEventListener("submit", function(event) {
  event.preventDefault()

    const newImgName = imgNameElm.value
    const newUrlName = imgUrlElm.value

    const newImage = {
        nome: newImgName,
        img: newUrlName
    }

    images.push(newImage)
    carouselElm.innerHTML += updateImage(newImage)

    formNewImages.classList.add("d-none")
    showFormAddImagesElm.classList.remove("d-none")
})