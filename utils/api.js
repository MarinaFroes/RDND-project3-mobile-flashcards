import { AsyncStorage } from 'react-native'

// import {
//   _getDecks,
//   _getDeck,
//   _saveDeckTitle,
//   _addCardToDeck
// } from './_DATA'

// export function getDecks() {
//   return _getDecks()
// }

// export function getDeck(info) {
//   return _getDeck(info)
// }

// export function saveDeckTitle(info) {
//   return _saveDeckTitle(info)
// }

// export function addCardToDeck(info) {
//   return _addCardToDeck(info)
// }

const UDACITY_FLASHCARDS_KEY = 'udacity:flashcards'

// ASYNC STORAGE
export function getDecks() {
  return AsyncStorage.getItem(UDACITY_FLASHCARDS_KEY)
}

export function addDeck(deck) {
  console.warn(deck)
  return AsyncStorage.mergeItem(UDACITY_FLASHCARDS_KEY, JSON.stringify({
    [deck.deck_id]: {
      ...deck
    }
  }))
}

export function addCard(card) {
  AsyncStorage.getItem(UDACITY_FLASHCARDS_KEY).then((results) => {
    const decks = JSON.parse(results);
    const deck = decks[card.deck_id];
    deck.questions = deck.questions.concat({
      question: card.question,
      answer: card.answer
    });

    AsyncStorage.mergeItem(UDACITY_FLASHCARDS_KEY, JSON.stringify({[card.deck_id]: deck}))
  })
}

export function removeDeck(deck_id) {
  return AsyncStorage.getItem(UDACITY_FLASHCARDS_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      decks[deck_id] = undefined
      delete decks[deck_id]
      AsyncStorage.setItem(UDACITY_FLASHCARDS_KEY, JSON.stringify(decks))
    })
}

export function clearStorage() {
  return AsyncStorage.clear()
}