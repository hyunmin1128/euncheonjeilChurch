// 로그인 모달 열기
function openModal() {
    document.getElementById("loginModal").style.display = "flex";
  }
  
  // 로그인 모달 닫기
  function closeModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  // 모달 외부 클릭 시 닫기
  window.onclick = function (event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
      closeModal();
    }
  }
  
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }