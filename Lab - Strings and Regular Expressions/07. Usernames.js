function userNames(array) {
    for (let indx in array) {
        let [user, rest] = array[indx].split('@');
        array[indx] = user + '.' + rest.split('.')
            .map(a => a[0]).join('')
    }
    console.log(array.join(', '));
}

userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);