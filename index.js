var images = [ { 'author': 'user1', 'source': 'images/image0.jpg', 'index': 0, 'caption': 'This is an image.'},
               { 'author': 'user2', 'source': 'images/image1.jpg', 'index': 1, 'caption': 'This is an image.'},
               { 'author': 'user3', 'source': 'images/image2.jpg', 'index': 2, 'caption': 'This is an image.'},
               { 'author': 'user4', 'source': 'images/image3.jpg', 'index': 3, 'caption': 'This is an image.'},
               { 'author': 'user5', 'source': 'images/image4.jpg', 'index': 4, 'caption': 'This is an image.'},
               { 'author': 'user6', 'source': 'images/image5.jpg', 'index': 5, 'caption': 'This is an image.'},
               { 'author': 'user7', 'source': 'images/image6.jpg', 'index': 6, 'caption': 'This is an image.'},
               { 'author': 'user8', 'source': 'images/image7.jpg', 'index': 7, 'caption': 'This is an image.'}
];

var lightbox = document.querySelector('.lightbox_screen');
var imageThumbnails = document.querySelector('.image_thumbnails');


// use (var image in images) instead
for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.source);
    newImage.classList.add('image');

    var imageContainer = document.createElement('div');
    imageContainer.classList.add('img_container');
    imageContainer.appendChild(newImage);

    imageThumbnails.appendChild(imageContainer);
}

var imageContainers = document.querySelectorAll('.image');
var lighboxImageContainer = document.querySelector('.lb_img_container');


var hideLightBox = function () {
    lightbox.classList.add('hide');
}

for (var i = 0; i < images.length; i++) {
    imageContainers[i].addEventListener('click', function () {
        console.log(this);
        var imageSource = this.getAttribute('src');
        console.log(imageSource);
        var lightboxImage = document.querySelector('.lb_image');
        lightbox.classList.remove('hide');
        lightboxImage.setAttribute('src', imageSource);
    });
}

var lightBoxCloseButton = document.querySelector('.lb_close_btn');
lightBoxCloseButton.addEventListener('click', hideLightBox);
