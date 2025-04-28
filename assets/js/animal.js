// This file contains a list of animals with their scientific names, categories, and popularity ratings.
      const urlParams = new URLSearchParams(window.location.search);
      const animalName = urlParams.get("name");

      const extraFacts = {
        cheetah: {
          lifespan: "10–12 years",
          speed: "112 km/h",
          weight: "21–72 kg",
          height: "67–94 cm",
          diet: "Carnivore",
          habitat: "Savannas, grasslands",
          distribution: "Sub-Saharan Africa",
        },
        lion: {
          lifespan: "8–15 years",
          speed: "80 km/h",
          weight: "120–250 kg",
          height: "1.2 m",
          diet: "Carnivore",
          habitat: "Grasslands, savannas, open woodlands",
          distribution: "Sub-Saharan Africa, India",
        },
        dolphin: {
          lifespan: "20–60 years",
          speed: "55 km/h",
          weight: "150–650 kg",
          height: "2–4 m",
          diet: "Carnivore",
          habitat: "Oceans, seas",
          distribution: "Worldwide",
        },
        elephant: {
          lifespan: "60–70 years",
          speed: "40 km/h",
          weight: "2700–6000 kg",
          height: "2.5–4 m",
          diet: "Herbivore",
          habitat: "Savannas, forests, grasslands",
          distribution: "Africa, Asia",
        },
        panda: {
          lifespan: "20 years",
          speed: "32 km/h",
          weight: "70–160 kg",
          height: "1.2 m",
          diet: "Herbivore",
          habitat: "Bamboo forests, mountains",
          distribution: "China",
        },
        tiger: {
          lifespan: "10–15 years",
          speed: "49–65 km/h",
          weight: "90–310 kg",
          height: "60–120 cm",
          diet: "Carnivore",
          habitat: "Forests, grasslands, wetlands",
          distribution: "Asia",
        },
        giraffe: {
          lifespan: "20–25 years",
          speed: "60 km/h",
          weight: "800–1200 kg",
          height: "4.3–5.7 m",
          diet: "Herbivore",
          habitat: "Savannas, open woodlands",
          distribution: "Africa",
        },
        kangaroo: {
          lifespan: "8–12 years",
          speed: "70 km/h",
          weight: "18–90 kg",
          height: "0.6–2 m",
          diet: "Herbivore",
          habitat: "Grasslands, forests, scrublands",
          distribution: "Australia",
        },
        penguin: {
          lifespan: "15–20 years",
          speed: "15 km/h",
          weight: "1–40 kg",
          height: "0.4–1.2 m",
          diet: "Carnivore",
          habitat: "Antarctic regions, coasts",
          distribution: "Southern Hemisphere",
        },
        flamingo: {
          lifespan: "20–30 years",
          speed: "50 km/h",
          weight: "2.5–4 kg",
          height: "1–1.5 m",
          diet: "Herbivore",
          habitat: "Wetlands, lagoons, lakes",
          distribution: "Worldwide",
        },
        zebra: {
          lifespan: "20–30 years",
          speed: "65 km/h",
          weight: "200–450 kg",
          height: "1.2–1.5 m",
          diet: "Herbivore",
          habitat: "Grasslands, savannas, woodlands",
          distribution: "Africa",
        },
        koala: {
          lifespan: "10–18 years",
          speed: "30 km/h",
          weight: "4–14 kg",
          height: "0.6–0.9 m",
          diet: "Herbivore",
          habitat: "Eucalyptus forests, woodlands",
          distribution: "Australia",
        },
        sloth: {
          lifespan: "20–30 years",
          speed: "0.24 km/h",
          weight: "2.5–4 kg",
          height: "0.6–1.2 m",
          diet: "Herbivore",
          habitat: "Tropical rainforests, cloud forests",
          distribution: "Central and South America",
        },
        octopus: {
          lifespan: "1–5 years",
          speed: "40 km/h",
          weight: "3–50 kg",
          height: "0.3–5 m",
          diet: "Carnivore",
          habitat: "Oceans, seas, coral reefs",
          distribution: "Worldwide",
        },
        chameleon: {
          lifespan: "5–10 years",
          speed: "0.1 km/h",
          weight: "0.5–3 kg",
          height: "0.2–0.6 m",
          diet: "Carnivore",
          habitat: "Forests, savannas, deserts",
          distribution: "Africa, Madagascar, Asia",
        },
        tortoise: {
          lifespan: "50–150 years",
          speed: "0.3 km/h",
          weight: "10–500 kg",
          height: "0.2–1.5 m",
          diet: "Herbivore",
          habitat: "Deserts, grasslands, forests",
          distribution: "Worldwide",
        },
        parrot: {
          lifespan: "20–80 years",
          speed: "50 km/h",
          weight: "0.1–4 kg",
          height: "0.2–1 m",
          diet: "Herbivore",
          habitat: "Tropical rainforests, savannas, woodlands",
          distribution: "Worldwide",
        },
        meerkat: {
          lifespan: "12–14 years",
          speed: "32 km/h",
          weight: "0.6–1 kg",
          height: "0.25 m",
          diet: "Omnivore",
          habitat: "Deserts, grasslands, scrublands",
          distribution: "Southern Africa",
        },
        otter: {
          lifespan: "8–12 years",
          speed: "40 km/h",
          weight: "5–30 kg",
          height: "0.6–1.5 m",
          diet: "Carnivore",
          habitat: "Rivers, lakes, coastal areas",
          distribution: "Worldwide",
        },
        walrus: {
          lifespan: "30–40 years",
          speed: "35 km/h",
          weight: "400–1200 kg",
          height: "2.5–3.5 m",
          diet: "Carnivore",
          habitat: "Arctic and sub-Arctic regions",
          distribution: "Arctic Ocean, North Atlantic",
        },
        narwhal: {
          lifespan: "30–50 years",
          speed: "30 km/h",
          weight: "400–1600 kg",
          height: "4–5 m",
          diet: "Carnivore",
          habitat: "Arctic waters",
          distribution: "Arctic Ocean, Greenland Sea",
        },
        manatee: {
          lifespan: "50–60 years",
          speed: "8 km/h",
          weight: "400–590 kg",
          height: "2.5–4 m",
          diet: "Herbivore",
          habitat: "Coastal waters, rivers, lakes",
          distribution: "Florida, Caribbean, West Africa",
        },
        armadillo: {
          lifespan: "4–7 years",
          speed: "32 km/h",
          weight: "1.5–30 kg",
          height: "0.2–1.5 m",
          diet: "Insectivore",
          habitat: "Grasslands, forests, deserts",
          distribution: "Americas",
        },
        capybara: {
          lifespan: "8–12 years",
          speed: "35 km/h",
          weight: "35–66 kg",
          height: "0.5 m",
          diet: "Herbivore",
          habitat: "Wetlands, grasslands, forests",
          distribution: "South America",
        },
        wombat: {
          lifespan: "5–15 years",
          speed: "40 km/h",
          weight: "20–35 kg",
          height: "1 m",
          diet: "Herbivore",
          habitat: "Forests, grasslands, scrublands",
          distribution: "Australia",
        },
        tapir: {
          lifespan: "25–30 years",
          speed: "48 km/h",
          weight: "150–300 kg",
          height: "0.9–1.5 m",
          diet: "Herbivore",
          habitat: "Forests, grasslands, wetlands",
          distribution: "Central and South America, Southeast Asia",
        },
        okapi: {
          lifespan: "20–30 years",
          speed: "35 km/h",
          weight: "200–350 kg",
          height: "1.5–2 m",
          diet: "Herbivore",
          habitat: "Rainforests, dense woodlands",
          distribution: "Democratic Republic of the Congo",
        },
        axolotl: {
          lifespan: "10–15 years",
          speed: "0.5 km/h",
          weight: "0.5–1 kg",
          height: "0.2 m",
          diet: "Carnivore",
          habitat: "Lakes, canals, wetlands",
          distribution: "Mexico",
        },
        quokka: {
          lifespan: "10–15 years",
          speed: "20 km/h",
          weight: "2.5–5 kg",
          height: "0.4 m",
          diet: "Herbivore",
          habitat: "Scrublands, forests, grasslands",
          distribution: "Australia",
        },
        pangolin: {
          lifespan: "10–20 years",
          speed: "2 km/h",
          weight: "1–35 kg",
          height: "0.3–1 m",
          diet: "Insectivore",
          habitat: "Forests, grasslands, savannas",
          distribution: "Africa, Asia",
        },
        axolotl: {
          lifespan: "10–15 years",
          speed: "0.5 km/h",
          weight: "0.5–1 kg",
          height: "0.2 m",
          diet: "Carnivore",
          habitat: "Lakes, canals, wetlands",
          distribution: "Mexico",
        },
        aardvark: {
          lifespan: "10–23 years",
          speed: "40 km/h",
          weight: "60–80 kg",
          height: "0.6–1 m",
          diet: "Insectivore",
          habitat: "Savannas, grasslands, forests",
          distribution: "Sub-Saharan Africa",
        },
        aardwolf: {
          lifespan: "10–15 years",
          speed: "56 km/h",
          weight: "8–12 kg",
          height: "0.6 m",
          diet: "Carnivore",
          habitat: "Savannas, grasslands, deserts",
          distribution: "Southern Africa",
        },
        bushbaby: {
          lifespan: "10–15 years",
          speed: "30 km/h",
          weight: "0.5–2 kg",
          height: "0.3 m",
          diet: "Omnivore",
          habitat: "Forests, savannas, grasslands",
          distribution: "Africa",
        },
        fossa: {
          lifespan: "12–20 years",
          speed: "24 km/h",
          weight: "5–10 kg",
          height: "0.6 m",
          diet: "Carnivore",
          habitat: "Rainforests, dry forests",
          distribution: "Madagascar",
        },
        quoll: {
          lifespan: "2–10 years",
          speed: "24 km/h",
          weight: "1–5 kg",
          height: "0.3 m",
          diet: "Carnivore",
          habitat: "Forests, grasslands, scrublands",
          distribution: "Australia, New Guinea",
        },
        tarsier: {
          lifespan: "12–20 years",
          speed: "24 km/h",
          weight: "0.1–0.2 kg",
          height: "0.1 m",
          diet: "Carnivore",
          habitat: "Rainforests, forests",
          distribution: "Southeast Asia",
        },
        serval: {
          lifespan: "10–12 years",
          speed: "80 km/h",
          weight: "9–18 kg",
          height: "0.5 m",
          diet: "Carnivore",
          habitat: "Savannas, grasslands, wetlands",
          distribution: "Africa",
        },
      };

      async function fetchWikipediaData(name) {
        try {
          const res = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
              name
            )}`
          );
          if (!res.ok) throw new Error("Not found");
          return await res.json();
        } catch {
          return null;
        }
      }

      async function displayAnimalProfile() {
        const hero = document.getElementById("heroSection");
        const container = document.getElementById("animalContainer");

        const wiki = await fetchWikipediaData(animalName);
        const facts = extraFacts[animalName?.toLowerCase()] || {};

        if (!wiki) {
          hero.innerHTML = "<h1>Animal Not Found</h1>";
          container.innerHTML = "<p>Sorry, no data available.</p>";
          return;
        }

        hero.style.backgroundImage = `url('${
          wiki?.thumbnail?.source ||
          "https://source.unsplash.com/1200x600/?" + animalName
        }')`;
        hero.innerHTML = `<h1>${wiki.title}</h1>`;

        container.innerHTML = `
        <div class="animal-info">
          <em>${
            wiki.description || "No scientific classification available"
          }</em>
          <p>${wiki.extract || "No detailed information available."}</p>
        </div>

        <div class="fact-grid">
          ${Object.entries(facts)
            .map(
              ([key, value]) => `
            <div class="fact-box">
              <h3>${key[0].toUpperCase() + key.slice(1)}</h3>
              <p>${value}</p>
            </div>`
            )
            .join("")}
        </div>

        <a class="back-link" href="animals.html">← Back to Animal List</a>
      `;
      }

      displayAnimalProfile();
   