var images = [ { 'author': 'user1', 'source': 'images/image0.jpg', 'caption': 'This is an image.'},
               { 'author': 'user2', 'source': 'images/image1.jpg', 'caption': 'This is an image.'},
               { 'author': 'user3', 'source': 'images/image2.jpg', 'caption': 'This is an image.'},
               { 'author': 'user4', 'source': 'images/image3.jpg', 'caption': 'This is an image.'},
               { 'author': 'user5', 'source': 'images/image4.jpg', 'caption': 'This is an image.'},
               { 'author': 'user6', 'source': 'images/image5.jpg', 'caption': 'This is an image.'},
               { 'author': 'user7', 'source': 'images/image6.jpg', 'caption': 'This is an image.'},
               { 'author': 'user8', 'source': 'images/image7.jpg', 'caption': 'This is an image.'}
];

var currentImageIndex;

var allImageThumbnails = document.querySelector('.image_thumbnails');
var lightBoxScreen = document.querySelector('.lightbox_screen');
var lightBoxImageContainers = document.querySelectorAll('.img_container');
var lightBoxImage = document.querySelector('.lb_image');
var backArrow = document.querySelector('.back_arrow');
var forwardArrow = document.querySelector('.forward_arrow');
var lightBoxCloseButton = document.querySelector('.lb_close_btn');

var setLightBoxImageSource = function (currentIndex) {
    // Set the global variable currentImageIndex to currentIndex
    currentImageIndex = currentIndex;
    var imageSource = images[currentIndex].source;
    lightBoxImage.setAttribute('src', imageSource);
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
        newImage.classList.add('image');

        // Create Container to place individual images in
        var thumbNailContainer = document.createElement('div');
        thumbNailContainer.classList.add('img_container');
        thumbNailContainer.appendChild(newImage);

        // Add image and container to page
        allImageThumbnails.appendChild(thumbNailContainer);

        // make a function to show the light box screen
        var showLightBox = function (event) {
            lightBoxScreen.classList.remove('hide');
            setLightBoxImageSource(currentIndex);
        }

        // Add event listener to image container to show light box when clicked
        thumbNailContainer.addEventListener('click', showLightBox);
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











//----------------  ADD IMAGES TO PAGE  --------------------------------

// for (var i = 0; i < images.length; i++) {
//     var image = images[i];
//     var newImage = document.createElement('img');
//     newImage.setAttribute('src', image.source);
//     newImage.classList.add('image');

//     var thumbNailContainer = document.createElement('div');
//     thumbNailContainer.classList.add('img_container');
//     thumbNailContainer.setAttribute('data-index', image.index);
//     thumbNailContainer.appendChild(newImage);

//     allImageThumbnails.appendChild(thumbNailContainer);
// }

//------------------ SHOW LIGHT BOX -------------------------------------


// var showLightBox = function (event) {
//     lightBoxScreen.classList.remove('hide');
//     currentIndex = Number(event.currentTarget.getAttribute('data-index'));
//     setImageSource(currentIndex);
// };

// for (var container of lightBoxImageContainers) {
//     container.addEventListener('click', showLightBox);
// }