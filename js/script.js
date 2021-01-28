// Пиши код ниже этой строки
function addOverNum(firtArg, ...args) {
  let total = 0;

  for (const arg of args) {
    if ( firtArg < arg) {
      total += arg;
    }    
  }

  return total;
  // Пиши код выше этой строки
}
