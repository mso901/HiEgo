/** @format */

document.addEventListener('DOMContentLoaded', function () {
  // Get the elements
  var usernameInput = document.getElementById('username');
  var userSpan = document.getElementById('user');
  var submitButton = document.querySelector('.submit a');

  // Add an event listener to the anchor inside the submit button
  submitButton.addEventListener('click', function (event) {
    // Prevent the default behavior of the anchor (page navigation)
    event.preventDefault();

    // Get the entered username
    var enteredUsername = usernameInput.value;

    // Update the span with the entered username
    userSpan.textContent = enteredUsername;

    // Navigate to the next page
    window.location.href = submitButton.getAttribute('href');
  });
});
