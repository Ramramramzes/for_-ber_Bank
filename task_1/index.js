import {encoded, translations} from './data.js'

console.log("Let's rock")

function decoded(encoded,translations){
  const uniqId = []
  let decodedArr = encoded;
  decodedArr.forEach(item => {
  Object.keys(item).forEach(key => {
    if(key != 'groupId' && key != 'service' && key != 'formatSize' && key != 'ca'){
      if(key.slice(key.length-2) == 'Id'){
        if(translations[item[key]] === undefined) {
          item[key] != null ? uniqId.push(item[key]) : false
        }else{
          item[key] = translations[item[key]]
        }
      }
    }
  })
  });
  console.log(`\nУникальные ID: ${uniqId} \n`);
  console.log(decodedArr);
  return decodedArr;
}

decoded(encoded,translations)
// console.log(decoded(encoded,translations))