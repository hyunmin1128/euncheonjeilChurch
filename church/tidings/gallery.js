function openModal(index) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");

    // 이미지와 설명 정보를 가져오기
    const galleryItems = document.getElementsByClassName("gallery-item");
    const imgElement = galleryItems[index].getElementsByTagName("img")[0];
    const descriptionElement = galleryItems[index].getElementsByClassName("description")[0];

    // 모달에 이미지와 설명 설정
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    modalCaption.innerText = descriptionElement.innerText;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// 모달 창 외부 클릭 시 닫기
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
