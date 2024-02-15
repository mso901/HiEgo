/** @format */

const signUpButton = document.querySelector('.submit');

function submit() {
  //빈 항목 검사
  const requiredFields = document.querySelectorAll('input');
  for (const inputElement of requiredFields) {
    const inputValue = inputElement.value.trim();

    if (inputValue === '') {
      alert('필수 항목을 입력해주세요.');
      return;
    }
  }

  //비밀번호 조건과 일치
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

  //생년월일, 연락처는 숫자만 입력
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

  //가입완료
  alert('가입이 완료되었습니다.');
  window.location.href = '../regist_done.html'; 
}

//입력값이 숫자인지 확인
function isValidNumericInput(inputValue) {
  return /^\d+$/.test(inputValue);
}
//비밀번호 조건 함수
function isValidPassword(password) {
  //비밀번호는 10~20자 이내로 대문자, 소문자, 숫자, 특수문자 중 2가지 이상을 포함해야 합니다.
  const passwordPattern =
    /^(?:(?=.*[A-Z])(?=.*[a-z])|(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*\d)|(?=.*[A-Z])(?=.*[!@#$%^&*()_+])|(?=.*[a-z])(?=.*[!@#$%^&*()_+])|(?=.*\d)(?=.*[!@#$%^&*()_+]))[A-Za-z\d!@#$%^&*()_+]{10,20}$/;
  return passwordPattern.test(password);
}

signUpButton.addEventListener('click', submit);
