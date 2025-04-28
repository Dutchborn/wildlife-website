
       // Animal Counter Animation
  const animalCounter = document.getElementById('animalCounter');
  let count = 0;
  const totalAnimals = 10000;

  function updateCounter() {
    count += 50;
    if (count > totalAnimals) count = totalAnimals;
    animalCounter.textContent = count.toLocaleString();
    if (count < totalAnimals) {
      setTimeout(updateCounter, 30);
    }
  }

  updateCounter();

      // ---- Fun Facts ----
      const facts = [
        "A group of flamingos is called a flamboyance.",
        "Elephants can 'hear' with their feet by detecting ground vibrations.",
        "Some turtles can breathe through their butts!",
        "Octopuses have three hearts and blue blood.",
        "Sea otters hold hands when they sleep to stay together.",
        "Giraffes only need 5–30 minutes of sleep a day.",
        "Pigeons can recognize themselves in mirrors—very few animals can!",
        "A snail can sleep for three years.",
        "Tigers have striped skin—not just fur.",
        "Sharks existed before trees.",
        "Crows can remember human faces and hold grudges.",
        "Sloths can hold their breath longer than dolphins—up to 40 minutes.",
        "Frogs can freeze solid and survive the winter.",
        "Koalas have fingerprints nearly identical to humans.",
        "A group of porcupines is called a prickle.",
        "Male seahorses are the ones that get pregnant and give birth.",
        "The heart of a blue whale is the size of a small car.",
        "A baby puffin is called a puffling.",
        "Ants don’t have lungs—they breathe through tiny holes in their bodies.",
        "Penguins propose to their mates with pebbles.",
        "Axolotls can regrow entire limbs, even parts of their brain.",
        "Orcas are actually the largest species of dolphin.",
        "Butterflies can taste with their feet.",
        "The pistol shrimp can snap its claw so fast it creates a bubble hotter than the sun.",
        "Cows have best friends and get stressed when separated.",
        "Owls can rotate their heads up to 270 degrees.",
        "A group of ferrets is called a business.",
        "Some lizards can squirt blood from their eyes as a defense mechanism.",
        "Hummingbirds are the only birds that can fly backward.",
        "Narwhals are real and their 'horn' is actually a giant tooth.",
      ];

      function newFact() {
        const funFactText = document.getElementById("animal-fact");
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        funFactText.textContent = randomFact;
      }

      // ---- Conservation Facts ----
      const fact2 = [
        "Habitat loss is the leading cause of wildlife extinction.",
        "Over 1 million species are currently at risk of extinction.",
        "Poaching is one of the biggest threats to elephants and rhinos.",
        "Coral reefs support 25% of all marine life but are rapidly declining.",
        "Protecting apex predators helps entire ecosystems thrive.",
        "Recycling helps reduce ocean pollution that harms sea life.",
        "Only 4% of mammals on Earth are wild—the rest are humans and livestock.",
        "Plastic waste kills over 100,000 marine animals every year.",
        "Conservation efforts brought bald eagles back from near extinction.",
        "Deforestation is a major threat to orangutans and other rainforest species.",
        "Sea turtles often mistake plastic bags for jellyfish.",
        "National parks protect critical habitats for endangered species.",
        "Wildlife corridors help animals move safely between habitats.",
        "Pollinators like bees are essential for 75% of global food crops.",
        "Climate change is altering migration patterns and breeding seasons.",
        "The illegal wildlife trade is worth billions and harms global biodiversity.",
        "Rewilding projects reintroduce native species to restore ecosystems.",
        "Planting native trees helps support local wildlife.",
        "Overfishing threatens the survival of many marine species.",
        "Every species plays a role in keeping ecosystems balanced.",
      ];

      function newFact2() {
        const funFactText = document.getElementById("conservation-fact");
        const randomFact = fact2[Math.floor(Math.random() * fact2.length)];
        funFactText.textContent = randomFact;
      }

      const fact3 = [
        // 🌍 Wild Habitat Facts //
        "Rainforests cover less than 10% of Earth's surface but host over 50% of its species.",
        "Deserts are home to highly adapted animals like the fennec fox and thorny devil.",
        "Mangroves protect coastlines and provide nurseries for many marine species.",
        "Coral reefs support more biodiversity than any other marine habitat.",
        "Grasslands like the African savanna support massive herbivore migrations.",
        "Wetlands act as natural water filters and vital bird habitats.",
        "Tundra habitats remain frozen most of the year but still support caribou and polar bears.",
        "Temperate forests experience all four seasons and house diverse birdlife.",
        "Caves are home to unique species like bats, blind fish, and cave crickets.",
        "Mountains create unique ecosystems based on elevation and temperature.",

        // 🐾 Animal Behavior Facts //
        "Meerkats teach their young how to hunt dangerous prey like scorpions.",
        "Crows use tools and even pass on learned behaviors to future generations.",
        "Dolphins have individual names and call each other with signature whistles.",
        "Elephants mourn their dead and have been seen visiting the bones of loved ones.",
        "Male penguins offer pebbles to females as part of their mating ritual.",
        "Beavers build dams to create safe ponds for their homes called lodges.",
        "Some spiders perform dances to attract mates, risking being eaten if rejected.",
        "Chimpanzees form lifelong friendships and exhibit empathy.",
        "Lions in a pride take turns caring for cubs while others hunt.",
        "Ospreys build massive nests and often return to the same one year after year.",

        // 🛑 Endangered Species Facts
        "There are fewer than 100 Amur leopards left in the wild.",
        "Javan rhinos are one of the rarest mammals with under 80 individuals alive.",
        "Mountain gorillas are critically endangered due to poaching and habitat loss.",
        "The axolotl, a Mexican amphibian, is nearly extinct in the wild.",
        "Sumatran orangutans are critically endangered with fewer than 14,000 left.",
        "The pangolin is the most illegally trafficked mammal in the world.",
        "Vaquitas are the most endangered marine mammals, with fewer than 10 remaining.",
        "Red wolves are one of the rarest canids, with only a few dozen in the wild.",
        "Saola, also called the 'Asian unicorn,' was only discovered in 1992 and is critically endangered.",
        "Snow leopards are elusive big cats threatened by climate change and poaching.",

        // 👣 Tracks & Signs Facts //
        "A bear's paw print can be over 12 inches long and show five toes.",
        "Deer tracks are heart-shaped and often show clear paths through the forest.",
        "Raccoons leave hand-like prints with five fingers and visible claws.",
        "Foxes often walk in straight lines, with back paws landing in front paw spots.",
        "Beavers leave slide marks and gnawed tree stumps near rivers.",
        "Otter slides are visible in snow or mud near water banks.",
        "Birds often leave three-toed prints pointing forward unless it’s a perching bird.",
        "Mountain lions leave large round tracks with no claw marks (they retract).",
        "Skunks drag their tails, leaving streaks behind their tracks.",
        "Wild boars leave cloven hoof prints similar to deer but rounder and wider.",
      ];

      function newFact3() {
        const funFactText = document.getElementById("wild-fact");
        const randomFact = fact3[Math.floor(Math.random() * fact3.length)];
        funFactText.textContent = randomFact;
      }

      // ---- Slider ----
      const slider = document.querySelector(".slider");
      const slides = document.querySelectorAll(".slide");
      const prevBtn = document.querySelector(".prev-btn");
      const nextBtn = document.querySelector(".next-btn");
      let currentIndex = 0;

      function updateSlider() {
        if (slider) {
          slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
      }

      if (nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % slides.length;
          updateSlider();
        });
        prevBtn.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          updateSlider();
        });
        updateSlider();
      }

      // ---- Habitat Tabs ----
      function openTab(event, tabId) {
        // Prevent the default behavior of the <a> tag
        event.preventDefault();

        // Get all tab links and tab contents
        const tabLinks = document.querySelectorAll(".tab-link");
        const tabContents = document.querySelectorAll(".tab-content");

        // Remove the "active" class from all tab links and hide all tab contents
        tabLinks.forEach((link) => link.classList.remove("active"));
        tabContents.forEach((content) => (content.style.display = "none"));

        // Show the selected tab content and add the "active" class to the clicked tab link
        const targetTab = document.getElementById(tabId);
        if (targetTab) {
          targetTab.style.display = "block";
          event.currentTarget.classList.add("active");
        }
      }

      // Show the first tab on page load
      document.addEventListener("DOMContentLoaded", () => {
        const firstTab = document.getElementById("habitat");
        if (firstTab) firstTab.style.display = "block";
      });

      // ---- Quiz ----
      const quiz = [
        {
          q: "Which mammal lays eggs?",
          options: ["Kangaroo", "Platypus", "Elephant"],
          answer: 1,
        },
        {
          q: "What is the fastest land animal?",
          options: ["Cheetah", "Lion", "Leopard"],
          answer: 0,
        },
        {
          q: "Which bird is known for mimicking sounds?",
          options: ["Parrot", "Eagle", "Sparrow"],
          answer: 0,
        },
        {
          q: "What is the largest mammal in the world?",
          options: ["Elephant", "Blue Whale", "Giraffe"],
          answer: 1,
        },
        {
          q: "Which animal is known for its ability to change color?",
          options: ["Chameleon", "Octopus", "Frog"],
          answer: 0,
        },
        {
          q: "What is the only mammal that can fly?",
          options: ["Bat", "Squirrel", "Bird"],
          answer: 0,
        },
        {
          q: "Which animal has the longest migration?",
          options: ["Arctic Tern", "Monarch Butterfly", "Humpback Whale"],
          answer: 0,
        },
        {
          q: "What is the largest species of shark?",
          options: ["Great White", "Hammerhead", "Whale Shark"],
          answer: 2,
        },
        {
          q: "Which animal is known for its intelligence and problem-solving skills?",
          options: ["Dolphin", "Elephant", "Octopus"],
          answer: 1,
        },
        {
          q: "What is the primary diet of a panda?",
          options: ["Bamboo", "Fish", "Fruits"],
          answer: 0,
        },
        {
          q: "Which animal is known for its ability to regrow limbs?",
          options: ["Axolotl", "Lizard", "Starfish"],
          answer: 0,
        },
        {
          q: "What is the largest land carnivore?",
          options: ["Polar Bear", "Grizzly Bear", "Tiger"],
          answer: 0,
        },
        {
          q: "Which animal has the longest lifespan?",
          options: ["Tortoise", "Elephant", "Whale"],
          answer: 0,
        },
        {
          q: "What is the primary diet of a koala?",
          options: ["Eucalyptus leaves", "Bamboo", "Fruits"],
          answer: 0,
        },
        {
          q: "Which animal is known for its unique black and white stripes?",
          options: ["Zebra", "Tiger", "Panda"],
          answer: 0,
        },
        {
          q: "What is the largest species of penguin?",
          options: ["Emperor Penguin", "King Penguin", "Adélie Penguin"],
          answer: 0,
        },
        {
          q: "Which animal is known for its ability to produce electricity?",
          options: ["Electric Eel", "Pufferfish", "Anglerfish"],
          answer: 0,
        },
        {
          q: "What is the primary diet of a polar bear?",
          options: ["Seal", "Fish", "Berries"],
          answer: 0,
        },
        {
          q: "Which animal is known for its ability to glide through the air?",
          options: ["Flying Squirrel", "Sugar Glider", "Both"],
          answer: 2,
        },
        {
          q: "What is the primary habitat of a sloth?",
          options: ["Rainforest", "Desert", "Savanna"],
          answer: 0,
        },
      ];

      let currentQuestion = 0;
      const questionEl = document.getElementById("quiz-question");
      const optionsEl = document.getElementById("quiz-options");
      const resultEl = document.getElementById("quiz-result");
      const nextBtnQuiz = document.querySelector("#quiz-box button");

      function showQuestion() {
        const q = quiz[currentQuestion];
        questionEl.textContent = q.q;
        optionsEl.innerHTML = "";
        q.options.forEach((opt, i) => {
          const btn = document.createElement("button");
          btn.textContent = opt;
          btn.addEventListener("click", () => checkAnswer(i));
          optionsEl.appendChild(btn);
        });
      }

      function checkAnswer(selected) {
        const correct = quiz[currentQuestion].answer;
        resultEl.textContent =
          selected === correct ? "Correct! 🦁" : "Oops, try again! 🐾";
      }

      function nextQuestion() {
        currentQuestion = (currentQuestion + 1) % quiz.length;
        resultEl.textContent = "";
        showQuestion();
      }

      if (nextBtnQuiz) {
        nextBtnQuiz.addEventListener("click", nextQuestion);
        showQuestion(); // Show the first question on load
      }
    