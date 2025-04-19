const categories = document.querySelectorAll(".category-card");
const carouselContainer = document.getElementById("carouselContainer");
const carousel = document.getElementById("carousel");

// All 30 collection categories
const fullCollectionList = [
  "Fast Animals", "Slow Animals", "Flying Creatures", "Jumpers & Leapers",
  "Swimming Masters", "Climbers", "Burrowers", "Fluffy & Fuzzy",
  "Scaly & Spiky", "Colorful Creatures", "Camouflaged Animals", "Tiny Critters",
  "Massive Giants", "Horned & Tusked", "Majestic Beasts", "Myth-Like Animals",
  "Cute but Deadly", "Alien-Looking Animals", "Royal & Regal Creatures", "Fantasy Vibes",
  "Rainforest Residents", "Ocean Dwellers", "Savanna Survivors", "Mountain Climbers",
  "Desert Wanderers", "Arctic Explorers", "Glowers & Bioluminescent", "Animals with Super Senses",
  "Venomous & Poisonous", "Shape-Shifters"
];

let hoverTimer;

categories.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    hoverTimer = setTimeout(() => {
      carousel.innerHTML = "";

      const angleIncrement = 360 / fullCollectionList.length;

      fullCollectionList.forEach((item, i) => {
        const el = document.createElement("a");
        el.className = "carousel-card";
        el.textContent = item;
        el.href = `collections/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.html`; // SEO-friendly slugs
        el.style.setProperty('--angle', `${i * angleIncrement}deg`);
        carousel.appendChild(el);
      });

      carouselContainer.style.display = "flex";
    }, 2000); // Show after 2s hover
  });

  card.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimer);
  });
});

// Close carousel if clicking outside
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".carousel") &&
    !e.target.closest(".category-card")
  ) {
    carouselContainer.style.display = "none";
  }
});
