const car = {
    brand: "Audi",
    model: "A7",
    year: 2022,
    price: 25000,
    kmBord: 180000
}




// // Problema 1
car.kmBord = 160000;
console.log("Nr de km al masinii este:", car.kmBord);
// Problema 2
car.description = "Cel mai recent model din gama Audi";

// Problema 3
delete.car.model;

// Probleme Optionale 
// EX 1
function createOrDeleteProp(key, value) {
    if (value !== undefined) {
        car[key] = value;
    } else {
        delete car[key];
    }
}


CreateOrDeletePropr("description", "Cel mai recent model din gama Audi");
console.log("Descriere: ", car.description);
console.log(car);

CreateOrDeletePropr("description", undefined);
console.log("Descriere: ", car.description);
console.log(car);

CreateOrDeletePropr("description");
console.log("Descriere: ", car.description);
console.log(car);



// EX 2
function tuneCar(car) {
    const secondCar = (...car);
    secondCar.price = car.price * 1.5;
    secondCar.kmBord = car.kmBord / 2;
    return secondCar;
}

console.log(tuneCar);


//EX 3
function getMinutesWithZero(date) {
    const minutes = date.getMinutes();
    if (minutes < 10) {
        return "0" + minutes;
    }
    return minutes;
}

const today = new Date();
const formatedDate = today.getHours() + ":" + getMinutesWithZero(today) + ":" + today.getSeconds()
console.log("Ora este : ", formatedDate);
// ex bonus 
const year = date.getFullYear();
const month = date.toLocaleString('default', { mont: 'long' });
const fullDate = month + "" + year + "" + formatedDate;

console.log(fullDate);
// ex bonus 2 aici m am uitat la rezolvari sa inteleg cum merge

const eveniment = new Date(2023, 0, 1) // 1 ianuarie 2023
console.log(eveniment);

function timeSince(event) {
    const today = new Date();
    const SECONDS_TO_MS = 1000;
    const seconds = Math.floor((today - event) / SECONDS_TO_MS);
    if (secons < 60) {
        const unitate = seconds === 1 ? "secunda" : "secunde"
        return "now" + "" + seconds + "" + unitate
    }
    const minute = Math.floor((seconds / 60));
    if (minute < 60) {
        const unitate = minute === 1 ? "Minut" : "Minute"
        return "now" + "" + minute + "" + unitate
    }
    const ore = Math.floor((minute / 60));
    if (ore < 24) {
        const unitate = ore === 1 ? "Ora" : "Ore"
        return "now" + "" + ore + "" + unit
    }
    const zile = Math.floor((ore / 24));
    if (zile < 30) {
        const unitate = zile === 1 ? "Ziua" : "Zile"
        return "now" + "" + zile + "" + unitate
    }
    const luni = Math.floor(zile / 30);
    const MONTHS_IN_YEAR = 365 / 30
    if (luni < MONTHS_IN_YEAR) {
        const unitate = luni === 1 ? "Luna" : "Lunile"
        return "now" + "" + luni + "" + unitate
    }
    const ani = Math.floor(luni / MONTHS_IN_YEAR);
    const unitate = ani === 1 ? "an" : "ani"
    return "now" + "" + ani + "" + unitate
}
// acum 2 ani
console.log(timeSince(new Date(Date.now() - 2 * 13 * 30 * 24 * 60 * 60 * 1000)));
// acum 1 an
console.log(timeSince(new Date(Date.now() - 1 * 13 * 30 * 24 * 60 * 60 * 1000)));
// acum 5 luni
console.log(timeSince(new Date(Date.now() - 5 * 30 * 24 * 60 * 60 * 1000)));
// acum 1 luna
console.log(timeSince(new Date(Date.now() - 1 * 30 * 24 * 60 * 60 * 1000)));
// acum 17 zile
console.log(timeSince(new Date(Date.now() - 17 * 24 * 60 * 60 * 1000)));
// acum 1 zi
console.log(timeSince(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)));
// acum 5 ore
console.log(timeSince(new Date(Date.now() - 5 * 60 * 60 * 1000)));
// acum 1 ora
console.log(timeSince(new Date(Date.now() - 1 * 60 * 60 * 1000)));
// acum 45 minute
console.log(timeSince(new Date(Date.now() - 45 * 60 * 1000)));
// acum 1 minut
console.log(timeSince(new Date(Date.now() - 1 * 60 * 1000)));
// acum 30 secunde
console.log(timeSince(new Date(Date.now() - 30 * 1000)));
// acum 1 secunda
console.log(timeSince(new Date(Date.now() - 1 * 1000)));

console.log("Anul nou: ", timeSince(eveniment))