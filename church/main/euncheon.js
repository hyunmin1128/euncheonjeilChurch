// 회원가입 정보를 저장하는 예제
function saveLoginInfo(username, userId, password) {
  // 비밀번호는 보안상 이유로 저장하지 않습니다.
  localStorage.setItem('username', username);
  localStorage.setItem('userId', userId);
}

function loadLoginInfo() {
  const username = localStorage.getItem('username');
  
  if (username) {
    document.getElementById('loginStatus').innerHTML = `현재 로그인 중: ${username}`;
    document.getElementById('logoutButton').style.display = 'block';
    document.getElementById('signupButton').style.display = 'none';
  } else {
    document.getElementById('loginStatus').innerHTML = '로그인하지 않았습니다.';
    document.getElementById('logoutButton').style.display = 'none';
    document.getElementById('signupButton').style.display = 'block';
  }
}

function clearLoginInfo() {
  localStorage.removeItem('username');
  localStorage.removeItem('userId');
  console.log('로그인 정보가 삭제되었습니다.');
  loadLoginInfo();
}

// 회원가입 모달 열기
function openModal() {
  document.getElementById("signupModal").style.display = "flex";
}

// 회원가입 모달 닫기
function closeModal() {
  document.getElementById("signupModal").style.display = "none";
}

// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
  const modal = document.getElementById("signupModal");
  if (event.target === modal) {
    closeModal();
  }
}

// 회원가입 버튼 클릭 시
function signup() {
  const username = document.getElementById('usernameInput').value;
  const userId = document.getElementById('userIdInput').value;
  const password = document.getElementById('passwordInput').value;
  
  if (username && userId && password) {
    saveLoginInfo(username, userId, password);
    closeModal();
    loadLoginInfo();
  }
}

// 초기 페이지 로드 시 로그인 상태 확인
window.onload = function() {
  loadLoginInfo();
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // 페이지 로드 시 로그인 상태 확인
  if (localStorage.getItem('isLoggedIn') === 'true') {
      document.getElementById('loginStatus').innerText = '로그인된 상태입니다.';
      document.getElementById('signupButton').style.display = 'none';
      document.getElementById('logoutButton').style.display = 'block';
  }
});

// 로그인 함수
function login() {
  // 로그인 처리 로직 추가 (예: 서버와 통신 후 로그인 성공 시)
  localStorage.setItem('isLoggedIn', 'true');
  document.getElementById('loginStatus').innerText = '로그인된 상태입니다.';
  document.getElementById('signupButton').style.display = 'none';
  document.getElementById('logoutButton').style.display = 'block';
}

// 로그아웃 함수
function logout() {
  localStorage.removeItem('isLoggedIn');
  document.getElementById('loginStatus').innerText = '로그인하지 않았습니다.';
  document.getElementById('signupButton').style.display = 'block';
  document.getElementById('logoutButton').style.display = 'none';
}

// 로그아웃 버튼에 이벤트 리스너 추가
document.getElementById('logoutButton').addEventListener('click', logout);

// 5초마다 다음 슬라이드로 전환
setInterval(showNextSlide, 5000);
