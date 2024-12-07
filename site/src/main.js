import './style.css';
// Smooth scroll for the "Choose Your Style" button in the hero section
document.querySelector('#hero-screenshots-button').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default anchor click behavior
  const targetID = this.getAttribute('href'); // Get the target section ID
  const targetSection = document.querySelector(targetID); // Select the target section

  // Scroll smoothly to the target section
  targetSection.scrollIntoView({
      behavior: 'smooth'
  });
});

// For buttons, open links in a new tab
const allButtons = document.querySelectorAll('.style-button, .previous-releases-button, .screenshots-button');

allButtons.forEach(button => {
  button.addEventListener('click', function(e) {
      e.preventDefault();
      const link = this.getAttribute('href'); // Get the link
      
      console.log(`Opening link: ${link}`); // Debugging line to check if link is correct
      
      // Open the link in a new tab
      window.open(link, '_blank'); 
  });
});

// Screenshot modal functionality
const modal = document.getElementById("screenshot-modal");
const modalImg = document.getElementById("modal-img");

// Get all the screenshots
const screenshots = document.querySelectorAll(".screenshot");

// Add click event to each screenshot
screenshots.forEach(screenshot => {
  screenshot.addEventListener('click', function() {
      modal.classList.remove('hide'); // Ensure hide class is removed first
      modal.style.display = "flex"; // Make sure modal is displayed
      setTimeout(() => modal.classList.add('show'), 10); // Add show class after a small delay to trigger animation
      modalImg.src = this.src; // Set the image source
  });
});

// Close the modal when clicking outside the image
modal.addEventListener('click', function(event) {
  if (event.target === modal) { // Check if the click was on the modal background
      closeModal(); // Use the closeModal function to hide the modal
  }
});

// Function to close the modal
function closeModal() {
  modal.classList.remove('show'); // Remove the 'show' class to fade out
  modal.classList.add('hide'); // Add hide class to trigger reverse animation
  setTimeout(() => modal.style.display = "none", 300); // Hide modal after animation duration
}

// Listen for keydown events on the document
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is "Escape"
  if (event.key === 'Escape') {
      // Check if the modal is currently open (i.e., has the 'show' class)
      if (modal.classList.contains('show')) {
          closeModal(); // Call the function to close the modal
      }
  }
});