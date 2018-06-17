function solve(input) {
    let totalCash = 0;
    let tripMoney = 1000;
    let countSpec = 1;
    let countCustClumsy = 1;
    let currentCash = 0;

    for (let obj of input) {
        let work = obj.split(' : ');
        let professions = work[0];
        let offer = Number(work[1]);

        if (professions === "Programming" || professions === "Hardware maintenance" || professions === "Cooking" ||
            professions === "Translating" || professions === "Designing") {
            if (offer < 200) {
                continue;
            }
            let currCash = offer;
            currCash *= 0.8;
            if (countSpec % 2 === 0) {
                totalCash += currCash + 200;
            } else {
                totalCash += currCash;
            }

            countSpec++;
        }

        else if (professions === "Driving" || professions === "Managing" || professions === "Fishing" || professions === "Gardening") {
            totalCash += offer;

        }
        else if (professions === "Singing" || professions === "Accounting" || professions === "Exam-Making" ||
            professions === "Acting" || professions === "Writing" || professions === "Lecturing" || professions === "Modeling" || professions === "Nursing") {

            if (countCustClumsy === 1) {
                currentCash = offer;
            }
            if (countCustClumsy % 2 === 0) {

                offer = offer * 0.95;
                totalCash += offer;
            }
            else if (countCustClumsy % 3 === 0) {
                offer = offer * 0.90;
                totalCash += offer;
            } else {

                totalCash += offer;
            }
            countCustClumsy++;
        }

    }
    console.log(`Final sum: ${totalCash.toFixed(2)}`);
    if (totalCash < 1000) {
        console.log(`Mariyka need to earn ${(tripMoney - totalCash).toFixed(2)} gold more to continue in the next task.`)
    } else {
        console.log(`Mariyka earned ${(totalCash - tripMoney).toFixed(2)} gold more.`)
    }
}

//solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100",
//  "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);

solve(["Programming : 0", "Driving : 0", "Singing : 0", "Cooking : -1"]);

//solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199",
//"Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);

solve(["Programming : 300", "Cooking : 75", "Hardware maintenance : 50"]);