// Utility functions for card deck operations

/**
 * Generates a new shuffled deck of cards.
 */
export const createShuffledDeck = () => {
  const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let deck = [];

  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push({ rank, suit });
    });
  });

  // Shuffle the deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};

/**
 * Calculates the card counting value for a given card.
 */
export const getCardValue = (card) => {
  const { rank } = card;
  if (['2', '3', '4', '5', '6'].includes(rank)) return 1;
  if (['7', '8', '9'].includes(rank)) return 0;
  if (['10', 'J', 'Q', 'K', 'A'].includes(rank)) return -1;
};

/**
 * Determines the recommended action based on the current count.
 */
export const getRecommendedAction = (count) => {
  if (count > 0) return 'Bet High';
  if (count < 0) return 'Bet Low';
  return 'Bet Neutral';
};
