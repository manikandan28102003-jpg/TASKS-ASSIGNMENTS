


function getGrade(marks) {
  if (marks >= 80)
     {
    return 'Grade is: A';
  } 
  else if (marks >= 60)
     {
    return 'Grade is:B';
  } 
  else if (marks >= 40) 
    {
    return 'Grade is :C';
  }
   else 
    {
    return 'Fail'; 
  }
}

console.log(getGrade(85)); // A grade
console.log(getGrade(70)); // B grade
console.log(getGrade(50)); // C grade
console.log(getGrade(30)); // Fail
