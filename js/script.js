function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const salaryArray = Object.values(salaries);
  for (const salary of salaryArray) {
    totalSalary += salary;
  }
  
  // Пиши код выше этой строки
  return totalSalary;
}
