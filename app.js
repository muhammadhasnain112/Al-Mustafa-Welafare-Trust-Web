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
const secimg = document.getElementById('secimg')
const main = document.getElementById('main')

if (main) {
    document.addEventListener('scroll', () => {
        if (window.scrollY >= 768) {
            secimg.style.zIndex = 0
        }

        if (window.scrollY >= 1110) {
            main.style.position = 'sticky'
        } else {
            main.style.position = 'static'
        }
    })
}

input.addEventListener('click', () => {
    input2.style.display = 'none'
    input.style.width = '100%'
    btn.style.display = 'flex'
    icon.style.left = '20vw'
    inputOuter.style.opacity = 1
    inputOuter.style.visibility = 'visible'
    inputOuter.style.transform = 'translateY(0)'
})

let flag = false
search2.addEventListener('click', () => {
    if (flag) {
        inputOuter1.style.opacity = 0
        inputOuter1.style.visibility = 'hidden'
        inputOuter1.style.transform = 'translateY(10px)'
        flag = false
    }
    else {
        inputOuter1.style.top = '3vw'
        inputOuter1.style.opacity = 1
        inputOuter1.style.visibility = 'visible'
        inputOuter1.style.transform = 'translateY(0)'
        flag = true
    }
})
btn.addEventListener('click', () => {
    input2.style.display = 'flex'
    input.style.width = '50%'
    btn.style.display = 'none'
    icon.style.left = '11vw'
    inputOuter.style.opacity = 0
    inputOuter.style.visibility = 'hidden'
    inputOuter.style.transform = 'translateY(10px)'
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
    if (window.scrollY > 40) {
        second.style.display = 'flex'
    }
    else {
        second.style.display = 'none'
    }
})
appeal.addEventListener('mouseover', () => {
    infobar.style.top = '8.5vw'
    infobar.style.opacity = 1
    infobar.style.visibility = 'visible'
    infobar.style.transform = 'translateY(0)'
})
appeal.addEventListener('mouseout', () => {
    infobar.style.visibility = 'hidden'
    infobar.style.transform = 'translateY(10px)'
    infobar.style.opacity = 0
})
appeal2.addEventListener('mouseover', () => {
    infobar.style.opacity = 1
    infobar.style.top = `${window.scrollY + 55}px`
    infobar.style.visibility = 'visible'
    infobar.style.transform = 'translateY(0)'
})
appeal2.addEventListener('mouseout', () => {
    infobar.style.visibility = 'hidden'
    infobar.style.transform = 'translateY(10px)'
    infobar.style.opacity = 0
})
envolved.addEventListener('mouseover', () => {
    infobar3.style.top = '8.5vw'
    infobar3.style.opacity = 1
    infobar3.style.visibility = 'visible'
    infobar3.style.transform = 'translateY(0)'
})
envolved.addEventListener('mouseout', () => {
    infobar3.style.visibility = 'hidden'
    infobar3.style.transform = 'translateY(10px)'
    infobar3.style.opacity = 0
})
envolved2.addEventListener('mouseover', () => {
    infobar3.style.top = `${window.scrollY + 55}px`
    infobar3.style.opacity = 1
    infobar3.style.visibility = 'visible'
    infobar3.style.transform = 'translateY(0)'
})
envolved2.addEventListener('mouseout', () => {
    infobar3.style.visibility = 'hidden'
    infobar3.style.transform = 'translateY(10px)'
    infobar3.style.opacity = 0
})
zakat.addEventListener('mouseover', () => {
    infobar2.style.top = '8.5vw'
    infobar2.style.opacity = 1
    infobar2.style.visibility = 'visible'
    infobar2.style.transform = 'translateY(0)'
})
zakat.addEventListener('mouseout', () => {
    infobar2.style.visibility = 'hidden'
    infobar2.style.transform = 'translateY(10px)'
    infobar2.style.opacity = 0
})
zakat2.addEventListener('mouseover', () => {
    infobar2.style.top = `${window.scrollY + 55}px`
    infobar2.style.opacity = 1
    infobar2.style.visibility = 'visible'
    infobar2.style.transform = 'translateY(0)'
})
zakat2.addEventListener('mouseout', () => {
    infobar2.style.visibility = 'hidden'
    infobar2.style.transform = 'translateY(10px)'
    infobar2.style.opacity = 0
})
about.addEventListener('mouseover', () => {
    infobar4.style.top = '8.5vw'
    infobar4.style.opacity = 1
    infobar4.style.visibility = 'visible'
    infobar4.style.transform = 'translateY(0)'
})
about.addEventListener('mouseout', () => {
    infobar4.style.visibility = 'hidden'
    infobar4.style.transform = 'translateY(10px)'
    infobar4.style.opacity = 0
})
about2.addEventListener('mouseover', () => {
    infobar4.style.top = `${window.scrollY + 55}px`
    infobar4.style.opacity = 1
    infobar4.style.visibility = 'visible'
    infobar4.style.transform = 'translateY(0)'
})
about2.addEventListener('mouseout', () => {
    infobar4.style.visibility = 'hidden'
    infobar4.style.transform = 'translateY(10px)'
    infobar4.style.opacity = 0
})





