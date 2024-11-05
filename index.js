import createHTMLChildElement from "/modules/createElement.js";


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
        document.querySelector('.toggleArrow').style.transform = 'rotate(180deg)';
        document.querySelector('.navToggle').style.borderRadius = '5px'
        //document.
    } else {
        document.querySelector('.toggleArrow').style.transform = 'rotate(0deg)';
        document.querySelector('.navToggle').style.borderRadius = '5px 5px 0 0'
        navScale = '1 1';
    }

    navigationBox.style.scale = navScale;

});