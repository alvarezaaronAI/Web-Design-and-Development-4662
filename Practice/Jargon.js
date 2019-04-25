var animal = {
	genus: 'corvus',
	species: 'corvax',
	commonName: 'raven',
	callType: 'squawky',
	quote: 'Nevermore',
	maxOffspring: 5,
	noisy: true,
	deadly: false
};
console.log('animal: ', animal);
let animal2 = animal;
console.log('animal2: ', animal2);
//Changing values / References / No copy but References
animal2.genus = "New Genues"
console.log('animal: ', animal);
console.log('animal2: ', animal2);

// to Copy we got to do it manually
animal2 = {
	genus: 'corvus',
	species: 'corvax',
	commonName: 'raven',
	callType: 'squawky',
	quote: 'Nevermore',
	maxOffspring: 5,
	noisy: true,
	deadly: false
}
animal2.genus = "Im a Copy";
console.log('animal: ', animal);
console.log('animal2: ', animal2);