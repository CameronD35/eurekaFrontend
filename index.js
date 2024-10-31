import createHTMLChildElement from "/modules/createElement.js";

document.querySelector('.navToggle').addEventListener('mouseover', () => {
    console.log('hi there');

    let toggleContentBox = document.getElementById('toggleContent');

    toggleContentBox.replaceChildren();

    createHTMLChildElement(toggleContentBox, 'span', 'toggleText', 'Hide Nav', 'toggleText');
});

document.querySelector('.navToggle').addEventListener('mouseout', () => {
    console.log('byw there');

    let toggleContentBox = document.getElementById('toggleContent');

    toggleContentBox.replaceChildren();

    let arrow = createHTMLChildElement(toggleContentBox, 'img', 'toggleArrow', null, 'toggleArrow');
    arrow.src = 'image-assets/arrow.png';
})