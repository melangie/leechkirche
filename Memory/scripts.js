document.addEventListener('DOMContentLoaded', () => {
    const images = ['Bilsenkraut.jpg', 'Diestel.jpg', 'Efeu.jpg', 'Eiche.jpg', 'Erdbeere.jpg', 'Feige.jpg', 'Klee.jpg', 'Lilie.jpg', 'Malve.jpg', 'Weissdorn.jpg'];

   const doubledImages = images.concat(images);

    doubledImages.sort(() => Math.random() - 0.5);

    const gameContainer = document.querySelector('.memory-game');

    doubledImages.forEach((image, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;
        card.dataset.index = index;

        card.addEventListener('click', handleCardClick);

        gameContainer.appendChild(card);
    });

    let flippedCards = [];

    function handleCardClick() {
        if (flippedCards.length < 2) {
            this.classList.add('flipped');
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.image === card2.dataset.image) {
            // Cards match
            flippedCards = [];
        } else {
            // Cards don't match, flip them back
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }
    }
});
