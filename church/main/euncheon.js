// 슬라이드 전환 기능
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// 슬라이드 표시
function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// 5초마다 다음 슬라이드로 전환
setInterval(showNextSlide, 5000);

// 섹션 콘텐츠 로드 기능
const sections = [
  { url: '../tidings/notification.html', elementId: 'notification-content' },
  { url: '../tidings/weekly.html', elementId: 'weekly-content' },
  { url: '../tidings/pray.html', elementId: 'pray-content' },
  { url: '../tidings/gallery.html', elementId: 'gallery-content' }
];

// 섹션 내용을 가져와서 삽입
function loadContent(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const contentPreview = data.replace(/<[^>]*>/g, '').substring(0, 200) + '...';
      document.getElementById(elementId).innerText = contentPreview;
    })
    .catch(error => {
      console.error('Error loading content:', error);
      document.getElementById(elementId).innerText = '내용을 불러오지 못했습니다.';
    });
}

// 모든 섹션의 콘텐츠를 로드
sections.forEach(section => {
  loadContent(section.url, section.elementId);
});

// 페이지 초기화
document.addEventListener('DOMContentLoaded', function () {
  console.log('Euncheon main page loaded');
});

// 주보 이미지를 로드하는 함수
function loadWeeklyPhotos() {
  const weeklyContainer = document.getElementById('weekly-photos');

  // 주보 이미지 경로와 연결될 상세 페이지 경로
  const weeklyData = [
    { image: '../image/weekly/241208_1.png', link: '../tidings/weekly.html' },
    { image: '../image/weekly/241208_2.png', link: '../tidings/weekly.html' }
  ];

  weeklyData.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.link;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = "Weekly Bulletin";

    link.appendChild(img);
    weeklyContainer.appendChild(link);
  });
}

// 페이지 로드 시 주보 로드
document.addEventListener('DOMContentLoaded', loadWeeklyPhotos);



// gallery.html의 사진을 로드하는 함수
function loadGalleryPhotos() {
  const galleryContainer = document.getElementById('gallery-photos');

  // gallery.html에서 이미지 경로를 불러오기 (여기서는 예시로 경로를 하드코딩)
  const photoPaths = [
    '../image/Gallery/gallery1.jpeg',
    '../image/Gallery/gallery2.jpeg',
    '../image/Gallery/gallery3.jpeg',
    '../image/Gallery/gallery4.jpeg',
    '../image/Gallery/gallery5.jpeg',
    '../image/Gallery/gallery6.jpeg'
  ];

  photoPaths.forEach((path) => {
    const img = document.createElement('img');
    img.src = path;
    img.alt = "Gallery Image";
    galleryContainer.appendChild(img);
  });
}

// 페이지 로드 시 사진 로드
document.addEventListener('DOMContentLoaded', loadGalleryPhotos);
