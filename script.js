// Toggle Dark/Light Mode
const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
});

// Placeholder filtering (to be expanded with actual tool list)
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const filterPricing = document.getElementById("filterPricing");

searchInput.addEventListener("input", filterTools);
filterCategory.addEventListener("change", filterTools);
filterPricing.addEventListener("change", filterTools);

function filterTools() {
  const keyword = searchInput.value.toLowerCase();
  const category = filterCategory.value;
  const pricing = filterPricing.value;

  const cards = document.querySelectorAll(".tool-card");
  cards.forEach((card) => {
    const name = card.querySelector("h4").innerText.toLowerCase();
    const tags = card.querySelector(".tags").innerText;
    const badge = card.querySelector(".badge").innerText;

    const matchKeyword = name.includes(keyword);
    const matchCategory = category ? tags.includes(category) : true;
    const matchPricing = pricing ? badge.includes(pricing) : true;

    if (matchKeyword && matchCategory && matchPricing) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Submit Tool Button (redirect or modal later)
document.getElementById("submitToolBtn").addEventListener("click", () => {
  alert("Feature coming soon! Community tool submission will be available here.");
});
