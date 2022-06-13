const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseover",() => {
        //card.classList.add("animate__animated");
        card.classList.add("animate__pulse");
        setTimeout(() => {
            //card.classList.remove("animate__animated");
            card.classList.remove("animate__pulse");
        }, 1000);
    });

});