var images = [ { 'author': 'user1', 'source': 'images/image0.jpg', 'index': 0, 'caption': 'This is an image.'},
               { 'author': 'user2', 'source': 'images/image1.jpg', 'index': 1, 'caption': 'This is an image.'},
               { 'author': 'user3', 'source': 'images/image2.jpg', 'index': 2, 'caption': 'This is an image.'},
               { 'author': 'user4', 'source': 'images/image3.jpg', 'index': 3, 'caption': 'This is an image.'},
               { 'author': 'user5', 'source': 'images/image4.jpg', 'index': 4, 'caption': 'This is an image.'},
               { 'author': 'user6', 'source': 'images/image5.jpg', 'index': 5, 'caption': 'This is an image.'},
               { 'author': 'user7', 'source': 'images/image6.jpg', 'index': 6, 'caption': 'This is an image.'},
               { 'author': 'user8', 'source': 'images/image7.jpg', 'index': 7, 'caption': 'This is an image.'}
];


var allImageThumbnails = document.querySelector('.image_thumbnails');
var lightBoxScreen = document.querySelector('.lightbox_screen');
var currentIndex;

//----------------  ADD IMAGES TO PAGE  --------------------------------

for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.source);
    newImage.classList.add('image');

    var thumbNailContainer = document.createElement('div');
    thumbNailContainer.classList.add('img_container');
    thumbNailContainer.setAttribute('data-index', image.index);
    thumbNailContainer.appendChild(newImage);

    allImageThumbnails.appendChild(thumbNailContainer);
}

//------------------ SHOW LIGHT BOX -------------------------------------
var lightBoxImageContainers = document.querySelectorAll('.img_container');
var lightBoxImage = document.querySelector('.lb_image');

var showLightBox = function (event) {
    lightBoxScreen.classList.remove('hide');
    currentIndex = Number(event.currentTarget.getAttribute('data-index'));
    setImageSource(currentIndex);
};

for (var container of lightBoxImageContainers) {
    container.addEventListener('click', showLightBox);
}

//------------------ HIDE LIGHT BOX -------------------------------------
var hideLightBox = function () {
    lightBoxScreen.classList.add('hide');
}

var lightBoxCloseButton = document.querySelector('.lb_close_btn');
lightBoxCloseButton.addEventListener('click', hideLightBox);


//----------------- Forward and Back Arrows -----------------------------
var backArrow = document.querySelector('.back_arrow');
var forwardArrow = document.querySelector('.forward_arrow');

forwardArrow.addEventListener('click', function () {
    currentIndex += 1;
    if (currentIndex === images.length) {
        currentIndex = 0;
    }
    setImageSource(currentIndex);
});

backArrow.addEventListener('click', function () {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    setImageSource(currentIndex);
});

var setImageSource = function (imageIndex) {
    var imageSource = images[imageIndex].source;
    lightBoxImage.setAttribute('src', imageSource);
};


