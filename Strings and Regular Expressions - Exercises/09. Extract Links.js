function extractLinks(input) {

    let regex = /www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g;

    for (let string of input) {
        let match = null;
        while (match = regex.exec(string)){
            console.log(match[0]);
        }
    }
}

extractLinks(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel -www.sentinel.-ko']);