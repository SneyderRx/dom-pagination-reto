import { getData } from "../data/data.js";

const cardsPerPage = 4;
let allCardsData = [];
const cardContainers = [
    document.getElementById("cards-container-1"),
    document.getElementById("cards-container-2"),
    document.getElementById("cards-container-3"),
    document.getElementById("cards-container-4"),
    document.getElementById("cards-container-5"),
];

async function iniciarPage() {
    // Ocultar todos los contenedores de tarjetas al inicio
    cardContainers.forEach(container => {
        if (container) {
            container.style.display = "none";
        }
    });

    // Mostrar el primer contenedor (la primera página)
    if (cardContainers[0]) {
        cardContainers[0].style.display = "flex"; // Usa flex para que las tarjetas se dispongan en fila (ajusta según tu CSS)
    }
}

async function setData(data) {
    allCardsData = data; // Guarda todos los datos de las tarjetas
    console.log(allCardsData);
    
    // Limpiar los contenedores antes de agregar las tarjetas
    // cardContainers.forEach(container => {
    //     if (container) {
    //         container.innerHTML = "";
    //     }
    // });

    // Distribuir las tarjetas en los diferentes contenedores
    for (let i = 0; i < allCardsData.length; i++) {
        const cardData = allCardsData[i];

        const cardIndex = Math.floor(i / cardsPerPage); // Calcula a qué página pertenece la tarjeta

        if (cardContainers[cardIndex]) {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            const img = document.createElement("img");
            img.src = cardData.images[0]
            cardElement.appendChild(img)

            const title = document.createElement("h3");
            title.textContent = cardData.name;
            cardElement.appendChild(title);

            const description = document.createElement("p");
            description.textContent = cardData.clan;
            cardElement.appendChild(description);

            cardContainers[cardIndex].appendChild(cardElement);
        }
    }
}





// window.addEventListener("load", iniciarPage)

document.addEventListener("DOMContentLoaded", async () => {
    const dataFromApi = await getData();
    await setData(dataFromApi);
})