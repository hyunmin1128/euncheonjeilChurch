// 페이지 로드 시 지도 초기화
function initMap() {
    // 지도의 중심 위치 설정 (예: 서울)
    const mapCenter = new kakao.maps.LatLng(37.4868413825609, 126.939647423375);

    // 지도 옵션 설정
    const mapOptions = {
      center: mapCenter, // 지도 중심 좌표
      level: 3 // 지도 확대 레벨 (낮을수록 확대)
    };

    // 지도를 지정한 HTML 요소에 표시
    const map = new kakao.maps.Map(document.getElementById('map'), mapOptions);

    // 마커 추가
    const marker = new kakao.maps.Marker({
      position: mapCenter,
      map: map
    });
  }

  // 페이지 로드 후 initMap 함수 호출
  window.onload = initMap;