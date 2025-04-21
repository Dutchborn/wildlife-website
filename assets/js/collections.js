// This script handles the hover effect on the collection cards and displays a carousel of images when hovered over.
const categories = document.querySelectorAll(".category-card");
const carouselContainer = document.getElementById("carouselContainer");
const carousel = document.getElementById("carousel");

// Paired: [collection name, background image URL]
const fullCollectionList = [
  ["Fast Animals", "https://source.unsplash.com/300x200/?cheetah"],
  ["Slow Animals", "https://source.unsplash.com/300x200/?sloth"],
  ["Flying Creatures", "https://source.unsplash.com/300x200/?eagle"],
  ["Jumpers & Leapers", "https://source.unsplash.com/300x200/?frog"],
  ["Swimming Masters", "https://source.unsplash.com/300x200/?dolphin"],
  ["Climbers", "https://source.unsplash.com/300x200/?monkey"],
  ["Burrowers", "https://source.unsplash.com/300x200/?meerkat"],
  ["Fluffy & Fuzzy", "https://source.unsplash.com/300x200/?koala"],
  ["Scaly & Spiky", "https://source.unsplash.com/300x200/?lizard"],
  ["Colorful Creatures", "https://source.unsplash.com/300x200/?peacock"],
  ["Camouflaged Animals", "https://source.unsplash.com/300x200/?chameleon"],
  ["Tiny Critters", "https://source.unsplash.com/300x200/?mouse"],
  ["Massive Giants", "https://source.unsplash.com/300x200/?elephant"],
  ["Horned & Tusked", "https://source.unsplash.com/300x200/?rhino"],
  ["Majestic Beasts", "https://source.unsplash.com/300x200/?lion"],
  ["Alien-Looking Animals", "https://source.unsplash.com/300x200/?axolotl"]
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

