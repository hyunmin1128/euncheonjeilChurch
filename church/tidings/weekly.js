// 페이지 전환
function showPage(pageNumber) {
  // 모든 사진 숨기기
  const photo1 = document.getElementById('photo1');
  const photo2 = document.getElementById('photo2');

  if (pageNumber === 1) {
    photo1.style.display = 'block';
    photo2.style.display = 'none';
  } else if (pageNumber === 2) {
    photo1.style.display = 'none';
    photo2.style.display = 'block';
  }
}

// 사진 확대 기능
function openModal(img) {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  modalImage.src = img.src;
  modal.classList.add('active');
}

// 모달 닫기 기능
function closeModal() {
  const modal = document.getElementById('image-modal');
  modal.classList.remove('active');
}
// 초기 페이지 설정
window.onload = function () {
  showPage(1); // 페이지 로드 시 1페이지 사진 표시
};

function changePhotos(photo1Src, photo2Src) {
  // 두 개의 이미지를 변경
  const photo1 = document.getElementById('photo1');
  const photo2 = document.getElementById('photo2');

  photo1.src = photo1Src;
  photo2.src = photo2Src;
}
