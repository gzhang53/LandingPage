/**
 *
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll("section");

const nav = document.getElementById('navbar__list');

const navlist = document.querySelector('ul');


/**
 * End Global Variables
 * Start Helper Functions
 *set active section when scroll
*/

// set the section being viewed as active and change the style of active anchor accordingly
function activeStatus(){

for (i=0 ; i<(sections.length);i++){

//https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
  const view = sections[i].getBoundingClientRect();

//check the position of section
  if(view.top <= 150 && view.bottom > 150){

  sections[i].classList.add('your-active-class');

  const activeAnchor = document.querySelectorAll('a')[i];
// check the style of active anchor
  activeAnchor.style.cssText = "background: red;";

  }

  else {

    sections[i].classList.remove('your-active-class');

    const inactiveAnchor = document.querySelectorAll('a')[i];

    inactiveAnchor.style.cssText = "background: green;";

  }
  }
}



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//dynamically add nav items
for(i=0 ; i<(sections.length);i++){

  const item = document.createElement('li');

  const anchor = document.createElement('a');

  navlist.appendChild(item);

  anchor.href = `#section${i+1}`;

  anchor.text = sections[i].querySelector('h2').textContent;

  console.log(anchor.text);

  item.appendChild(anchor);


}




// add event listerner to the window and bound to the scroll event
window.addEventListener('scroll', activeStatus);




/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
//https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set sections as active
