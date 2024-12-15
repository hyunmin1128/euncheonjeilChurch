let currentIndex = 0;

    function openModal(index) {
        const images = document.querySelectorAll('.gallery-item img');
        const descriptions = document.querySelectorAll('.gallery-item .description');
        
        currentIndex = index;
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const modalCaption = document.getElementById('modal-caption');
        
        modal.style.display = 'flex'; 
        modalImg.src = images[index].src; 
        modalCaption.textContent = descriptions[index].textContent; 
    }

    function closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none'; 
    }

    function changeImage(direction) {
        const images = document.querySelectorAll('.gallery-item img');
        const descriptions = document.querySelectorAll('.gallery-item .description');
        
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        
        const modalImg = document.getElementById('modal-img');
        const modalCaption = document.getElementById('modal-caption');
        
        modalImg.src = images[currentIndex].src; 
        modalCaption.textContent = descriptions[currentIndex].textContent; 
    }

// 모달 창 외부 클릭 시 닫기
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
