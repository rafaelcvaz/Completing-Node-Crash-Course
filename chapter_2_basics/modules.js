// To import the names in the people file
const xyz = require('./people'); //relative path to the file

console.log(xyz.people, xyz.age); // This won't print the list of names by itself, it returns an empty object, because requiring a file doesn't give us access.

// In order to give us this sort of access, we have to export from the 'people.js' file

// I can also import with this sintax:

const { people, age } = require('./people'); // Para a propriedade people e a age, precisa ter exatamente o mesmo nome.

console.log(people, age);

const os = require('os'); // Built-in object

console.log(os);

console.log(os.platform(), os.homedir()); // We can see the platfomr (linux) and the directory of the user's home
