import pap from "./../images/meals/pap-small.png";
import papLarge from "./../images/meals/p-large.png";
import jollof from "./../images/meals/jollof.png";
import jollofLarge from "./../images/meals/j-large.png";
import gaston from "./../images/meals/gastonton.png";
import gastonLarge from "./../images/meals/g-large.png";
import port from "./../images/meals/port.png";
import portLarge from "./../images/meals/port-large.png";
import carle from "./../images/meals/carle.png";
import carleLarge from "./../images/meals/c-large.png";
import south from "./../images/meals/south.png";
import southLarge from "./../images/meals/s-large.png";

function getElementId(id) {
  return document.getElementById(id);
}

function setMealList() {
  let parentList = getElementId("list-body");
  let mealItems = [
    {
      img: pap,
      imgLarge: papLarge,
      title: "Akara & Pap",
      description: "Carbohydrate",
    },
    {
      img: jollof,
      imgLarge: jollofLarge,
      title: "Jollof Rice",
      description: "Protein",
    },
    {
      img: gaston,
      imgLarge: gastonLarge,
      title: "Gastonton",
      description: "Carbohydrate",
    },
    {
      img: port,
      imgLarge: portLarge,
      title: "Port Domenic",
      description: "Carbohydrate",
    },
    {
      img: carle,
      imgLarge: carleLarge,
      title: "Carleeville",
      description: "Fat & Oils",
    },
    {
      img: south,
      imgLarge: southLarge,
      title: "South Chesleyton",
      description: "Vegetable",
    },
  ];

  mealItems.forEach((element) => {
    let newListItem = document.createElement("li");
    newListItem.className = "meal-item";
    let listItemElements = ` 
    <button  class="desc-img">   <img src=${element.img} alt=${element.title} /></button>
    <div style="background-image:url(${element.imgLarge})" class="large-img">    </div>
    <div class="overlay child"></div>
    <div class="meal-desc">
     <h5> ${element.title} </h5>
     <h6> ${element.description} </h6>
    </div>
    `;
    newListItem.innerHTML = listItemElements;
    parentList.append(newListItem);

    document.querySelectorAll(".desc-img").forEach((el) =>
      el.addEventListener("click", function showNext() {
        let elementToShow = this.nextElementSibling;
        elementToShow.classList.remove("hide");
        elementToShow.classList.add("show");
        elementToShow.nextElementSibling.classList.add("show");
      })
    );
    document.querySelectorAll(".large-img").forEach((el) => {
      el.addEventListener("click", function () {
        hideLargeImage(el);
      });
      el.nextElementSibling.addEventListener("click", function () {
        hideLargeImage(el);
      });
    });
  });
}

getElementId("show-modal-btn").addEventListener("click", function show() {
  toggleMealModal("open");
});

getElementId("hide-modal-btn").addEventListener("click", function hide() {
  toggleMealModal("close");
});

function toggleMealModal(type) {
  let mealModal = getElementId("meal-modal");
  let overlay = getElementId("main-overlay");
  let info_tab = getElementId("hide-info-tab");
  if (type === "open") {
    overlay.classList.add("show");
    mealModal.classList.remove("hidden");
    mealModal.classList.add("show");
    info_tab.classList.add("hide");
  } else {
    overlay.classList.remove("show");

    mealModal.classList.add("hidden");
    mealModal.classList.remove("show");

     info_tab.classList.remove("hide");
  }
}

function hideLargeImage(el) {
  el.classList.add("hide");
  el.classList.remove("show");
  el.nextElementSibling.classList.remove("show");
}

setMealList();
