
  module.exports = function check(str, bracketsConfig) {
    let stack = [];
    
     
    for (let i = 0; i < str.length; i++) {
      let bracket = str[i];
      for (let j = 0; j < bracketsConfig.length; j++){
        let openBracket = bracketsConfig[j][0];
        let closedBracket = bracketsConfig[j][1];
        
        if (bracket === openBracket && bracket === closedBracket){
          stack.push(bracket);
          if (stack[stack.length - 2] === stack[stack.length - 1]){
            stack.pop();
            stack.pop();
          }
          break
        }
        
  
        if (bracket === openBracket){
          stack.push(bracket);
        }
  
        
  
        if (bracket === closedBracket){
          let popedBracket = stack.pop();
          if (popedBracket !== openBracket) {
              return false;
          }
        }
        
      }
        
    }
    if (stack.length === 0){
      return true
    }
    return false
  
  }

