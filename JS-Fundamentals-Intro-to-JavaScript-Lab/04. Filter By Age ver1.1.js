function minAge(input) {
    let agePass = input[0];
    let firstName = input [1];
    let firstAge = input [2];
    let secondName = input [3];
    let secondAge = input [4];
    if (agePass <= firstAge) {
        console.log((`{ name: '${firstName}', age: ${firstAge} }`));
    }
    if (agePass <= secondAge) {
        console.log((`{ name: '${secondName}', age: ${secondAge} }`));
    }

}

minAge([12, 'Ivan', 15, 'Asen', 9]);
minAge([9, 'Ivan', 15, 'Asen', 9]);