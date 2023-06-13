// JavaScript code to add animation to the intro section

// Get the intro element
const introElement = document.querySelector('.intro');

// Define the animation properties
const animation = introElement.animate([
  { opacity: 0, transform: 'translateY(-20px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 1000, // Animation duration in milliseconds
  easing: 'ease-out', // Animation easing function
  delay: 1000 // Delay before starting the animation
});

// Add a class to the intro element when the animation starts
introElement.classList.add('animate');

// Listen for the animation to finish
animation.onfinish = () => {
  introElement.classList.remove('animate');
};
