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

var allImageThumbnails = document.querySelector('.image_thumbnails');
var lightBoxScreen = document.querySelector('.lightbox_screen');
var lightBoxImage = document.querySelector('.lightbox-image');
var userNameContainer = document.querySelector('.lb_user_name');
var userComment = document.querySelector('.lb_comment');
var backArrow = document.querySelector('.back_arrow');
var forwardArrow = document.querySelector('.forward_arrow');
var lightBoxCloseButton = document.querySelector('.lb_close_btn');

var setLightBoxImageSource = function (currentIndex) {
    // Set the global variable currentImageIndex to currentIndex
    currentImageIndex = currentIndex;
    var imageSource = images[currentIndex].source;
    lightBoxImage.setAttribute('src', imageSource);
    setLightBoxMetaData(currentIndex);
};

var setLightBoxMetaData = function (currentIndex) {
    var userName = images[currentIndex].author;
    var comment = images[currentIndex].caption;
    userNameContainer.textContent = userName;
    userComment.textContent = comment;
};

var hideLightBox = function () {
    lightBoxScreen.classList.add('hide');
};


for (var i = 0; i < images.length; i++) {
    (function () {
        // decalare a variable to keep track of current index
        var currentIndex = i;

        // Create new image element and add image to it
        var image = images[i];
        var newImage = document.createElement('img');
        newImage.setAttribute('src', image.source);
        newImage.classList.add('image-thumb');

        // Add to screen
        allImageThumbnails.appendChild(newImage);

        // make a function to show the light box screen
        var showLightBox = function (event) {
            lightBoxScreen.classList.remove('hide');
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
