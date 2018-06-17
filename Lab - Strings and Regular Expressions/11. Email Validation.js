function validate(email) {
    let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (regex.test(email)) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}

validate('valid@mail.bg');
validate('valid@mail1.bg');