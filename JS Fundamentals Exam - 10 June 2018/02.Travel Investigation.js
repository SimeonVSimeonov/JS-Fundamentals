function solve(input) {
    let indx = 1;
    let operators = input[0].split(input[1]);
    console.log('ValidSentences');
    input.splice(0,2);
    for (let obj of input) {

        let string = obj.toLowerCase();
        if (string.indexOf(operators)) {
            string.replace(operators);
            console.log(indx +". " + string);

        }
        indx++;
    }

}

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]);