function addAndRemoveElements(input) {
    let result = [];
    let num = 1;

    for (let command of input) {
        if (command == "add") {
            result.push(num);
        } else {
            result.pop();
        }
        num++;
    }

    if (result.length == 0) {
        console.log(("Empty"));
    } else {
        result.forEach(element => console.log(element));
    }

}

addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);