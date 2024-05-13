// Add your inline JS here

// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.TxReport__content section');
//     const navLinks = document.querySelectorAll('.TxLinks__item a');
    
//     // Function to update the active link
//     function updateActiveLink() {
//         let currentActiveIndex = -1;
        
//         // Loop through sections to find the current active one
//         sections.forEach((section, index) => {
//             const sectionTop = section.getBoundingClientRect().top;
//             if (sectionTop - 100 <= 0) {
//                 currentActiveIndex = index;
//             }
//         });

//         // Update active link in the nav
//         navLinks.forEach((link, index) => {
//             if (index === currentActiveIndex) {
//                 link.parentElement.classList.add('active');
//             } else {
//                 link.parentElement.classList.remove('active');
//             }
//         });
//     }

//     // Event listener for scroll
//     window.addEventListener('scroll', updateActiveLink);

//     // Event listener for click on nav links
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             setTimeout(updateActiveLink, 10); // Timeout to ensure the page scrolls to the section before updating
//         });
//     });

//     // Initial update
//     updateActiveLink();
// });
