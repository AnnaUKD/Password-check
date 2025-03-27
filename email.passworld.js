const bcrypt = require('bcrypt');
const fs = require('fs');
const readline = require('readline');

const saltRounds = 10;
const filePath = 'password.txt';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (fs.existsSync(filePath)) {
    const storedHash = fs.readFileSync(filePath, 'utf8').trim();
    if (storedHash) {
        rl.question('Введіть пароль: ', (inputPassword) => {
            if (bcrypt.compareSync(inputPassword, storedHash)) {
                console.log('Пароль правильний!');
            } else {
                console.log('Невірний пароль!');
            }
            rl.close();
        });
    } else {
        askAndStorePassword();
    }
} else {
    askAndStorePassword();
}

function askAndStorePassword() {
    rl.question('Введіть новий пароль: ', (password) => {
        rl.question('Підтвердіть пароль: ', (confirmPassword) => {
            if (password === confirmPassword) {
                const hash = bcrypt.hashSync(password, saltRounds);
                fs.writeFileSync(filePath, hash);
                console.log('Пароль збережено!');
            } else {
                console.log('Паролі не співпадають. Спробуйте ще раз.');
            }
            rl.close();
        });
    });
}
