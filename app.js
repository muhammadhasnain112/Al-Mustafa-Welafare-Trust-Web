const img = document.getElementById('img')
const second = document.getElementById('second')
const appeal = document.getElementById('appeal')
const zakat = document.getElementById('zakat')
const envolved = document.getElementById('envolved')
const about = document.getElementById('about')
const input = document.getElementById('input')
const input2 = document.getElementById('input2')
const btn = document.getElementById('btn')
const icon = document.getElementById('search-icon')
const inputOuter = document.getElementById('inputOuter')
const inputOuter1 = document.getElementById('inputOuter1')
const search2 = document.getElementById('search2')
input.addEventListener('click', () => {
    input2.style.display = 'none'
    input.style.width = `100%`
    btn.style.display = `flex`
    icon.style.left = `20vw`

    inputOuter.style.opacity = `1`
    inputOuter.style.visibility = `visible`
    inputOuter.style.transform = `translateY(0)`
})
let flag = false
search2.addEventListener('click', () => {
    if (flag) {
        // inputOuter.style.top = `${window.scrollY + 55}px`/
        inputOuter1.style.opacity = `0`
        inputOuter1.style.visibility = `hidden`
        inputOuter1.style.transform = `translateY(10px)`
        flag = false
    } else {
        inputOuter1.style.top = `3vw`
        inputOuter1.style.opacity = `1`
        inputOuter1.style.visibility = `visible`
        inputOuter1.style.transform = `translateY(0)`
        flag = true
    }
})
btn.addEventListener('click', () => {
    input2.style.display = 'flex'
    input.style.width = `50%`
    btn.style.display = `none`
    icon.style.left = `11vw`
    inputOuter.style.opacity = `0`
    inputOuter.style.visibility = `hidden`
    inputOuter.style.transform = `translateY(10px)`
})



const appeal2 = document.getElementById('appeal2')
const zakat2 = document.getElementById('zakat2')
const envolved2 = document.getElementById('involved2')
const about2 = document.getElementById('about2')


const infobar = document.getElementById('infobar')
const infobar2 = document.getElementById('infobar2')
const infobar3 = document.getElementById('infobar3')
const infobar4 = document.getElementById('infobar4')
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 40) {
        second.style.display = `flex`
    } else {
        second.style.display = `none`
    }

})
appeal.addEventListener('mouseover', () => {
    infobar.style.top = `8.5vw`
    infobar.style.opacity = `1`
    infobar.style.visibility = `visible`
    infobar.style.transform = `translateY(0)`
})
appeal.addEventListener('mouseout', () => {
    infobar.style.visibility = `hidden`
    infobar.style.transform = `translateY(10px)`
    infobar.style.opacity = `0`
})
appeal2.addEventListener('mouseover', () => {
    infobar.style.opacity = `1`
    infobar.style.top = `${window.scrollY + 55}px`
    infobar.style.visibility = `visible`
    infobar.style.transform = `translateY(0)`
})
appeal2.addEventListener('mouseout', () => {
    infobar.style.visibility = `hidden`
    infobar.style.transform = `translateY(10px)`
    infobar.style.opacity = `0`
})
envolved
    .addEventListener('mouseover', () => {
        infobar3.style.top = `8.5vw`
        infobar3.style.opacity = `1`
        infobar3.style.visibility = `visible`
        infobar3.style.transform = `translateY(0)`
    })
envolved.addEventListener('mouseout', () => {
    infobar3.style.visibility = `hidden`
    infobar3.style.transform = `translateY(10px)`
    infobar3.style.opacity = `0`

})
envolved2
    .addEventListener('mouseover', () => {
        infobar3.style.top = `${window.scrollY + 55}px`
        infobar3.style.opacity = `1`
        infobar3.style.visibility = `visible`
        infobar3.style.transform = `translateY(0)`
    })
