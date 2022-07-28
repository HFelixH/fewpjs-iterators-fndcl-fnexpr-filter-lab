// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']


function findMatching(source, sought) {
    return source.filter(possibleMatch =>
        possibleMatch.toLowerCase() === sought.toLowerCase()
    )
}

//console.log(findMatching(drivers, 'Bobby'))
//console.log(findMatching(drivers, 'Sammy'))
//console.log(findMatching(drivers, 'Susan'))

//======================

//const drivers = [];
//
//drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby')
//
//console.log(drivers)

function fuzzyMatch(source, testString) {
    return source.filter(possibleMatch =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
}

console.log(fuzzyMatch(drivers, 'Sa'))
//console.log(fuzzyMatch(drivers, 'y'))
//console.log(fuzzyMatch(drivers, 'mm'))

//=======================

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }

console.log(matchName(drivers, 'Bobby'))

