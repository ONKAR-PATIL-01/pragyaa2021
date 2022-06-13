/////////////// hospi comittee
const cardContainer = document.querySelector('.ot-card-container-hospi');
const cards = document.querySelectorAll('.ot-card-hospi');
const btnNext = document.querySelector('.ot-next-btn-hospi');
const btnPrev = document.querySelector('.ot-prev-btn-hospi');
const otcardWidth = cards[0].clientWidth;
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var hsopiInitDispl = 0;
var counter = 0;
var limiter = isMobile ? cards.length - 1 : cards.length - 4;
const displacement = 200;
const dispPer = 40;

if((isMobile && cards.length < 2) || (!isMobile && cards.length < 5))
{
    btnNext.classList.add('hidden');
    btnPrev.classList.add('hidden');
}


btnNext.addEventListener('click', () => {
    if(counter < 4 && isMobile){
        counter++;
        hsopiInitDispl += otcardWidth + dispPer;
    }
    else if(counter < 1 && !isMobile){
        counter++;
        hsopiInitDispl += otcardWidth;
    }

    cardContainer.style.transition = "transform 0.4s ease-in-out";
    cardContainer.style.transform = "translateX("+ -hsopiInitDispl +"px)";
});

btnPrev.addEventListener('click', () => {
    if(counter > 0){
        counter--;
        hsopiInitDispl -= otcardWidth + dispPer * isMobile;
    }
    cardContainer.style.transition = "transform 0.4s ease-in-out";
    cardContainer.style.transform = "translateX("+ -hsopiInitDispl +"px)";
});


/////////////// event comittee
const eventCardContainer = document.querySelector('.ot-card-container-event');
const eventCards = document.querySelectorAll('.ot-card-event');
const eventBtnNext = document.querySelector('.ot-next-btn-event');
const eventBtnPrev = document.querySelector('.ot-prev-btn-event');
const eventCardWidth = eventCards[0].clientWidth;
var eventInitDispl = 0;
var eventCounter = 0;

eventBtnNext.addEventListener('click', () => {
    if(eventCards.length > 4){
        if(eventCounter < 4 && isMobile){
            eventCounter++;
            eventInitDispl += eventCardWidth + dispPer;
        }
        else if(eventCounter < 1 && !isMobile){
            eventCounter++;
            eventInitDispl += eventCardWidth;
        }
        eventCardContainer.style.transition = "transform 0.4s ease-in-out";
        eventCardContainer.style.transform = "translateX("+ -eventInitDispl +"px)";
    }
});

eventBtnPrev.addEventListener('click', () => {
    if(eventCounter > 0){
        eventInitDispl -= eventCardWidth + dispPer * isMobile;
        eventCounter--;
    }
    eventCardContainer.style.transition = "transform 0.4s ease-in-out";
    eventCardContainer.style.transform = "translateX("+ -eventInitDispl +"px)";
    
});

/////////////// finance comittee
const financeCardContainer = document.querySelector('.ot-card-container-finance');
const financeCards = document.querySelectorAll('.ot-card-finance');
const financeBtnNext = document.querySelector('.ot-next-btn-finance');
const financeBtnPrev = document.querySelector('.ot-prev-btn-finance');
const financeCardWidth = financeCards[0].clientWidth;
var financeInitDispl = 0;
var financeCounter = 0;

financeBtnNext.addEventListener('click', () => {
    //if(financeCards.length > 4){
        if(financeCounter < 3 && isMobile){
            financeCounter++;
            financeInitDispl += financeCardWidth + dispPer;
        }
        // else if(financeCounter < 1 && !isMobile){
        //     financeCounter++;
        //     financeInitDispl += financeCardWidth;
        // }
        financeCardContainer.style.transition = "transform 0.4s ease-in-out";
        financeCardContainer.style.transform = "translateX("+ -financeInitDispl +"px)";
    //}
});

financeBtnPrev.addEventListener('click', () => {
    if(financeCounter > 0){
        financeCounter--;
        financeInitDispl -= financeCardWidth + (dispPer * isMobile);
    }
    financeCardContainer.style.transition = "transform 0.4s ease-in-out";
    financeCardContainer.style.transform = "translateX("+ -financeInitDispl +"px)";
    
});

/////////////// food comittee
const foodCardContainer = document.querySelector('.ot-card-container-food');
const foodCards = document.querySelectorAll('.ot-card-food');
const foodBtnNext = document.querySelector('.ot-next-btn-food');
const foodBtnPrev = document.querySelector('.ot-prev-btn-food');
const foodCardWidth = foodCards[0].clientWidth;
var foodInitDispl = 0;
var foodCounter = 0;

