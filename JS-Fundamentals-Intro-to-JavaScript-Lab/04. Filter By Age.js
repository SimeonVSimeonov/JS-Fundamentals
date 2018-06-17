function filterByAge(minAge, firstName, firstAge, secondName, secondAge) {
    let personA = {name: firstName, age: firstAge};
    let personB = {name: secondName, age: secondAge};
    if (minAge <= firstAge) {
        console.log(personA);
    }
    if (minAge <= secondAge) {
        console.log(personB);
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);