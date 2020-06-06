export const palindromes = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_PALINDROMES_SUCCESS':
        return [
          ...action.palindromes
        ]
      default:
        return state
    }
  }