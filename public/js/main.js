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

// color change section servive

let gridAll = document.querySelectorAll(".grid-item")
let gridItems;
// console.log(gridItems)
// let i = document.querySelector(".fa-music")
// console.log(i);
gridAll.forEach(element => {
    gridItems = element
    console.log(gridItems)
    element.addEventListener("mouseover", function (e) {
        element = e.target
        console.log(element.children)
        if (element.classList.contains("item1")) {
            // i.style.color= "#fff"
            element.children[0].style.color = "white"
            element.children[1].style.color = "white"
            element.children[2].style.color = "white"
            element.style.background = "#47AEFE"
        }
        if (element.classList.contains("item2")) {
            element.children[0].style.color = "white"
            element.children[1].style.color = "white"
            element.children[2].style.color = "white"
            element.style.background = "rgb(255,162 ,106 )"
        }
        if (element.classList.contains("item3")) {
            element.children[0].style.color = "white"
            element.children[1].style.color = "white"
            element.children[2].style.color = "white"
            element.style.background = "#E80168"
        }
        if (element.classList.contains("item4")) {
            element.children[0].style.color = "white"
            element.children[1].style.color = "white"
            element.children[2].style.color = "white"
            element.style.background = "#FFBB2C"
        }
        if (element.classList.contains("item5")) {
            element.children[0].style.color = "white"
            element.children[1].style.color = "white"
            element.children[2].style.color = "white"
            element.style.background = "rgb(250,77 ,36 )"
        }
        if (element.classList.contains("item6")) {
            element.children[0].style.color = "white"
            element.children[1].style.color = "white"
            element.children[2].style.color = "white"
            element.style.background = "#0EDBCE"
        }

    })
});
gridAll.forEach(element => {
    gridItems = element
    console.log(gridItems)
    element.addEventListener("mouseout", function (e) {
        element = e.target
        console.log(element.children)
        if (element.classList.contains("item1")) {
            element.children[0].style.color = "#47AEFE"
            element.children[1].style.color = "black"
            element.children[2].style.color = "black"
            element.style.background = "white"
        }
        if (element.classList.contains("item2")) {
            element.children[0].style.color = "rgb(255,162 ,106 )"
            element.children[1].style.color = "black"
            element.children[2].style.color = "black"
            element.style.background = "white"
        }
        if (element.classList.contains("item3")) {
            element.children[0].style.color = "#E80168"
            element.children[1].style.color = "black"
            element.children[2].style.color = "black"
            element.style.background = "white"
        }
        if (element.classList.contains("item4")) {
            element.children[0].style.color = "#FFBB2C"
            element.children[1].style.color = "black"
            element.children[2].style.color = "black"
            element.style.background = "white"
        }
        if (element.classList.contains("item5")) {
            element.children[0].style.color = "rgb(250,77 ,36 )"
            element.children[1].style.color = "black"
            element.children[2].style.color = "black"
            element.style.background = "white"
        }
        if (element.classList.contains("item6")) {
            element.children[0].style.color = "#0EDBCE"
            element.children[1].style.color = "black"
            element.children[2].style.color = "black"
            element.style.background = "white"
        }
    })
});















// tabs filter section current

let aiButton = document.querySelector('.ai-btn')
console.log(aiButton);
let devButton = document.querySelector('.dev-btn')
console.log(devButton);
let uxButton = document.querySelector('.ux-btn')
console.log(uxButton);




let containerDiv = document.querySelector('.container')
console.log(containerDiv)

let filterDiv = containerDiv.children
console.log(filterDiv)


aiButton.addEventListener('click', function () {
    Array.from(filterDiv).forEach(div => {
        if (div.classList.contains('ia')) {
            div.classList.add("filtered-div")
            div.style.display = "block"
        }
        else if (!div.classList.contains('ia')) {
            div.style.display = "none"
            console.log("remove dev et ux");
        }
    })
})
devButton.addEventListener('click', function () {
    Array.from(filterDiv).forEach(div => {
        if (div.classList.contains('dev')) {
            div.classList.add("filtered-div")
            div.style.display = "block"
        }
        else if (!div.classList.contains('dev')) {
            div.style.display = "none"
            console.log("remove ai et ux");
        }
    })
})

uxButton.addEventListener('click', function () {
    Array.from(filterDiv).forEach(div => {
        if (div.classList.contains('ux')) {
            div.classList.add("filtered-div")
            div.style.display = "block"
        }
        else if (!div.classList.contains('ux')) {
            div.style.display = "none"
            console.log("remove ai et dev");
        }
    })
})





//accordion section faqs
let accordeonTitles = document.querySelectorAll('.accordeonTitle')
// console.log(accordeonTitles);
let arrowDown = document.querySelectorAll(".fa-chevron-down")
// console.log(arrowDown)
let arrowUp = document.querySelector(".fa-chevron-up")
console.log(arrowUp)



accordeonTitles.forEach(element => {
    element.addEventListener('click', function () {
        element.nextElementSibling.className = 'block'
        // arrowDown.forEach(item=> {
        //     item.replaceWith(arrowUp)
        //     // item.style.display="block"
        //     arrowUp.style.display="block"
        //     console.log(item)
        // });

        accordeonTitles.forEach(item => {
            if (element != item) {
                // console.log(item)
                // item.replaceWith(arrowDown)
                item.nextElementSibling.className = 'none'
            }
        })
    })
})



