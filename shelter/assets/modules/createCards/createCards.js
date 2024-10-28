async function createCards(petsIndex, box, itemSelect, item400, itemFriends
) {
    async function getData() {
        try {
            const response = await fetch("./../../assets/json/pets.json");
            return await response.json();
        } catch (error) {
            console.error('Ошибка при исполнении запроса: ', error);
        }
    }

    const data = await getData(); 

    const cardsBox = document.querySelector(box);

    const boxItem = document.createElement("div");
    const itemImg = document.createElement("img");
    const itemTitle = document.createElement("h3");
    const itemBtn = document.createElement("button");

  
    boxItem.classList.add(itemSelect);
    if (item400 == "item-400") {
        boxItem.classList.add(item400);
    }
    if (itemFriends == "item-friends") {
        boxItem.classList.add(itemFriends);
    }
    boxItem.setAttribute("data-num", petsIndex)
    itemImg.classList.add("our-friends__item--img");
    itemTitle.classList.add("our-friend__item--title", "friend--title");
    itemBtn.classList.add("our-friend__item--btn", "btn-primary");

    itemImg.setAttribute('src', data[petsIndex].img);
    itemTitle.innerHTML = `${data[petsIndex].name}`;
    itemBtn.innerHTML = "Learn more";

    boxItem.append(itemImg, itemTitle, itemBtn);
    
    cardsBox.append(boxItem);
}

export default createCards;