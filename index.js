
let byCourse = document.querySelectorAll(".buy-course");
let results = document.getElementById("results");
let demoArea = document.getElementById("demo-area");
let demCard = document.getElementById("dem-card");
byCourse.forEach((button) => {
  button.addEventListener("click", () => {
    let cDemCard = document.createElement("div");
    cDemCard.classList.add("dem-card");
    cDemCard.innerHTML = `
    <img
    id="demo-img"
    src="./images/courses-img/img1.png"
    alt="courses image here"
  />
  <div class="results-content-area" id="results-content-area">
    <h3>modern psychology</h3>
    <p>1300 tk</p>
  </div>
  <div class="cross" id="cross"><i class="fa-solid fa-xmark"></i></div>
    `;
    demoArea.appendChild(cDemCard);

    updateData();

    cDemCard.querySelector("i").addEventListener("click" , ()=>{
        cDemCard.remove();

    })
  });
});

let updateItemsCount = 1;
function updateData() {
  let updateItems = document.getElementById("update-items");
  let updatePrice = document.getElementById("update-price");
  updatePrice.innerText = updateItemsCount * 1300;
  updateItems.innerText = updateItemsCount++;
}
