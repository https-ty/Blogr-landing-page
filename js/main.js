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
  
  // Function to open the menu
  hamburger.addEventListener("click", function () {
      navBar.classList.add("open");
      hamburger.style.display = "none";
      closeHamburger.style.display = "flex";
  });

  // Function to close the menu
  closeHamburger.addEventListener("click", function () {
      navBar.classList.remove("open");
      closeHamburger.style.display = "none";
      hamburger.style.display = "flex";
  });

  // Handle resizing the window
  function handleResize() {
      if (window.innerWidth > 899) {
          navBar.classList.remove("open");
          hamburger.style.display = "none"; // Hide hamburger button
          closeHamburger.style.display = "none"; // Hide close button
      } else {
          hamburger.style.display = "flex"; // Show hamburger button
          closeHamburger.style.display = "none"; // Hide close button
      }
  }

  // Add resize event listener
  window.addEventListener("resize", handleResize);

  // Initial check in case the page loads with a width greater than 899px
  handleResize();
});



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
  

  
  
  