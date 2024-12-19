// 페이지 로드 시 로그인 상태 확인
window.onload = function () {
  loadLoginInfo();
};

// 로그인 상태 관리
function loadLoginInfo() {
  const username = localStorage.getItem('username'); // 사용자 이름
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // 로그인 여부 확인

  // 로그인 상태에 따라 버튼 표시 업데이트
  if (isLoggedIn && username) {
    document.getElementById('loginStatus').innerText = `현재 로그인 중: ${username}`;
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('signupButton').style.display = 'none';
    document.getElementById('logoutButton').style.display = 'block';
  } else {
    document.getElementById('loginStatus').innerText = '로그인하지 않았습니다.';
    document.getElementById('loginButton').style.display = 'block';
    document.getElementById('signupButton').style.display = 'block';
    document.getElementById('logoutButton').style.display = 'none';
  }
}

// 로그인 모달 열기
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'flex';
}

// 회원가입 모달 열기
function openSignupModal() {
  document.getElementById('signupModal').style.display = 'flex';
}

// 로그인 모달 닫기
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// 회원가입 모달 닫기
function closeSignupModal() {
  document.getElementById('signupModal').style.display = 'none';
}

// 로그인 기능
function login() {
  const username = document.getElementById('usernameInput').value;
  const userId = document.getElementById('userIdInput').value;
  const password = document.getElementById('passwordInput').value;

  if (username && userId && password) {
    // 로그인 정보를 로컬스토리지에 저장
    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', 'true');
    alert('로그인 성공!');
    closeLoginModal(); // 로그인 모달 닫기
    loadLoginInfo(); // 상태 업데이트
  } else {
    alert('닉네임, ID와 비밀번호를 모두 입력해주세요.');
  }
}

// 회원가입 기능
function signup() {
  const username = document.getElementById('signupUsernameInput').value;
  const userId = document.getElementById('signupUserIdInput').value;
  const password = document.getElementById('signupPasswordInput').value;

  if (username && userId && password) {
    // 회원가입 정보를 로컬스토리지에 저장
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
    localStorage.setItem('isLoggedIn', 'true');
    alert('회원가입이 완료되었습니다.');
    closeSignupModal(); // 회원가입 모달 닫기
    loadLoginInfo(); // 상태 업데이트
  } else {
    alert('모든 정보를 입력해주세요.');
  }
}

// 로그아웃 기능
function logout() {
  localStorage.removeItem('username'); // 사용자 이름 삭제
  localStorage.removeItem('isLoggedIn'); // 로그인 상태 삭제
  alert('로그아웃되었습니다.');
  loadLoginInfo(); // 상태 업데이트
}
