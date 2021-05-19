// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(array, name){
    return array.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(array, letters){
    let string = letters.length
    return array.filter(person => (person.slice(0, string)) === letters)
}

function matchName(array, whoIsIt){
    return array.filter(element => element.name === whoIsIt)
}