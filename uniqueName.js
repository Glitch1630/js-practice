const { uniqueNamesGenerator, names } = require("unique-names-generator");
const count =Number(process.argv[2]);
for (let i=0;i< count;i++){
    const name= uniqueNamesGenerator({
        dictionaries :[names]
    });

console.log(name);
}