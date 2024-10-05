const items = [
  {
    title: "Roblox",
    img: "../IMAGES/free1.png",
    category: "free",
    favorite: false,
    description:
      "Roblox is a free online platform that allows users to create, share, and play games created by other users. With a vast array of genres, including adventure, role-playing, and simulations, players can customize their avatars, socialize, and participate in a community-driven gaming experience.",
  },
  {
    title: "Fortnite",
    img: "../IMAGES/action1.png",
    category: "action",
    favorite: false,
    description:
      "Fortnite is a popular battle royale game where players compete in fast-paced matches to be the last one standing. Players can build structures, gather resources, and engage in combat while exploring a vibrant, ever-changing world filled with unique events and challenges.",
  },
  {
    title: "FIFA",
    img: "../IMAGES/sport1.png",
    category: "sport",
    favorite: false,
    description:
      "FIFA is a football simulation video game series that allows players to experience realistic gameplay, manage teams, and compete in various modes, including career and online matches. It features licensed teams, players, and leagues, providing an authentic football experience.",
  },
  {
    title: "Rust",
    img: "../IMAGES/adventure1.png",
    category: "adventure",
    favorite: false,
    description:
      "Rust is a multiplayer survival adventure game where players gather resources, craft items, and build shelters to survive in a hostile environment while facing threats from other players.",
  },
  {
    title: "Clash Royale",
    img: "../IMAGES/free2.png",
    category: "free",
    favorite: false,
    description:
      "Clash Royale is a real-time strategy mobile game where players collect and upgrade cards featuring characters from the Clash of Clans universe. Players build decks, battle opponents in arenas, and strategically deploy troops and spells to destroy enemy towers while defending their own.",
  },
  {
    title: "Among Us",
    img: "../IMAGES/action2.png",
    category: "action",
    favorite: false,
    description:
      "Among Us is a multiplayer social deduction game where players work together on a spaceship, completing tasks while trying to identify the hidden impostors among them. Impostors aim to sabotage the crew and eliminate them without being discovered, creating tension and intrigue in each game.",
  },
  {
    title: "World Wrestling Entertainmen",
    img: "../IMAGES/sport2.png",
    category: "sport",
    favorite: false,
    description:
      "WWE is a professional wrestling game featuring scripted matches, iconic wrestlers, and various modes, including career and multiplayer competitions.",
  },
  {
    title: "Minecraft",
    img: "../IMAGES/adventure2.png",
    category: "adventure",
    favorite: false,
    description:
      "Minecraft is a sandbox adventure game that allows players to explore a blocky, procedurally generated world. Players can gather resources, craft tools, build structures, and engage in survival challenges against monsters.",
  },
  {
    title: "Fall Guys",
    img: "../IMAGES/free3.png",
    category: "free",
    favorite: false,
    description:
      "Fall Guys is a multiplayer party game where players compete in whimsical obstacle courses and mini-games. The goal is to be the last one standing by overcoming fun and chaotic challenges.",
  },
  {
    title: "The Forest",
    img: "../IMAGES/action3.png",
    category: "action",
    favorite: false,
    description:
      "The Forest is a survival horror game where players explore a mysterious open world after surviving a plane crash. They must gather resources, build shelters, and fend off cannibalistic mutants while uncovering the island's dark secrets.",
  },
  {
    title: "Rocket League",
    img: "../IMAGES/sport3.png",
    category: "sport",
    favorite: false,
    description:
      "Rocket League is a unique sports game that combines soccer with rocket-powered cars. Players compete in teams to score goals by hitting a large ball into the opposing team's net, using skillful maneuvers and aerial tricks.",
  },
  {
    title: "Lethal Company",
    img: "../IMAGES/adventure3.png",
    category: "adventure",
    favorite: false,
    description:
      "Lethal Company is a multiplayer horror game where players work together to complete missions in a haunted environment. They must gather resources, avoid terrifying enemies, and strategize to survive the night while uncovering dark secrets.",
  },
  {
    title: "Plants vs Zombies",
    img: "../IMAGES/free4.png",
    category: "free",
    favorite: false,
    description:
      "Plants vs. Zombies is a tower defense game where players strategically place various plants to defend their home from waves of comical zombies. Each plant has unique abilities.",
  },
  {
    title: "Sparking Zero",
    img: "../IMAGES/action4.png",
    category: "action",
    favorite: false,
    description:
      "Sparking Zero is an action-adventure game featuring exploration, combat, and unique abilities as players solve puzzles and uncover mysteries.",
  },
  {
    title: "Cricket",
    img: "../IMAGES/sport4.png",
    category: "sport",
    favorite: false,
    description:
      "Cricket is a sports simulation game that replicates the real-world sport of cricket. Players can engage in various formats, including Test matches, One Day Internationals, and T20 games, controlling teams and players to achieve victory through strategy and skill.",
  },
];

const itemContainer = document.getElementById("itemContainer");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");

function renderItems(filteredItems) {
  itemContainer.innerHTML = "";
  filteredItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.onclick = () => openPopup(item);
    div.innerHTML = `
                <span class="star" onclick="toggleFavorite(event, ${index})">${
      item.favorite ? "★" : "☆"
    }</span>
                <img src="${item.img}" alt="${item.title}">
                <h3>${item.title}</h3>
            `;
    itemContainer.appendChild(div);
  });
}

function filterItems(category) {
  if (category === "all") {
    renderItems(items);
  } else {
    const filteredItems = items.filter((item) => item.category === category);
    renderItems(filteredItems);
  }
}

function toggleFavorite(event, index) {
  event.stopPropagation();
  items[index].favorite = !items[index].favorite;
  renderItems(items);
}

function openPopup(item) {
  popupImage.src = item.img;
  popupTitle.innerText = item.title;
  popupDescription.innerText = item.description;
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

renderItems(items);
