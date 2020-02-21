import {
  RECEIVE_DECKS,
  RECEIVE_SINGLE_DECK,
  SAVE_DECK_TITLE,
  UPDATE_DECKS,
  ADD_CARD_TO_DECK,
} from '../actions'

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case UPDATE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case RECEIVE_SINGLE_DECK:
      return {
        ...state,
        ...action.deck
      }
    case SAVE_DECK_TITLE:
      return {
        ...state,
        [action.deck.deck_id]: {
          ...action.deck
        }
      }
    case ADD_CARD_TO_DECK:
      const { card } = action
      const { deck_id, question, answer } = card
      console.warn(card)
      return {
        ...state,
        [deck_id]: {
          ...state[deck_id],
          questions: state[deck_id].questions.concat({
            question,
            answer
          })
        }
      }
    default:
      return state
  }
}
