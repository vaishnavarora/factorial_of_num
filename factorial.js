var fact = prompt("Please enter number", "")

function factorial(fact){
  let answer = 1;
  if (fact == 0 || fact == 1){
    return answer;
  }
  else if(fact > 1){
    for(var i = fact; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
  else{
    return "number has to be positive."
  }  
}
answer = factorial(fact)
console.log("Factorial of " + fact + " : " + answer);
