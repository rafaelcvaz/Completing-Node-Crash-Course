// Creates some variables to be used in the modules.js file

const people = ['rafa', 'bia', 'marcos', 'ulisses'];
const age = ['22', '23', '24', '25'];


// module.exports = people;

module.exports = {
    people, age
};

// Remember that the require returns an object, that's why we use this sintax. In reality, it's an object with 2 properties: I could change the name here.

// module.exports = {
//     people: people, 
//     age: age
// };
