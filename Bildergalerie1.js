


let images = document.images;


function slideRight() {
    let firstImage = images[images.length - 1].src;
    for(let i = images.length - 1; i > 0; i--) {
        let currentImage = images[i].src;
        images[i].src = images[i - 1].src;
    }
    images[0].src = firstImage; 
}

function slideLeft() {
    let firstImage = images[0].src;
    for(let i = 0; i < images.length - 1; i++) {
        images[i].src = images[i + 1].src;
    }
    images[images.length - 1].src = firstImage;
}
