
// Filter out countries
// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
// 2.	Find the country containing the hightest number of characters in the countries array
// 3. Sort the countries by length of characters in the countries array
// 4.	Extract all the countries containing only four characters from the countries array and print it as array
// 5.	Extract all the countries containing two or more words from the countries array and print it as array
// 6.	Reverse the countries array and capitalize each country and stored it as an array.
// 7.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.


const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States' ]



// step-1
function countryFind1(arr) {
  let country = []
  for(i=0;i<arr.length;i++){
    if (arr[i].includes('land')){
      country.push(arr[i])
    }
   
  }
  return country
}

console.log(countryFind1(countries))





// step-2
function longestCountry(arr){
  let long = 0;
  let longest;

for(let i=0; i < arr.length; i++){
    if(arr[i].length > long){
        long = arr[i].length;
        longest = arr[i];
    }      
} 

return longest;
  

}

console.log(longestCountry(countries))


// step-3
function countrySort(arr){

  let newArray = arr.sort((a,b)=>a.length-b.length)
  return newArray

  
  }

console.log(countrySort(countries))




// step-4

function countryFind4(arr){
  let four = []
  for(i=0;i<arr.length;i++){
    if (arr[i].length==4){
      four.push(arr[i])
    }
  }
  return four;

}

console.log(countryFind4(countries))



// // step-5

function countriesWithTwoWords(arr){
  let five = []
 for(i=0;i<arr.length;i++){
   if(arr[i].includes(' '))
   five.push(arr[i])
 }
  return five

}

console.log(countriesWithTwoWords(countries))



// //step-6



function countryCapitalize(arr){
  let rev = arr.reverse()

  for(i=0;i<arr.length;i++){
    arr[i] = arr[i].toUpperCase()

  }

  return rev;

  }

  console.log(countryCapitalize(countries))


// step-7

function countryLand(arr) {
  let seven = []
  for(i=0;i<arr.length;i++){
    if (!arr[i].includes('LAND')){
      seven.push(arr[i].concat('LAND'))
    }
   
  }
  return seven

}

console.log(countryLand(countries))

