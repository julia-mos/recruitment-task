export const palindromesAdded = (string, isPalindrome) => ({
    type: 'ADD_PALINDROME_SUCCESS',
    data:{
      string: string,
      isPalindrome: isPalindrome
    }
  });