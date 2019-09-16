// add solution here
function theBeatlesPlay(musicians, instruments){
  var array =[];
  for(let i = 0; i < musicians.length; ++i){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}
function johnLennonFacts(facts){
  var container =[];
  let i = 0;
  while(i < facts.length){
    container.push(facts[i] + '!!!');
    ++i;
  }
  return container;
}

function iLoveTheBeatles(number){
  var container =[];
  do{
    container.push('I love the Beatles!');
    ++number;
  }while(number < 15);
  return container;
}