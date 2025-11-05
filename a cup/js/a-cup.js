// ===== 中導覽切換 =====
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach(tab => {
    tab.addEventListener("mouseenter", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });

  // ===== OTHER 下拉選單 =====
  const otherBtn = document.getElementById("otherBtn");
  const dropdown = otherBtn.closest(".dropdown");

  otherBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });

  // ===== 滑出視窗控制 =====
  const openButtons = document.querySelectorAll(".open-panel");
  const closeButtons = document.querySelectorAll(".close-panel");
  const panels = document.querySelectorAll(".side-panel");

  openButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const targetId = btn.dataset.target + "-panel";
      document.getElementById(targetId).classList.add("active");
      dropdown.classList.remove("active");
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".side-panel").classList.remove("active");
    });
  });

  // 點擊外部區域關閉滑出視窗
  document.addEventListener("click", e => {
    panels.forEach(panel => {
      if (panel.classList.contains("active") && !panel.contains(e.target) && !e.target.classList.contains("open-panel")) {
        panel.classList.remove("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const otherBtn = document.getElementById("otherBtn");
  const dropdown = otherBtn.closest(".dropdown");

  otherBtn.addEventListener("click", function(e) {
    e.preventDefault();
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
});
