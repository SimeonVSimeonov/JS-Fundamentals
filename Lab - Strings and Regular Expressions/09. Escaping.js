function escape(array) {
    let result = '<ul>\n';
    for (let text of array) {
        result += `  <li>${htmlEscape(text)}</li>\n`
    }
    console.log(result + '</ul>');

    function htmlEscape(string) {
        return string.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

}

escape(['<b>unescaped text</b>', 'normal text']);