const sliders = document.querySelector(".carouselbox");
let scrollPerClick;
let imagePadding = 20;

let images = ["./images/img1.png", "./images/img2.png", "./images/img1.png",
"./images/img2.png", "./images/img1.png", "./images/img2.png",
"./images/img1.png", "./images/img2.png", "./images/img1.png",
"./images/img2.png", "./images/img1.png", "./images/img2.png"];

showImage();

let scrollAmount = 0;

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if(scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRight() {
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        });
    }
}

function showImage() {

    images.map((img, i) => {
        sliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${i} slider-img" src="${img}"/>` 
        )
    });

    scrollPerClick = document.querySelector(".img-1").clientWidth + imagePadding;
}