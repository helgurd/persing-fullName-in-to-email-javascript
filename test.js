// These variables will be sliced and concatinated
// to form the emailAddress variable:
let fullName = 'Andrew Martin';
let domainName = 'gmail';
let tld = 'com';
let nameTolower = fullName.toLowerCase();
let firstName = nameTolower.slice(0, 5);
let lastName = nameTolower.slice(7);
let emailAdress = firstName + '.' + lastName + '@' + domainName + '.' + tld;
// Define the emailAddress variable here.
// Remember to use the slice() and toLowerCase() string methods:


// This will log the emailAddress variable to the console
console.log(emailAdress);
