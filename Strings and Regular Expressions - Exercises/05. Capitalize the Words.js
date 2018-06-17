function capitalizeWords(string) {
    console.log(string.toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.substr(1)).join(' '));
}

capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');