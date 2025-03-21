const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
// Store hash in your password DB.
console.log(hash);

// Load hash from your password DB.
const isMatch = bcrypt.compareSync(myPlaintextPassword, 'jklmn,mnbbn');
console.log(isMatch);
