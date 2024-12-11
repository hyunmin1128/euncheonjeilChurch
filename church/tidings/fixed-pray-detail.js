document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    const fixedPosts = JSON.parse(localStorage.getItem("fixedPosts") || "[]");
    const post = fixedPosts.find((p) => p.id == postId);

    if (!post) {
        alert("고정글을 찾을 수 없습니다.");
        history.back();
        return;
    }

    document.getElementById("fixed-title").innerText = post.title;
    document.getElementById("fixed-content").innerText = post.content;
});