if (img) {

    let count = 0
    setInterval(() => {
        count++
        if (count > 3) {
            count = 0
        } img.src = `img/${count}.jpg`
    },
        2000)
}

let index = 0;
const cards = document.querySelector(".cards");
const card_container = document.getElementById('card-container')
if (card_container) {
    const totalCards = 8;
    const visibleCards = 3;
    function showCards() {
        const cardWidth = document.querySelector(".card").offsetWidth + 20;
        const offset = -(index * cardWidth * visibleCards);
        cards.style.transform = `translateX(${offset}px)`;
        index++;
        if (index * visibleCards >= totalCards) {
            index = 0;
        }
    }
    setInterval(showCards, 5000);
}





// if (location.pathname == "/zakat-calculator.html") {
// console.log(location.pathname);
const calcInput1 = document.getElementById('calc-input1')
const calcInput2 = document.getElementById('calc-input2')
const calcInput3 = document.getElementById('calc-input3')
const calcInput4 = document.getElementById('calc-input4')
const calcInput5 = document.getElementById('calc-input5')
const calcInput6 = document.getElementById('calc-input6')
const calcInput7 = document.getElementById('calc-input7')
const calcInput8 = document.getElementById('calc-input8')
const calcInput9 = document.getElementById('calc-input9')
const showcalc = document.getElementById('all-calc')
const zakatValue = document.getElementById('zakat-value')
const reset = document.getElementById('reset')
const donateBox = document.getElementById('donate-bar')
const zakat_pay = document.getElementById('zakat-pay')
const Administration = document.getElementById('Administration')
const olive_tree = document.getElementById('olive-tree')
const Quran_reading = document.getElementById('Quran-reading')
const all_zakat_show = document.getElementById('all-zakat-show')
const total_2 = document.getElementById('total-2')
const zakat_pay_value = document.getElementById('zakatvalue')
const zakat_pay_value2 = document.getElementById('zakatvalue2')
const zakat_pay_value3 = document.getElementById('zakatvalue3')
const zakat_pay_value4 = document.getElementById('zakatvalue4')


const donate = document.getElementById('donate')
const already_calc_zakat_inp = document.getElementById('already-calc-zakat-inp')
const already_calc_zakat_btn = document.getElementById('already-calc-zakat-btn')
const plus = document.getElementById('plus')
const counter = document.getElementById('counter')
const check_box1 = document.getElementById('check-box1')
const check_box2 = document.getElementById('check-box2')
const check_box3 = document.getElementById('check-box3')
const donate_now = document.getElementById('doante-now')
const donate_now_value = document.getElementById('donate-now-value')
const cancel = document.getElementById('cancel')
if (donate_now) {
    donate_now.addEventListener('click', () => {
        donate2(donate_now_value.value)
        // console.log();
    })

}






