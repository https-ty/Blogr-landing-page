// document.addEventListener("DOMContentLoaded", function () {
//     const hamburger = document.querySelector(".hmbgr");
//     const closeHamburger = document.querySelector(".close-hmbgr");
//     const navBar = document.querySelector(".nav-container .navbar ");

//     hamburger.addEventListener("click", function () {
//       navBar.classList.add("open");
//       hamburger.style.display = "none";
//       closeHamburger.style.display = "flex";
//     });

//     closeHamburger.addEventListener("click", function () {
//       navBar.classList.remove("open");
//       closeHamburger.style.display = "none";
//       hamburger.style.display = "flex";
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hmbgr");
  const closeHamburger = document.querySelector(".close-hmbgr");
  const navBar = document.querySelector(".nav-container .navbar");

  hamburger.addEventListener("click", function () {
    navBar.classList.add("open");
    hamburger.style.display = "none";
    closeHamburger.style.display = "flex";
  });

  closeHamburger.addEventListener("click", function () {
    navBar.classList.remove("open");
    closeHamburger.style.display = "none";
    hamburger.style.display = "flex";
  });

  function handleResize() {
    if (window.innerWidth > 899) {
      navBar.classList.remove("open");
      hamburger.style.display = "none";
      closeHamburger.style.display = "none";
    } else {
      hamburger.style.display = "flex";
      closeHamburger.style.display = "none";
    }
  }

  window.addEventListener("resize", handleResize);

  handleResize();
});

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".dropdown-item .nav-link");

//     navLinks.forEach(link => {
//       link.addEventListener("click", function (event) {
//         event.preventDefault();
//         const dropdownMenu = this.nextElementSibling;

//         // Toggle the dropdown menu
//         if (dropdownMenu.style.display === "flex") {
//           dropdownMenu.style.display = "none";
//         } else {
//           dropdownMenu.style.display = "flex";
//         }
//       });
//     });
//   });

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".dropdown-item .nav-link");
//     let currentOpenDropdown = null;

//     navLinks.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             const dropdownMenu = this.nextElementSibling;

//             // If there is an already open dropdown and it is not the current one, close it
//             if (currentOpenDropdown && currentOpenDropdown !== dropdownMenu) {
//                 currentOpenDropdown.style.display = "none";
//             }

//             // Toggle the current dropdown menu
//             if (dropdownMenu.style.display === "flex") {
//                 dropdownMenu.style.display = "none";
//                 currentOpenDropdown = null;  // Reset the currently open dropdown
//             } else {
//                 dropdownMenu.style.display = "flex";
//                 currentOpenDropdown = dropdownMenu;  // Update the currently open dropdown
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".dropdown-item .nav-link");
//     let currentOpenDropdown = null;

//     navLinks.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             const dropdownMenu = this.nextElementSibling;

//             // If there is an already open dropdown and it is not the current one, close it
//             if (currentOpenDropdown && currentOpenDropdown !== dropdownMenu) {
//                 currentOpenDropdown.style.display = "none";
//             }

//             // Toggle the current dropdown menu
//             if (dropdownMenu.style.display === "flex") {
//                 dropdownMenu.style.display = "none";
//                 currentOpenDropdown = null;  // Reset the currently open dropdown
//             } else {
//                 dropdownMenu.style.display = "flex";
//                 currentOpenDropdown = dropdownMenu;  // Update the currently open dropdown
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".dropdown-item .nav-link");
//     let currentOpenDropdown = null;

//     navLinks.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             const dropdownMenu = this.nextElementSibling;

//             // If there is an already open dropdown and it is not the current one, close it
//             if (currentOpenDropdown && currentOpenDropdown !== dropdownMenu) {
//                 currentOpenDropdown.classList.remove('show');
//             }

//             // Toggle the current dropdown menu
//             if (dropdownMenu.classList.contains('show')) {
//                 dropdownMenu.classList.remove('show');
//                 currentOpenDropdown = null;  // Reset the currently open dropdown
//             } else {
//                 dropdownMenu.classList.add('show');
//                 currentOpenDropdown = dropdownMenu;  // Update the currently open dropdown
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".dropdown-item .nav-link");
//     let currentOpenDropdown = null;

//     navLinks.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             const dropdownMenu = this.nextElementSibling;

//             // If there is an already open dropdown and it is not the current one, close it
//             if (currentOpenDropdown && currentOpenDropdown !== dropdownMenu) {
//                 currentOpenDropdown.classList.remove('show');
//             }

