import createHTMLChildElement from "/modules/createElement.js";

const globalSections = [document.getElementById('landingSection'), document.getElementById('locationsSection')]

let sections = [];

let observerParameters = {
    threshold: 0.55
}

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        //console.log(entry.target);

        sections.forEach((section) => {
            console.log(section.element.id, entry.target.id)
            if(entry.target.id === section.element.id){

                //console.log('hello');

                // Sets the little green section's translation to a position based on the sections order
                let highlightedSectionTranslationPercent = 100*section.sectionID;
                
                // Actually moves the little green section
                document.querySelector('.currentSection').style.transform = `translateY(${highlightedSectionTranslationPercent}%)`;

                section.title.style.color = 'var(--eurekaGreen)';
            } else {
                section.title.style.color = 'var(--eurekaWhite)';
            }
        })
    }
}, observerParameters);



class PageSection {
    constructor(sectionTitle, sectionID, elementID, observerFunction){
        this.sectionTitle = sectionTitle;
        this.sectionID = sectionID;
        this.element = document.getElementById(elementID);
        this.observerFunction = observerFunction;
        this.observe;
        this.title;

        console.log(this.element)

        sections.push(this);
    }

    createSidebarSection(){
        let titleBox = createHTMLChildElement(document.querySelector('.sectionTitlesContainer'), 'div', 'sectionTitleBox', null, `${(this.sectionTitle).replaceAll(/\s/g, "")}SectionTitleBox`);
        let title = createHTMLChildElement(titleBox, 'span', 'sectionTitle', this.sectionTitle, `${(this.sectionTitle).replaceAll(/\s/g, "")}Title`);
        this.title = title;
    }

    createObserverEvent(){
        this.observe = observer.observe(this.element);
    }

    moveSideNav(sectionID){
        let sideNavIndicator = document.querySelector('.currentSection');
    }

    checkIfInFocus(){
        document.querySelector('.currentSection').style.transform = `${(100/sections.length)*sectionID}`;
    }

}


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

observer.observe(document.querySelector('.locationsSection'));


let landingSection = new PageSection('Eureka', 0, 'landingSection', () => {2+2;})
landingSection.createSidebarSection();
landingSection.createObserverEvent();

let aboutUsSection = new PageSection('About Us', 1, 'aboutUsSection', () => {2+2;})
aboutUsSection.createSidebarSection();
aboutUsSection.createObserverEvent();


let locationsSection = new PageSection('Locations', 2, 'locationsSection', () => {2+2;})
locationsSection.createSidebarSection();
locationsSection.createObserverEvent();

let ppSection = new PageSection('pp', 3, 'ppSection', () => {2+2;})
ppSection.createSidebarSection();
ppSection.createObserverEvent();

detectForCurrentSection();
console.log(sections)