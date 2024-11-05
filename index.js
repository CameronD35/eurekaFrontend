import createHTMLChildElement from "/modules/createElement.js";

document.querySelector('.toggleContent').addEventListener('mouseenter', () => {
    //console.log('hi there');

    let toggleContentBox = document.getElementById('toggleContent');

    toggleContentBox.replaceChildren();

    createHTMLChildElement(toggleContentBox, 'span', 'toggleText', 'Hide Nav', 'toggleText');

});

window.addEventListener('click', (event) => {

    let ifClickInside = document.getElementById('navToggle').contains(event.target);
    console.log(ifClickInside);

    if(!ifClickInside){
        return;
    }

    let navigationBox = document.querySelector('.navigation');
    let navScale = navigationBox.style.scale;
    console.log(navScale);

    let navOpen = (() => {
        console.log('hello')
        if(navScale != "1 0"){
            return true;
        } else {
            return false;
        }
    })();
    console.log('working')
    if(navOpen){
        navScale = '1 0';
        //document.
    } else {
        navScale = '1 1';
    }

    navigationBox.style.scale = navScale;

});

document.querySelector('.toggleContent').addEventListener('mouseleave', () => {
    //console.log('byw there');

    let toggleContentBox = document.getElementById('toggleContent');

    toggleContentBox.replaceChildren();

    let arrow = createHTMLChildElement(toggleContentBox, 'img', 'toggleArrow', null, 'toggleArrow');
    arrow.src = 'image-assets/arrow.png';
});