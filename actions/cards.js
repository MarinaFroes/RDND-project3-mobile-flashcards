import { addCardToDeck } from '../utils/api'

export const ADD_CARD = 'ADD_CARD'
// export const DELETE_CARD = 'DELETE_CARD'

export function addCard(deck) {
  return {
    type: ADD_CARD,
    deck
  }
}

export function handleAddCard(card) {
  return dispatch => {
    return addCardToDeck(card)
      .then(res => {
        dispatch(addCard(res))
      }).catch(err => console.log(err))
  }
}

// TODO: implement DELETE_CARD