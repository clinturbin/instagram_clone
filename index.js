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


for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.source);
    newImage.classList.add('image');

    var imageContainer = document.createElement('div');
    imageContainer.classList.add('img_container');
    imageContainer.setAttribute('data-index', image.index);
    imageContainer.appendChild(newImage);

    imageThumbnails.appendChild(imageContainer);
}

//------------------ SHOW LIGHT BOX -------------------------------------
var lighboxImageContainers = document.querySelectorAll('.img_container');

var showLightBox = function () {
    lightbox.classList.remove('hide');
    var index = event.currentTarget.getAttribute('data-index');
    var imageSource = images[index].source;
    var lightboxImage = document.querySelector('.lb_image');
    lightboxImage.setAttribute('src', imageSource);
    
    // Handle click events for arrow buttons
};

for (var container of lighboxImageContainers) {
    container.addEventListener('click', showLightBox);
}

//------------------ HIDE LIGHT BOX -------------------------------------
var hideLightBox = function () {
    lightbox.classList.add('hide');
}

var lightBoxCloseButton = document.querySelector('.lb_close_btn');
lightBoxCloseButton.addEventListener('click', hideLightBox);


