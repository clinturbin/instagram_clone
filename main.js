var images = [ { 'source': 'images/image0.jpg', 'caption': 'This is image 1.', 'likes': 0},
               { 'source': 'images/image1.jpg', 'caption': 'This is image 2.', 'likes': 0},
               { 'source': 'images/image2.jpg', 'caption': 'This is image 3.', 'likes': 0},
               { 'source': 'images/image3.jpg', 'caption': 'This is image 4.', 'likes': 0},
               { 'source': 'images/image4.jpg', 'caption': 'This is image 5.', 'likes': 0},
               { 'source': 'images/image5.jpg', 'caption': 'This is image 6.', 'likes': 0},
               { 'source': 'images/image6.jpg', 'caption': 'This is image 7.', 'likes': 0},
               { 'source': 'images/image7.jpg', 'caption': 'This is image 8.', 'likes': 0}
];

var currentImageIndex;

var mainThumbnailContainer = document.querySelector('.main-thumbnail-container');
var lightBoxScreen = document.querySelector('.lightbox-screen');
var lightBoxImage = document.querySelector('.lightbox-image');
var likeButton = document.querySelector('.like-image');
var likesDisplay = document.querySelector('.number-of-likes');
var userComment = document.querySelector('.comment');
var backArrow = document.querySelector('.back-arrow');
var forwardArrow = document.querySelector('.forward-arrow');
var lightBoxCloseButton = document.querySelector('.close-button');


var setLightBoxImageSource = function (currentIndex) {
    var imageSource = images[currentIndex].source;
    lightBoxImage.setAttribute('src', imageSource);
};

var updateComment = function (currentIndex) {
    var comment = images[currentIndex].caption;
    userComment.textContent = comment;
};

var showLikes = function (currentIndex) {
    var numberLikes = images[currentIndex].likes;
    likesDisplay.textContent = numberLikes;
};

var updateLightBox = function (currentIndex) {
    currentImageIndex = currentIndex;
    setLightBoxImageSource(currentIndex);
    updateComment(currentIndex);
    showLikes(currentIndex);
};

var hideLightBox = function () {
    lightBoxScreen.classList.add('hide-screen');
};


for (var i = 0; i < images.length; i++) {
    (function () {
        var currentIndex = i;

        // Create new image element and add image to the screen
        var image = images[i];
        var newImage = document.createElement('img');
        newImage.setAttribute('src', image.source);
        newImage.classList.add('thumb-image');
        mainThumbnailContainer.appendChild(newImage);

        var showLightBox = function (event) {
            lightBoxScreen.classList.remove('hide-screen');
            updateLightBox(currentIndex);
        }

        newImage.addEventListener('click', showLightBox);
    })();
}


var increaseIndex = function () {
    currentImageIndex += 1;
    if (currentImageIndex === images.length) {
        currentImageIndex = 0;
    }
    updateLightBox(currentImageIndex);
};

var decreaseIndex = function () {
    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateLightBox(currentImageIndex);
}

forwardArrow.addEventListener('click', increaseIndex);
backArrow.addEventListener('click', decreaseIndex);

likeButton.addEventListener('click', function () {
    images[currentImageIndex].likes += 1;
    showLikes(currentImageIndex);
});

lightBoxCloseButton.addEventListener('click', hideLightBox);

document.addEventListener("keydown", function (event) {
    var keyName = event.key;
    if (keyName === "ArrowLeft") {
        decreaseIndex();
    }
    else if (keyName === "ArrowRight") {
        increaseIndex();
    }
});