export const palindromes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PALINDROMES_SUCCESS':
      return state.concat([action.payload])
    default:
      return state
  }
}