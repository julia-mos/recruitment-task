export const palindromes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PALINDROME_SUCCESS':
      return state.concat([action.data])
    default:
      return state
  }
}