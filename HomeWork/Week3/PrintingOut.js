console.log('---------------------- Problem 1 ----------------------')
//Constant Data Tester
const group1 = {
    name: 'Justice League',
    leader: 'Wonder Woman',
    members: ['Batman', 'Superman']
}

const group2 = {
    name: 'Avengers',
    members: ['Hulk', 'Thor', 'Captain America']
}
//Create a Function that takes in an object.
const print = (obj) => { //Deconstruct the Object
    const { name, leader, members } = (obj);

    const teams = `Team(s): ${name ? name : ''}`;
    const leaders = `Leader(s): ${leader ? leader : ''}`;
    let teamMembers = 'Member(s): ';
    const membersLenght = members.length - 1;
    for (mem in members) {
        if( mem == 0){
            // If its the first member, append the name only
            teamMembers += members[mem];
        }
        else if (membersLenght != mem && mem !=0) {
            //else append proper comma and the member
            teamMembers += ', ' + members[mem];
        }
        else {
            // finally if its the last member append proper and statement and the last memmber
            teamMembers += ' and ' + members[mem];
        
        }
    }
    //Print out Data.
    console.log(teams);
    console.log(leaders);
    console.log(teamMembers);

};
//Run Methods with specific Objects
print(group1);
console.log("--------")
print(group2);

console.log('---------------------- Problem 1 ----------------------')
