const products = [{
        id: 67,
        name: 'Firestrata',
        price: 26,
        brewery: 'Hop Hooligans',
    },
    {
        id: 212,
        name: 'Punch the Clock',
        price: 21,
        brewery: 'Bereta',
    },
    {
        id: 111,
        name: 'The Guardian',
        price: 21,
        brewery: 'Noah',
    },
    {
        id: 345,
        name: 'Pudge',
        price: 30,
        brewery: 'Hop Hooligans',
    },
];

// Ex 1
const theGuardian = products.find(product => product.name === "The Guardian");
console.log(theGuardian);
// Ex 2
const hopHooligansProducts = products.filter(product => product.brewery === "Hop Hooligans");
console.log(hopHooligansProducts);
// Ex 3
const returnArray = products.filter(product => products.id !== 111);
console.log(returnArray);
// Ex 4
const sumaPreturi = products.reduce((sum, product) => sum + product.price, 0);
console.log(sumaPreturi);
// Ex 5
const favoriteProduct = products.map(product => ({...product, isFavorite: false }));
console.log(favoriteProduct);


//  Problema Extra
// Ex1 
const input = [1, -4, 12, 0, -3, 29, -150];
const sumaPozitiva = input.filter(number => number > 0)
console.log(sumaPozitiva);

// Ex2
const students = [
    { name: 'Ionut', scores: [90, 85, 92] },
    { name: 'Gigel', scores: [75, 80, 85] },
    { name: 'Marius', scores: [90, 95, 85] },
    { name: 'David', scores: [100, 100, 100] },
];
const bestPerforming = studentsAverage.filter(student => student.average > 90);
console.log(bestPerforming)
    // Ex3 
function myFilter(array, cb) {
    return array.reduce((rezultat, elementCurent) => {
        if (cb(elementCurent)) {
            rezultat.push(elementCurent);
        }
        return rezultat;
    }, []);
}

// Ex4
function myMap(array, cb) {
    return array.reduce((rezultat, elementCurent) => {
        rezultat.push(cb(elementCurent));
        return rezultat;
    }, []);
}