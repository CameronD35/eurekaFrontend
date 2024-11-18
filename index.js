import createHTMLChildElement from "/modules/createElement.js";

const globalSections = [document.getElementById('landingSection'), document.getElementById('locationsSection')]

window.addEventListener('click', (event) => {

    let ifClickInside = document.getElementById('navToggle').contains(event.target);
    console.log(ifClickInside);

    if(!ifClickInside){
        return;
    }

    let navigationBox = document.querySelector('.topNavigation');
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

document.querySelector('.sideNavigation').addEventListener('mouseenter', (event) => {
    let colorOverlayStyle = document.querySelector('.colorOverlay').style;
    let navbarStyle = document.querySelector('.sideNavbar').style;
    let sectionTitleBoxArray = document.querySelectorAll('.sectionTitleBox');

    console.log('test');
    document.querySelector('.sideNavigation').style.transform = 'scale(2)';
    navbarStyle.boxShadow = '0 0 25px rgba(0, 0, 0, 0.6)';
    colorOverlayStyle.width = `100vw`;
    colorOverlayStyle.height = `100vw`;
    colorOverlayStyle.opacity = 0.3;

    sectionTitleBoxArray.forEach((elem, i) => {
        elem.style.opacity = 1;
        elem.addEventListener('mouseenter', detectHoverOnSectionText);
        elem.addEventListener('mouseleave', detectExitSectionText);
    });


});

document.querySelector('.sideNavigation').addEventListener('mouseleave', (event) => {
    let colorOverlayStyle = document.querySelector('.colorOverlay').style;
    let sectionTitleBoxArray = document.querySelectorAll('.sectionTitleBox');

    console.log('test');
    document.querySelector('.sideNavigation').style.transform = '';
    event.target.style.boxShadow = ''
    colorOverlayStyle.width = `0`;
    colorOverlayStyle.height = `0`;
    colorOverlayStyle.opacity = 0;

    sectionTitleBoxArray.forEach((elem, i) => {
        elem.style.opacity = 0;
        elem.removeEventListener('mouseenter', detectHoverOnSectionText);
        elem.removeEventListener('mouseleave', detectExitSectionText);
    });
});

function detectHoverOnSectionText(event){
    //event.target.children[0].style.color = 'var(--eurekaGreen)';
    event.target.children[0].style.scale = '2';
}

function detectExitSectionText(event){
    //event.target.children[0].style.color = 'var(--eurekaWhite)';
    event.target.children[0].style.scale = '1';
}

function detectForCurrentSection(){
    globalSections.forEach((elem) => {
        elem.addEventListener('click', () => {
            console.log('yoooo');
        })
    })
}

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting){
            console.log('it is rendered')
        }
    }
})

detectForCurrentSection()