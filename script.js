document.addEventListener('DOMContentLoaded', function() {
  const subjectCards = document.querySelectorAll('.subject-card');
  
  // add click event listeners to subjects
  subjectCards.forEach(card => {
      const header = card.querySelector('.subject-header');
      
      header.addEventListener('click', function() {
          subjectCards.forEach(otherCard => {
              if (otherCard !== card && otherCard.classList.contains('expanded')) {
                  otherCard.classList.remove('expanded');
              }
          });
          
          card.classList.toggle('expanded');
      });
  });
  
  // close expanded menus when clicking outside
  document.addEventListener('click', function(e) {
      if (!e.target.closest('.subject-card')) {
          subjectCards.forEach(card => {
              card.classList.remove('expanded');
          });
      }
  });
});