if (reset) {

    reset.addEventListener('click', () => {
        showcalc.innerText = 'Rs:0.00'
        zakatValue.innerText = 'Rs:0.00'
        calcInput1.value = ``
        calcInput2.value = ``
        calcInput3.value = ``
        calcInput4.value = ``
        calcInput5.value = ``
        calcInput6.value = ``
        calcInput7.value = ``
        calcInput8.value = ``
        calcInput9.value = ``
    })

    calcInput1.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `Rs:${Number(calcInput1.value)
            + Number(calcInput2.value) + Number(calcInput3.value)
            + Number(calcInput4.value) + Number(calcInput4.value)
            + Number(calcInput5.value) + Number(calcInput6.value)
            - Number(calcInput7.value) - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`;


        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `Rs:${Math.floor(percentage)}`
        } else {
            zakatValue.innerText = `Rs: 0.00`
        }
    })

    calcInput2.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `Rs:${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `Rs:${Math.floor(percentage)}`
        } else {
            zakatValue.innerText = `Rs: 0.00`
        }
    })
    calcInput3.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `Rs:${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `Rs:${Math.floor(percentage)}`
        } else {
            zakatValue.innerText = `Rs: 0.00`
        }
    })

    calcInput4.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `Rs:${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350) {
            console.log(percentage);

            zakatValue.innerText = `Rs:${Math.floor(percentage)}`
        } else {
            zakatValue.innerText = `Rs:0.00`
        }
    })

    calcInput5.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `Rs:${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `Rs:${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `Rs: 0.00`
        }
    })
    calcInput6.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `Rs:${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `Rs:${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `Rs: 0.00`
        }
    })
    calcInput7.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `Rs:${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `Rs:${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `Rs: 0.00`
        }
    })
    calcInput8.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `Rs:${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `Rs:${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `Rs: 0.00`
        }
    })
    calcInput9.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `Rs:${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `Rs:${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `Rs: 0.00`
        }
    })

    already_calc_zakat_btn.addEventListener('click', () => {
        if (already_calc_zakat_inp.value == '') {
            toastr.info("Value is required and can't be empty")
            return;
        } else {
            donate2(`Rs:${already_calc_zakat_inp.value}`)
        }
    })

    donate.addEventListener('click', () => {
        if (zakatValue.innerText == 'RS:0.00') {
            toastr.info("Value is required and can't be empty")
            return;
        } else {
            donate2(zakatValue.innerText)
        }
    })
}


function donate2(abc) {

    all_zakat_show.innerText = abc
    total_2.innerText = abc
    donateBox.style.opacity = 1
    donateBox.style.visibility = 'visible'
    donateBox.style.transform = 'translatex(0)'
    donateBox.style.right = 0
    zakat_pay.style.display = 'flex'
    zakat_pay_value.innerText = abc

    let count = 1

    plus.addEventListener('click', () => {
        count++
        counter.innerText = count
        zakat_pay_value.innerText = `RS:${Number(abc.slice(3) * count)}`
        if (check_box1.checked) {

            all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                + Number(zakat_pay_value2.innerText.slice(3))}`
            if (check_box2.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))}`
            } if (check_box3.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
            }
        } else if (check_box2.checked) {
            all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                + Number(zakat_pay_value3.innerText.slice(3))}`
            if (check_box1.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))}`
            }
            if (check_box3.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
            }
        } else if (check_box3.checked) {
            all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                + Number(zakat_pay_value4.innerText.slice(3))}`;
            if (check_box1.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
            } if (check_box3.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
            }
        } else {
            all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))}`
        }
    })

    const minus = document.getElementById('minus')
    minus.addEventListener('click', () => {
        if (count <= 0) {
            all_zakat_show.innerText = total_2.innerText = zakat_pay_value.innerText
        } else {
            count--
            counter.innerText = count
            zakat_pay_value.innerText = `RS:${Number(zakatValue.innerText.slice(3) * count)}`
            all_zakat_show.innerText = total_2.innerText = zakat_pay_value.innerText
        }
    })
    const plus2 = document.getElementById('plus2')
    const counter2 = document.getElementById('counter2')
    let count2 = 1
    plus2.addEventListener('click', () => {
        count2++
        counter2.innerText = count2
        zakat_pay_value2.innerText = `Rs:${10 * count2}`
        all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
            + Number(zakat_pay_value2.innerText.slice(3))}`
    })

    const minus2 = document.getElementById('minus2')
    minus2.addEventListener('click', () => {
        if (count2 <= 0) {
            all_zakat_show.innerText = total_2.innerText = zakat_pay_value.innerText
        } else {
            count2--
            counter2.innerText = count2
            zakat_pay_value2.innerText = `Rs:${zakat_pay_value2.innerText.slice(3) - 10}`
            all_zakat_show.innerText = total_2.innerText = `RS:${all_zakat_show.innerText.slice(3) - 10}`
        }
    })

    const plus3 = document.getElementById('plus3')
    const counter3 = document.getElementById('counter3')
    let count3 = 1
    plus3.addEventListener('click', () => {
        count3++
        counter3.innerText = count3
        zakat_pay_value3.innerText = `Rs:${25 * count3}`
        all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
            + Number(zakat_pay_value2.innerText.slice(3)) + Number(zakat_pay_value3.innerText.slice(3))} `
    })

    const minus3 = document.getElementById('minus3')
    minus3.addEventListener('click', () => {
        if (count3 <= 0) {
            all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                + Number(zakat_pay_value2.innerText.slice(3))}`
        } else {
            count3--
            counter3.innerText = count3
            zakat_pay_value3.innerText = `Rs:${zakat_pay_value3.innerText.slice(3) - 25}`
            all_zakat_show.innerText = total_2.innerText = `RS:${all_zakat_show.innerText.slice(3) - 25}`
        }
    })

    const plus4 = document.getElementById('plus4')
    const counter4 = document.getElementById('counter4')
    let count4 = 1
    plus4.addEventListener('click', () => {
        count4++
        counter4.innerText = count4
        zakat_pay_value4.innerText = `RS:${1 * count4}`
        all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
            + Number(zakat_pay_value2.innerText.slice(3))
            + Number(zakat_pay_value3.innerText.slice(3))
            + Number(zakat_pay_value4.innerText.slice(3))}`
    })


    const minus4 = document.getElementById('minus4')
    minus4.addEventListener('click', () => {
        if (count4 <= 0) {
            all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                + Number(zakat_pay_value2.innerText.slice(3))}`
        } else {
            count4--
            counter4.innerText = count4
            zakat_pay_value4.innerText = `RS:${zakat_pay_value4.innerText.slice(3) - 1}`
            all_zakat_show.innerText = total_2.innerText = `RS:${all_zakat_show.innerText.slice(3) - 1}`
        }
    })


    const add_another = document.getElementById('add-another')
    const checkout = document.getElementById('checkout')
    const donateBox2 = document.getElementById('donate-bar2')

    add_another.addEventListener('click', () => {
        donateBox.style.opacity = 0
        donateBox.style.visibility = 'hidden'
        donateBox.style.transform = 'translatex(15px)'
        donateBox.style.right = 0
        donateBox2.style.opacity = 0
        donateBox2.style.visibility = 'hidden'
        donateBox2.style.transform = 'translatex(15px)'
        donateBox2.style.right = 0

    })
    checkout.addEventListener('click', () => {
        donateBox2.style.opacity = 1
        donateBox2.style.visibility = 'visible'
        donateBox2.style.transform = 'translatex(0px)'
        donateBox.style.right = '29.5%'
    })
    const check_box3_text = document.getElementById('check-box3-text')
    const check_box2_text = document.getElementById('check-box2-text')
    const check_box1_text = document.getElementById('check-box1-text')
    check_box1.addEventListener('click', () => {
        if (check_box1.checked) {
            olive_tree.style.display = 'flex';
            check_box1_text.style.color = '#009688'
            all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                + Number(zakat_pay_value2.innerText.slice(3))}`
            if (check_box2.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))}`
            } if (check_box3.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
            }
        } else {
            olive_tree.style.display = 'none';
            check_box1_text.style.color = 'rgb(153, 153, 153)'
            if (check_box2.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))}`
                if (check_box3.checked) {
                    all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                        + Number(zakat_pay_value3.innerText.slice(3))
                        + Number(zakat_pay_value4.innerText.slice(3))}`
                }
            } else if (check_box3.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
                if (check_box2.checked) {
                    all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                        + Number(zakat_pay_value3.innerText.slice(3))
                        + Number(zakat_pay_value4.innerText.slice(3))}`
                }
            } else {
                all_zakat_show.innerText = total_2.innerText = zakat_pay_value.innerText
            }
        }
    })


    check_box2.addEventListener('click', () => {
        if (check_box2.checked) {
            Quran_reading.style.display = 'flex';
            check_box2_text.style.color = '#009688'
            all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                + Number(zakat_pay_value3.innerText.slice(3))}`
            if (check_box1.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))}`
            } if (check_box3.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
            }
        } else {
            Quran_reading.style.display = 'none';
            check_box2_text.style.color = 'rgb(153, 153, 153)'
            if (check_box1.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))}`
                if (check_box3.checked) {
                    all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                        + Number(zakat_pay_value2.innerText.slice(3))
                        + Number(zakat_pay_value4.innerText.slice(3))}`
                }
            } else if (check_box3.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
                if (check_box1.checked) {
                    all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                        + Number(zakat_pay_value2.innerText.slice(3))
                        + Number(zakat_pay_value4.innerText.slice(3))}`
                }
            } else {
                all_zakat_show.innerText = total_2.innerText = zakat_pay_value.innerText
            }
        }
    })

    check_box3.addEventListener('click', () => {
        if (check_box3.checked) {
            check_box3_text.style.color = '#009688'
            Administration.style.display = 'flex';
            all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                + Number(zakat_pay_value4.innerText.slice(3))}`
            if (check_box2.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
            } if (check_box1.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))
                    + Number(zakat_pay_value4.innerText.slice(3))}`
            }
        } else {
            check_box3_text.style.color = 'rgb(153, 153, 153)'
            Administration.style.display = 'none';
            if (check_box1.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value2.innerText.slice(3))}`
                if (check_box2.checked) {
                    all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                        + Number(zakat_pay_value2.innerText.slice(3))
                        + Number(zakat_pay_value3.innerText.slice(3))}`
                }
            } else if (check_box2.checked) {
                all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                    + Number(zakat_pay_value3.innerText.slice(3))}`
                if (check_box1.checked) {
                    all_zakat_show.innerText = total_2.innerText = `RS:${Number(zakat_pay_value.innerText.slice(3))
                        + Number(zakat_pay_value2.innerText.slice(3))
                        + Number(zakat_pay_value3.innerText.slice(3))}`
                }
            } else {
                all_zakat_show.innerText = total_2.innerText = zakat_pay_value.innerText
            }
        }
    })

    cancel.addEventListener('click', () => {
        donateBox.style.opacity = 0
        donateBox.style.visibility = 'hidden'
        donateBox.style.transform = 'translatex(15px)'
        donateBox2.style.opacity = 0
        donateBox2.style.visibility = 'hidden'
        donateBox2.style.transform = 'translatex(15px)'
    })

}

function add_cart() {

    localStorage.setItem('total', all_zakat_show.innerText)
    window.location.href = `add-cart.html`;

}
function remove() {
    all_zakat_show.innerText = total_2.innerText = `RS:${Number(all_zakat_show.innerText.slice(3) - zakat_pay_value.innerText.slice(3))}`
    zakat_pay.style.display = 'none'
}
function remove1() {
    all_zakat_show.innerText = total_2.innerText = `RS:${Number(all_zakat_show.innerText.slice(3) - zakat_pay_value2.innerText.slice(3))}`
    olive_tree.style.display = 'none'
}
function remove2() {
    all_zakat_show.innerText = total_2.innerText = `RS:${Number(all_zakat_show.innerText.slice(3) - zakat_pay_value3.innerText.slice(3))}`
    Quran_reading.style.display = 'none'
}
function remove3() {
    all_zakat_show.innerText = total_2.innerText = `RS:${Number(all_zakat_show.innerText.slice(3) - zakat_pay_value4.innerText.slice(3))}`
    Administration.style.display = 'none'
}






if (location.pathname == '/add-cart.html') {
    console.log(location.pathname);
    let get_total = localStorage.getItem('total')
    const info_zakat_show = document.getElementById('info-zakat-show')
    info_zakat_show.innerText = get_total
    const total_zakat_show = document.getElementById('total-zakat-show')
    const check_box1 = document.getElementById('check-box1')
    const check_box2 = document.getElementById('check-box2')
    const check_box3 = document.getElementById('check-box3')
    const check_box1_text = document.getElementById('check-box1-text')
    const check_box2_text = document.getElementById('check-box2-text')
    const check_box3_text = document.getElementById('check-box3-text')

    const olive_tree = document.getElementById('olive-tree')
    const olive_tree_rupe = document.getElementById('olive-tree-rupe')
    const Quran_reading = document.getElementById('Quran-reading')
    const Quran_reading_rupe = document.getElementById('Quran-rupe')
    const Administration = document.getElementById('Administration')
    const Administration_rupe = document.getElementById('Administration-rupe')
    total_zakat_show.innerText = get_total


    check_box1.addEventListener('click', () => {
        if (check_box1.checked) {
            olive_tree.style.display = 'flex'
            check_box1_text.style.color = '#009688'
            total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                + Number(olive_tree_rupe.innerText.slice(3))}`
            if (check_box2.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(olive_tree_rupe.innerText.slice(3))
                    + Number(Quran_reading_rupe.innerText.slice(3))}`
                if (check_box3.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))}`
                }
            }
            if (check_box3.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(olive_tree_rupe.innerText.slice(3))
                    + Number(Administration_rupe.innerText.slice(3))}`
                if (check_box2.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))
                        }`
                }
            }
        } else {
            olive_tree.style.display = 'none'
            check_box1_text.style.color = 'rgb(153, 153, 153)'
            total_zakat_show.innerText = `RS:${total_zakat_show.innerText.slice(3) - 10}`
            if (check_box2.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(Quran_reading_rupe.innerText.slice(3))}`
                if (check_box3.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))}`
                }
            } if (check_box3.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(Administration_rupe.innerText.slice(3))}`
                if (check_box2.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))}`
                }
            }

        }
    })
    check_box2.addEventListener('click', () => {
        if (check_box2.checked) {
            Quran_reading.style.display = 'flex'
            check_box2_text.style.color = '#009688'
            total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                + Number(Quran_reading_rupe.innerText.slice(3))}`
            if (check_box1.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(olive_tree_rupe.innerText.slice(3))
                    + Number(Quran_reading_rupe.innerText.slice(3))}`
                if (check_box3.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))}`
                }
            }
            if (check_box3.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(Quran_reading_rupe.innerText.slice(3))
                    + Number(Administration_rupe.innerText.slice(3))}`
                if (check_box1.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))
                        }`
                }
            }

        } else {
            Quran_reading.style.display = 'none'
            check_box2_text.style.color = 'rgb(153, 153, 153)'
            total_zakat_show.innerText = `RS:${total_zakat_show.innerText.slice(3) - 10}`
            if (check_box1.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(olive_tree_rupe.innerText.slice(3))}`
                if (check_box3.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))}`
                }
            } if (check_box3.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(Administration_rupe.innerText.slice(3))}`
                if (check_box1.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))}`
                }
            }
        }
    })
    check_box3.addEventListener('click', () => {
        if (check_box3.checked) {
            Administration.style.display = 'flex';
            check_box3_text.style.color = '#009688'
            total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                + Number(Administration_rupe.innerText.slice(3))}`
            if (check_box1.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(olive_tree_rupe.innerText.slice(3))
                    + Number(Administration_rupe.innerText.slice(3))}`
                if (check_box2.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))}`
                }
            }
            if (check_box2.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(Quran_reading_rupe.innerText.slice(3))
                    + Number(Administration_rupe.innerText.slice(3))}`
                if (check_box1.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Administration_rupe.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))
                        }`
                }
            }


        } else {
            Administration.style.display = 'none'
            check_box3_text.style.color = 'rgb(153, 153, 153)'
            total_zakat_show.innerText = `RS:${total_zakat_show.innerText.slice(3) - 10}`
            if (check_box1.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(olive_tree_rupe.innerText.slice(3))}`
                if (check_box2.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))}`
                }
            } if (check_box2.checked) {
                total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                    + Number(Quran_reading_rupe.innerText.slice(3))}`
                if (check_box1.checked) {
                    total_zakat_show.innerText = `RS:${Number(info_zakat_show.innerText.slice(3))
                        + Number(olive_tree_rupe.innerText.slice(3))
                        + Number(Quran_reading_rupe.innerText.slice(3))}`
                }
            }
        }
    })




    const select = document.getElementById('select')
    const select2 = document.getElementById('select2')
    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czechia",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];


    countries.forEach((e) => {
        select.innerHTML += `
<option value="" selected>${e}</option>`
    })

    let option = [
        'Mishary Event',
        'TV',
        'Radio',
        'Email',
        'Social Media',
        'Events',
        'Post',
        'Google/Internet',
        'Islamic Channel',
        'Mosque',
        'Regular Donor',
        'Other'
    ]
    option.forEach((e) => {
        select2.innerHTML += `
<option value="" selected>${e}</option>`
    })

}






