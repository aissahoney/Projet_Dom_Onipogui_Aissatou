// nav
let clickDrop = document.querySelector(".dropdown")
console.log(clickDrop)
let dropItems = document.querySelector(".close")
console.log(dropItems)

clickDrop.addEventListener('click',()=>{
    dropItems.classList.toggle('open')
    dropItems.classList.toggle('close')
    console.log(dropItems)
})







// tabs

let carTab = document.querySelector('.car')
let movieTab = document.querySelector('.movie')
let colorTab = document.querySelector('.color')