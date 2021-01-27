// var1

function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
propCount = Object.keys(object).length;
  // Пиши код выше этой строки
  return propCount;
}


// var2

function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
	for (const key in object) {
        if (object.hasOwnProperty(key)) {
        propCount += 1;   
        };
    };
  // Пиши код выше этой строки
  return propCount;
}