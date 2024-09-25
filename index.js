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
      // getId's for personal message and course name
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');
  
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
      <h1>Certificate of Completion!</h1>
      <p>This is to certify that</p>
       <h3> ${studentName}!</h3>
       <p>Has almost completed the</p>
       <h3>${courseName}!</h3>
       <p>with legendary perseverance and cat-like curiosity for never giving up.🏆 </p>
       <img class="logo" src="logo.png" alt="logo">
       <h3>${personalMessage}</h3>
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
  