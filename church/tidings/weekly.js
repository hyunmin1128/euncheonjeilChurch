// 페이지 전환
function showPage(pageNumber) {
  const photo1 = document.getElementById('weekly-photo1');
  const photo2 = document.getElementById('weekly-photo2');

  if (pageNumber === 1) {
    photo1.style.display = 'block';
    photo2.style.display = 'none';
  } else if (pageNumber === 2) {
    photo1.style.display = 'none';
    photo2.style.display = 'block';
  }
}

// 주보 모달 열기
function openWeeklyModal(img) {
  const modal = document.getElementById('weekly-modal');
  const modalImage = document.getElementById('weekly-modal-image');
  modalImage.src = img.src;
  modal.classList.add('active');
}

// 주보 모달 닫기
function closeWeeklyModal() {
  const modal = document.getElementById('weekly-modal');
  modal.classList.remove('active');
}

// 초기 페이지 설정
window.onload = function () {
  showPage(1); // 페이지 로드 시 1페이지 사진 표시
};

// 페이지 전환
function changeWeeklyPhotos(photo1Src, photo2Src) {
  const photo1 = document.getElementById('weekly-photo1');
  const photo2 = document.getElementById('weekly-photo2');

  photo1.src = photo1Src;
  photo2.src = photo2Src;
}