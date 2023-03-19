let listItems = document.querySelectorAll(".width125 a");
let imageUrls = ["/images/picture1.png", "/images/picture2.png", "/images/picture3.png", "/images/picture4.png", "/images/picture5.png", "/images/picture6.png", "/images/picture7.png", "/images/picture8.png"];
let konumlar = ["7.25%", "19.75%", "31.25%", "43.25%", "55.5%", "67.25%", "79%", "91%"]
let images = document.querySelector("#imageSlider");
let triangle = document.querySelector(".triangle");
function getImageUrl(input) {
    images.setAttribute("src", imageUrls[(input.id) - 1]);
    triangle.style.left = konumlar[(input.id) - 1];
    listItems.forEach((item)=>{
        item.classList="text-center text-decoration-none text-444";
    })
    listItems[(input.id) - 1].classList.add("actif");
    event.preventDefault();
}