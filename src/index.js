module.exports = function check(str, bracketsConfig) {
  // your solution
 let brackets = bracketsConfig.join('').replace(/,/g, ''); //возвращает в формате (){}[]
  let mystack = [];
  for (let i of str) 
  {
    let k = brackets.indexOf(i);
    if (k % 2 === 0) //проверка открывающая скобка или нет
    {
      if (i === brackets[k + 1] && mystack[mystack.length - 1] === k) { mystack.pop(); } 
      else { mystack.push(k) }
    } 
    else if (mystack.pop() !== k-1)
     { return false; }   
  }
  return mystack.length === 0;
}
