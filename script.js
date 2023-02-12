const cards = document.querySelectorAll('.card'); //Const fordi kortene er konstante
let cardEn; //Variabel for første kortet som blir trykket i en sammenligning
let cardTo; //Variabel for andre kortet som blir trykket i en sammenligning

function flipCard(e){
    let clickedCard = e.target;

    //Sjekker om bruker klikker på samme kort igjen eller om kort 1 IKKE er kortet som blir klikket på
   if(cardEn != clickedCard){
        /* 'flip' kommer fra .card.flip .view-front og view-back i CSS */
        clickedCard.classList.add('flip');

        if(!cardEn){
            //Returnerer kort 1 sin verdi til kortet som er trykket
            return cardEn = clickedCard;
        }

        cardTo = clickedCard;

        //.src henter bildekilden fra html-en
        let cardEnImg = cardEn.querySelector('img').src,
        cardToImg = cardTo.querySelector('img').src;
        matchCards(cardEnImg, cardToImg);
   }

}

function matchCards(bilde1, bilde2){
    if(bilde1 == bilde2){
        cardEn.removeEventListener('click', flipCard);
        cardTo.removeEventListener('click', flipCard);

        //Setter verdiene til kortene til tom, refresher
        cardEn = cardTo = '';
        return;
    }
    else{
        //Dersom billedkortene ikke matcher, vil de to snudde kortene utføre en animasjon.
        setTimeout(() => {
            cardEn.classList.add('move');
            cardTo.classList.add('move');
        }, 400); //Millisekunder ventetid for aktiviteten
        setTimeout(() => {
            cardEn.classList.remove('move', 'flip'); //Etter shake-animasjon vil kortene flippes rundt igjen.
            cardTo.classList.remove('move', 'flip');
            
            //Setter verdiene til kortene til tom, refresher
            cardEn = cardTo = '';
        }, 1100); //Millisekunder ventetid for aktiviteten
    }
}

cards.forEach(card => {
    //Clicklistener for når et kort blir trykket, så skal det flippes
    card.addEventListener('click', flipCard);
})