import pap from "./../images/meals/pap-small.png";
import jollof from "./../images/meals/jollof.png";
import gaston from "./../images/meals/gastonton.png";
import port from "./../images/meals/port.png";
import carle from "./../images/meals/carle.png";
import south from "./../images/meals/south.png";

function getElementId(id) {
  return document.getElementById(id);
}

function setMealList() {
  let parentList = getElementId("list-body");
  let mealItems = [
    {
      img: pap,
      title: "Akara & Pap",
      description: "Carbohydrate",
    },
    {
      img: jollof,
      title: "Jollof Rice",
      description: "Protein",
    },
    {
      img: gaston,
      title: "Gastonton",
      description: "Carbohydrate",
    },
    {
      img: port,
      title: "Port Domenic",
      description: "Carbohydrate",
    },
    {
      img: carle,
      title: "Carleeville",
      description: "Fat & Oils",
    },
    {
      img: south,
      title: "South Chesleyton",
      description: "Vegetable",
    },
  ];

  mealItems.forEach((element) => {
    let newListItem = document.createElement("li");
    newListItem.className = "meal-item";
    let listItemElements = ` 
    <button  class="desc-img">   <img src=${element.img} alt=${element.title} /></button>
  

    <div class="meal-desc">
     <h5> ${element.title} </h5>
     <h6> ${element.description} </h6>
    </div>
    `;
    newListItem.innerHTML = listItemElements;
    parentList.append(newListItem);
  });
}

getElementId("show-modal-btn").addEventListener("click", function show() {
  openMealModal();
});

getElementId("hide-modal-btn").addEventListener("click", function hide() {
  hideMealModal();
});

 function openMealModal() {
  let mealModal = getElementId("meal-modal");
  mealModal.classList.remove("hidden");
  mealModal.classList.add("show");
  getElementId("hide-info-tab").classList.add("hide");
}

 function hideMealModal() {
  let mealModal = getElementId("meal-modal");
  mealModal.classList.add("hidden");
  mealModal.classList.remove("show");
  getElementId("hide-info-tab").classList.remove("hide");
}

setMealList();
