const ages = [11, 21, 33, 45, 51, 67];

const adult1 = ages.some(function (age) {
    return age > 18;
});

console.log('adult1:', adult1);

const adult2 = ages.some(age => age > 18)

console.log('adult2:', adult2)
