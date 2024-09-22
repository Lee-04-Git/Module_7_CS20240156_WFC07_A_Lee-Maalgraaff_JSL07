document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      // added my personal name and message outputs
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = "I am an aspiring web developer!";
      const courseNameInput = "Lee Maalgraaff"; 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      // added inner.html and more text content
      certificateContent.innerHTML = `
       <h3>Congratulations, ${studentName}!</h3>
       <p>${personalMessage}</p>
       <p>You've successfully completed ${courseName}!</p>
    `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    // addded event listener for modal close function
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none'; 
    });
  });
  