// This script handles the hover effect on the collection cards and displays a carousel of images when hovered over.
const categories = document.querySelectorAll(".category-card");
const carouselContainer = document.getElementById("carouselContainer");
const carousel = document.getElementById("carousel");

// Paired: [collection name, background image URL]
const fullCollectionList = [
  ["Fast Animals", "assets/images/cheetah.jpg"],
  ["Slow Animals", "assets/images/sloth.jpg"],
  ["Flying Creatures", "assets/images/bald-eagle.jpg"],
  ["Jumpers and Leapers", "assets/images/tree-frog.jpg"],
  ["Swimming Masters", "assets/images/dolphin-jumping.jpg"],
  ["Climbers", "assets/images/howler-monkey.jpg"],
  ["Burrowers", "assets/images/meerkat.jpg"],
  ["Fluffy & Fuzzy", "assets/images/sheep.jpg"],
  ["Scaly & Spiky", "assets/images/spiky-iguana.jpg"],
  ["Colorful Creatures", "assets/images/macaw.jpg"],
  ["Camouflaged Animals", "assets/images/camouflaged.jpg"],
  ["Tiny Critters", "assets/images/tiny-critters.jpg"],
  ["Massive Giants", "assets/images/giant-whale.jpg"],
  ["Horned & Tusked", "assets/images/horned.jpg"],
  ["Majestic Beasts", "assets/images/majestic-horse.jpg"],
  ["Alien-Looking Animals", "assets/images/octopus.jpg"],
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
        const slug = item[0].toLowerCase().replace(/[^a-z0-9]+/g, "-");
        el.href = `collections-template.html?collection=${slug}`;
        el.style.setProperty('--angle', `${i * angleIncrement}deg`);
        el.style.backgroundImage = `url(${item[1]})`;
        el.title = item[0];
        carousel.appendChild(el);
      });

      carouselContainer.style.display = "flex";
    }, 700); // Delay before showing the carousel
  });

  card.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimer);
  });
});

// Hide carousel on outside click
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".carousel") &&
    !e.target.closest(".category-card")
  ) {
    carouselContainer.style.display = "none";
  }
});

