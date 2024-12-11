function loadPrayerDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const prayers = JSON.parse(localStorage.getItem("prayers") || "[]");
    const prayer = prayers.find((p) => p.id == id);

    if (prayer) {
        document.getElementById("pray-title").innerText = prayer.title;
        document.getElementById("pray-date").innerText = prayer.date;
        document.getElementById("pray-content").innerText = prayer.content;
    } else {
        document.getElementById("pray-detail").innerHTML = "<p>기도 요청을 찾을 수 없습니다.</p>";
    }
}

// Load prayer detail when the page loads
document.addEventListener('DOMContentLoaded', loadPrayerDetail);