foodBtnNext.addEventListener('click', () => {
        if(foodCounter < 4 && isMobile){
            foodCounter++;
            foodInitDispl += foodCardWidth + dispPer;
        }
        else if(foodCounter < 1 && !isMobile){
            foodInitDispl += foodCardWidth;
            foodCounter++;
        }
        foodCardContainer.style.transition = "transform 0.4s ease-in-out";
        foodCardContainer.style.transform = "translateX("+ -foodInitDispl +"px)";
});

foodBtnPrev.addEventListener('click', () => {
    if(foodCounter > 0){
        foodCounter--;
        foodInitDispl -= foodCardWidth + dispPer * isMobile;
    }
    foodCardContainer.style.transition = "transform 0.4s ease-in-out";
    foodCardContainer.style.transform = "translateX("+ -foodInitDispl +"px)";
});

/////////////// web comittee
const webCardContainer = document.querySelector('.ot-card-container-web');
const webCards = document.querySelectorAll('.ot-card-web');
const webBtnNext = document.querySelector('.ot-next-btn-web');
const webBtnPrev = document.querySelector('.ot-prev-btn-web');
const webCardWidth = webCards[0].clientWidth;
var webInitDispl = 0;
var webCounter = 0;

webBtnNext.addEventListener('click', () => {
    if(webCards.length > 4){
        if(webCounter < 5 && isMobile){
            webCounter++;
            webInitDispl += webCardWidth + dispPer;
        }
        else if(webCounter < 2 && !isMobile){
            webCounter++;
            webInitDispl += webCardWidth;
        }
        webCardContainer.style.transition = "transform 0.4s ease-in-out";
        webCardContainer.style.transform = "translateX("+ -webInitDispl +"px)";
    }
});

webBtnPrev.addEventListener('click', () => {
    if(webCounter > 0){
        webCounter--;
        webInitDispl -= webCardWidth + dispPer * isMobile;
    }
    webCardContainer.style.transition = "transform 0.4s ease-in-out";
    webCardContainer.style.transform = "translateX("+ -webInitDispl +"px)";
});

/////////////// pr comittee
const prCardContainer = document.querySelector('.ot-card-container-pr');
const prCards = document.querySelectorAll('.ot-card-pr');
const prBtnNext = document.querySelector('.ot-next-btn-pr');
const prBtnPrev = document.querySelector('.ot-prev-btn-pr');
const prCardWidth = prCards[0].clientWidth;
var prInitDispl = 0;
var prCounter = 0;

prBtnNext.addEventListener('click', () => {
    if(prCards.length > 4){
        if(prCounter < 4 && isMobile){
            prCounter++;
            prInitDispl += prCardWidth + dispPer;
        }
        else if(prCounter < 1 && !isMobile){
            prCounter++;
            prInitDispl += prCardWidth;
        }
        prCardContainer.style.transition = "transform 0.4s ease-in-out";
        prCardContainer.style.transform = "translateX("+ -prInitDispl +"px)";
    }
});

prBtnPrev.addEventListener('click', () => {
    if(prCounter > 0){
        prCounter--;
        prInitDispl -= prCardWidth + dispPer * isMobile;
    }
    prCardContainer.style.transition = "transform 0.4s ease-in-out";
    prCardContainer.style.transform = "translateX("+ -prInitDispl +"px)";
});

/////////////// sponsorship comittee
const sponsorshipCards = document.querySelectorAll('.ot-card-sponsorship');
const sponsorshipCardContainer = document.querySelector('.ot-card-container-sponsorship');
const sponsorshipBtnNext = document.querySelector('.ot-next-btn-sponsorship');
const sponsorshipBtnPrev = document.querySelector('.ot-prev-btn-sponsorship');
const sponsorshipCardWidth = sponsorshipCards[0].clientWidth;
var sponsorshipInitDisp = 0;
var sponsorshipCounter = 0;

sponsorshipBtnNext.addEventListener('click', () => {
        if(sponsorshipCounter < 3 && isMobile){
            sponsorshipCounter++;
            sponsorshipInitDisp += sponsorshipCardWidth + dispPer;
        }
        // else if(sponsorshipCounter < 1 && !isMobile){
        //     sponsorshipCounter++;
        //     sponsorshipInitDisp += sponsorshipCardWidth;
        // }
        sponsorshipCardContainer.style.transition = "transform 0.4s ease-in-out";
        sponsorshipCardContainer.style.transform = "translateX("+ -sponsorshipInitDisp +"px)";

});

sponsorshipBtnPrev.addEventListener('click', () => {
    if(sponsorshipCounter > 0){
        sponsorshipCounter--;
        sponsorshipInitDisp -= sponsorshipCardWidth + dispPer * isMobile;
    }
    sponsorshipCardContainer.style.transition = "transform 0.4s ease-in-out";
    sponsorshipCardContainer.style.transform = "translateX("+ -sponsorshipInitDisp +"px)";
});