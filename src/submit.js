/** @format */

document.addEventListener('DOMContentLoaded', function () {
  const signUpButton = document.querySelector('.submit');
  signUpButton.addEventListener('click', function () {
    // Validate password and password confirmation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('repassword').value;
    if (!isValidPassword(password)) {
      alert(
        '비밀번호는 10~20자리의 영문, 숫자, 특수문자 중 2종류 이상을 조합해야 합니다.'
      );
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    // Validate numeric input for 생년월일, 연락처
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const phone = document.getElementById('phone').value;

    if (
      !isValidNumericInput(year) ||
      !isValidNumericInput(month) ||
      !isValidNumericInput(day) ||
      !isValidNumericInput(phone)
    ) {
      alert('생년월일, 연락처에는 숫자만 입력해주세요.');
      return;
    }

    // Validate empty fields
    const requiredFields = document.querySelectorAll('.essential');
    for (const field of requiredFields) {
      const inputElement =
        field.parentElement.nextElementSibling.querySelector('input');
      const inputValue = inputElement.value.trim();

      if (inputValue === '') {
        alert('필수 항목을 입력해주세요.');
        return;
      }
    }

    // If all validations pass, you can proceed with the sign-up logic
    alert('가입이 완료되었습니다. (실제 가입 처리를 여기에 추가하세요)');
  });

  // Function to validate if the input is numeric
  function isValidNumericInput(inputValue) {
    return /^\d+$/.test(inputValue);
  }
  // Function to validate password
  function isValidPassword(password) {
    // Password should be 10~20 characters and include at least 2 types among uppercase, lowercase, numbers, and special characters
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,20}$/;
    return passwordPattern.test(password);
  }
});
