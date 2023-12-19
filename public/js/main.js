// nav
let clickDrop = document.querySelector(".dropdown")
console.log(clickDrop)
let dropItems = document.querySelector(".close")
console.log(dropItems)

clickDrop.addEventListener('click', () => {
    dropItems.classList.toggle('open')
    dropItems.classList.toggle('close')
    console.log(dropItems)
})







// tabs filter section current

let aiButton = document.querySelector('.ai-btn')
console.log(aiButton);
let devButton = document.querySelector('.dev-btn')
console.log(devButton);
let uxButton = document.querySelector('.ux-btn')
console.log(uxButton);




let containerDiv= document.querySelector('.container')
console.log(containerDiv)

let filterDiv= containerDiv.children
console.log(filterDiv)


aiButton.addEventListener('click', function () {
    Array.from(filterDiv).forEach(div => {
        if (div.classList.contains('ia')) {
            div.classList.add("filtered-div")
            div.style.display="block"
        }
        else if (!div.classList.contains('ia')){
            div.style.display="none"
            console.log("remove dev et ux");
        }
    })
})
devButton.addEventListener('click', function () {
    Array.from(filterDiv).forEach(div => {
        if (div.classList.contains('dev')) {
            div.classList.add("filtered-div")
            div.style.display="block"
        }
        else if (!div.classList.contains('dev')){
            div.style.display="none"
            console.log("remove ai et ux");
        }
    })
})

uxButton.addEventListener('click', function() {
    Array.from(filterDiv).forEach(div => {
        if (div.classList.contains('ux')) {
            div.classList.add("filtered-div")
            div.style.display="block"
        }
        else if (!div.classList.contains('ux')){
            div.style.display="none"
            console.log("remove ai et dev");
        }
    })
})





//accordion section faqs
let accordeonTitles = document.querySelectorAll('.accordeonTitle')
// console.log(accordeonTitles);
let arrowDown= document.querySelectorAll(".fa-chevron-down")
// console.log(arrowDown)
let arrowUp=document.createElement("i")
arrowUp.classList.add("fa-solid")
arrowUp.classList.add("fa-chevron-up")


accordeonTitles.forEach(element => {
    element.addEventListener('click',function(e){
        // element.nextElementSibling.style.display = 'block'
        element.nextElementSibling.className = 'block'
        arrowDown.forEach(element => {
            element=e.target
            element.replaceWith(arrowUp)
        });

        accordeonTitles.forEach(item => {
            if (element != item) {
                // item.nextElementSibling.style.display = 'none'
                item.nextElementSibling.className = 'none'
            }
        })
    })
})



