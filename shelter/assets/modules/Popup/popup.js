async function popup(container, classBox) {
     async function getData() {
        try {
            const response = await fetch("./../../assets/json/pets.json");
            return await response.json();
        } catch (error) {
            console.error('Ошибка при исполнении запроса: ', error);
        }
    }

    const dataPets = await getData(); 

    const cardContainer = document.querySelector(container);
    let popup = document.querySelector(".popup"),
        popupDogName = document.querySelector(".popup__dog-name"),
        popupDogBreed = document.querySelector(".popup__dog-breed"),
        popupDogDecription = document.querySelector(".popup__dog-description"),
        popupDogImg = document.querySelector(".popup__img"),
        age = document.querySelector(".age"),
        inoculations = document.querySelector(".inoculations"),
        diseases = document.querySelector(".diseases"),
        parasites = document.querySelector(".parasites");

    function removePopup() {
        document.body.style.overflowY = "auto";
        popup.classList.remove("popup__active")
    }

      cardContainer.addEventListener("click", (e) => {
        const item = e.target.closest(classBox);
        if (item) {
            const petNum = item.getAttribute("data-num");

            document.body.style.overflowY = "hidden";

            popupDogImg.setAttribute('src', dataPets[petNum]['img-popup']);
            popupDogName.innerHTML = dataPets[petNum].name;
            popupDogBreed.innerHTML = `${dataPets[petNum].type} - ${dataPets[petNum].breed}`;
            popupDogDecription.innerHTML = dataPets[petNum].description;
            age.innerHTML = dataPets[petNum].age;
            inoculations.innerHTML = dataPets[petNum].inoculations;
            diseases.innerHTML = dataPets[petNum].diseases;
            parasites.innerHTML = dataPets[petNum].parasites;

            popup.classList.add("popup__active");
        }
    });

    popup.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup__container") || e.target.classList.contains("popup") || e.target.classList.contains("popup__btn")) {
            removePopup()
        } 
    })
}
  

export default popup;

