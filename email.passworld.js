var prompt = require('prompt');

    prompt.start();


    prompt.get(['password', 'confirm'], function (err, result) {

        console.log('Command-line input received:');
        console.log('  password:' + result.password);
        console.log('  email:' + result.confirm);
    });