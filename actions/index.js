export const RECEIVE_DECKS = 'RECEIVE_DECKS'
// export const RECEIVE_SINGLE_DECK = 'RECEIVE_SINGLE_DECK'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const DELETE_DECK = 'DELETE_DECK'
export const UPDATE_DECKS = 'UPDATE_DECKS'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

// export function receiveSingleDeck(deck) {
//   return {
//     type: RECEIVE_SINGLE_DECK,
//     deck
//   }
// }

export function addDeckTitle(deck) {
  return {
    type: SAVE_DECK_TITLE,
    deck
  }
}

export function updateDecks(decks) {
  return {
    type: UPDATE_DECKS,
    decks
  }
}

export function addCardToDeck(card) {
  return {
    type: ADD_CARD_TO_DECK,
    card
  }
}