//             // Toggle the current dropdown menu
//             if (dropdownMenu.classList.contains('show')) {
//                 dropdownMenu.classList.remove('show');
//                 currentOpenDropdown = null;  // Reset the currently open dropdown
//             } else {
//                 dropdownMenu.classList.add('show');
//                 currentOpenDropdown = dropdownMenu;  // Update the currently open dropdown
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".dropdown-item .nav-link");
//     let currentOpenDropdown = null;

//     navLinks.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             const dropdownMenu = this.nextElementSibling;

//             // If there is an already open dropdown and it is not the current one, close it
//             if (currentOpenDropdown && currentOpenDropdown !== dropdownMenu) {
//                 currentOpenDropdown.classList.remove('show');
//                 currentOpenDropdown.previousElementSibling.classList.remove('rotate');
//             }

//             // Toggle the current dropdown menu
//             if (dropdownMenu.classList.contains('show')) {
//                 dropdownMenu.classList.remove('show');
//                 this.classList.remove('rotate');  // Reset rotation
//                 currentOpenDropdown = null;  // Reset the currently open dropdown
//             } else {
//                 dropdownMenu.classList.add('show');
//                 this.classList.add('rotate');  // Apply rotation
//                 currentOpenDropdown = dropdownMenu;  // Update the currently open dropdown
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".dropdown-item .nav-link");
  let currentOpenDropdown = null;

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const dropdownMenu = link.nextElementSibling;

      // Close any open dropdowns that are not the current one
      document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("show");
          menu.previousElementSibling.classList.remove("rotate");
        }
      });

      // Toggle the current dropdown
      dropdownMenu.classList.toggle("show");
      link.classList.toggle("rotate", dropdownMenu.classList.contains("show"));
    });
  });
});





























// Handle dropdown menu toggle on nav-link click

// document.addEventListener('DOMContentLoaded', function () {
//   const dropdownItems = document.querySelectorAll('.dropdown-item');

//   dropdownItems.forEach(item => {
//     item.addEventListener('click', function () {
//       const dropdownMenu = this.querySelector('.dropdown-menu');
//       const dropdownArrow = this.querySelector('.dropdown-arrow');

//       // Close other open dropdowns
//       dropdownItems.forEach(otherItem => {
//         if (otherItem !== item) {
//           otherItem.querySelector('.dropdown-menu').style.display = 'none';
//           otherItem.querySelector('.dropdown-arrow').style.transform = 'rotate(0deg)';
//         }
//       });

//       // Toggle the clicked dropdown
//       if (dropdownMenu.style.display === 'flex') {
//         dropdownMenu.style.display = 'none';
//         dropdownArrow.style.transform = 'rotate(0deg)';
//       } else {
//         dropdownMenu.style.display = 'flex';
//         dropdownArrow.style.transform = 'rotate(180deg)';
//       }
//     });
//   });
// });

// document.querySelectorAll('.dropdown-item').forEach(item => {
//   item.addEventListener('click', function(e) {
//     e.stopPropagation(); // Prevent click from propagating to document

//     const dropdownMenu = this.querySelector('.dropdown-menu');

//     // Close other open dropdown menus
//     document.querySelectorAll('.dropdown-menu').forEach(menu => {
//       if (menu !== dropdownMenu) {
//         menu.classList.remove('show');
//       }
//     });

//     // Toggle the current dropdown menu
//     dropdownMenu.classList.toggle('show');
//   });
// });

// // Close all dropdowns if clicking outside
// document.addEventListener('click', function() {
//   document.querySelectorAll('.dropdown-menu').forEach(menu => {
//     menu.classList.remove('show');
//   });
// });

// document.querySelectorAll('.dropdown-item').forEach(item => {
//   item.addEventListener('click', function(e) {
//     e.stopPropagation(); // Prevent click from propagating to document

//     const dropdownMenu = this.querySelector('.dropdown-menu');

//     // Check if this dropdown menu is currently open
//     const isOpen = dropdownMenu.classList.contains('show');

//     // Close all dropdown menus
//     document.querySelectorAll('.dropdown-menu').forEach(menu => {
//       menu.classList.remove('show');
//     });

//     // If this dropdown menu was not open, open it
//     if (!isOpen) {
//       dropdownMenu.classList.add('show');
//     }
//   });
// });

// // Close all dropdowns if clicking outside
// document.addEventListener('click', function() {
//   document.querySelectorAll('.dropdown-menu').forEach(menu => {
//     menu.classList.remove('show');
//   });
// });
