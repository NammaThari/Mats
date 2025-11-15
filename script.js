// Scroll fade animation
const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});
// 🌿 Product Image Click Popup
const popup = document.getElementById("imgPopup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");

// When image clicked
document.querySelectorAll(".product img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "block";
    popupImg.src = img.src;
  });
});

// When close button clicked
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// When clicking outside image
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
