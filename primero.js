function createMagicPotion(potions, target) {

    let possibleSolutions = [];
  
    for (let i = 0; i < potions.length; i++){
      for (let j = i+1; j < potions.length; j++) {
        if (potions[i] + potions[j] === target){
          possibleSolutions.push([i,j]);
        }
      }
    }
  
    if (possibleSolutions.length ===0){
      
      return undefined;
    
    } else if (possibleSolutions.length === 1) {
      
      return possibleSolutions[0];
    
    } else {
      
      rspta = possibleSolutions[0];
      for (let k = 1; k < possibleSolutions.length; k++) {
        if (possibleSolutions[k][1] < rspta[1]){
            rspta = possibleSolutions[k];
        }
      }
      return rpsta;
    }
  }