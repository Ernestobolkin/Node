import Password from "keys-to-password"
import chalk from "chalk";
const password = new Password('your-private-key');
password.setKeyboard();
password.generate({passLength: 15});
const pass = password.getPassword()

const publicKey = password.getPublicKey()

const passwordRecover = new Password('your-private-key', publicKey);
passwordRecover.setKeyboard();
passwordRecover.generate({passLength: 15});
passwordRecover.getPassword()

console.log(chalk.green(pass));
console.log(chalk.green(publicKey));