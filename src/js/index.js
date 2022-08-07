const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
const cards = document.querySelectorAll(".card");

let cardNow = 0;

function hideSelectedCard(){
    const cardSelected = document.querySelector(".choose");
    cardSelected.classList.remove("choose");
}

function presentSelectedCard(indexCard){
    cards[indexCard].classList.add("choose");
}

btnNext.addEventListener("click", function (){
    if(cardNow === cards.length - 1){
        cardNow = -1;
    }
    hideSelectedCard();
    cardNow++;
    presentSelectedCard(cardNow);
});

btnBack.addEventListener("click", function (){
    if(cardNow === 0) return;

    hideSelectedCard();
    cardNow--;
    presentSelectedCard(cardNow);
});