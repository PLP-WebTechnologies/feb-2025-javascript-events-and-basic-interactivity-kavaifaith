// Make sure this code runs AFTER the page loads
document.addEventListener('DOMContentLoaded', function() {
  const nextButton = document.getElementById('next1');
  
  if (nextButton) {
      nextButton.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Basic validation
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          
          if (name && email && password.length >= 8) {
              document.getElementById('step1-content').classList.remove('active');
              document.getElementById('step2-content').classList.add('active');
              
              // Update step indicator
              document.getElementById('step1').classList.remove('active');
              document.getElementById('step2').classList.add('active');
          } else {
              alert('Please fill all fields correctly (password needs 8+ characters)');
          }
      });
  } else {
      console.error('Could not find the next button! Check your HTML ID');
  }
});