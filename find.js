const ages = [16, 19, 21, 33, 45, 54, 63, 71];

function checkAge(age) {
    return age > 18;
}

//long version
const ageAdult = ages.find(checkAge);
//console.log('ageAdult:', ageAdult);

//Annoymous Function 
const ageAdult2 = ages.find(function(age) {
    return age > 18;
});

console.log("ageAdult2:", ageAdult2);

//Annonymous Arrow function
const ageAdult3 = ages.find( age => {
    return age > 18;
})

console.log('ageAdult3:', ageAdult3)

//Annonymous Arrow function slightly longer
const ageAdult4 = ages.find( (age) => age > 18);

console.log('ageAdult4:', ageAdult4)

//Annonymous Arrow function
const ageAdult5 = ages.find( age => age > 18);

console.log('ageAdult5:', ageAdult5)

