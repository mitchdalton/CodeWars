// Hide Kata Description

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100



function validParentheses(parens) {
    let open = 0
    let close = 0
    for (const char of parens.split('')) {
      if (char === '(') {
        open++
      }
      if (char === ')') {
        close++
      }
      if (close > open) {
        return false
      }
    }
    return open === close ? true : false
  }