// Set a variable for our Return to top button element.
const scrollToTopButton = document.getElementById('return-to-top-wrapper');
const leftNavBottom = document.getElementById('left-nav').getBoundingClientRect().bottom;
const leftNavBottomPosition = leftNavBottom - 20;

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
    const footerTop = document.getElementById('footer').offsetTop;
    const footerTopPosition = footerTop - 20;

    // Get the current scroll value
    let y = window.scrollY;
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 500 && y < footerTop - window.innerHeight) {
        scrollToTopButton.className = "usa-identifier__required-links-item return-to-top margin-bottom-5 fixed";
    } else {
        scrollToTopButton.className = "usa-identifier__required-links-item return-to-top margin-bottom-5 not-fixed";
    }
};

const checkWidthAndApplyStyle = () => {
    if (window.innerWidth >= 1024) {
        window.addEventListener("scroll", scrollFunc);
    } else {
        window.removeEventListener("scroll", scrollFunc);
        scrollToTopButton.className = "usa-identifier__required-links-item return-to-top margin-bottom-5 not-fixed";

    }
}

checkWidthAndApplyStyle();

window.addEventListener("scroll", scrollFunc);
window.addEventListener('resize', checkWidthAndApplyStyle);