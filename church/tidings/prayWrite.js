function addPrayer() {
    const title = document.getElementById("pray-title").value;
    const content = document.getElementById("pray-content").value;
    const date = new Date().toISOString().split("T")[0]; // 현재 날짜

    if (title && content) {
        const prayers = JSON.parse(localStorage.getItem("prayers") || "[]");
        const id = Date.now(); // 고유한 ID 생성
        prayers.push({ id, title, content, date });
        localStorage.setItem("prayers", JSON.stringify(prayers));

        document.getElementById("pray-title").value = "";
        document.getElementById("pray-content").value = "";

        alert("작성 완료!");
        window.location.href = './pray.html'; // Redirect to the prayer list page
    } else {
        alert("제목과 내용을 입력해주세요.");
    }
}