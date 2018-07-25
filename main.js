var images = [ { 'author': 'user1', 'source': 'images/image0.jpg', 'caption': 'This is image 1.'},
               { 'author': 'user2', 'source': 'images/image1.jpg', 'caption': 'This is image 2.'},
               { 'author': 'user3', 'source': 'images/image2.jpg', 'caption': 'This is image 3.'},
               { 'author': 'user4', 'source': 'images/image3.jpg', 'caption': 'This is image 4.'},
               { 'author': 'user5', 'source': 'images/image4.jpg', 'caption': 'This is image 5.'},
               { 'author': 'user6', 'source': 'images/image5.jpg', 'caption': 'This is image 6.'},
               { 'author': 'user7', 'source': 'images/image6.jpg', 'caption': 'This is image 7.'},
               { 'author': 'user8', 'source': 'images/image7.jpg', 'caption': 'This is image 8.'}
];

var currentImageIndex;

var mainThumbnailContainer = document.querySelector('.main-thumbnail-container');
var lightBoxScreen = document.querySelector('.lightbox-screen');
var lightBoxImage = document.querySelector('.lightbox-image');
var userNameContainers = document.querySelectorAll('.user-name');
var userComment = document.querySelector('.comment');
var backArrow = document.querySelector('.back-arrow');
var forwardArrow = document.querySelector('.forward-arrow');
var lightBoxCloseButton = document.querySelector('.close-button');

var setLightBoxImageSource = function (currentIndex) {
    // Set the global variable currentImageIndex to currentIndex
    currentImageIndex = currentIndex;
    var imageSource = images[currentIndex].source;
    lightBoxImage.setAttribute('src', imageSource);
    updateUserName(currentIndex);
    updateComment(currentIndex);
};

var updateUserName = function (currentIndex) {
    var userName = images[currentIndex].author;
    for (var item of userNameContainers) {
        item.textContent = userName;
    }
};

var updateComment = function (currentIndex) {
    var comment = images[currentIndex].caption;
    userComment.textContent = comment;
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
            setLightBoxImageSource(currentIndex);
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
    setLightBoxImageSource(currentImageIndex);
});

backArrow.addEventListener('click', function () {
    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    setLightBoxImageSource(currentImageIndex);
});

lightBoxCloseButton.addEventListener('click', hideLightBox);