(function showHeader() {
    let btnElementMenu = document.getElementById("menu")
    let blockElementInfo = document.getElementById("info")
    let elementPlus = document.getElementById("plus")
    let elementMinus = document.getElementById("minus")

    btnElementMenu.addEventListener("click", () => {
        blockElementInfo.classList.toggle("container__info__active")
        elementMinus.classList.toggle("container__info__active")
        elementPlus.classList.toggle("container__info__hidden")
    })
})();


(function showMain() {
    let btnElementMenu = document.getElementById("main_menu")
    let blockElementInfo = document.getElementById("main_info")
    let elementPlus = document.getElementById("main_plus")
    let elementMinus = document.getElementById("main_minus")
    let btnElementHidden = document.getElementById("button_span_hidden")
    let btnElementBlock = document.getElementById("button_span_block")

    btnElementMenu.addEventListener("click", () => {
        elementPlus.classList.toggle("container__info__hidden")
        elementMinus.classList.toggle("container__info__active")
        btnElementHidden.classList.toggle("container__info__active")
        btnElementBlock.classList.toggle("container__info__hidden")
        blockElementInfo.classList.toggle("container__info__active")
    })
})();

function h() {
    let f = document.getElementById('open-header-menu');
    console.log(f);
    let q = document.getElementById('blue-hidden-menu');
    console.log(q);
    let v = document.getElementById('close-header-menu');
    console.log(v);


    f.addEventListener('click', () => {
        q.classList.toggle("blue__active__mode")
    })
    v.addEventListener('click', () => {
        q.classList.toggle('blue__active__mode')
    })
}
h();



const arrayOfLinksAnchors = document.querySelectorAll('.link-anchor');
// console.log(arrayOfLinksAnchors)
let arrayElementsAnchors = document.querySelectorAll('.link-to-anchor')
// console.log(arrayElementsAnchors)


let arrayElementsAnchor = [];
let arrayElem = [];

function positionElements() {

    arrayElementsAnchors.forEach((elem) => {
        elem = elem.offsetTop
        arrayElem.push(elem)
    })
    console.log(arrayElem)
};
setTimeout(positionElements, 1000);

function createArrayNumber() {
    for (let i = 0; i < arrayElementsAnchors.length; i++) {
        arrayElementsAnchor.push(i);
    }
    return arrayElementsAnchor;
}
console.log(arrayElementsAnchor);

window.addEventListener('resize', () => {
    arrayElem = []
    arrayElementsAnchors.forEach((elem) => {
        elem = elem.offsetTop
        arrayElem.push(elem)
    })
    console.log(arrayElem)
});
function scrollToDown(element) {
    window.scroll({
        left: 0,
        top: element,
        behavior: 'smooth'
    });
}

function clicktp() {
    createArrayNumber();
    let arrayAnchor = [];

    for (let i = 0; i < arrayOfLinksAnchors.length; i++) {
        arrayAnchor.push(arrayOfLinksAnchors[i]);
        arrayOfLinksAnchors[i].addEventListener('click', function (e) {
            let number = arrayAnchor.indexOf(e.target);

            if (number == arrayElementsAnchor[i]) {

                scrollToDown(arrayElem[number])

            } else {
                console.log('false');
            }

        });

    }


}

clicktp();

///====== SCROLL TO TOP=====////
(function scrollToTop() {

    const toTop = document.querySelector(".to-Top");
    const scrollAnchor = document.getElementById('to-top-anchor').offsetTop;
    // console.log(scrollAnchor);

    window.addEventListener("scroll", () => {

        if (window.pageYOffset > scrollAnchor) {
            toTop.classList.add('active');
        } else {
            toTop.classList.remove('active');
        };
    });

})();

///======== MAIN BANNER +======??/

// function closeMainBanner() {

//     let mainBanner = document.querySelector(".main__banner");
//     let bannerCloseButton = document.querySelector(".button-close");

//     bannerCloseButton.addEventListener("click", () => {
//         mainBanner.classList.toggle("main__banner__button__hidden");
//     });
// };
// closeMainBanner();

//==============////

///===== Open Modal Window =====///
const openModalDiv = document.querySelectorAll('.open-modal-video');
let modalWindow = document.querySelectorAll('.modal-window-hidden');
const closeModalButton = document.querySelectorAll('.modal-close');
const closeModalBc = document.querySelectorAll('.modal-body');
////======Opem=======//
(function openModalWin() {

    if (openModalDiv.length > 1) {

        openModalDiv.forEach((element, i) => {
            element.classList.add('number-of-video-' + i)
        });

        modalWindow.forEach((element, i) => {
            element.classList.add('number-of-video-' + i)
        });
    };

    document.addEventListener('click', (e) => {
        let elem = e.target;
        // console.log(elem);

        for (let i = 0; i < openModalDiv.length; i++) {

            if (elem.classList.contains('number-of-video-' + i)) {
                modalWindow[i].classList.add('visibility');
            };
        };
    });

})();
///.......... Close Modal Win ............///////
(function closeModalWin() {
    if (closeModalBc.length > 1) {
        closeModalBc.forEach((element, i) => {
            element.classList.add('close-modal-win-' + i)
        });
        closeModalButton.forEach((element, i) => {
            element.classList.add('close-modal-win-' + i)
        });
        modalWindow.forEach((element, i) => {
            element.classList.add('close-modal-win-' + i)
        });
        document.addEventListener('click', (e) => {
            let elem = e.target;
            console.log(elem);

            for (let i = 0; i < closeModalBc.length; i++) {
                if (elem.classList.contains('close-modal-win-' + i)) {
                    modalWindow[i].classList.remove('visibility');
                };
            };
            for (let i = 0; i < closeModalButton.length; i++) {
                if (elem.classList.contains('close-modal-win-' + i)) {
                    modalWindow[i].classList.remove('visibility');
                };
            };
        });
    }
})();