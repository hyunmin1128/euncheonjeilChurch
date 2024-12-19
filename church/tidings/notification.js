let editingNotificationId = null;

// 로컬 스토리지에서 소식 로드
function loadNotifications() {
    const notificationList = document.getElementById("notification-list");
    notificationList.innerHTML = "";
    const notifications = JSON.parse(localStorage.getItem("notifications") || "[]");

    if (notifications.length === 0) {
        notificationList.innerHTML = "<p>등록된 소식이 없습니다.</p>";
        return;
    }

    notifications.forEach(notification => {
        const notificationDiv = document.createElement("div");
        notificationDiv.innerHTML = `
            <p>${notification.content}</p>
            <button onclick="editNotification(${notification.id})">수정</button>
            <button onclick="deleteNotification(${notification.id})">삭제</button>
        `;
        notificationList.appendChild(notificationDiv);
    });
}

// 새 소식 저장
function saveNotification() {
    const input = document.getElementById("notification-input").value.trim();
    if (!input) {
        alert("소식을 입력하세요!");
        return;
    }

    let notifications = JSON.parse(localStorage.getItem("notifications") || "[]");

    if (editingNotificationId) {
        const index = notifications.findIndex(n => n.id === editingNotificationId);
        if (index !== -1) {
            notifications[index].content = input;
        }
        editingNotificationId = null;
    } else {
        notifications.push({ id: Date.now(), content: input });
    }

    localStorage.setItem("notifications", JSON.stringify(notifications));
    document.getElementById("notification-input").value = "";
    closeNotificationModal();
    loadNotifications();
}

// 소식 수정
function editNotification(id) {
    const notifications = JSON.parse(localStorage.getItem("notifications") || "[]");
    const notification = notifications.find(n => n.id === id);

    if (notification) {
        document.getElementById("notification-input").value = notification.content;
        editingNotificationId = id;
        openNotificationModal("소식 수정");
    }
}

// 소식 삭제
function deleteNotification(id) {
    let notifications = JSON.parse(localStorage.getItem("notifications") || "[]");
    notifications = notifications.filter(n => n.id !== id);
    localStorage.setItem("notifications", JSON.stringify(notifications));
    loadNotifications();
}

// 모달 열기
function openNotificationModal(title = "새 소식 작성") {
    document.getElementById("modal-title").innerText = title;
    document.querySelector(".notification-modal").style.display = "flex";
}

// 모달 닫기
function closeNotificationModal() {
    document.querySelector(".notification-modal").style.display = "none";
    editingNotificationId = null;
}

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", loadNotifications);
