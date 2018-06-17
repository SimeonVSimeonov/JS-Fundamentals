function extractDates(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let match;
    let dates = [];

    for (let str of input) {
        while (match = regex.exec(str)) {
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }

    console.log(dates.join('\n'));
}

extractDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']);