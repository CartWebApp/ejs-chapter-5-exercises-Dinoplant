// Your code here.
function loop(value, test, update, body){
    let value2 = value
    while(test(value2)){
    body(value2);
    value2 = update(value2);
    }
      return body
    }
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1