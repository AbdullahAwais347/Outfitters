


// var sizeBtn = document.getElementById("size-btn");
// var sizeOpener = document.getElementById("open-size-selector");
// var greenBtn = document.getElementById("btn-1");
// var blackBtn = document.getElementById("btn-2");
var blackPolo = document.getElementById("black-polo");
var greenPolo = document.getElementById("green-polo");
var sizeOpener = document.getElementById("open-size-selector");
var sizeBtn = document.getElementById("size-btn");
var cardSec = document.getElementById("card-section");


var sizeOpener = document.getElementById("open-size-selector");
var sizeBtn = document.getElementById("size-btn");

sizeBtn.addEventListener("click", openSizeSelector);

function openSizeSelector() {
    sizeOpener.style.bottom = "0px";
    document.body.addEventListener("click", closeSizeSelectorOnClick);
    var sizeOptions = sizeOpener.querySelectorAll(".sec-1-div-5-size_selecter ul li");
    sizeOptions.forEach(function (sizeOption) {
        sizeOption.addEventListener("click", closeSizeOpener);
    });

}

function openCard(newSize) {
    console.log("Open card function testing...");
    if (newSize === size) {
        quantity++;
    } else {
        quantity = 1;
        size = newSize;
    }

    document.getElementById('size').textContent = size;
    document.getElementById('productQuantity').textContent = quantity + 'X';
    var openCard = document.getElementById("card-section");
    openCard.style.display = 'flex';
}
function closeSizeSelectorOnClick(event) {
    if (!sizeOpener.contains(event.target) && !sizeBtn.contains(event.target)) {
        sizeOpener.style.bottom = "-100%"; // Hide the size opener
        document.body.removeEventListener("click", closeSizeSelectorOnClick);
    }
    event.stopPropagation(); // Stop event propagation to prevent it from reaching the document body
}

function closeSizeOpener(event) {
    sizeOpener.style.bottom = "-100%"; // Hide the size opener
    document.body.removeEventListener("click", closeSizeSelectorOnClick);
    // event.stopPropagation();
}





function poloShirt(id) {
    if (id == 'btn-1') {
        blackPolo.style.display = "none";
        greenPolo.style.display = "block";
    }
    else if (id == 'btn-2') {
        blackPolo.style.display = "block";
        greenPolo.style.display = "none";
    }
}
// function closeSizeSelectorOnClick(event) {
//     if (!sizeOpener.contains(event.target) && event.target !== sizeBtn) {
//         sizeOpener.style.bottom = "-100vh";
//         document.body.removeEventListener("click", closeSizeSelectorOnClick);
//     }

//     event.stopPropagation();
// }




function cardClose() {
    var closeBtn = document.getElementById('card-section');
    closeBtn.style.display = "none";

}
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

function openAccordians(list_id, btn_img_id) {
    console.log("Accordians testing...");
    var showList = document.getElementById(list_id);
    var button_img_id = document.getElementById(btn_img_id);
        if(showList.style.display == "block" &&  button_img_id.style.transform == "rotate(180deg)" ){
            showList.style.display = "none";
            button_img_id.style.transform = "rotate(0deg)";
        }
        else{
            showList.style.display = "block";
            button_img_id.style.transform = "rotate(180deg)";
        }
       
    
}