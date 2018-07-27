var images = [ { 'source': 'images/image0.jpg', 'caption': 'This is image 1.', 'likes': 0 },
               { 'source': 'images/image1.jpg', 'caption': 'This is image 2.', 'likes': 0 },
               { 'source': 'images/image2.jpg', 'caption': 'This is image 3.', 'likes': 0 },
               { 'source': 'images/image3.jpg', 'caption': 'This is image 4.', 'likes': 0 },
               { 'source': 'images/image4.jpg', 'caption': 'This is image 5.', 'likes': 0 },
               { 'source': 'images/image5.jpg', 'caption': 'This is image 6.', 'likes': 0 },
               { 'source': 'images/image6.jpg', 'caption': 'This is image 7.', 'likes': 0 },
               { 'source': 'images/image7.jpg', 'caption': 'This is image 8.', 'likes': 0 }
];

var currentImageIndex;

var mainThumbnailContainer = $('.main-thumbnail-container');
var lightBoxScreen = $('.lightbox-screen');
var lightBoxImage = $('.lightbox-image');
var likeButton = $('.like-image');
var likesDisplay = $('.number-of-likes');
var userComment = $('.comment');
var backArrow = $('.back-arrow');
var forwardArrow = $('.forward-arrow');
var lightBoxCloseButton = $('.close-button');

var setLightBoxImageSource = function (currentIndex) {
    var imageSource = images[currentIndex].source;
    lightBoxImage.attr('src', imageSource);
};

var updateComment = function (currentIndex) {
    var comment = images[currentIndex].caption;
    userComment.text(comment);
};

var showLikes = function (currentIndex) {
    var numberLikes = images[currentIndex].likes;
    likesDisplay.text(numberLikes);
};

var updateLightBox = function (currentIndex) {
    currentImageIndex = currentIndex;
    setLightBoxImageSource(currentIndex);
    updateComment(currentIndex);
    showLikes(currentIndex);
};

var hideLightBox = function () {
    lightBoxScreen.addClass('hide-screen');
};

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
};

//------------  ADD IMAGES TO SCREEN  --------------

images.forEach(function(image, i) {
    var newImage = $('<img>');
    newImage.attr('src', image.source);
    newImage.addClass('thumb-image');
    mainThumbnailContainer.append(newImage);

    var showLightBox = function () {
        lightBoxScreen.removeClass('hide-screen');
        updateLightBox(i);
    };

    newImage.click(showLightBox);
});


//-------------   EVENT LISETENERS -----------------

forwardArrow.click(increaseIndex);
backArrow.click(decreaseIndex);

likeButton.click(function () {
    images[currentImageIndex].likes += 1;
    showLikes(currentImageIndex);
});

$(document).keydown(function (event) {
    switch (event.key) {
        case "ArrowRight":
            increaseIndex();
            break;
        case "ArrowLeft":
            decreaseIndex();
            break;
        case "Escape":
            hideLightBox();
            break;
        default:
            return;
    }
});

$(window).click(function (event) {
    if ($(event.target).is(lightBoxScreen) ) {
        hideLightBox();
    }
});

lightBoxCloseButton.click(hideLightBox);