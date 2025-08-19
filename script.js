// 打字机效果
function typing(elementId, speed = 120) {
  const element = document.getElementById(elementId);
  const text = element.innerText; // 读取 div 原本文本
  element.innerHTML = "";          // 清空内容，准备打字
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
typing("typewriter", 80);
typing("speak1", 50)

// 在一起天数 (+1)
const startDate = new Date("2025-08-09"); // <- 改成你们在一起的日期
function updateDays() {
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("days").innerHTML =
    "我们已经在一起 " + (diffDays + 1) + " 天啦 💕";
}
updateDays();

// 点击爱心效果
document.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.className = "heart";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".clickable").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 点击遮罩关闭
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
