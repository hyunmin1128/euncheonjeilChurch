window.onload = function () {
  loadLoginInfo();
}

// 로그인 상태 확인
function loadLoginInfo() {
  const username = localStorage.getItem('username');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (username) {
    document.getElementById('loginStatus').innerText = `현재 로그인 중: ${username}`;
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('logoutButton').style.display = 'block';
  } else {
    document.getElementById('loginStatus').innerText = '로그인하지 않았습니다.';
    document.getElementById('loginButton').style.display = 'block';
    document.getElementById('logoutButton').style.display = 'none';
  }
}

// 로그인 모달 열기
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'flex';
}

// 로그인 모달 닫기
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// 로그인 버튼 클릭 시
function login() {
  const nickname = document.getElementById('usernameInput').value;
  const userId = document.getElementById('userIdInput').value;
  const password = document.getElementById('passwordInput').value;

  if (nickname && userId && password) {
    localStorage.setItem('username', nickname);
    localStorage.setItem('isLoggedIn', 'true');
    alert('로그인 성공!');
    closeLoginModal();
    loadLoginInfo();
  } else {
    alert('닉네임, ID와 비밀번호를 입력해주세요.');
  }
}

// 로그아웃 버튼 클릭 시
function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('isLoggedIn');
  alert('로그아웃되었습니다.');
  loadLoginInfo();
}
