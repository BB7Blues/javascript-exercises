const findTheOldest = function(a) {
  let oldest = null;
  let currentYear = new Date();
  currentYear = currentYear.getFullYear();
  const theOldest = a.reduce((total, person) =>{
     console.log(person.yearOfDeath); 
    if(person.yearOfDeath == undefined){
      yearsLived = currentYear - person.yearOfBirth;
      
    }
    else{
      
    yearsLived = person.yearOfDeath - person.yearOfBirth;
    }
    
      
      if (total < yearsLived){ 
            
            console.log("strike");
            total = yearsLived;
            oldest = person;
    
          }
      
      return total;
    
},0); 
//console.log(oldest);
return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
