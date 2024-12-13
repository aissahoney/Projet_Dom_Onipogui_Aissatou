
// nav
let clickDrop = document.querySelector(".dropdown")
// console.log(clickDrop)
let dropItems = document.querySelector(".close")
console.log(dropItems)

clickDrop.addEventListener('click', () => {
    dropItems.classList.toggle('open')
    dropItems.classList.toggle('close')
    // console.log(dropItems)
})

// menu-burger
let menuburger = document.querySelector(".menu-burger")
let navLinks = document.querySelector(".nav-links")

menuburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

//light/Dark
let body= document.querySelector("body")
let section= document.querySelectorAll('section')
let h1=document.querySelectorAll("h1")
let h2=document.querySelectorAll("h2")
let h3=document.querySelectorAll("h3")
let h4=document.querySelectorAll("h4")
let h5=document.querySelectorAll("h5")
let p=document.querySelectorAll("p")
let ul=document.querySelectorAll("ul")
let nav=document.querySelector(".navbar")



// let lightMode=document.querySelector(".mode")
// lightMode.addEventListener("click", function() {
//     lightMode.classList.toggle(".mode")
    
//     body.style.background=" rgba(19, 18, 29, 0.9)"
//     body.style.color="white"
//     nav.style.color="rgba(87, 58, 250, 0.966)"

//     section.forEach(element => {
//         element.style.background=" rgba(19, 18, 29, 0.9)"
        
//     });
//     h1.forEach(element => {
//         element.style.color="white"
//     });
//     h2.forEach(element => {
//         element.style.color="white"
//     });
//     h3.forEach(element => {
//         element.style.color="white"
//     });
//     h4.forEach(element => {
//         element.style.color="white"
//     });
//     h5.forEach(element => {
//         element.style.color="white"
//     });
    
//     p.forEach(element => {
//         element.style.white="white"
//     });
//     li.forEach(element => {
//         element.style.white="white"
//     });


// })




// color change section servive

let gridAll = document.querySelectorAll(".grid-item")
let gridItems;
// console.log(gridItems)
// let i = document.querySelector(".fa-music")
// i.style.color = 'red'
// console.log(i);
gridAll.forEach(element => {
    gridItems = element
    // console.log(gridItems)
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
    // console.log(gridItems)
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
// console.log(aiButton);
let devButton = document.querySelector('.dev-btn')
// console.log(devButton);
let uxButton = document.querySelector('.ux-btn')
// console.log(uxButton);


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






// Carousel

let slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    dot = document.querySelector('.dots');

function slide(wrapper, items, prev, next) {
    let posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.getElementsByClassName('slide'),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
        index = 0,
        allowShift = true;

    wrapper.classList.add('loaded');

    for (let j = 0; j < slidesLength; j++) {
        let dotItem = document.createElement('i');
        dotItem.dataset.id = j;
        dot.appendChild(dotItem);
    }

    document.querySelector('.dots i:first-child').classList.add('active');


    function appendAfter(n, original, appendTo) {
        for (let i = 0; i < n; i++) {
            let clone = original[i].cloneNode(true);
            appendTo.appendChild(clone);
        }
    }
    appendAfter(4, slides, items);

    items.insertBefore(slides[slidesLength - 1].cloneNode(true), slides[0]);

    // Mouse events
    //   items.onmousedown = dragStart;

    //   // Touch events
    //   items.addEventListener('touchstart', dragStart);
    //   items.addEventListener('touchend', dragEnd);
    //   items.addEventListener('touchmove', dragAction);

    // Click events
    prev.addEventListener('click', function () { shiftSlide(-1) });
    next.addEventListener('click', function () { shiftSlide(1) });

    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function shiftSlide(dir, action) {
        items.classList.add('shifting');

        if (allowShift) {
            if (!action) { posInitial = items.offsetLeft; }

            if (dir == 1) {
                items.style.left = (posInitial - slideSize) + "px";
                index++;
            } else if (dir == -1) {
                items.style.left = (posInitial + slideSize) + "px";
                index--;
            }

        };

        allowShift = false;
    }

    function checkIndex() {
        items.classList.remove('shifting');

        if (index == -1) {
            items.style.left = -(slidesLength * slideSize) + "px";
            index = slidesLength - 1;
        }

        if (index == slidesLength) {
            items.style.left = -(1 * slideSize) + "px";
            index = 0;
        }
        deleteDots();
        dot.children[index].classList.add('active');
        allowShift = true;
    }

    dot.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() !== 'i') return;
        checkDots(e);
    });
    function checkDots(e) {
        items.classList.add('shifting');
        deleteDots();
        e.target.classList.add('active');
        items.style.left = -(1 * (slideSize * e.target.dataset.id)) + "px";
        index = e.target.dataset.id;
    }

    function deleteDots() {
        let dotElements = document.querySelectorAll('.dots i');
        for (let i = 0; i < dotElements.length; i++) {
            dotElements[i].classList.remove('active');
        }
    }

}

slide(slider, sliderItems, prev, next);



let btnMonth= document.querySelector(".btn-change"); 
let grandRond = document.querySelectorAll(".grand-rond")[0]; 
let boule = document.querySelectorAll(".boule") [0];
let prix1= document.querySelectorAll(".price")[0];
let prix2= document.querySelectorAll(".price")[1];
let prix3= document.querySelectorAll(".price")[2];
let prix4= document.querySelectorAll(".price")[3];
let month1= document.querySelectorAll(".month")[0];
let month2= document.querySelectorAll(".month")[1];
let month3= document.querySelectorAll(".month")[2];
let month4= document.querySelectorAll(".month")[3];
console.log(prix1);
console.log(month1);

let month = true

grandRond.addEventListener("click",function(){
    if(month){
        boule.style.left="17.1rem"
        month1.innerHTML = "/year"
        month2.innerHTML = "/year"
        month3.innerHTML = "/year"
        month4.innerHTML = "/year"
    
        prix2.innerHTML="190"
        prix3.innerHTML="290"
        prix4.innerHTML="490"
        month = false

    } else{
        month = true
        boule.style.left="13rem"
        month1.innerHTML = "/month"
        month2.innerHTML = "/month"
        month3.innerHTML = "/month"
        month4.innerHTML = "/month"
    
        prix2.innerHTML="19"
        prix3.innerHTML="29"
        prix4.innerHTML="49"

    }
})