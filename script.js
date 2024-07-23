const items = [
  { name: "COKE", required: 10 },
  { name: "COKE 0", required: 10 },
  { name: "FANTA", required: 4 },
  { name: "7UP", required: 4 },
  { name: "7UP FREE", required: 4 },
  { name: "FEVER TREE TONIC", required: 1 },
  { name: "FEVER TREE GINGER ALE", required: 1 },
  { name: "COFFEE", required: 7 },
  { name: "ASIAN STICKS", required: 2 },
  { name: "CHOCOLATE", required: 1 },
  { name: "BLUE PAPER", required: 4 },
  { name: "MINT", required: 6 },
  { name: "PASSION FRUIT", required: 6 },
  { name: "COORS LIGHT 330ml", required: 2 },
  { name: "CORONA 330ml", required: 4 },
  { name: "GINGER BEER", required: 4 },
  { name: "HEINEKEN 330ml", required: 4 },
  { name: "HEINEKEN ZERO 330ml", required: 3 },
  { name: "PERONI 330ml", required: 2 },
  { name: "[COCKTAIL] - Aperol", required: 3 },
  { name: "[COCKTAIL] - Cosmo", required: 3 },
  { name: "[COCKTAIL] - Espresso", required: 3 },
  { name: "[COCKTAIL] - French m", required: 3 },
  { name: "[COCKTAIL] - Frizzante", required: 3 },
  { name: "[COCKTAIL] - Gin bramble", required: 3 },
  { name: "[COCKTAIL] - Margarita", required: 3 },
  { name: "[COCKTAIL] - Mojito", required: 3 },
  { name: "[COCKTAIL] - Pornstar", required: 3 },
  { name: "[COCKTAIL] - Sex on the beach", required: 3 },
  { name: "[COCKTAIL] - Whisky sour", required: 3 },
  { name: "HEINEKEN - [30L]", required: 7 },
  { name: "LAGUNITAS - [30L]", required: 3 },
  { name: "MORETTI - [30L]", required: 7 },
  { name: "MURPHYS - [30L]", required: 4 },
  { name: "ORCHARDd THIEVESs - [30L]", required: 4 },
  { name: "SAUV BLANC - [ WHITE WINE]", required: 12 },
  { name: "ELISABETH - [ WHITE WINE]", required: 2 },
  { name: "PICPOUL - [ WHITE WINE]", required: 2 },
  { name: "SANCERRE - [ WHITE WINE]", required: 1 },
  { name: "CHARDONNAY - [ WHITE WINE]", required: 1 },
  { name: "ROSE", required: 5 },
  { name: "PROSECO", required: 2 },
  { name: "MERLOT - [ RED WINE]", required: 12 },
  { name: "COSTIERES- [ RED WINE]", required: 1 },
  { name: "MALBEC - [ RED WINE]", required: 6 },
  { name: "PINOT NOIR - [ RED WINE]", required: 2 },
  { name: "CHATEU AMANIEU - [ RED WINE]", required: 1 },
  { name: "FLEURIE - [ RED WINE]", required: 1 },
  { name: "SIRUS - [ RED WINE]", required: 1 },
  { name: "GIGONDAS - [ RED WINE]", required: 1 },
  { name: "CHATEU DU PAPE - [ RED WINE]", required: 1 },
  { name: "POMEROL - [ RED WINE]", required: 1 },
  { name: "PHELAN SEGUR - [ RED WINE]", required: 1 },
  { name: "JAMESON", required: 2 },
  { name: "GIN", required: 2 },
  { name: "GIN 0.0", required: 2 },
  { name: "BAILEYS", required: 1 },
  { name: "KAHLUA", required: 2 },
  { name: "CREME DE CASSIS", required: 2 },
  { name: "SMIRNOFF", required: 2 },
  { name: "CAPTAIN MORGAN", required: 2 },
  { name: "DISARONO", required: 2 },
  { name: "DISARONO", required: 2 },
  { name: "LIMONCELLO", required: 2 },
  { name: "SAMBUCA", required: 2 },
];

window.onload = function () {
  const stockItems = document.getElementById("stock-items");
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
        <label>${item.name}</label>
        <input type="number" id="${item.name}-required" value="${item.required}" placeholder="Necessary" min="0">
        <input type="number" id="${item.name}-current" placeholder="In stock" min="0">
        <input type="number" id="${item.name}-sold" placeholder="Sold" min="0">
      `;
    stockItems.appendChild(div);
  });
};

function calculateRestock() {
  const results = document.getElementById("results");
  results.innerHTML = "";
  let cocktailMessage = "HELLO\nCAN I PLEASE GET:\n";

  items.forEach((item) => {
    const required =
      parseInt(document.getElementById(`${item.name}-required`).value) ||
      item.required;
    const current =
      parseInt(document.getElementById(`${item.name}-current`).value) || 0;
    const sold =
      parseInt(document.getElementById(`${item.name}-sold`).value) || 0;

    const remaining = current - sold;
    const restock = required - remaining > 0 ? required - remaining : 0;

    const resultDiv = document.createElement("div");
    resultDiv.innerText = `${item.name}: needed ${restock}`;
    results.appendChild(resultDiv);

    if (item.name.includes("[COCKTAIL]")) {
      cocktailMessage += `${restock} ${item.name.replace(
        "[COCKTAIL] - ",
        ""
      )}\n`;
    }
  });

  const cocktailResultDiv = document.createElement("div");
  cocktailResultDiv.innerHTML = `<br/><br/>Send this message via WhatsApp:<br/><pre>${cocktailMessage}</pre>`;
  results.appendChild(cocktailResultDiv);
}
