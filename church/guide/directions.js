window.onload = function () {
  if (typeof kakao === "undefined") {
      console.error("Kakao API 로드 실패");
      return;
  }
  var mapContainer = document.getElementById('map'); // 지도를 표시할 div
  var mapOption = {
      center: new kakao.maps.LatLng(37.486803, 126.937059), // 지도의 중심 좌표
      level: 3 // 확대 레벨
  };
  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

  var markerPosition = new kakao.maps.LatLng(37.486803, 126.937059);
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

  var infowindow = new kakao.maps.InfoWindow({
      content: '<div style="padding:5px;">은천제일교회</div>'
  });
  infowindow.open(map, marker);
};