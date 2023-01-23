//const numbers = [11, 22, 33, 44, 55, 66, 77];
const people = [
    {firstName: 'Danny', lastName: 'Cool'}, 
    {firstName: 'Gisselle', lastName: 'Ohman'},
    {firstName: 'Anthony', lastName: 'Style'}
]
// 

const peopleMap = people.map((element, index) => {
    const eachPerson = `person ${index+1} ${element.firstName} ${element.lastName}`
    console.log(eachPerson);
    return element;
})

console.table(peopleMap);