document.querySelectorAll('.nav-link span').forEach(span => {
    span.addEventListener('click', function(event) {
      // Prevent the default action if needed
      event.preventDefault();
      
      // Find the parent .dropdown-item
      const dropdownItem = this.closest('.dropdown-item');
      const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
      
      // Toggle visibility of the dropdown menu
      const isVisible = dropdownMenu.style.opacity === '1';
      dropdownMenu.style.opacity = isVisible ? '0' : '1';
      dropdownMenu.style.visibility = isVisible ? 'hidden' : 'visible';
      dropdownMenu.style.transform = isVisible ? 'translateY(-10px)' : 'translateY(0)';
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav-link span')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateY(-10px)';
      });
    }
  });
  