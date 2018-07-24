var images = [ 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 
                'images/img4.jpg', 'images/img5.jpg', 'images/img6.jpg', 
                'images/img7.jpg', 'images/img8.jpg' ];


var lightbox = document.querySelector('.lightbox_screen');
var imageThumbnails = document.querySelector('.image_thumbnails');

// use (var image in images) instead
for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.classList.add('image');

    var imageContainer = document.createElement('div');
    imageContainer.classList.add('img_container');
    imageContainer.appendChild(newImage);

    imageThumbnails.appendChild(imageContainer);
}

var imageContainers = document.querySelectorAll('.img_container');
var showLightBox = function () {
    lightbox.classList.remove('hide');
};

for (var container of imageContainers) {
    container.addEventListener('click', showLightBox);    
}

