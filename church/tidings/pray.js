let editingPostId = null; // 수정 중인 고정글 ID

// === 기도 요청 ===

// 기도 요청 로드
function loadPrayers() {
    const prayList = document.getElementById("pray-list");
    prayList.innerHTML = ""; // 기존 내용 초기화
    const prayers = JSON.parse(localStorage.getItem("prayers") || "[]");

    if (prayers.length === 0) {
        prayList.innerHTML = "<p>등록된 기도 요청이 없습니다.</p>";
        return;
    }

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

// 기도 요청 작성
function addPrayer(title, date) {
    const prayers = JSON.parse(localStorage.getItem("prayers") || "[]");
    const newPrayer = {
        id: Date.now(),
        title: title,
        date: date,
    };

    prayers.push(newPrayer);
    localStorage.setItem("prayers", JSON.stringify(prayers));
    loadPrayers();
}

// 기도 요청 삭제
function deletePrayer(id) {
    let prayers = JSON.parse(localStorage.getItem("prayers") || "[]");
    prayers = prayers.filter((prayer) => prayer.id !== id);
    localStorage.setItem("prayers", JSON.stringify(prayers));
    loadPrayers();
}

// === 고정글 ===

// 고정글 로드
function loadFixedPosts() {
    const fixedPosts = JSON.parse(localStorage.getItem("fixedPosts") || "[]");
    const fixedPostsContainer = document.getElementById("fixed-posts");
    fixedPostsContainer.innerHTML = ""; // 초기화

    if (fixedPosts.length === 0) {
        fixedPostsContainer.innerHTML = "<p>고정글이 없습니다. 새로운 고정글을 작성하세요!</p>";
        return;
    }

    fixedPosts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("fixed-post");

        postElement.innerHTML = `
            <p onclick="editFixedPost(${post.id})" style="cursor: pointer;">${post.title}</p>
            <button onclick="deleteFixedPost(${post.id})" style="margin-left: 10px;">삭제</button>
        `;

        fixedPostsContainer.appendChild(postElement);
    });
}

// 고정글 삭제
function deleteFixedPost(postId) {
    let fixedPosts = JSON.parse(localStorage.getItem("fixedPosts") || "[]");
    fixedPosts = fixedPosts.filter((post) => post.id !== postId);
    localStorage.setItem("fixedPosts", JSON.stringify(fixedPosts));
    loadFixedPosts();
}

// 고정글 저장
function saveFixedPost() {
    const content = document.getElementById("fixed-input").value.trim();
    if (!content) {
        alert("고정글 내용을 입력하세요!");
        return;
    }

    const fixedPosts = JSON.parse(localStorage.getItem("fixedPosts") || "[]");

    if (editingPostId !== null) {
        const postIndex = fixedPosts.findIndex((post) => post.id === editingPostId);
        if (postIndex > -1) {
            fixedPosts[postIndex].title = content;
        }
        editingPostId = null;
    } else {
        const newPost = {
            id: Date.now(),
            title: content,
        };
        fixedPosts.push(newPost);
    }

    localStorage.setItem("fixedPosts", JSON.stringify(fixedPosts));
    document.getElementById("fixed-input").value = "";
    closeModal();
    loadFixedPosts();
}

// 고정글 수정
function editFixedPost(postId) {
    const fixedPosts = JSON.parse(localStorage.getItem("fixedPosts") || "[]");
    const post = fixedPosts.find((p) => p.id === postId);

    if (!post) {
        alert("고정글을 찾을 수 없습니다.");
        return;
    }

    editingPostId = postId;
    document.getElementById("modal-title").innerText = "고정글 수정";
    document.getElementById("fixed-input").value = post.title;
    openModal();
}

// 모달 열기
function openModal() {
    const modal = document.getElementById("fixed-modal");
    if (modal) {
        modal.style.display = "flex";
    }
}


function closeModal() {
    const modal = document.getElementById("fixed-modal");
    if (modal) {
        modal.style.display = "none";
        editingPostId = null;
    }
}


// === 초기화 ===
document.addEventListener("DOMContentLoaded", () => {
    loadPrayers(); // 기도 요청 로드
    loadFixedPosts(); // 고정글 로드
});
