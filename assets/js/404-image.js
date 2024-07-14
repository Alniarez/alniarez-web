
let images = [
    {src: '/assets/images/404/enlarge.gif', text: 'Enlarge your guinea pig'},

    // From https://web.archive.org/web/20091020065720/http://geocities.com/EnchantedForest/6053/kids/kidslinks.html
    {src: '/assets/images/404/animated-pig-carrot.gif', text: 'Carrot time'},

    // From https://web.archive.org/web/20091027094025/http://www.geocities.com/Petsburgh/2979/pigs2.html
    {src: '/assets/images/404/Gizanimated.gif', text: 'Wheeeeep!'},
]

function setImage() {
    let imageSelected = images[Math.floor(Math.random() * images.length)];
    let imageElement = document.getElementById('image-404')
    imageElement.src = imageSelected.src;
    imageElement.alt = imageSelected.text;
    imageElement.title = imageSelected.text;
}

setImage();