envolved2.addEventListener('mouseout', () => {
    infobar3.style.visibility = `hidden`
    infobar3.style.transform = `translateY(10px)`
    infobar3.style.opacity = `0`

})
zakat.addEventListener('mouseover', () => {
    infobar2.style.top = `8.5vw`
    infobar2.style.opacity = `1`
    infobar2.style.visibility = `visible`
    infobar2.style.transform = `translateY(0)`
})
zakat.addEventListener('mouseout', () => {
    infobar2.style.visibility = `hidden`
    infobar2.style.transform = `translateY(10px)`
    infobar2.style.opacity = `0`

})
zakat2.addEventListener('mouseover', () => {
    infobar2.style.top = `${window.scrollY + 55}px`
    infobar2.style.opacity = `1`
    infobar2.style.visibility = `visible`
    infobar2.style.transform = `translateY(0)`
})
zakat2.addEventListener('mouseout', () => {
    infobar2.style.visibility = `hidden`
    infobar2.style.transform = `translateY(10px)`
    infobar2.style.opacity = `0`

})
about.addEventListener('mouseover', () => {
    infobar4.style.top = `8.5vw`
    infobar4.style.opacity = `1`
    infobar4.style.visibility = `visible`
    infobar4.style.transform = `translateY(0)`
})
about.addEventListener('mouseout', () => {
    infobar4.style.visibility = `hidden`
    infobar4.style.transform = `translateY(10px)`
    infobar4.style.opacity = `0`

})
about2.addEventListener('mouseover', () => {
    infobar4.style.top = `${window.scrollY + 55}px`
    infobar4.style.opacity = `1`
    infobar4.style.visibility = `visible`
    infobar4.style.transform = `translateY(0)`
})
about2.addEventListener('mouseout', () => {

    infobar4.style.visibility = `hidden`
    infobar4.style.transform = `translateY(10px)`
    infobar4.style.opacity = `0`

})
let count = 0

setInterval(() => {
    count++
    if (count > 3) {
        count = 0
    }
    img.src = `img/${count}.jpg`
}, 2000)





const cards = document.querySelector(".cards");
const totalCards = 8;
const visibleCards = 3;
let index = 0;

function showCards() {
    const cardWidth = document.querySelector(".card").offsetWidth + 20; // width + gap
    const offset = -(index * cardWidth * visibleCards);
    cards.style.transform = `translateX(${offset}px)`;

    // move index
    index++;
    if (index * visibleCards >= totalCards) {
        index = 0;
    }
}

setInterval(showCards, 5000);



$(document).ready(function () {
    $('.stats-wrapper').super({
        autoplay: true,
        indicator: false,
        // slidesToScroll: 1,
        slidesToShow: 5,
    });
});

// const wrapper = document.getElementById("statsWrapper");
// const stats = wrapper.children;
// const leftBtn = document.querySelector(".left");
// const rightBtn = document.querySelector(".right");

// let currentIndex = 2; // middle item index (0-based)
// let isAnimating = false;

// function updateActive() {
//     [...stats].forEach(stat => stat.classList.remove("active"));
//     stats[currentIndex].classList.add("active");
// }

// function slide(direction) {
//     if (isAnimating) return;
//     isAnimating = true;

//     if (direction === "right") {
//         wrapper.style.transform = "translateX(-200px)";
//         setTimeout(() => {
//             wrapper.appendChild(wrapper.firstElementChild);
//             wrapper.style.transition = "none";
//             wrapper.style.transform = "translateX(0)";
//             setTimeout(() => {
//                 wrapper.style.transition = "transform 0.5s ease";
//                 isAnimating = false;
//             });
//         }, 500);
//     } else if (direction === "left") {
//         wrapper.insertBefore(wrapper.lastElementChild, wrapper.firstElementChild);
//         wrapper.style.transition = "none";
//         wrapper.style.transform = "translateX(-200px)";
//         setTimeout(() => {
//             wrapper.style.transition = "transform 0.5s ease";
//             wrapper.style.transform = "translateX(0)";
//             setTimeout(() => {
//                 isAnimating = false;
//             }, 500);
//         });
//     }
//     updateActive();
// }

// rightBtn.addEventListener('click', abc)


// function abc() {

//     slide("right")
// }
// setInterval(abc, 2000)
// leftBtn.addEventListener("click", () => slide("left"));
// updateActive();
