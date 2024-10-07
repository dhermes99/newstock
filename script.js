const items = [
  { name: "COKE", required: 15 },
  { name: "COKE 0", required: 15 },
  { name: "FANTA", required: 5 },
  { name: "7UP", required: 4 },
  { name: "7UP FREE", required: 4 },
  { name: "FEVER TREE TONIC", required: 2 },
  { name: "FEVER TREE GINGER ALE", required: 2 },
  { name: "COFFEE", required: 7 },
  { name: "ASIAN STICKS", required: 2 },
  { name: "CHOCOLATE", required: 1 },
  { name: "BLUE PAPER", required: 8 },
  { name: "MINT", required: 6 },
  { name: "PASSION FRUIT", required: 6 },
  { name: "COORS LIGHT 330ml", required: 3 },
  { name: "CORONA 330ml", required: 5 },
  { name: "GINGER BEER", required: 6 },
  { name: "GUINNESS 0.0", required: 2 },
  { name: "HEINEKEN 330ml", required: 5 },
  { name: "HEINEKEN ZERO 330ml", required: 3 },
  { name: "PERONI 330ml", required: 2 },
  { name: "[COCKTAIL] - Aperol", required: 4 },
  { name: "[COCKTAIL] - Cosmo", required: 3 },
  { name: "[COCKTAIL] - Espresso", required: 3 },
  { name: "[COCKTAIL] - French m", required: 3 },
  { name: "[COCKTAIL] - Frizzante", required: 3 },
  { name: "[COCKTAIL] - Gin bramble", required: 3 },
  { name: "[COCKTAIL] - Margarita", required: 4 },
  { name: "[COCKTAIL] - Mojito", required: 4 },
  { name: "[COCKTAIL] - Pornstar", required: 5 },
  { name: "[COCKTAIL] - Sex on the beach", required: 3 },
  { name: "[COCKTAIL] - Whisky sour", required: 5 },
  { name: "HEINEKEN - [30L]", required: 7 },
  { name: "LAGUNITAS - [30L]", required: 5 },
  { name: "MORETTI - [30L]", required: 8 },
  { name: "MURPHYS - [30L]", required: 5 },
  { name: "ORCHARDd THIEVES - [30L]", required: 5 },
  { name: "SAUV BLANC - [ WHITE WINE]", required: 18 },
  { name: "ELISABETH - [ WHITE WINE]", required: 3 },
  { name: "PICPOUL - [ WHITE WINE]", required: 2 },
  { name: "SANCERRE - [ WHITE WINE]", required: 2 },
  { name: "CHARDONNAY - [ WHITE WINE]", required: 6 },
  { name: "ROSE", required: 6 },
  { name: "PROSECO", required: 3 },
  { name: "MERLOT - [ RED WINE]", required: 16 },
  { name: "COSTIERES- [ RED WINE]", required: 4 },
  { name: "MALBEC - [ RED WINE]", required: 10 },
  { name: "PINOT NOIR - [ RED WINE]", required: 4 },
  { name: "CHATEU AMANIEU - [ RED WINE]", required: 2 },
  { name: "FLEURIE - [ RED WINE]", required: 2 },
  { name: "SIRUS - [ RED WINE]", required: 2 },
  { name: "GIGONDAS - [ RED WINE]", required: 2 },
  { name: "CHATEU DU PAPE - [ RED WINE]", required: 1 },
  { name: "POMEROL - [ RED WINE]", required: 1 },
  { name: "PHELAN SEGUR - [ RED WINE]", required: 1 },
  { name: "JAMESON", required: 4 },
  { name: "GIN", required: 4 },
  { name: "GIN 0.0", required: 4 },
  { name: "BAILEYS", required: 4 },
  { name: "KAHLUA", required: 4 },
  { name: "CREME DE CASSIS", required: 4 },
  { name: "SMIRNOFF", required: 4 },
  { name: "CAPTAIN MORGAN", required: 4 },
  { name: "DISARONO", required: 2 },
  { name: "LIMONCELLO", required: 2 },
  { name: "SAMBUCA", required: 2 },
  { name: "WHITE SUGAR", required: 1 },
  { name: "BROWN SUGAR", required: 1 },
  { name: "DECAFF COFFEE", required: 1 },
  { name: "BLACK TEA", required: 1 },
  { name: "PEPPERMINT TEA", required: 1 },
  { name: "GREEN TEA", required: 1 },
  { name: "CAMOMILE TEA", required: 1 },
];

// Generate the input fields automatically
window.onload = function () {
  const stockItems = document.getElementById("stock-items");
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "col-md-6 col-lg-4";

    div.innerHTML = `
      <div class="card p-3">
        <h5 class="card-title">${item.name}</h5>
        <div class="mb-2">
          <label>Required</label>
          <input type="number" class="form-control" id="${item.name}-required" value="${item.required}" readonly>
        </div>
        <div>
          <label>In Stock</label>
          <input type="number" class="form-control" id="${item.name}-current" placeholder="In stock" min="0">
        </div>
      </div>
    `;
    stockItems.appendChild(div);
  });
};

// Function to calculate the restock
function calculateRestock() {
  const results = document.getElementById("results");
  results.innerHTML = ""; // Clear previous results
  let cocktailMessage = "Restock Summary:\n";

  items.forEach((item) => {
    const required =
      parseInt(document.getElementById(`${item.name}-required`).value) ||
      item.required;
    const current =
      parseInt(document.getElementById(`${item.name}-current`).value) || 0;

    const restock = required - current > 0 ? required - current : 0;

    const resultDiv = document.createElement("div");
    resultDiv.className = "alert alert-info";
    resultDiv.innerHTML = `<strong>${item.name}:</strong> needs to restock <strong>${restock}</strong> unit(s)`;
    results.appendChild(resultDiv);

    // Generate cocktail message (if it is a cocktail item)
    if (item.name.includes("[COCKTAIL]")) {
      cocktailMessage += `${restock} ${item.name.replace(
        "[COCKTAIL] - ",
        ""
      )}\n`;
    }
  });

  // Add WhatsApp message
  const cocktailResultDiv = document.createElement("div");
  cocktailResultDiv.className = "alert alert-warning";
  cocktailResultDiv.innerHTML = `<strong>Message for WhatsApp:</strong><br/><pre>${cocktailMessage}</pre>`;
  results.appendChild(cocktailResultDiv);
}
