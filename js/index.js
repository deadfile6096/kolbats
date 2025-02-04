// document.addEventListener("DOMContentLoaded", () => {
//     const tracking = document.getElementById("tracking");
//     const modal = document.getElementById("modal");
//     const closeModal = document.getElementById("closeModal");

//     // Открытие модального окна
//     tracking.addEventListener("click", () => {
//       modal.style.display = "flex";
//     });

//     // Закрытие модального окна
//     closeModal.addEventListener("click", () => {
//       modal.style.display = "none";
//     });

//     // Закрытие модального окна при клике вне окна
//     modal.addEventListener("click", (event) => {
//       if (event.target === modal) {
//         modal.style.display = "none";
//       }
//     });

// })


 // Получаем кнопки и контейнеры
 const tabs = document.querySelectorAll(".page__tab");
 const tradeList = document.getElementById("trade-list");
 const trackedList = document.getElementById("tracked-list");
 const sniperList = document.getElementById("sniper-list");

 // Функция для переключения вкладок
 const switchTab = (tabId) => {
   // Убираем класс active у всех кнопок
   tabs.forEach((tab) => tab.classList.remove("active"));

   // Добавляем класс active к нажатой кнопке
   const activeTab = document.getElementById(tabId);
   activeTab.classList.add("active");

   // Переключаем видимость списков
   if (tabId === "Trades") {
     tradeList.style.display = "block";
     sniperList.style.display = "none";
     trackedList.style.display = "none";
   } else if (tabId === "Tracked") {
     tradeList.style.display = "none";
     sniperList.style.display = "none";
     trackedList.style.display = "block";
   } else if (tabId === "Sniper") {
    tradeList.style.display = "none";
    trackedList.style.display = "none";
    sniperList.style.display = "block";
   } else if (tabId === "All") {
    tradeList.style.display = "block";
    tradeList.style.marginBottom = "20px";
    trackedList.style.display = "block";
    trackedList.style.marginBottom = "20px";
    sniperList.style.display = "block";
   }
 };

 // Добавляем обработчики событий для всех кнопок
 tabs.forEach((tab) => {
   tab.addEventListener("click", () => switchTab(tab.id));
 });

 // Инициализация: показываем первый список
 switchTab("Trades");

 const data = {
    "users": {
      "1": { "name": "Gorilla Capital", "x": "https://x.com/gorillacapsol", "img": "./gorilla.jpg" },
      "2": { "name": "The Doc", "x": "https://x.com/KayTheDoc", "img": "./doc.jpg" },
      "3": { "name": "Mr. Frog", "x": "https://x.com/TheMisterFrog", "img": "./frog.jpg" },
      "4": { "name": "Spuno", "x": "https://x.com/spunosounds", "img": "./spuno.jpg" },
      "5": { "name": "TheDefiApe", "x": "https://x.com/TheDefiApe", "img": "./TheDefiApe.jpg" },
      "6": { "name": "Frank", "x": "https://x.com/frankdegods", "img": "./frank.jpg" },
      "7": { "name": "Zinc", "x": "https://x.com/Zinc_ETH", "img": "./zinc.jpg" },
      "8": { "name": "Decu", "x": "https://x.com/Decu0x", "img": "./decu.jpg" }
    }
  };

  const memo = [
    { "name": "SOL-20", "img": "./sol.webp" },
    { "name": "RIZO", "img": "./rizo.png" },
    { "name": "out/acc", "img": "./out.jpg" },
    { "name": "CATAI", "img": "./cat.jpg" },
    { "name": "SILKROADFI", "img": "./silk.png" },
    { "name": "NEURO", "img": "./neuro.png" },
    { "name": "Gaelcoin", "img": "./gael.png" },
    { "name": "COTUS", "img": "./cotus.jpg" },
    { "name": "JACKY", "img": "./jack.jpg" },
    { "name": "LYRA", "img": "./lyra.png" },
    { "name": "FRUMPUS", "img": "./framp.jpg" }
  ];

  const tradeList1 = document.getElementById("tracked-list");

  for (const key in data.users) {
    const user = data.users[key];

    // Create a trade container
    const tradeDiv = document.createElement("div");
    tradeDiv.className = "trade";

    // Create the info section
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";

    const img = document.createElement("img");
    img.src = user.img;
    img.alt = user.name;

    const nameSpan = document.createElement("span");
    nameSpan.textContent = user.name;

    infoDiv.appendChild(img);
    infoDiv.appendChild(nameSpan);

    let ax = document.createElement("a");
    ax.href = user.x;

    let imag = document.createElement("img");
    imag.src = "./twitter.png";

    ax.appendChild(imag);
    nameSpan.appendChild(ax);
    // Create the delete button
    const deleteSpan = document.createElement("span");
    deleteSpan.className = "delete";
    deleteSpan.textContent = "X";

    // Append elements to the trade container
    tradeDiv.appendChild(infoDiv);
    tradeDiv.appendChild(deleteSpan);

    // Add the trade container to the trade list
    tradeList1.appendChild(tradeDiv);
  }


  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function getRandomNumber(min, max, decimals = 2) {
    const factor = Math.pow(10, decimals);
    return (Math.random() * (max - min) + min).toFixed(decimals);
  }

  function formatTimeAgo(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // Difference in seconds

    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (diff === 0) return "now";
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return `${diff}s ago`;
  }

  function createRandomTrade() {
    const randomUser = getRandomElement(Object.values(data.users));
    const randomMemo = getRandomElement(memo);
    const randomAmount = getRandomNumber(0.1, 100); // Random amount between 0.1 and 100
    const randomPrice = getRandomNumber(0.00001, 0.1); // Random price between $0.00001 and $0.1

    // Randomly decide whether it's a "buy" or "sell"
    const tradeType = Math.random() < 0.5 ? "bought " : "sold ";

    // Set the time for the trade
    const tradeTime = new Date();

    // Create a trade container
    const tradeDiv = document.createElement("div");
    tradeDiv.className = "trade";

    // Create the info section
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";

    const img = document.createElement("img");
    img.src = randomUser.img;
    img.alt = randomUser.name;
    let color;
    if(tradeType == "bought ") {
        color= "green";
    } else {
        color= "red";
    }

    const span = document.createElement("span");
    span.innerHTML = `${randomUser.name} ${tradeType} <strong style="color: ${color}"> ${randomAmount} sol </strong> of ${randomMemo.name} at $${randomPrice}`;
   
    infoDiv.appendChild(img);
    infoDiv.appendChild(span);

    // Create the time ago span
    const timeSpan = document.createElement("span");
    timeSpan.textContent = formatTimeAgo(tradeTime);

    // Append elements to the trade container
    tradeDiv.appendChild(infoDiv);
    tradeDiv.appendChild(timeSpan);

    // Add the trade container to the beginning of the list
    tradeList.insertBefore(tradeDiv, tradeList.firstChild);

    // Update the time every minute
    setInterval(() => {
      timeSpan.textContent = formatTimeAgo(tradeTime);
    }, 60000);
  }

  // Generate random trades every 10 seconds
  setInterval(createRandomTrade, 5000);

  document.querySelector(".connect").addEventListener("click", async () => {
    // Проверяем, установлен ли кошелек
    if (window.solana && window.solana.isPhantom) {
        try {
            const resp = await window.solana.connect();
            console.log('Wallet connected:', resp.publicKey.toString());
        } catch (err) {
            console.error('Connection to wallet failed:', err.message);
        }
    } else {
        // Если кошелек не установлен
        window.open('https://phantom.app/', '_blank');
    }
});