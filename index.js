// selected items
let byCourse = document.querySelectorAll(".buy-course");
byCourse.forEach(button =>{
    button.addEventListener("click" , ()=>{
        console.log("button clicked")
    })
})