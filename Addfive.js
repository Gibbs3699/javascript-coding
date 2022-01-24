function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

function addFive(inp){
	let getString = inp.toString()
  for(var i=0; i<getString.length; i++){
  	if(Number(getString[i])<5){
      return Number(insert(getString, i, '5'))
    }
  } 
  return Number(getString+'5')
}



console.log(addFive(4)); // 54
console.log(addFive(1)); // 51
console.log(addFive(9)); // 95
console.log(addFive(241)); // 5241
console.log(addFive(67)); // 675
console.log(addFive(7389)); // 75389