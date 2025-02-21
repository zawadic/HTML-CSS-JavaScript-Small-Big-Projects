const symbols = ['🍎', '🍌', '🍍', '🍉', '🍇', '🍒', '🍓', '🍊'];
        let cards = [...symbols, ...symbols];
        let firstCard = null;
        let secondCard = null;
        let matchedCount = 0;

        const gameBoard = document.getElementById('gameBoard');
        gameBoard.addEventListener('click', handleCardClick);

        // Shuffle the cards
        cards = cards.sort(() => Math.random() - 0.5);

        // Create the board
        cards.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.symbol = symbol;
            card.dataset.index = index;
            gameBoard.appendChild(card);
        });

        function handleCardClick(event) {
            const clickedCard = event.target;

            if (clickedCard.classList.contains('card') && !clickedCard.classList.contains('flipped') && !clickedCard.classList.contains('matched')) {
                flipCard(clickedCard);
                if (!firstCard) {
                    firstCard = clickedCard;
                } else {
                    secondCard = clickedCard;
                    checkMatch();
                }
            }
        }

        function flipCard(card) {
            card.classList.add('flipped');
            card.innerHTML = card.dataset.symbol;
        }

        function unflipCards() {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.innerHTML = '';
            secondCard.innerHTML = '';
            firstCard = secondCard = null;
        }

        function checkMatch() {
            if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                matchedCount++;
                if (matchedCount === symbols.length) {
                    alert('You win!');
                }
                firstCard = secondCard = null;
            } else {
                setTimeout(unflipCards, 1000);
            }
        }