export const palindromes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PALINDROME_SUCCESS':
      console.log("jestem")
      return state.concat([action.data])
    default:
      return state
  }
}