window.onload = function () {
    console.log("Kakao 객체 상태:", window.kakao);

    if (window.kakao && window.kakao.maps) {
        console.log("Kakao Maps API 로드 성공!");
    } else {
        console.error("Kakao Maps API 로드 실패. API 키 또는 도메인 등록 확인 필요.");
        return;
    }

    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(37.486803, 126.937059),
        level: 3
    };

    var map = new kakao.maps.Map(mapContainer, mapOption);

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