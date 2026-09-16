const { uniqueNamesGenerator, names } = require("unique-names-generator");

const randomWord = uniqueNamesGenerator({
    dictionaries: [names]
});

console.log(randomWord);