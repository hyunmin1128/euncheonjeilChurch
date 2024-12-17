// 페이지 로드 시 로그인 상태 확인
window.onload = function() {
    loadLoginInfo();
  }
  
  // 로그인 정보를 불러오는 함수 (모든 페이지에서 호출)
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
  
  // 로그아웃 처리 함수
  function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('isLoggedIn');
    document.getElementById('loginStatus').innerText = '로그인하지 않았습니다.';
    document.getElementById('signupButton').style.display = 'block';
    document.getElementById('logoutButton').style.display = 'none';
  }
  