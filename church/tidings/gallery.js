let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const descriptions = document.querySelectorAll('.gallery-item .description');

// 갤러리 모달 열기
function openGalleryModal(index) {
  currentImageIndex = index;
  updateGalleryImage();
  document.getElementById('galleryModal').style.display = 'flex';
}

// 갤러리 모달 닫기
function closeGalleryModal() {
  document.getElementById('galleryModal').style.display = 'none';
}

// 갤러리 이미지 업데이트
function updateGalleryImage() {
  const imgSrc = images[currentImageIndex].src;
  const imgDescription = descriptions[currentImageIndex].innerText;

  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('modal-caption').innerText = imgDescription;
}

// 이전/다음 이미지로 이동
function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1; // 처음으로 돌아감
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0; // 마지막으로 돌아감
  }
  updateGalleryImage();
}
