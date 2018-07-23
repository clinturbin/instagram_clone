var images = [ 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg', 'images/img6.jpg' ];

// Get the container where all the image thumbnails will appear
var imageThumbnails = document.querySelector('.image_thumbnails');

for (var i = 0; i < images.length; i++) {
    // set a variable for the current image
    var image = images[i];
    // create an element for the image
    var newImage = document.createElement('img');
    // set attribute for image element
    newImage.setAttribute('src', image);
    // add class to image
    newImage.classList.add('image');

    // create a div element to serve as container for image
    var imageContainer = document.createElement('div');
    // add class to image container
    imageContainer.classList.add('img_container');
    // add image to image container
    imageContainer.appendChild(newImage);

    // add image container to container for all thumbnails
    imageThumbnails.appendChild(imageContainer);

}
