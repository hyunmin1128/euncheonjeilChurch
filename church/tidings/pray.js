let editingPrayId = null;

// === 기도 요청 ===
function loadPrayers() {
    const prayList = document.getElementById("pray-list");
    const prayers = JSON.parse(localStorage.getItem("prayers") || "[]");

    if (prayers.length === 0) {
        prayList.innerHTML = "<p>등록된 기도 요청이 없습니다.</p>";
        return;
    }

    prayList.innerHTML = "";
    prayers.forEach((prayer) => {
        const prayerItem = document.createElement("article");
        prayerItem.classList.add("pray-item");

        prayerItem.innerHTML = `
            <h2><a href="pray-detail.html?id=${prayer.id}">${prayer.title}</a></h2>
            <p class="date">${prayer.date}</p>
            <button onclick="deletePrayer(${prayer.id})">삭제</button>
        `;
        prayList.appendChild(prayerItem);
    });
}

function deletePrayer(id) {
    let prayers = JSON.parse(localStorage.getItem("prayers") || "[]");
    prayers = prayers.filter((prayer) => prayer.id !== id);
    localStorage.setItem("prayers", JSON.stringify(prayers));
    loadPrayers();
}

// === 고정글 ===
function loadFixedPosts() {
    const fixedPostsContainer = document.getElementById("fixed-posts");
    const fixedPosts = JSON.parse(localStorage.getItem("fixedPosts") || "[]");

    if (fixedPosts.length === 0) {
        fixedPostsContainer.innerHTML = "<p>고정글이 없습니다. 새로운 고정글을 작성하세요!</p>";
        return;
    }

    // 고정글 출력
    fixedPostsContainer.innerHTML = fixedPosts.map(post =>
        `<div>${post.content} 
                <button onclick="deleteFixedPost(${post.id})">삭제</button></div>`
    ).join('');
}

function saveFixedPost() {
    const fixedInputElement = document.getElementById("fixed-input");
    const content = fixedInputElement.value.trim();
    if (!content) {
        alert("고정글 내용을 입력하세요!");
        return;
    }

    const fixedPosts = JSON.parse(localStorage.getItem("fixedPosts") || "[]");

    const newPost = {
        id: Date.now(),
        content: content // 🔥 undefined가 아닌 실제 값을 명확히 전달
    };

    fixedPosts.push(newPost);
    localStorage.setItem("fixedPosts", JSON.stringify(fixedPosts));

    // 모달 닫기 및 입력 필드 초기화
    closeFixedModal();
    loadFixedPosts();
}

function deleteFixedPost(id) {
    let fixedPosts = JSON.parse(localStorage.getItem("fixedPosts") || "[]");
            fixedPosts = fixedPosts.filter(post => post.id !== id);
            localStorage.setItem("fixedPosts", JSON.stringify(fixedPosts));
            loadFixedPosts();
}

function openFixedModal() {
    document.getElementById("fixed-modal").style.display = "flex";
}

function closeFixedModal() {
    document.getElementById("fixed-modal").style.display = "none";
    document.getElementById("fixed-input").value = ''; // 입력 필드 초기화
}

// === 초기화 ===
document.addEventListener("DOMContentLoaded", () => {
    loadPrayers();
    loadFixedPosts();
});
