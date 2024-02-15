 
    const usernameInput = document.getElementById('username');
    const idCheckButton = document.getElementById('idCheck');

    idCheckButton.addEventListener('click', function () {
      // Get the entered username
      const enteredUsername = usernameInput.value;

      // Check if the username is not empty
      if (enteredUsername.trim() === '') {
        alert('아이디를 입력해주세요.');
        return;
      }

      // Check if the username meets the conditions
      if (!isValidUsername(enteredUsername)) {
        alert('영문, 숫자 8~15자 이내로 입력해주세요.');
        return;
      }

      // If the conditions are met, assume the username is available
      alert('사용 가능한 아이디입니다.');
    });

    // Function to check if the entered username meets the conditions
    function isValidUsername(username) {
      // Regex pattern for alphanumeric, 8 to 15 characters
      const usernamePattern = /^[a-zA-Z0-9]{8,15}$/;
      return usernamePattern.test(username);
    }
