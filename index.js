import createHTMLChildElement from "/modules/createElement.js";

document.querySelector('.toggleContent').addEventListener('mouseenter', () => {
    //console.log('hi there');

    let toggleContentBox = document.getElementById('toggleContent');

    toggleContentBox.replaceChildren();

    createHTMLChildElement(toggleContentBox, 'span', 'toggleText', 'Hide Nav', 'toggleText');

});

window.addEventListener('click', (target) => {
    console.log(target);
});

document.querySelector('.toggleContent').addEventListener('mouseout', () => {
    //console.log('byw there');

    let toggleContentBox = document.getElementById('toggleContent');

    toggleContentBox.replaceChildren();

    let arrow = createHTMLChildElement(toggleContentBox, 'img', 'toggleArrow', null, 'toggleArrow');
    arrow.src = 'image-assets/arrow.png';
});