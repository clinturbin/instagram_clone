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


var updateLightBox = function (currentIndex) {
    currentImageIndex = currentIndex;
    setLightBoxImageSource(currentIndex);
    updateComment(currentIndex);
    showLikes(currentIndex);
};

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

var hideLightBox = function () {
    lightBoxScreen.classList.add('hide-screen');
};


for (var i = 0; i < images.length; i++) {
    (function () {
        // decalare a variable to keep track of current index
        var currentIndex = i;

        // Create new image element and add image to it
        var image = images[i];
        var newImage = document.createElement('img');
        newImage.setAttribute('src', image.source);
        newImage.classList.add('thumb-image');

        // Add to screen
        mainThumbnailContainer.appendChild(newImage);

        // make a function to show the light box screen
        var showLightBox = function (event) {
            lightBoxScreen.classList.remove('hide-screen');
            // setLightBoxImageSource(currentIndex);
            updateLightBox(currentIndex);
        }

        // Add event listener to image container to show light box when clicked
        newImage.addEventListener('click', showLightBox);
    })();
}


forwardArrow.addEventListener('click', function () {
    currentImageIndex += 1;
    if (currentImageIndex === images.length) {
        currentImageIndex = 0;
    }
    updateLightBox(currentImageIndex);
});

backArrow.addEventListener('click', function () {
    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateLightBox(currentImageIndex);
});

likeButton.addEventListener('click', function () {
    images[currentImageIndex].likes += 1;
    showLikes(currentImageIndex);
});

lightBoxCloseButton.addEventListener('click', hideLightBox);