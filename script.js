// Function to add scroll event listener
function changeNavStyleOnScroll() {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar.offsetHeight;
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
      if (window.scrollY >= navbarHeight) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    });
  }
  
  // Function to change style on hover
  function changeStyleOnHover() {
    const navLinks = document.querySelectorAll('#navbar ul li a');
    
    // Add mouseover and mouseout event listeners
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#555';
      });
      link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
      });
    });
  }
  
  // Call functions when the document is loaded
  document.addEventListener('DOMContentLoaded', () => {
    changeNavStyleOnScroll();
    changeStyleOnHover();
  });
  