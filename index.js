// // selected items
// let byCourse = document.querySelectorAll(".buy-course");
// let demoArea = document.getElementById("demo-area");
// // let demoImg = document.getElementById("demo-img");
// let resultsContentArea = document.getElementById("results-content-area")
// let demCard = document.getElementById("dem-card")
// byCourse.forEach(button =>{
//     button.addEventListener("click" , ()=>{
//         demCard.classList.add("dem-card")
//         // demoImg.src = "./images/courses-img/img3.png"
//         const demoImg = document.createElement("img")
//         demoImg.src = "./images/courses-img/img3.png"
//         demoImg.width = "60px"
//         demoArea.classList.add("demo-area")
//         const h3 = document.createElement("h3")
//         h3.innerText = "modern psychology"
//         demoArea.appendChild(demoImg)
//         demoArea.appendChild(h3)
//     })
// })

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
  });
});

let updateItemsCount = 1;
function updateData() {
  let updateItems = document.getElementById("update-items");
  let updatePrice = document.getElementById("update-price");
  updatePrice.innerText = updateItemsCount * 1300;
  updateItems.innerText = updateItemsCount++;
}


document.getElementById("update-items").addEventListener("click" , ()=>{
    console.log('clicked')
})
// function dataFunc() {
//   let demoArea = document.getElementById("demo-area");
//   let demCard = document.getElementById("dem-card");
//   demCard.innerHTML = `

//  <p>i am pobittra</p>

//     `;

//   demoArea.appendChild(demCard);
//   console.log("click");
// }
